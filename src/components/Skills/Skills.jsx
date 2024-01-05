import React from 'react'
import './Skills.scss'
import Column from './Column'

import { FaPython, FaJava, FaCode } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiJulia } from "react-icons/si";


function Skills() {
    
    return (
        <div className='skills-container'>
            <div className='skills-field'>

                <span className='skills-name'>Technologies</span>

                <div className='skills-view'>

                    <Column icon={<FaPython />} name="Python" skills={["Flask", "Django", "Plotly", "Pandas", "TensorFlow", "PyTorch", "PyGame", "Numpy"]}/>
                    <Column icon={<IoLogoJavascript />} name="Javascript" skills={["React", "Node", "Next", "Electron", "Angular", "Vue"]}/>
                    <Column icon={<FaJava  />} name="Java" skills={["Spring Boot", "Hibernate", "Maven", "Gradle", "JUnit", "JavaFX"]}/>
                    <Column icon={<SiJulia />} name="Julia" skills={["DataFrames.jl", "Plots.jl", "DifferentialEquations.jl", "Flux.jl", "Gen.jl", "JuliaDB.jl", "JuliaInterop"]}/>
                    <Column icon={<FaPython />} name="C++" skills={["STL", "Boost", "Qt", "CMake", "OpenCV", "OpenGL", "Concurrency in C++", "Smart Pointers"]}/>
                    <Column icon={<FaPython />} name="C" skills={["Ponteiros", "Manipulação de Arquivos", "Alocação de Memória", "Estrutura de Dados", "Multithreading"]}/>

                </div>

            </div>

            <div className='skills-field'>

                <span className='skills-name'>Skills</span>

                <div className='skills-view'>

                    <Column icon={<FaPython />} name="Inteligência Artificial" skills={["Machine Learning", "Data Science", "Classificação de Imagens", "Segmentação de Imagens", "Regressão", "Séries Temporais"]}/>
                    <Column icon={<FaPython />} name="Computação" skills={["Estrutura de Dados", "Programação Paralela", "Programação Orientada à Objetos", "Compiladores"]}/>
                    <Column icon={<IoLogoJavascript />} name="Matemática" skills={["Cálculo", "Algebra Linear", "Programação Linear"]}/>
                    <Column icon={<FaJava  />} name="Outras" skills={["Git", "Docker", "Linux", "Banco de Dados", "Lógica de Programação"]}/>
                    <Column icon={<SiJulia />} name="Hardware" skills={["Desenho Técnico", "Eletrônica Básica", "Arduino", "Montagem de Computadores"]}/>
                    
                </div>

            </div>

        </div>
    )
}

export default Skills