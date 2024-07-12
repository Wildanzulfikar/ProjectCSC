import React from "react";

function ContentHome() {
    return (
        <div className="mt-48  flex flex-col justify-center px-[7%] text-white">
            <div className="text-5xl font-extrabold mb-7 font-['Poppins']">
                <h1>Computer Student Club</h1>
            </div>
            <div className="mb-5 text-2xl font-semibold">
                <p>Unit Kegiatan Mahasiswa Jurusan <br /> Teknik Informatika dan Komputer</p>
            </div>
            <div className="mb-7 text-[#FEAE6F]">
                <span>Mengasah Kemampuan, Mewujudkan Impian di CSC PNJ</span>
            </div>
            <div>
                <a href="" className="bg-[#5991CD] px-3 py-2 rounded-sm font-semibold">Pelajari Lebih Lanjut</a>
            </div>
        </div>
    )
}

export default ContentHome;