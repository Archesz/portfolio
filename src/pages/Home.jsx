import React from 'react'
import Hero from '../components/Hero/Hero'
import '../styles/home.scss'
import Skills from '../components/Skills/Skills'
import Projects from '../components/Projects/Projects'
import Extension from '../components/Extension/Extension'
// import Courses from '../components/Courses/Courses'

// Imagens
import quanta from '../assets/Quanta.jpg'
import herbert from '../assets/herbert.jpg'
import tech from '../assets/tech.jpg'
import environment from '../assets/environment.jpg'

function Home() {
    return (
        <div className='container'>
            
            <Hero />

            <div className="home-right">
                
                <div className='home-about'>
                    <span className='home-title'>About Me</span>

                    <span className='home-paragraph'>
                        Data Scientist, researcher and enthusiast of the intersection between applied mathematics and computing at Unicamp. I dive into the universe of art, culture and education, exploring the synergy between these areas and technology. As a researcher and creator, I find inspiration in the search for innovative solutions and the practical application of knowledge.
                    </span>

                    <span className='home-paragraph'>
                    I believe that data science not only reveals patterns, but can also contribute to positive transformation across industries. My passion lies in the ability to uncover valuable insights through data analysis, contributing to informed decision-making.
                    </span>

                    <span className='home-paragraph'>
                        If you share this vision or have thought-provoking ideas to explore, I would be delighted to collaborate. Let's shape the future together through data science, applied mathematics and innovation!
                    </span>
                </div>

                <div className='row'>

                    <div className='interests'>

                        <span className='interests-name'>Research Interests:</span>
                        <ul className='research-list'>
                            <li>Machine Learning</li>
                            <li>Ecology</li>
                            <li>Education</li>
                            <li>Medical Images</li>
                            <li>Biology</li>
                            <li>Graphs</li>
                        </ul>
                    </div>

                    <div className='interests'>
                        <span className='interests-name'>Others Interests:</span>
                        <ul className='research-list'>
                            <li>Teaching</li>
                            <li>Art</li>
                            <li>Science</li>
                            <li>Scientific Divulgation</li>
                            <li>Math</li>
                            <li>Books</li>
                        </ul>
                    </div>

                </div>

                <div className='divider'></div>

                <Skills />

                <div className='divider'></div>

                <div className='faixa'>
                    <span className='faixa-title'>Extension Projects</span>
                    <span className='faixa-descript'>A little about some extension projects I participated in. The aim of these projects is to take the knowledge acquired to society and, little by little, contribute to a better world.</span>
                </div>
                
                <Extension img={herbert} name="Cursinho Popular Herbert de Souza" tags={["Educação", "Social"]} descript="O cursinho popular Herbert de Souza é um projeto voltado para a educação de crianças e jovens que desejam ingressar em universidades e colégios técnicos. O projeto conta com 350 alunos anuais, aulas de segunda à sábado e mais de 10000 estudantes já passaram pelo nosso espaço. Hoje, sou coordenador, professor de matemática e 'CTO' no projeto."/>

                <Extension img={environment} name="Grupo de Estudos Ambientais" tags={["Multidisciplinar", "Ambiental"]} descript="O grupo de estudos é um projeto fundado por mim e uma colega (Maria Luiza) para realizar estudos e resolver desafios enfrentados pelo nosso mundo em relação aos eventos climáticos e ambientais que enfrentamos. Para isso, unimos um grupo de diferentes áreas, cursos e interesses cujo a vontade de colaborar para um mundo mais sustentável se mantém!"/>

                <Extension img={tech} name="Ensino de Programação" tags={["Educação", "Tecnologia"]} descript="Dentro do Herbert, iniciei uma turma de desenvolvimento de habilidades técnologicas, destacando Desenvolvimento Web, Ciência de Dados e Robótica! O objetivo é mostrar para os jovens de periferia que a tecnologia é acessível para eles, permitindo que criem e utilizem dela para seus próprios interesses."/>

                <Extension img={quanta} name="Quanta Jr" tags={["Empreendedorismo"]} descript="O movimento de Empresas Juniores é uma forma de estudantes da Graduação aprenderem m pouco sobre o mundo corporativo, desenvolvendo diversas funções, atividades e projetos dentro de uma empresa organizada 100%. pelos estudantes."/>

                <div className='faixa'>
                    <span className='faixa-title'>Personal Projects</span>
                    <span className='faixa-descript'>My projects open-source and collaborative for help begginers or specifics fields of knowlength, the plan is show a little about my ideas and plans, because, if i can dream, i can make!</span>
                </div>

                <Projects />

                <div className='faixa'>
                    <span className='faixa-title'>Courses and Certifications</span>
                    <span className='faixa-descript'>I don't believe that courses talk about actual experience, but I like to study and obtain different certificates to demonstrate my trajectory!</span>
                    <span className='faixa-obs'>PS: Click in Certificate for open the oficial Certification.</span>
                </div>

                <span className='home-notes'>Em breve...</span>

            </div>

        </div>
    )
}

export default Home