import { api } from "./api";

export const getBooks = () => api.get("/book");

export const getBookById = (bookId) =>
  api.get(`/book/${bookId}`).then((res) => res.data);

export const getNewestBooks = async () =>
  api.get("/book/newest").then((res) => res.data);

export const postBook = (payload) => api.post("/book", payload);

export const updateBook = (bookId, payload) =>
  api.put(`/book/${bookId}`, payload);
