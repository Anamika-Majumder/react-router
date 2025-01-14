import { useLoaderData } from "react-router-dom";
import Users from "../Users/Users";
import './User.css'


const User = () => {
    const user = useLoaderData();
    console.log(user);
    return (
        <div>
            <h2>User:{user.length}</h2>
            <h4>Our Fantastic Webpage</h4>
            <div className="user ">
                {
                    user.map(user =><Users key={user.id} user={user}></Users>)
                }
            </div>
        </div>
    );
};

export default User;