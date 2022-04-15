import {useEffect, useState} from "react";
import {usersService} from "../../services/users.services";
import {User} from "../User/User";

export const users = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [users,setUsers] = useState(null)

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() =>{
    usersService.getAll().then(({data}) => setUsers(data))
    }, []  );



    return (
    <div>
        {users.map((user) => <User ke user={user}/>)}

    </div>
);
}
