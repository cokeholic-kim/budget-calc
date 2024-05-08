import React from 'react'
import List from './List'

const Lists = React.memo(({budget,handleOnDelete,onClickEdit}) => {
console.log('lists')

  return (
    <div>
          <ul>
            {budget.map( (item,index) => (
              <List item={item} key={index} handleOnDelete={handleOnDelete} onClickEdit={onClickEdit}/>
            ))}
          </ul>
        </div>
  )
})

export default Lists
