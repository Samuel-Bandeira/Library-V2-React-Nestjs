import { api } from "./api";

export const getAuthors = async () => await api.get("/author");
export const getAuthorById = async (authorId) =>
  await api.get(`/author/${authorId}`);
export const postAuthor = async (payload) => await api.post("/author", payload);
