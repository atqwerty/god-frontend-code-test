import axios from "axios";

export const getCars = async () => {
  return axios
    .get("api/cars.json")
    .then((res: any) => {
      return res.data;
    })
    .catch((err: any) => err);
};
