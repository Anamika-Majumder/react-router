import { useLoaderData } from "react-router-dom";


const Usedetails = () => {
    const users = useLoaderData();
    const {name} = users;
  
    return (
        <div>
            <h2>Details about Users: {name}</h2>
        </div>
    );
};

export default Usedetails;