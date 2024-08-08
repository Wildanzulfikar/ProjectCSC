import React from "react";

function About ({about}) {
    return (
        <div className="flex flex-col items-center">
            <div className="font-extrabold text-2xl">
                <h1>About</h1>
                <hr className="w-10 m-auto mt-1"/>
            </div>
            <div className=" w-1/2 text-center bg-[#3992C4] p-4 mt-4 rounded-sm">
                <p>{about}</p>
            </div>
        </div>
    )
}

export default About;