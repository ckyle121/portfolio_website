import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { images } from '../../constants';
import './About.scss';


const abouts = [
  { title: 'Front-End Developer', description: 'Front-End Developer with an eye for logical and creative design', imgUrl: images.about01 },
  { title: 'Full Stack', description: 'Clean code leads to clean projects. I keep my code organized to create full stack applications with the MERN Stack and Handlebars.js', imgUrl: images.about02 },
  { title: 'Back-End Developer', description: 'Familiar and confident with both structured and unstructured backend technologies such as MySQL, MongoDB, and Sanity to maintain organized databases.', imgUrl: images.about04 },
  { title: 'Team Player', description: 'Able to work individually or on a team to create dynamic websites and merge different pieces of code.', imgUrl: images.about03 }
];

const About = () => {
  return (
    <>
      <h2 className='head-text'>I Know that <span>Good Design </span><br />means <span>Good Business</span></h2>

      <div className='app__profiles'>
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opactiy: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title}/>
            <h2 className='bold-text' style={{ marginTop: 20 }}>{about.title}</h2>
            <p className='p-text' style={{ marginTop: 20 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
}

export default About;