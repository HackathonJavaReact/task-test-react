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
      console.log(response.data);
      return response.data;
    });
}

export { sendTask };
