import React from "react";
import './intro.css'
import { GiBatMask, GiBatWing } from "react-icons/gi";
import { RiReactjsLine } from "react-icons/ri";
import { SiFirebase, SiTailwindcss } from "react-icons/si";
import {AiFillCodeSandboxCircle} from 'react-icons/ai'

function Intro() {
  return (
    <>
      <div id="Intro" className="z-20">
        {/* intro Started  */}
        <div className="flex flex-row justify-between">
          {/* left side div  */}
          <div className="flex flex-col justify-start font-horror pl-10 pt-20">
            <h1 className="text-6xl text-blood">Skills</h1>
            <div className="font-phantom">

              <div className="flex flex-col justify-center py-5">
                <span className="flex justify-center text-6xl text-blood">
                  <RiReactjsLine />
                </span>
                <div className="pt-6 text-l text-blood"> Re<span>act</span></div>
              </div>

              <div className="flex flex-col justify-center py-5">
                <span className="flex text-6xl justify-center text-blood">
                  <SiTailwindcss />
                </span>
                <div className="pt-6 text-l text-blood"> Tailwind</div>
              </div>

              <div className="flex flex-col justify-center py-5">
                <span className="flex justify-center text-6xl text-blood">
                  <SiFirebase />
                </span>
                <div className="pt-6 text-l text-blood">Firebase</div>
              </div>

            </div>
          </div>

          {/* Right Side Div */}
          <div className="flex flex-col justify-end">
            {/* My name and Hello  */}
            <div className="flex flex-col justify-end text-right pr-10 pt-10">
              <div className="nameIcons flex flex-row justify-end px-2 py-2">
                <GiBatWing color="#E45C08" />
                <GiBatMask color="#E45C08" />
              </div>
              <h4 id="Greeting" className="font-horror text-2xl text-blood">
                Salutatio Ex!
              </h4>
              <h1
                id="topHeading"
                className="font-horror text-6xl p-3 pt-1 pl-0 text-blood"
              >
                Ayushmaan
              </h1>
            </div>
            {/* Intro Over */}

            <div className="flex flex-col justify-end">
              <div className="flex flex-col justify-end text-right pr-10 pt-20 font-horror text-blood text-4xl">
                <h2>Ima react Developer</h2>
                <h2>& front-end Designer</h2>
              </div>

              <div className="flex flex-col justify-end text-right pr-10 pt-28 font-horror text-blood text-4xl">

                <h2>AI.DECODED.COM</h2>
                
                <div className="flex flex-row justify-end">

                <AiFillCodeSandboxCircle/> <h2 className="pl-2">  CEO</h2>
                </div>
              </div>
            </div>
            {/* Right Side over */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Intro;
