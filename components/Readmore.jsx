import React,{useState} from 'react'

function Readmore({children,maxlength=100,Expanding,setExpanding}) {

    
  if (!children) {
    return (
      <div>
        nothing here
      </div>
    ); 
  }    
    
    if (children.length <= maxlength) return <p>{children}</p>
    let text = Expanding?  children.substring(0,maxlength):children
  return (
    <div>
        <span className="text-[10px] text-gray-600 mb-4 mx-2 overflow-auto " >
             {text} ...
        </span>
        <a className='text-blue-300 hover:text-blue-500 text-[11px]'  onClick={() => setExpanding(!Expanding)}>
        {Expanding ? 'Read more' : 'Read less'}
      </a>
    </div>
  )
}

export default Readmore