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

export const postLink = async (data) => {
  const res = await axios.post("/portfolio", data, header);
  if (res) {
    return res;
  }
};

export const updateLink = async (data) => {
  const res = await axios.patch("/portfolio/links", data, header);
  if (res) {
    return res;
  }
};

export const custom = async (data) => {
  const res = await axios.patch("/portfolio/customization", data, header);
  if (res) {
    return res;
  }
};

export const updateName = async (data) => {
  const res = await axios.patch("/portfolio/username", data, header);
  if (res) {
    return res;
  }
};

export const updateOther = async (data) => {
  const res = await axios.patch("/portfolio/other", data, header);
  if (res) {
    return res;
  }
};

export const searchData = async (data) => {
  const res = await axios.get(`/portfolio/search/${data}`, header);
  if (res) {
    return res;
  }
};

export const fetchPortfolio = async (username) => {
  const res = await axios.get(`/portfolio/${username}`, header);
  if (res) {
    return res;
  }
}

export const fetchPortfolioById = async (id) => {
  const res = await axios.get(`/portfolio/id/${id}`, header);
  if(res){
    return res;
  }
}

export const fetchImgs = async () => {
  const res = await axios.get(`/portfolio/img/all`, header);
  if(res){
    return res;
  }
}
