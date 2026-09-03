import axios from "axios";

const API_URL = "http://localhost:8080/api/transactions";

export const getAllTransactions = () => {
  return axios.get(API_URL);
};

export const createTransaction = (transaction) => {
  return axios.post(API_URL, transaction);
};

export const updateTransaction = (id, transaction) => {
  return axios.put(`${API_URL}/${id}`, transaction);
};

export const deleteTransaction = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};

