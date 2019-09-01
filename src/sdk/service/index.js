import axios from "axios";

const fetchContactDetails = async () => {
  try {
    const URL = "./data.json";
    const response = await axios.get(URL);
    return response;
  } catch {
    return { error: true };
  }
};

export { fetchContactDetails };
