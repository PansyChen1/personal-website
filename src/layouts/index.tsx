import React from 'react';
import styles from './index.css';
import FirstScreen from "@/components/firstScreen"
import SecondScreen from "@/components/secondScreen"

const BasicLayout: React.FC = props => {
  return (
    <div className={styles.normal}>
      <FirstScreen/>
      <SecondScreen/>
      {/*{props.children}*/}
    </div>
  );
};

export default BasicLayout;
