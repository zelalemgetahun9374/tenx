import React, { useContext } from "react";
import Input from "./Input";
import { FormContext } from "./Form";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Ruberic() {
  const { mark } = useContext(FormContext);
  const total_value = mark.Field1.value + mark.Field2.value + mark.Field3.value;
  const total_items = mark.Field1.total + mark.Field2.total + mark.Field3.total;

  let mark_value = `${total_value} / ${total_items}`;

  const ruberics = [];

  for (let ruberic in mark) {
    ruberics.push([ruberic, mark[ruberic]["total"]]);
  }

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
         }}
      >
        <Typography variant="body1"  component="h3" sx={{ mb: "15px" }}>
          Ruberic
        </Typography>
        <Typography variant="body1"  component="h3" sx={{ mb: "15px", fontSize: "15px" }}>
          {mark_value}
        </Typography>
      </Box>
      <Box>
        {ruberics.map((item) => (
          <Input items={item[1]} name={item[0]} key={item[0]}/>
        ))}
      </Box>
    </Box>
  );
}

