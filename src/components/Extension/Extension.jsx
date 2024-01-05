import React from 'react'
import './Extension.scss'
import herbert from '../../assets/herbert.jpg'

function Extension(props) {
  return (
    <div className='extension-container'>

      <img src={props.img} className='extension-img'/>

      <div className='extension-infos'>
        <span className='extension-title'>{props.name}</span>

        <div className='tags'>
          {props.tags.map((tag) => {
            return(
              <span className='tag'>{tag}</span>
            )
          })}
        </div>

        <span className='extension-descript'>{props.descript}</span>

      </div>

    </div>
  )
}

export default Extension