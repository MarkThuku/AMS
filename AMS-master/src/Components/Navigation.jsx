import { Link } from 'react-router-dom';
import React from 'react';

function Navigation(){
    return (

	<div class="div1">
        <nav>
              <Link class="link" to='/Login'>Login</Link>
              &emsp;
              <Link class="link" to='/Home'>Home</Link>
              &emsp;
              <Link class="link" to='/AthleteDetails'>Athlete Details</Link>
              &emsp;
		<Link class="link" to='/AddAthlete'>Add Athlete</Link>
              &emsp;
		<Link class="link" to='/AthletesList'>AthletesList</Link>
               &emsp;
              <Link class="link" to='/About'>About</Link>
	</nav>
    </div>

	        );
}
export default Navigation;