import React, { useState } from 'react';
import './index.less';
import logo from '../../assets/logo.png';
import {Menu, Icon} from 'antd';
import Redirect from 'umi/redirect';
import Link from 'umi/link';

const FirstScreen = (props: any) => {

  return (
    <div className='firstScreen'>
      <img src={logo} alt='logo' className='logo'/>
      <Menu
        mode="horizontal"
      >
        <Menu.Item key="page"><Link to={"/pageFrame"}>Home</Link></Menu.Item>
        <Menu.Item key="about"><Link to={"/aboutUs"}>About Us</Link></Menu.Item>
        <Menu.Item key="join"><Link to={"/joinUs"}>Join Us</Link></Menu.Item>
      </Menu>
    </div>
  )
}

export default FirstScreen;
