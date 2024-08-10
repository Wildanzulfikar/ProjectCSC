import React from "react";
import ImageDivisi from "./ImageDivisi";
import TextDivisi from "./TextDivisi";

function ListDivisi({nama, deskripsi, img}) {
    return (
        <div id="divisi" className="flex flex-row items-center m-auto pt-12 px-[7%] w-[80%] mb-28 text-white">
            <ImageDivisi img={img}/>
            <TextDivisi nama={nama} deskripsi={deskripsi}/>
        </div>
    )
}

export default ListDivisi;