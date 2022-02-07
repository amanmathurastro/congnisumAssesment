import React, { useEffect } from "react";
import DayTaskCard from "./UI/DayTaskCard/DayTaskCard";
import NewTaskForm from "../src/NewTaskForm/NewTaskForm";
import Header from "./UI/Header/Header";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  header: {
    marginBottom: theme.spacing(10),
    paddingTop: theme.spacing(10),
    display: "flex",
    flexWrap: "wrap",
  },
  conatiner: {
    display: "flex",
    justifyContent: "space-around",
  },
}));

const groupByDay = (array, key) => {
  return array.reduce((result, currentValue) => {
    (result[currentValue[key]] = result[currentValue[key]] || []).push(
      currentValue
    );

    return result;
  }, {});
};

const App = () => {
  const classes = useStyles();
  const data = useSelector((state) => state.task.task);
  console.log(data);

  const groupedData = groupByDay(data, "day");

  const renderDay = (groupedData) => {
    const renderDayTaskCard = Object.keys(groupedData).map((day, index) => {
      return <DayTaskCard key={index} day={day} tasks={groupedData[day]} />;
    });

    return renderDayTaskCard;
  };

  const renderDayTaskCard = renderDay(groupedData);

  return (
    <div>
      <Header />
      <div className={classes.conatiner}>
        <div className={classes.header}>{renderDayTaskCard}</div>
      </div>
      <NewTaskForm />
    </div>
  );
};

export default App;
