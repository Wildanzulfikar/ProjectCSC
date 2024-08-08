import React from "react";
import { dataHome } from "./utils/DataHome";
import { dataAbout  } from "./utils/DataAbout";
import { dataDivisi } from "./utils/DataDivisi";
import { dataPrestasi } from "./utils/DataPrestasi";
import ManagePrestasi from "./components/Prestasi/ManagePrestasi";
import MangeAbout from "./components/About/MangeAbout";
import Divisi from "./components/Divisi/Divisi";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Prestasi from "./components/Prestasi/Prestasi";
import Activity from "./components/Activity/Activity";
import ContentFooter from "./components/Footer/ContentFooter";
import Contact from "./components/Contact/Contact";

function AppCSC () {

    const homes = dataHome();
    const about = dataAbout();
    const divisis = dataDivisi();
    const prestasis = dataPrestasi();

    return (
        <div className="w-full h-full bg-[#003366]">
            <Navbar/>
            <Home homes={homes}/>
            <MangeAbout about={about} />
            <div>
                <h1 className="m-auto w-60 rounded-t-full text-center py-3 px-10 mt-52 font-extrabold text-5xl text-white bg-[#3992C4]">Divisi</h1>
                <hr className="mt-8 mb-8 w-96 m-auto" />
                <Divisi divisis={divisis}/>
            </div>
            <div>
                <h1 className="text-white font-extrabold text-4xl text-center">Prestasi</h1>
                <hr className="w-28 mt-3 m-auto"/>
                <ManagePrestasi prestasis={prestasis}/>
            </div>
            <Activity />
            <Contact />
            <ContentFooter />
        </div>
    )
}

export default AppCSC;