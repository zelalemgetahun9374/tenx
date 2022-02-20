import React, { useContext } from "react";
import { choiceContext } from "./Input";
import { Box, BoxContainer } from "./Style";

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
    <BoxContainer>
      {countList.map((i) =>
        i === selected ? (
          <Box bg="blue" key={i} onClick={() => clickHandler(i)} />
        ) : (
          <Box key={i} onClick={() => clickHandler(i)} />
        )
      )}
    </BoxContainer>
  );
};
export default Selector;

