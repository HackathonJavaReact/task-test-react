import api from "./api";

const baseURL = "/api/taskService/";

function sendTask(t, ds, de) {
  return api
    .post(`${baseURL}tasks`, {
      name: t,
      start: ds,
      end: de,
    })
    .then((response) => {
      return response.data;
    });
}

function getTaskById(id) {
  return api.get(`${baseURL}tasks/${id}`).then((response) => {
    return response.data;
  });
}

export { sendTask, getTaskById };
