import React from "react";
import TaskList from "./TaskList/TaskList";
import Card from "@material-ui/core/card";
import CardActionArea from "@material-ui/core/CardActionArea";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    minWidth: 300,
    margin: "10px",
  },
  media: {
    height: 140,
  },
});

const DayTaskCard = (props) => {
  const classes = useStyles();
  console.log(props);

  const { day, tasks } = props;

  console.log(tasks);
  const renderTasks = tasks.map((task) => {
    return <TaskList key={task.id} task={task} />;
  });

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {day.toUpperCase()}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {renderTasks}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default DayTaskCard;
