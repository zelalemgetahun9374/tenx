import React, { useContext } from "react";
import Input from "./Input";
import { FormContext } from "./Form";

export default function Ruberic() {
  const { mark } = useContext(FormContext);
  const total_value = mark.Field1.value + mark.Field2.value + mark.Field3.value;
  const total_items = mark.Field1.total + mark.Field2.total + mark.Field3.total;

  let mark_value = `${total_value} / ${total_items}`;
  return (
    <div>
      <h2>Ruberic</h2>
      <h3>{mark_value}</h3>
      <div>
        <Input items="4" name="Field1" />
        <Input items="4" name="Field2" />
        <Input items="3" name="Field3" />
      </div>
    </div>
  );
}

