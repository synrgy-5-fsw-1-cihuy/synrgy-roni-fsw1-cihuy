/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { useEffect, useState } from "react";

type UseAxiosParams = {
  url: string;
  method: "get" | "post" | "put" | "delete";
  data?: any;
};

axios.defaults.baseURL = process.env.API_HOST ?? "https://jsonplaceholder.typicode.com";

export const useAxios = (params: UseAxiosParams) => {
  const [response, setResponse] = useState(null || []);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = () => {
    axios[params.method](params.url, params.data)
      .then((res) => {
        setResponse(res.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { response, error, isLoading };
};
