import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {GiSpellBook} from 'react-icons/gi'
import {FaUsers} from 'react-icons/fa'
import {FaAward} from 'react-icons/fa'

const About = () => {
  return (
    <section id="about"> 
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <GiSpellBook className="about__icon"/>
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
            <article className="about__card">
              <FaUsers className="about__icon"/>
              <h5>Clients</h5>
              <small>0</small>
            </article>
            <article className="about__card">
              <FaAward className="about__icon"/>
              <h5>Projects</h5>
              <small>10+ completed</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora amet aliquid impedit, soluta a voluptatibus. Rem, eos repellendus eum, vitae laudantium commodi rerum non, vero libero ea fuga dicta. Pariatur!
          </p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About