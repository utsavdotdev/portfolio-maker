import axios from "../config/axios";

const header = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const auth = async (data) => {
  const res = await axios.post(
    "/auth",
    data,
    header
  );
  if (res) {
    return res;
  }
};
