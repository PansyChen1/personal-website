import React, { useState } from 'react';
import styles from './index.less';
import logo from '../../assets/logo.png';
import download from '../../assets/download.png';
import Link from 'umi/link';

const FirstScreen = (props: any) => {

  const navConfig = [
    "/pageFrame",
    "/aboutUs",
    "/joinUs"
  ];
  const navItem = [
    "Home",
    "About Us",
    "Join Us"
  ];

  return (
    <div className={styles["firstScreen"]}>
      <div className='logo'><img src={logo} alt='logo'/></div>

      <ul className='nav'>
        <li><Link to={"/home"}>
          {
            navItem.map(function (item) {
              return (<li>{item}</li>)
            })
          }
        </Link></li>
      </ul>

      <div className={styles['language']}>
        <i>中文</i>
        {/*<i>English</i>*/}
      </div>

      <div className={styles['download']}>
        <img src={download} alt='download' />
        <span>Download</span>
      </div>

    </div>
  )
}

export default FirstScreen;
