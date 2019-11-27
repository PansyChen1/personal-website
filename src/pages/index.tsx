import React from 'react';
import Redirect from 'umi/redirect'
import styles from './index.css';
import FirstScreen from "@/components/firstScreen"

export default function() {
  return (
    <Redirect to={{
      pathname: '/pageFrame',
      state: {}
    }}
    />
  );
}
