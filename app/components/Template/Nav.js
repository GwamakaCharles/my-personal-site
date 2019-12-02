import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import data from '../../data/contact';

const Nav = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${BASE_PATH}/images/me_icon.jpg`} alt="" />
      </Link>
      <header>
        <h2>Gwamaka Charles</h2>
        <p>
          <a href="mailto:gmwamwaja@outlook.com">gmwamwaja@outlook.com</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, My name is Gwamaka. I like to build things. I am a{' '}
        <a href="https://dit.ac.tz/">Dar es salaam Institute of Technology</a>{' '}
        graduate, and a self-taught full-stack software engineer of{' '}
        <a href="https://kopagas.com">Kopagas</a>. Before Kopagas I was at{' '}
        <a href="https://deloitte.com">Deloitte</a>, and{' '}
        <a href="https://caritas.org">Caritas</a>.I might not have a fancy
        education such as yours but I might stand a chance against you in
        programming and data science.That means almost my entire education is
        online.So give me a chance!
      </p>
      <ul className="actions">
        <li>
          {window.location.pathname !== `${BASE_PATH}/resume` ? (
            <Link to="/resume" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/about" className="button">
              About Me
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ul className="icons">
        {data.map((s) => (
          <li key={s.label}>
            <a href={s.link}>
              <FontAwesomeIcon icon={s.icon} />
            </a>
          </li>
        ))}
      </ul>
      <p className="copyright">
        &copy; Gwamaka C. Mwamwaja <Link to="/">gwamamakacharles.com</Link>.
      </p>
    </section>
  </section>
);

export default Nav;
