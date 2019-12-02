import React from "react";
import Link from "umi/link";

const Navigation = (navItem: number[]) => {

  console.log("props=====",navItem.navItem);

  const navName = navItem.navItem;
  console.log("navName=====", navName);

  return (
    <ul className='nav'>
        <li><Link to={"/home"}>
          {navName}
        </Link></li>
    </ul>
  )
}

export default Navigation;
