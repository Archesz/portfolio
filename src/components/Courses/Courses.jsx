import React, { useState } from 'react';
import './Courses.scss';
import Course from './Course';
import alura from '../../assets/alura.png';

function Courses(props) {
    const [visibleCourses, setVisibleCourses] = useState(6);

    const showMoreCourses = () => {
        setVisibleCourses(prevVisibleCourses => prevVisibleCourses + 6);
    };

    const courseData = [
        { name: "Visão computacional: Correção automática de provas", tags: ["Machine Learning", "Data Science"], img: alura },
        { name: "Python: entendendo a Orientação a Objetos", tags: ["Python", "POO"], img: alura },
        { name: "Python para Data Science: linguagem e Numpy", tags: ["Python", "Data Science"], img: alura },
        { name: "Data Visualization: explorando com Seaborn", tags: ["Data Science", "Visualization"], img: alura },
        { name: "Análise e Classificação de Faces: visão Computacional com OpenCV", tags: ["Machine Learning", "Visão Computacional"], img: alura },
        { name: "JavaScript: programando na linguagem da web", tags: ["Javascript", "Web"], img: alura },
        { name: "Front-end: Projeto de conclusão", tags: ["Javascript", "Web"], img: alura }
    ];

    return (
        <div className='courses-container'>
            {courseData.slice(0, visibleCourses).map((course, index) => (
                <Course key={index} name={course.name} tags={course.tags} img={course.img} />
            ))}

            {visibleCourses < courseData.length && (
                <button className='btnMore' onClick={showMoreCourses}>Exibir mais</button>
            )}
        </div>
    );
}

export default Courses;
