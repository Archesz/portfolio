import React from 'react'
import './Courses.scss';
import { FaMedal } from "react-icons/fa";

function Course(props) {
    return (
        <div className='course-container'>
            
            <div className='row-bet'>
                <img className='logo' src={props.img}/>
                <FaMedal className='star'/>
            </div>
            <span className='name'>{props.name}</span>
            
            <div className='tags'>
                {props.tags.map((tag) => {
                    return(
                        <span className='tag'>
                            {tag}
                        </span>
                    )
                })}
            </div>
        </div>
    )
}

export default Course