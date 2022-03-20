import React from 'react'
import './cursor.css'

function Cursor() {

  const CursorVar = document.getElementById('cursor');
  document.onmousemove = function(e) {
      CursorVar.style.left = e.pageX + 'px';
      console.log('i am running')
      CursorVar.style.top = e.pageY + 'px';
  }
    
  return (
    <div id=''>
        <img id='cursor' className='cursorClass' src={require("../../images/batt.gif")} alt="cursor" />
    </div>
  )

}

export default Cursor;