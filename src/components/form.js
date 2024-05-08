import React from 'react'

const Form = ({form,setform,handleSubmit}) => {
    const handleOnChange = (e) => {
        if (e.target.type === 'number'){
            let newCost = e.target.value
            setform({
                ...form,
                cost:newCost
            })
        }else if (e.target.type === 'text'){
            let newTitle = e.target.value
            setform({
                ...form,
                title:newTitle
            })
        }
    }
  return (
    <form className='w-full' onSubmit={handleSubmit}>
          <div className='flex justify-center'>
            <div className='w-6/12 mr-4'>
              <p>지출 항목</p>
              <input type="text" className='lent w-full border-b-2 border-yellow-600' value={form.title} onChange={handleOnChange}/>
            </div>
            <div className='w-6/12'>
              <p>비용</p>
              <input type='number' className='cost w-full border-b-2 border-yellow-600' value={form.cost} onChange={handleOnChange}/>
            </div>
          </div>
          
          <button type='submit' className='p-2 bg-green-600  text-white rounded hover:bg-green-400 font-bold my-4'>제출 🔖</button>
    </form>
  )
}

export default Form
