import {constants} from "../../Constants";

export const userService = {

    getAllUsers: () => fetch(constants.apiUrl + 'users').then(value => value.json())

                }