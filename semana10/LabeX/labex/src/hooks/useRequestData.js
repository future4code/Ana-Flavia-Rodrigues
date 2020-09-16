import { useState, useEffect } from "react";
import { getActivities } from "../requests";

// const useRequestData = (url, initialState) => {
//   const [data, setData] = useState(initialState);

//   useEffect(() => {
//     getActivities(url, setData);
//   }, [url]);

//   const updateData = () => {
//     getActivities(url, setData);
//   };

//   return [data, updateData];
// };

// export default useRequestData;