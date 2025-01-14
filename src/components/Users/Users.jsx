import { Link } from 'react-router-dom';

const Users = ({user}) => {
    const {id, name, email, phone} = user;
    const userStyle ={
        border: '2px solid pink ',
        padding : '',
        borderRadius : '20px'
    }
    return (
        <div style={userStyle}>
            <h2>{name}</h2>
            <p>Email:{email}</p>
            <p>Phone{phone}</p>
            <Link to={`/users/${name}`}> Show Details </Link>
        </div>


    );
};

export default Users;