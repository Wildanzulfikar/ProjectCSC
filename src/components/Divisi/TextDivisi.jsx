import React from "react";

function TextDivisi({nama, deskripsi}) {
    return (
        <div className="px-6">
            <div className="font-extrabold text-2xl">
                <h1>{nama}</h1>
            </div>
            <div className="mt-6 text-lg text-slate-400">
                <p>{deskripsi}</p>
            </div>
        </div>
    )
}

export default TextDivisi;