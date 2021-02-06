import axios from "axios";

export default axios.create({
  baseURL: "http://www.pathofexile.com/api/trade",
});
