import React, { useEffect, useState } from 'react'

const Notice = ({DataCRUD}) => {
    // const [isVisible, setIsVisible] = useState(false);

    // useEffect(() => {
    //   setIsVisible(true);
    //   const timer = setTimeout(() => {
    //     setIsVisible(false);
    //   }, 2000);
  
    //   return () => clearTimeout(timer);
    // }, [DataCRUD]);

  return (
    <div 
    className={`
        ${
      DataCRUD === 'C'
        ? '@apply bg-green-500'
        : DataCRUD === 'U'
        ? '@apply bg-green-700'
        : DataCRUD === 'D'
        ? '@apply bg-red-500'
        : '@apply bg-transparent'
    }
    text-white p-2 text-center mt-6
  `}
    >
        {(() => {
        switch (DataCRUD) {
          case 'C':
            return '아이템이 추가되었습니다';
          case 'R':
            return '아이템이 조회되었습니다';
          case 'U':
            return '아이템이 수정되었습니다';
          case 'D':
            return '아이템이 삭제되었습니다';
          default:
            return null;
        }
      })()}
    </div>
  )
}

export default Notice
