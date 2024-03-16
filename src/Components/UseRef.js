import React, { useRef } from 'react'

function UseRef() {
    const divref = useRef();
    function handleRef(){
        console.log(divref.current.innerHTML);
        divref.current.innerHTML = "World";
    }
  return (
    <>
      <div ref={divref}>UseRef</div>
      <button onClick={handleRef}>Click</button>
    </>

  )
}

export default UseRef