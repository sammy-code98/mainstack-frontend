import api from "./axios.api";

export const getUser = async () => {
  const { data } = await api.get("/user");
  return data;
};

export const getWallet = async () => {
  const { data } = await api.get("/wallet");
  return data;
};

export const getTransactions = async () => {
  const { data } = await api.get("/transactions");
  return data;
};