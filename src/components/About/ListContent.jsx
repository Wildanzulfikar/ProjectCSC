import React from "react";
import About from "./About";
import Misi from "./Misi";
import Visi from "./Visi";

function ListContent({about, visi, misi}) {
    return (
        <div id="about" className="px-[7%] mt-64 pt-10 text-white text-lg">
            <About about={about}/>
            <div className="flex gap-56 mt-20 ">
                <Visi visi={visi}/>
                <Misi misi={misi}/>
            </div>
        </div>
    )
}

export default ListContent;