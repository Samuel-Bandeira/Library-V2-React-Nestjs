import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/system";
import Dropzone from "react-dropzone";
import { useMutation } from "react-query";
import * as api from "../api/bookApi";
import { Button, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { getAuthors } from "../api/authorApi";
import { postBook, updateBook } from "../api/bookApi";

const BookForm = ({ setSuccess, action, bookId, bookInfo }) => {
  const navigate = useNavigate();
  const [authors, setAuthors] = useState();
  const [loading, setLoading] = useState(true);
  const [files, setFiles] = useState(null);
  const { register, handleSubmit, control } = useForm();
  const { isLoading, mutate } = useMutation(api.postBook);

  const fetchAuthors = async () => {
    const res = await getAuthors();
    setAuthors(res.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchAuthors();
  }, []);

  if (loading) {
    return "Loading...";
  }

  const sendData = async (data, action) => {
    const formData = new FormData();
    formData.append("cover", data.cover[0]);
    formData.append("coverImageName", "");
    formData.append("createdAt", new Date());

    for (const key in data) {
      if (key !== "cover" && data[key]) {
        formData.append(key, data[key]);
      }
    }

    if (bookId === undefined) {
      bookId = "";
    }

    if (action === "post") {
      const res = await postBook(formData);
      console.log(res);
      if (res.status === 201 || res.status === 200) {
        navigate(`/book/${res.data.id}`);
        setSuccess(true);
      }
    } else if (action === "put") {
      const res = await updateBook(bookId, formData);
      if (res.status === 201 || res.status === 200) {
        navigate(`/book/${res.data.id}`);
        setSuccess(true);
      }
    }
  };

  const onSubmit = async (data) => {
    sendData(data, action);
  };

  const formFields = [
    { name: "Title", register: "title", type: "text" },
    {
      name: "Description",
      register: "description",
      type: "text",
    },
    {
      name: "Publish Date",
      register: "publishDate",
      type: "date",
    },
    {
      name: "Page Count",
      register: "pageCount",
      type: "number",
    },
    {
      name: "Author",
      register: "author",
    },
  ];
  return (
    <Box>
      {/* Dropzone */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        {/* <input {...register("cover")} type="file" /> */}
        {/* Drag And Drop Menu */}
        <Box>
          <Controller
            control={control}
            name="cover"
            defaultValue=""
            render={({ field: { onChange } }) => (
              <Dropzone
                onDrop={(acceptedFiles) => {
                  setFiles(
                    acceptedFiles.map((file) =>
                      Object.assign(file, {
                        preview: URL.createObjectURL(file),
                      })
                    )
                  );
                  onChange(acceptedFiles);
                }}
              >
                {({ getRootProps, getInputProps }) => (
                  <section>
                    <div {...getRootProps()}>
                      <input {...getInputProps()} />
                      <p>
                        Drag 'n' drop some files here, or click to select files
                      </p>
                    </div>
                  </section>
                )}
              </Dropzone>
            )}
          />
          <Box>
            {files &&
              files.map((file) => (
                <Box key={file.name}>
                  <img src={file.preview} width="360px" alt="preview" />
                </Box>
              ))}
          </Box>
        </Box>

        <Box
          sx={{
            width: "50%",
          }}
        >
          {formFields.map((field) => {
            if (field.register !== "author") {
              return (
                <Box key={field.name}>
                  <InputLabel sx={{ fontSize: "20px", color: "black" }}>
                    {field.name}
                  </InputLabel>
                  <TextField
                    variant="outlined"
                    // defaultValue={bookInfo[field.register]}
                    {...register(`${field.register}`)}
                    type={field.type}
                    sx={{
                      width: "100%",
                    }}
                  />
                </Box>
              );
            } else {
              return (
                <Box key={field.name}>
                  <InputLabel sx={{ fontSize: "20px", color: "black" }}>
                    {field.name}
                  </InputLabel>
                  <Select
                    defaultValue=""
                    {...register(`${field.register}`)}
                    sx={{
                      width: "50%",
                    }}
                  >
                    {authors &&
                      authors.map((author) => {
                        if (author.name !== undefined && author.name !== "") {
                          return (
                            <MenuItem key={author._id} value={author._id}>
                              {author.name}
                            </MenuItem>
                          );
                        }
                      })}
                  </Select>
                </Box>
              );
            }
          })}

          <Button type="submit" variant="contained">
            submit
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default BookForm;
