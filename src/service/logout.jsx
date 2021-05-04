import api from "./api";

export function loggingOut() {
  api.post("/logout");
}
