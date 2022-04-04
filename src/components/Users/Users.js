import { useEffect, useState } from "react";
import {userService} from "../services";
import { User } from '../User/User'

    export const Users = () => {
    const [users, setUsers] = useState(null )

        useEffect(() => {
            userService.getAllUsers().then(value => setUsers(value));
        }, []);


    return (
        <div>
            {
                users && users.map((user) => <User key={user.id} user={user}/>)
            }
        </div>
    );
}
