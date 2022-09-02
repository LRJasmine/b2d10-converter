import React, { useState } from 'react';


function BinaryDec(){
  const [binInput, setBinInput ] = useState("");
  const [decOutput, setDecOutput ] = useState("");
  // const [decParsedOutput, setDecParsedOutput ] = useState("");
  const [notabin, setNotABin] = useState();
  const binaryRegex = /^[0-1]{1,}$/g;
  function updateDisplay(event){
    if(event.target.value.length > 8){
      event.target.value = event.target.value.slice(0, 8);
    }
    let inputval = event.target.value;
    if(inputval.length === 0){
      setDecOutput("");
      setBinInput("");
    }
    else if (inputval.length > 0 && binaryRegex.test(inputval)===false){
      setNotABin(<p className='text-red-500 font-bold my-2'>Please enter only 0s and 1s</p>);
      setDecOutput("");
      setBinInput("");
    }
    else {
      let decval = inputval.split('').reduce((prevval, curval, i, arr)=>{
        return prevval + Math.pow(2, arr.length - i - 1) * curval;
      }, 0);
      setNotABin();
      setBinInput(inputval);
      // setDecParsedOutput(parseInt(inputval, 2));
      setDecOutput(decval);
    }
  }

  return (
    <div className='w-screen h-screen flex flex-col content-center justify-center bg-slate-900 text-slate-50 py-8'>
      <div className="intro mb-8">
        <h1 className="text-5xl font-bold text-center text-orange-100 mb-8">B<sub>2</sub><span className="material-icons-outlined !text-3xl font-bold text-orange-500">keyboard_double_arrow_right</span>D<sub>10</sub></h1>
        <p className='font-light italic'>Convert Binary (base 2) to Decimal (base 10) in an instant</p>
        <p className='font-light italic'>Binary numbers consist of only 0s and 1s</p>
      </div>
      <div className="display flex gap-6 justify-center items-center mb-8">
        <div className='uppercase'>Binary Input: {binInput}</div>
        <div><span className="material-icons-outlined !text-xl font-bold text-orange-500">keyboard_double_arrow_right</span></div>
        <div className='uppercase'>Decimal Output: {decOutput}</div>
        {/* <div>Decimal Parsed Output {decParsedOutput}</div> */}
      </div>
      <div className="inputs">
        {notabin}
        <input type="number" name="bininput" placeholder="Enter Binary Digits" onChange={updateDisplay} className="text-slate-900 font-semibold rounded px-4 py-2"/>
      </div>
    </div>
  )
}

export default BinaryDec;