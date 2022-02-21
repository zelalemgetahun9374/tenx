import React, { useContext } from "react";
import { choiceContext } from "./Input";
import Box from '@mui/material/Box';


const Selector = ({ boxCount = 2 }) => {
  const { selected, setSelected } = useContext(choiceContext);

  const countList = [];
  for (let i = 1; i <= boxCount; i++) {
    countList.push(i);
  }

  function clickHandler(value) {
    setSelected(value);
  }
  return (
    <Box 
       sx={{
        display: "flex",
        justifyContent: "space-between",
        margin: '4px'
       }}
    >
      {countList.map((i) =>
        i === selected ? (
          <Box sx={{ backgroundColor: "blue", height: 20, width: "100%", margin: '2px'}} key={i} onClick={() => clickHandler(i)} />
        ) : (
          <Box sx={{ backgroundColor: "gray", height: 20, width: "100%", margin: '2px' }} key={i} onClick={() => clickHandler(i)} />
        )
      )}
    </Box>
  );
};
export default Selector;

