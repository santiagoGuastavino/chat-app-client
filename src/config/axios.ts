import axios from "axios";

// aded config

export const http = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BACK_URL}`,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
