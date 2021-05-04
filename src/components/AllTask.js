import { useRef, useState } from "react";
import { getTaskById } from "../service/task";

import "../styles/AllTask.css";

function AllTask({ tasks }) {
  const [taskById, setTaskById] = useState({});
  const modalRef = useRef(null);

  const handleClick = (id) => {
    getTaskById(id).then((response) => {
      console.log("response ", response);
      setTaskById(response);
    });
  };

  return (
    <>
      <ul className="mt-3 pt-3 border-top border-2">
        {tasks.length ? (
          tasks.map((e, i) => (
            <li
              key={i}
              onClick={() => handleClick(e.id)}
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              the task : <b>{e.name}</b> starts at <b>{e.start}</b> and ends at{" "}
              <b>{e.end}</b>
            </li>
          ))
        ) : (
          <p>No tasks</p>
        )}
      </ul>

      <div
        className="modal fade"
        ref={modalRef}
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                {taskById.name}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p>Date début : {taskById.start}</p>
              <p>Date fin : {taskById.end}</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AllTask;
