import React from "react";
import Intro from "./Intro/intro";
import './Center.css'

function Center() {
    return (
<>
        <div
            id="CenterDiv"
            className="bg-cover w-full h-screen text-white from-leftRight/[0.9] via-black/[0.9] to-leftRight/[0.9]"
        >

            <Intro />
            

        </div>
</>
    );
}

export default Center;
