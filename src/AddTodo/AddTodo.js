import React, { useState } from "react";
import { Box, TextInput, Button } from "grommet";

export function AddTodo(props) {
  const [value, setValue] = useState("");
  console.log("ADD TODO RENDER");
  return (
    <>
      <Box
        width="500px"
        margin={"auto"}
        direction="row"
        align="center"
        pad="medium"
        gap="medium"
      >
        <TextInput
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
        <Button
          a11yTitle="2 Available Updates"
          label="Add"
          onClick={() => {
            props.createTodos(value);
            setValue("");
          }}
          badge={0}
        />
      </Box>
    </>
  );
}
