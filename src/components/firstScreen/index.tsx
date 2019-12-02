import React, { useState } from 'react';
import './index.less';
import logo from '../../assets/logo.png';
import download from '../../assets/download.png';
import Link from 'umi/link';
import Navigation from "@/components/navigation/navigation"

const FirstScreen = (props: any) => {

  const navConfig = [
    "/pageFrame",
    "/aboutUs",
    "/joinUs"
  ];

  return (
    <div className="firstScreen">
      <div className='logo'><img src={logo} alt='logo'/></div>

      {/*<Navigation navItem={["Home", "About Us", "Join Us"]}/>*/}

      <div className='language'>
        <i>中文</i>
        {/*<i>English</i>*/}
      </div>

      <div className='download'>
        <img src={download} alt='download' />
        <span>Download</span>
      </div>

    </div>
  )
}

export default FirstScreen;
