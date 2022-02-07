import React, { useState } from "react";
import { addTaskToStore } from "../store/TaskSlice/TaskSlice";
import { useDispatch } from "react-redux";
import { uuid } from "uuidv4";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Card } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  formContainer: {
    marginLeft: theme.spacing(10),
    padding: theme.spacing(5),
    width: "500px",
  },
  input: {
    marginRight: theme.spacing(2),
  },
}));

const NewTaskForm = () => {
  const classes = useStyles();
  const [taskInput, setTaskInput] = useState("");
  const [dayInput, setDayInput] = useState("monday");
  const dispatch = useDispatch();

  const taskInputHandler = (event) => {
    setTaskInput(event.target.value);
    console.log(event.target.value);
  };

  const dayInputHandler = (event) => {
    setDayInput(() => {
      return event.target.value;
    });
    console.log(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const newTask = {
      id: uuid(),
      taskDescription: taskInput,
      day: dayInput,
    };
    console.log(newTask);
    dispatch(addTaskToStore(newTask));
    setTaskInput("");
    setDayInput("monday");
  };

  return (
    <Card className={classes.formContainer}>
      <form onSubmit={submitHandler}>
        <TextField
          type="text"
          id="task"
          onChange={taskInputHandler}
          value={taskInput}
          placeholder="Enter Your Task"
          className={classes.input}
        />

        <TextField
          select
          name="day"
          id="day"
          className={classes.input}
          onChange={dayInputHandler}
          value={dayInput}>
          <option value="monday">Monday</option>
          <option value="tuesday">Tuesday</option>
          <option value="wednesday">Wednesday</option>
          <option value="thrusday">Thrusday</option>
          <option value="friday">Friday</option>
          <option value="saturday">Saturday</option>
          <option value="sunday">Sunday</option>
        </TextField>

        <Button variant="contained" color="primary" type="submit">
          Add Task
        </Button>
      </form>
    </Card>
  );
};

export default NewTaskForm;
