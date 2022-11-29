import axios from "../config/axios";

const header = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const auth = async (data) => {
  const res = await axios.post("/auth", data, header);
  if (res) {
    return res;
  }
};

export const logout = async (refreshToken) => {
  const res = await axios.post(
    "/user/logout",
    { refreshToken: refreshToken },
    header
  );
  if (res) {
    return res;
  }
};
