import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "a0ea5a5b45f24281a2de46bbd2651757",
  },
});
