import React from "react";
import ContentActivity from "./ContentActivity";
import TitleActivity from "./TitleActivity";

function Activity() {
    return (
        <div id="a" className="px-[7%] mt-20">
            <TitleActivity />
            <ContentActivity />
        </div>
    )
}

export default Activity