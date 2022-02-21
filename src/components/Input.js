import React, { useState, useContext, useEffect, createContext } from "react";
import { FormContext } from "./Form";
import Selector from "./Selector";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export const choiceContext = createContext();

export default function Input({ _value = "0", items = 1, name }) {
  const { mark, setMark } = useContext(FormContext);
  const [selected, setSelected] = useState(mark[name]["value"]);

  useEffect(() => {
    const newMark = JSON.parse(JSON.stringify(mark));
    newMark[name]["value"] = selected;
    setMark(newMark);
  }, [selected]);

  function clickHandler(evt) {
    setSelected(parseInt(evt.currentTarget.value, 10));
  }
  const countList = [];
  for (let i = 1; i <= items; i++) {
    countList.push(i);
  }

  return (
    <Box>
      <Box 
       sx={{
        display: "flex",
        justifyContent: "space-between",
        margin: '4px'
       }}
    >
      {name}
      
      <select value={selected} onChange={(event) => clickHandler(event)}>
        <option value="0">&nbsp; / {items}</option>
        {countList.map((i) => (
          <option value={i} key={i}>
            {i} / {items}
          </option>
        ))}
      </select>
      </Box>
        <choiceContext.Provider value={{ selected, setSelected }}>
          <Selector boxCount={items} />
        </choiceContext.Provider>
    </Box>
  );
}

