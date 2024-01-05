import React, { useState } from 'react';
import './Skills.scss';
import { FaPlus } from "react-icons/fa";

function Column(props) {
    const [isExpanded, setExpanded] = useState(false);

    const handleToggle = () => {
        setExpanded(!isExpanded);
    };

    return (
        <div className={`column-container ${isExpanded ? 'expanded' : ''}`}>
            <div className='row' onClick={handleToggle}>

                <span className='column-name'>
                    {props.icon}
                    {props.name}
                </span>

                <FaPlus />

            </div>

            {isExpanded && (
                <ul>
                    {props.skills.map((skill) => (
                        <li className='column-item' key={skill}>
                            {skill}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Column;