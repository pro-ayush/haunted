import React from "react";

function socialBtn(props) {
  const Accounts = [
    {
      AppName: "Instagram",
      userName: "ayushmaan.bakshi",
      link: "something",
      iconLink: "https://img.icons8.com/fluency/48/000000/instagram-new.png",
    },
    {
      AppName: "twitter",
      userName: "Ayush",
      link: "something",
      iconLink: "https://img.icons8.com/color/48/000000/twitter--v2.png",
    },
    {
      AppName: "Linkedin",
      userName: "Ayush",
      link: "something",
      iconLink: "https://img.icons8.com/color/48/000000/linkedin.png",
    },
    {
      AppName: "github",
      userName: "pro-ayush",
      link: "something",
      iconLink: "https://img.icons8.com/fluency-systems-filled/48/000000/github.png",
    },
  ];

  return (
      <>
        <div className="socialContainer flex flex-row justify-center p-10">
            {Accounts.map((item, index)=>{
                return (
                    <div key={index} id="SocailBtn" className="pr-3 pl-3 w-30 h-30">
                        <img className="border-white border-2 p-2 rounded-full bg-white" key={index} src={item.iconLink} alt={item.AppName} />
                    </div>
                );
            })}
        </div>
      </>
  );
}

export default socialBtn;
