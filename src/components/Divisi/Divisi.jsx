import React from "react";
import ListDivisi from "./ListDivisi";

function Divisi({divisis}) {
    return (
        <>
            {
                divisis.map((divisi) => (
                    <ListDivisi key={divisi.id} {...divisi}/>
                ))
            }
        </>
    )
}

export default Divisi;