import axios, { dispatch, actions } from "axios";

export const backEndBaseUrl = "http://localhost:8080/api";
export const frontEndBaseUrl = "http://localhost:3000/";

export const count = async () => {
  try {
    const { data: response } = await axios.get(backEndBaseUrl + '/count');
    return response
  }

  catch (error) {
    console.log(error);
  }
}

export const loadAllItems = async () => {
  try {
    const { data: response } = await axios.get(backEndBaseUrl + '/all');
    return response
  }

  catch (error) {
    console.log(error);
  }
}

export const loadById = async (id) => {
  try {
    const { data: response } = await axios.get(backEndBaseUrl + id);
    return response
  }

  catch (error) {
    console.log(error);
  }
}