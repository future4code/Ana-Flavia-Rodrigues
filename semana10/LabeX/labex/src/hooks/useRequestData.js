import { useState, useEffect } from "react";
import axios from "axios";

const useRequestData = (url, initialState) => {
  const [data, setData] = useState(initialState);

  useEffect(() => {
    axios
      .get(url)
      .then((resposta) => {
        setData(resposta.data);
        console.log(resposta.data.trips)
      })
      .catch((erro) => {
        console.log(erro);
      });
  }, [url]);

  return data;
};

export default useRequestData;