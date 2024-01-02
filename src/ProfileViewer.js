import { useState, useEffect } from "react";
import axios from "axios";


// set a piece of state to null since we have no data in the beginning
// useEffect with no dependancies ([]) means run it once after the first render!
const ProfileViewer = ({name="Potter", amount=1}) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        async function loadProfile() {
            const res = await axios.get(
              `https://api.potterdb.com/v1/characters?filter[name_cont]=${name}&page[size]=${amount}`
            );  
            console.log(res.data)    
            setData(res.data.data);      
        }
        loadProfile();
    }, [name, amount]);

    return (
    <div>
        <h3>Characters matching "{name}":</h3>
        {data ? (
            <ul>
                {data.map((character) => (
                  <li key={character.id}>{character.attributes.slug}</li>
                ))}
            </ul>
        ) : (
            <p>Loading...</p>
        )}
    </div>
    );
};

export default ProfileViewer;