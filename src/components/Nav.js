import React from 'react';
import { Link, navigate } from 'gatsby';

// function goToSliceMasters() {
//   setTimeout(() => {
//     console.log('Go to slicemasters');
//     navigate('/slicemasters/', { replace: true });
//   }, 2000);
// }

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/pizzas">Pizza Menu</Link>
        </li>
        <li>
          <Link to="/">LOGO</Link>
        </li>
        <li>
          <Link to="/slicemasters">Slicemasters</Link>
        </li>
        <li>
          <Link to="/order">Order Ahead!</Link>
        </li>
      </ul>
    </nav>
  );
}
