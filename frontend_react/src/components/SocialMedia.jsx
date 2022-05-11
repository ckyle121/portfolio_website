import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { AiFillGithub } from 'react-icons/ai';
import { BsPaperclip } from 'react-icons/bs';
import resume from '../assets/resume/Caroline_Kyle_2022.pdf'

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://www.linkedin.com/in/ckyle121/">
        <BsLinkedin />
      </a>
    </div>
    <div>
      <a href="https://github.com/ckyle121">
        <AiFillGithub />
      </a>
    </div>
    <div>
      <a href={resume} target="_blank" rel="noopener noreferrer">
        <BsPaperclip />
      </a>
    </div>
  </div>
);

export default SocialMedia;