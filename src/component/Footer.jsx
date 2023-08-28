
import React from 'react'

function Footer() {
   const date = new Date()
   const year = date.getFullYear()
   // console.log(year);
  return (
    <footer className='footer text-gray-300 flex items-center p-3 justify-around bg-gray-700'>
    
     <div>
      <h1 className='ml-[-10px] text-2xl text-gray-400'>Contact </h1>
       <div>
       <i className="bi bi-envelope-at-fill text-yellow-600"></i>
       <span className='ml-3 '>elena-coder@gmail.com</span>
       </div>
       <i className="bi bi-telephone-outbound-fill text-green-600"></i>
       <span className='ml-3'>+91 8564783927</span>
     </div>
     <div className='text-gray-400'>
      elena@{year}copyright©
     </div>
     <div>
      <a  href="https://github.com/MissElena786" target='_blank'>
      <i className="bi bi-github    ml-3 text-black md:text-4xl sm:text-3xl text-2xl"></i>
      </a>
      <a href="https://www.linkedin.com/in/gulnaz-bano-3078a825b/"  target='_blank'>
         <i className="bi bi-linkedin  ml-3 text-blue-600  md:text-4xl sm:text-3xl text-2xl"></i>
      </a>
     </div>
    </footer>
  )
}

export default Footer
