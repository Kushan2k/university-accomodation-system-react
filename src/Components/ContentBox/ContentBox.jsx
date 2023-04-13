import './ContentBox.css'

import React from 'react'

function ContentBox(props) {

    const {title,list,discriptiob}=props
  return (
    <div className='col-10 col-md-5 col-lg-3 gap-2 mx-auto my-3' style={{
        borderRadius:20,
        backgroundColor:'lightblue',
        paddingTop:20,
    }}>
      <h1 className='text-center heading-1'>{title}</h1>
      <h2 className='sub'>Comes furnished with:</h2>
      <ul>
      {list.map(l=>{
        return (
            <li className='list-item'>{l}</li>
        )
      })}
      </ul>
      <p className='dis'>{discriptiob}</p>
    </div>
  )
}

export default ContentBox
