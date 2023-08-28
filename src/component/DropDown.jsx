


import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';




function DropDown() {
  const [isSelect, setIsSelect] = useState(false);

  const selectOne = (e) => {
    e.preventDefault();
    setIsSelect(!isSelect);
   
  };

  const removeCategory = ()=>{
      setIsSelect(!isSelect)
      // console.log("doble clicked")
  }

  useEffect(() => {
    document.addEventListener('click', handliClick, true);
    return () => {
      document.removeEventListener('click', handliClick, true);
    };
  }, []);

  const outsidRef = useRef(null);

  const handliClick = (e) => {
    if (!outsidRef.current) {
      return;
    }

    if (!outsidRef.current.contains(e.target)) {
      // console.log('clicked outside');
      setIsSelect(false);
     }
    // else {
    //   console.log('clicked inside');
    //     setIsSelect(true)
    // }
  };

  return (
    <div className='dropdown'> 
      <div onClick={selectOne} onDoubleClick={()=>removeCategory()}>Select Category  <i class="fa-solid fa-caret-down"></i></div>
      {isSelect && (
        <div ref={outsidRef}>
          <Link to="/electronic">
            <div className='category-item'>Electronics</div> 
          </Link>
          <Link to="/jwelery">
            <div className='category-item'>Jewelry</div>
          </Link>
          <Link to="/mens">
            <div className='category-item'>Mens</div>
          </Link>
          <Link to="/women">
            <div className='category-item'>Women</div>
          </Link>
        </div>
      )}
    </div>
  );
}


export default DropDown;
