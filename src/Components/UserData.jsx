import { React } from "react";
import { v4 as uuidv4 } from 'uuid';

const users = [
    {
        id:uuidv4(),
        name: "JayIK",
        city: "Ikeja"
    },
      {
        id:uuidv4(),
        name: "JayI",
        city: "Isolo"
    },
      {
        id:uuidv4(),
        name: "JayW",
        city: "Wawa"
    },
      {
        id:uuidv4(),
        name: "JayB",
        city: "Berger"
    },
      {
        id:uuidv4(),
        name: "JayL",
        city: "Lekki"
    },
]

const UserData = () => {
    return(
        <>
            {users.map((user, index)=>{
                return(
                <div key={user.id}>
                    <h2>{user.name}</h2>
                    <p>{user.city}</p>
                </div>
            )})}
        </>
    )
} 

export default UserData;