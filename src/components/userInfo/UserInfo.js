

export const UserInfo = ({user, setUserIdForPosts}) => {


    return (
        <div>
            <div>{user.id}</div>
            <div>{user.name}</div>
            <div>{user.username}</div>
            <div>{user.email}</div>
            <div>{user.phone}</div>
            <div>{user.website}</div>   
            <input type="button" value="Show posts" onClick={()=> setUserIdForPosts(user.id)}/>
        </div>
    )

}