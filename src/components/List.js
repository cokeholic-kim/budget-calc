import React from 'react'

const List = React.memo(({item,handleOnDelete,onClickEdit}) => {
    
    console.log('list')

  return (
    <li key={item.id} className='border border-slate-400 rounded my-3 p-2 flex justify-between'>
                <span className='w-4/12'>{item.title}</span>
                <span>{item.cost}</span>
                <span>
                  <button onClick={()=>onClickEdit(item.id)}>✏️</button>
                  <button onClick={()=>handleOnDelete(item.id)}>❌</button>
                </span>
              </li>
  )
})

export default List
