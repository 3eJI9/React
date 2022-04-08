import {constants} from "../../Constants";

export const postService = {

    getALlPosts: () => fetch(constants.apiUrl + 'posts').then(value => value.json())

}