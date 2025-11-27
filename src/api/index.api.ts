import api from "./axios.api";

export type TransactionsFilters = {
  dateFrom?: string;
  dateTo?: string;
  type?: string[];
  status?: string[];
};

export const getUser = async () => {
  const { data } = await api.get("/user");
  return data;
};

export const getWallet = async () => {
  const { data } = await api.get("/wallet");
  return data;
};

export const getTransactions = async (filters?: TransactionsFilters) => {
  const params = { ...(filters ?? {}) };

  const res = await api.get("/transactions", { params });

  if (Array.isArray(res.data)) return res.data;
  if (Array.isArray(res.data?.data)) return res.data.data;
  return [];
};
