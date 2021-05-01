import api from "./api";

function sendTask(t, ds, de) {
  return api
    .post("toBeDetermined", {
      t,
      ds,
      de,
    })
    .then((response) => {
      console.log(response.data);
      return response.data;
    });
}

export { sendTask };
