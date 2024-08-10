import React from "react";
import TitleHome from './TitleHome';
import ContentHome from "./ContentHome";

function ListHome({title, subJudul, slogan}) {

    console.log(title);

    return (
        <div id="home" className="pt-48  flex flex-col justify-center px-[7%] text-white">
            <TitleHome title={title}/>
            <ContentHome subJudul={subJudul} slogan={slogan}/>
        </div>
    )
}

export default ListHome;