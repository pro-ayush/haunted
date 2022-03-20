import React from 'react'

function navbar2() {

  const Options = ['about', 'Resume', 'Github', "projects"];
  return (
    <>
        <div className="flex flex-row h-14 justify-around align-middle bg-navbar">
            {/* logo */}
            <div className="logo">
                <img className='rounded-full' style={{height:"3rem", width:"3rem"}} src={require("../../images/danger.jpg")} alt='logo' />
            </div>

            {/* Buttons */}

            <div className="flex flex-row font-phantom text-center justify-center">
                
                    {Options.map((item)=>{return <h5 className='optionItem bg-black text-red-600 py-3 px-4 h-10 rounded-lg mx-3 my-1'>{item}</h5>})}
                
            </div>

            <div className="flex" id="profile">
                <img style={{height:"3rem", width:"3rem"}} className='rounded-full' src="https://images.unsplash.com/photo-1618426257457-0bc6cfa2de33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2NhcnklMjBtYW58ZW58MHx8MHx8&w=1000&q=80" alt="profile" />
            </div>
        </div>
    </>
  )
}

export default navbar2;