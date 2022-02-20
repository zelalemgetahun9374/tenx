import React, { useState, useContext, useEffect, createContext } from "react";
import { FormContext } from "./Form";
import Selector from "./Selector";

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
    <div>
      {name}
      <select value={selected} onChange={(event) => clickHandler(event)}>
        <option value="0">&nbsp; / {items}</option>
        {countList.map((i) => (
          <option value={i} key={i}>
            {i} / {items}
          </option>
        ))}
      </select>
      <div>
        <choiceContext.Provider value={{ selected, setSelected }}>
          <Selector boxCount={items} />
        </choiceContext.Provider>
      </div>
    </div>
  );
}

