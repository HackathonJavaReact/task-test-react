import api from "./api";

const taskURL = "/api/taskService/";
const composeURL = "/api/compose/";

function sendTask(t, ds, de) {
  return api
    .post(`${composeURL}task`, {
      name: t,
      start: ds,
      end: de,
    })
    .then((response) => {
      return response.data;
    });
}

function forgotPassword() {
  return api.get(`${composeURL}users/tasks`).then((response) => {
    return response.data;
  });
}

function getTaskById(id) {
  return api.get(`${taskURL}tasks/${id}`).then((response) => {
    return response.data;
  });
}

export { sendTask, forgotPassword, getTaskById };