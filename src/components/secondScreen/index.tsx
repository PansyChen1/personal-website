import React, { useState } from 'react';
import './index.less';

const SecondScreen = (props: any) => {

  return (
    <div className='secondScreen'>
      <ul className='sticky-nav'>
        <li><a>JOYRUN</a></li>
        <li><a>JOYRUN CREW</a></li>
        <li><a>RUN CREW RECRUITMENT</a></li>
      </ul>

      <p className='not-alone'>You're not alone</p>

      <ul className='part-one'>
        <li>Run through the city</li>
        <li>Adhere to the feet</li>
        <li>Doing the same</li>
        <li>Be with you</li>
      </ul>

      <p className='not-alone'>Joyrun beside you every step</p>

      <ul className='part-two'>
        <li>
          <div className='front'>Front</div>
          <div className='back'>Back</div>
        </li>
        <li>
          <div className='front'>Front</div>
          <div className='back'>Back</div>
        </li>
        <li>
          <div className='front'>Front</div>
          <div className='back'>Back</div>
        </li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>

    </div>
  )
}

export default SecondScreen;
