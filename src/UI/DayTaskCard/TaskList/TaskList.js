import React, { useState } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import EditIcon from "@material-ui/icons/Edit";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import {
  deleteFromStore,
  updateTask,
} from "../../../store/TaskSlice/TaskSlice";
import { useDispatch } from "react-redux";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  button: {
    marginLeft: theme.spacing(1),
  },
  listContainer: {
    display: "flex",
  },
}));

const TaskList = (props) => {
  const { id, taskDescription, day } = props.task;
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false);
  const [updatedTaskInput, setUpdatedTaskInput] = useState(taskDescription);
  const classes = useStyles();

  const editHandler = () => {
    setIsEdit(true);
  };

  const deleteHandler = () => {
    dispatch(deleteFromStore(id));
  };

  const upadteTaskInputHandler = (event) => {
    setUpdatedTaskInput(event.target.value);
    console.log(updatedTaskInput);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    // console.log({ id, day, updatedTaskInput });
    dispatch(updateTask({ id, day, updatedTaskInput }));

    setIsEdit(false);
  };
  return (
    <div className="listContainer">
      {isEdit && (
        <div>
          <form onSubmit={submitHandler}>
            <TextField
              type="text"
              id="task"
              onChange={upadteTaskInputHandler}
              value={updatedTaskInput}
              placeholder="Enter Your Task"
              className={classes.input}
            />
            <Button variant="contained" color="primary" type="submit">
              Save
            </Button>
          </form>
        </div>
      )}
      {!isEdit && (
        <>
          <Checkbox color="primary" />
          <span>{taskDescription}</span>
          <span>
            <Button
              id={id}
              className={classes.button}
              variant="contained"
              color="primary"
              onClick={editHandler}>
              Edit
            </Button>
          </span>
          <span>
            <Button
              id={id}
              className={classes.button}
              variant="contained"
              color="primary"
              onClick={deleteHandler}>
              Delete
            </Button>
          </span>
        </>
      )}
    </div>
  );
};

export default TaskList;
