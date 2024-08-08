import React from "react";
import ListContent from "./ListContent";

function MangeAbout({about}) {
    return (
        <div>
            {
                about.map((about) => (
                    <ListContent key={about.id} {...about}/>
                ))
            }
        </div>
    )
}

export default MangeAbout;