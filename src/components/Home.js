import { useEffect, useState } from "react";
import { sendTask } from "../service/task";
import axios from "axios";

import AllTask from "./AllTask";
import TaskByUserId from "./TaskByUserId";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

function Home() {
  const [tasks, setTasks] = useState([]);

  const reReReFormatTime = (date) => date.toISOString().slice(0, 19);
  const addOneHour = (date, toAdd = 3) =>
    new Date(new Date(date).setHours(date.getHours() + toAdd));

  const frDate = new Date();
  const onHourLater = addOneHour(frDate, 1);

  // expected output: locale time under following format : yyyy-MM-ddTHH:mm:ss

  const [state, setState] = useState({
    taskName: "",
    dateStart: reReReFormatTime(frDate),
    dateEnd: reReReFormatTime(onHourLater),
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));

    if (id === "dateStart") {
      let res = reReReFormatTime(addOneHour(new Date(value)));
      setState((prevState) => ({
        ...prevState,
        dateEnd: res,
      }));
      // console.log(res);
    }
  };

  const removeT = (date) => {
    return date.replace("T", " ");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { taskName, dateStart, dateEnd } = state;

    sendTask(taskName, removeT(dateStart), removeT(dateEnd)).then((data) => {
      setTasks((prevState) => [...prevState, data]);
    });
  };

  useEffect(() => {
    const fetchTask = async () => {
      const response = await axios(
        "https://api-gateway-hackathon.herokuapp.com/api/taskService/tasks"
      );
      setTasks(response.data);
    };
    fetchTask();
  }, []);

  return (
    <>
      <p>Home</p>
      <div className="col-sm mb-3 pb-3 border-bottom border-2">
        <h3>Ajouter une tâche</h3>
        <form>
          <div className="form-group text-left">
            <label htmlFor="inputTache">Tâche</label>
            <input
              type="text"
              className="form-control"
              id="taskName"
              aria-describedby="taskNameHelp"
              placeholder="Entrez une tâche"
              value={state.taskName}
              onChange={handleChange}
            />
          </div>
          <div className="form-group text-left">
            <label htmlFor="inputStart">Date de début</label>
            <input
              type="datetime-local"
              className="form-control"
              id="dateStart"
              placeholder="Entrez date de début"
              min={state.dateStart}
              max="2022-06-01T00:00"
              value={state.dateStart}
              onChange={handleChange}
            />
          </div>
          <div className="form-group text-left">
            <label htmlFor="inputEnd">Date de fin</label>
            <input
              type="datetime-local"
              className="form-control"
              id="dateEnd"
              placeholder="Entrez date de fin"
              min={state.dateEnd}
              max="2022-06-01T00:00"
              value={state.dateEnd}
              onChange={handleChange}
            />
          </div>
          <div className="form-check"></div>
          <button
            type="submit"
            className="btn btn-primary btn-block"
            onClick={handleSubmit}
          >
            Ajout de la tâche
          </button>
        </form>
      </div>

      <Router>
        <Link to="/task-test-react/">
          <button className="btn btn-primary">Toutes les Tâches</button>
        </Link>
        <Link to="/task-test-react/mytasks">
          <button className="btn btn-primary">Mes Tâches</button>
        </Link>

        <Switch>
          <Route exact path="/task-test-react/">
            <AllTask tasks={tasks} />
          </Route>
          <Route path="/task-test-react/mytasks">
            {PerformanceNavigationTiming.type === "reload" ? (
              <Redirect to="/task-test-react/" />
            ) : (
              <TaskByUserId />
            )}
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default Home;
