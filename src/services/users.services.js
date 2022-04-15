import {axiosService} from "./axios.service";
import {urls} from "../components/constants";

export let usersService;
usersService = {
    getAll: () => axiosService(urls.users)
};