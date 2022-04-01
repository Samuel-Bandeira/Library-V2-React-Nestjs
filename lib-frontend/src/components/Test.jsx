import React, { useState } from "react";
import { useQuery } from "react-query";

const fetchData = async () => {
  const res = await fetch("http://localhost:8080/author");
  return res.json();
};

const Test = () => {
  const { isLoading, error, data } = useQuery("repoData", fetchData);
  const [page, setPage] = useState("op2");

  const handleOp1 = () => {
    setPage("op1");
  };

  const handleOp2 = () => {
    setPage("op2");
  };

  if (isLoading) return <h1>LOADING!</h1>;

  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
      <button onClick={handleOp1}>op1</button>
      <button onClick={handleOp2}>op2</button>
      {page === "op1" ? data.map((each) => <div>{each.name}</div>) : "page 2"}
    </div>
  );
};

export default Test;
