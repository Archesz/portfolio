import React from 'react'
import './Projects.scss'
import foto from '../../assets/herbert.jpg'

function Project(props) {
    return (
        <div className='project-container'>
            
            <img src={foto} className='project-image'/>
            
            <span className='project-name'>{props.name}</span>

            <span className='project-descript'>{props.descript}</span>
        </div>
    )
}

export default Project