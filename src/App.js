import  styles from 'App.module.css';

import {UserInfo, Users, Posts} from './components/';


import {useState} from "react";



export const App = () => {
    const [ user, setUser] = useState(null);
    const [ userIdForPosts, setUserIdForPosts] = useState(null);


    return (
            <div>
                <div className={styles.usersAndInfo}>
                <Users setUser={setUser} setUserIdForPosts={setUserIdForPosts}/>
                {user && <UserInfo user={user} setuserIdForPosts={setUserIdForPosts}/>}
                </div>
                {userIdForPosts && <Posts userId={setUserIdForPosts}/>}
            </div>
    );

}
