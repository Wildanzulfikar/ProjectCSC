import React from "react";

function Visi({visi}) {
    return (
        <div className="flex flex-col items-center">
            <div className="font-extrabold text-2xl">
                <h1>Visi</h1>
                <hr className="w-6 m-auto mt-1" />
            </div>
            <div className="text-center bg-[#3992C4] p-4 mt-4 rounded-sm">
                <p>{visi}</p>
            </div>
        </div>
    )
}

export default Visi;