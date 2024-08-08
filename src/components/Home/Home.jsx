import React from "react";
import ListHome from "./LIstHome";

function Home ({homes}) {

    return (
        <div> 
            {
                homes.map((home) => (
                    <ListHome key={home.id} {...home} />
                ))
            }
        </div>
    )   
}

export default Home;