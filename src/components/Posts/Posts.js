import {useEffect, useState} from "react";
import {postService} from "../services";
import {Post} from "../Post/Post";

    export const Posts = () => {

    const [posts, setPosts] = useState(null)

    useEffect(() => {
        postService.getALlPosts().then(value => setPosts(value));
    }, []);


    return (
        <div>
            {
                posts && posts.map((post) => < Post key={post.id} user={post}/>)
            }
        </div>
    );
}