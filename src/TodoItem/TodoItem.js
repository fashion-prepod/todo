import { Button, Box } from "grommet";
import { Trash } from "grommet-icons";
import React, { useState, useEffect } from "react";

function TodoItem({ done, deleteTodo, value, id, onChangeTodoState }) {
  console.log(`${value} RENDER`);

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
        <Button
          a11yTitle="Settings, 1 Alert"
          label={value}
          primary={done}
          onClick={() => onChangeTodoState(id)}
        />
        <Button
          a11yTitle="Settings, 1 Alert"
          onClick={() => deleteTodo(id)}
          icon={<Trash />}
        />
      </Box>
    </>
  );
}

export default React.memo(TodoItem);
