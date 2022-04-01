import axios from "axios";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import * as api from "../api/bookApi";

import OnlyOneBookDisplay from "../components/OnlyOneBookDisplay";
const SingleBookPage = () => {
  return (
    <div
      style={{
        width: "100%",
      }}
    >
      {data && <OnlyOneBookDisplay book={data} />}
    </div>
  );
};

export default SingleBookPage;
