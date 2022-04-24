import React from 'react'

const Attribution = () => {
  return (
    <div className="text-slate-500 text-[11px] md:text-xs text-center px-3">
      Challenge by
      <a href="https://www.frontendmentor.io?ref=challenge" className='text-slate-400 hover:text-dark-desaturated-blue hover:underline' target="_blank" rel="noreferrer">
        {" "}
        Frontend Mentor
      </a>
      . Coded by{" "}
      <a href="https://github.com/arrizkyhp" className='text-slate-400 hover:text-dark-desaturated-blue hover:underline' target="_blank" rel="noreferrer">
        {" "}
        Arrizky Hasya Pratama.{" "}
      </a>
  </div>
  )
}

export default Attribution