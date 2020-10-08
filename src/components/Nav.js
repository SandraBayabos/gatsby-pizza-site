import React from 'react';
import { Link, navigate } from 'gatsby';

function goToSliceMasters() {
  setTimeout(() => {
    console.log('Go to slicemasters');
    navigate('/slicemasters/');
  }, 2000);
}

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/beers">Beers</Link>
        </li>
        <li>
          <button type="button" onClick={goToSliceMasters}>
            Click me to see slicemasters after two seconds
          </button>
        </li>
      </ul>
    </nav>
  );
}
