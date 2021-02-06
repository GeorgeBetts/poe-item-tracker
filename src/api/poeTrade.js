import axios from "axios";

export default axios.create({
  baseURL: "https://www.pathofexile.com/api/trade",
});
