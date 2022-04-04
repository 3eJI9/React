import {constants} from "../../Constants/constants";

export const postService = {

    getALlPosts: () => fetch(constants.apiUrl + 'posts').then(value => value.json())

}