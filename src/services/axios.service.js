import axios from "axios";
import baseURL from "../components/constants/links";

export const axiosService = axios.create({baseURL});