import React from "react";

function Misi({misi}) {
    return (
        <div className="flex flex-col items-center">
            <div className="font-extrabold text-2xl">
                <h1>Misi</h1>
                <hr className="mt-1 w-8 m-auto" />
            </div>
            <div className="text-center bg-[#3992C4] p-4 mt-4 rounded-sm">
                <p>{misi}</p>
            </div>
        </div>
    )
}

export default Misi;