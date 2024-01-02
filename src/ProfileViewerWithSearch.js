import { useState, useEffect } from "react";
import axios from "axios";
import ProfileSearchForm from "./ProfileSearchForm";

const ProfileViewerWithSearch = () => {
    const [character, setCharacter] = useState(null);
    const [url, setUrl] = useState(
      `https://api.potterdb.com/v1/characters?filter[name_cont]=Weasley&page[size]=1`
    );

    const search = term => {
        setUrl(
          `https://api.potterdb.com/v1/characters?filter[name_cont]=${term}&page[size]=1`
        );
    }
    useEffect(() => {
        console.log("In effect!")
        console.log(url)
        async function loadCharacter() {
            const res = await axios.get(url);
            console.log("Character data:", res.data);
            setCharacter(res.data.data[0].attributes.name)
        }
        loadCharacter();
        return () => console.log("Cleaning up!")
    }, [url])

    return (
      <div>
        {character ? (
          <h1>Hi {character}</h1>
        ) : (
          <h1>Loading...</h1>
        )}
        <ProfileSearchForm search={search} />
      </div>
    );

}

export default ProfileViewerWithSearch;