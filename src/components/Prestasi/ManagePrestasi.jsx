import React from "react";
import Prestasi from "./Prestasi";

function ManagePrestasi ({prestasis}) {
    return (
        <>
            {
                prestasis.map((prestasi) => (
                    <Prestasi key={prestasi.id} {...prestasi}/>
                ))
            }
        </>
    )
}

export default ManagePrestasi;