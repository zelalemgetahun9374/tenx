import { Button, FormContainer, Input } from "./Style";
import React, { useState, createContext } from "react";
import Ruberic from "./Ruberic";

export const FormContext = createContext();

export default function Form() {
  const rubric = {
    Field1: {
      value: 0,
      total: 4
    },
    Field2: {
      value: 0,
      total: 4
    },
    Field3: {
      value: 0,
      total: 3
    }
  };

  const [mark, setMark] = useState(rubric);

  const [input, setInput] = useState("");

  const total_value = mark.Field1.value + mark.Field2.value + mark.Field3.value;
  const total_items = mark.Field1.total + mark.Field2.total + mark.Field3.total;

  const total_mark = ((total_value / total_items) * 100).toFixed(2);

  let mark_value = `${total_mark} / 100`;

  function submitForm() {
    const data = {
      "ruberics": mark,
      "total_value": total_value,
      "total_items": total_items,
      "mark": total_mark,
      "comment": input
    };

  }

  return (
    <FormContainer>
      <div>
        <h4>Files</h4>
        <a href="#">See History</a>
        <p>No file attached</p>
      </div>
      <hr />

      <div>
        <h2>Marks</h2>
        <Input
          type="text"
          placeholder="Input Box"
          value={mark_value}
          readonly
        />
      </div>
      <hr />

      <FormContext.Provider value={{ mark, setMark }}>
        <Ruberic />
        <hr />
        <div>
          <h4>Private Comment</h4>
          <input
            type="text"
            placeholder="Add private comment"
            value={input}
            onInput={(e) => setInput(e.target.value)}
          />
        </div>
        <hr />
        <Button onClick={submitForm}>Post</Button>
      </FormContext.Provider>
    </FormContainer>
  );
}

