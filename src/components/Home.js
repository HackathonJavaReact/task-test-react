import { useState } from "react";
import { sendTask } from "../service/task";

function Home() {
  let now = new Date().toISOString();
  console.log(now);

  const [state, setState] = useState({
    taskName: "",
    dateStart: "2021-06-01T00:00",
    dateEnd: "2021-06-01T01:00",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { taskName, dateStart, dateEnd } = state;
    sendTask(taskName, dateStart, dateEnd).then((data) => {
      // do smth with data received after sending form
    });
  };

  return (
    <>
      <p>Home</p>
      <div className="col-sm">
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
              min="2021-06-01T01:00"
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

      <p>List of Tasks comes here</p>
    </>
  );
}

export default Home;
