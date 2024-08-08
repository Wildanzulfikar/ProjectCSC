import React from "react";

function Contact () {
    return (
        <div className="px-[20%] mt-36">
            <div className="text-white text-4xl font-extrabold text-center">
                <h1>Contact</h1>
                <hr className="mt-4 w-32 m-auto" />
            </div>
            <form className="w-full text-lg font-semibold mt-8" action="">
                <div>
                    <div className="text-white mb-3">
                        <label htmlFor="">Nama</label>
                    </div>
                    <div>
                        <input className="w-full p-3 rounded-md" type="text" name="name" id="name"/>
                    </div>
                </div>
                <div className="mt-8">
                    <div className="text-white mb-3">
                        <label htmlFor="">Email</label>
                    </div>
                    <div>
                        <input className="w-full p-3 rounded-md" type="email" name="email" id="email"/>
                    </div>
                </div>
                <div className="mt-8">
                    <div className="text-white mb-3">
                        <label htmlFor="">Pesan</label>
                    </div>
                    <div>
                        <textarea className="w-full h-48 rounded-md" name="pesan" id="pesan"></textarea>
                    </div>
                </div>
                <button className="m-auto w-full p-4 mt-8 rounded-md text-white bg-[#3992C4]" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Contact;