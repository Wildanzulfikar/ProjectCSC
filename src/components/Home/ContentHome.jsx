import React from "react";

function ContentHome({subJudul, slogan}) {

    return (
        <>
            <div className="mb-5 text-2xl font-semibold">
                <p>{subJudul}</p>
            </div>
            <div className="mb-7 text-[#FEAE6F]">
                <span>{slogan}</span>
            </div>
            <div>
                <a href="" className="bg-[#5991CD] px-3 py-2 rounded-sm font-semibold">Pelajari Lebih Lanjut</a>
            </div>
        </>
    )
}

export default ContentHome;