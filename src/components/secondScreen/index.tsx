import React, {useState} from 'react'
import './index.less';
import TweenLite from 'gsap';

const SecondScreen = (props: any) => {
  const obj = {
    myProp: 0
}

  TweenLite.to(obj, 0.2, {
    myProp: 1,
    onUpdate: function() {
        console.log("[update] obj.myProp = ", obj.myProp);
    }
});

  const [flag, setFlag] = useState(false);

  const stickyNavConfig = [
    "JOYRUN",
    "JOYRUN CREW",
    "RUN CREW RECRUITMENT"
  ]

  const partOneConfig = [
    "Run through the city",
    "Adhere to the feet",
    "Doing the same",
    "Be with you",
  ]

  const partTwoImgConfig = [
    "../../assets/",
  ]

  // @ts-ignore
  return (
    <div className='secondScreen'>
      <ul className='sticky-nav'>
        {
          stickyNavConfig.map(function (item) {
            return (<li><a>{item}</a></li>)
          })
        }
      </ul>

      <p className='title-style'>You're not alone</p>

      <ul className='part-one'>
        {
          partOneConfig.map(function (item) {
            return (<li>{item}</li>)
          })
        }
      </ul>

      <p className='title-style'>Joyrun beside you every step</p>

      <ul className='part-two'
          onMouseEnter={() => {
               console.log('enter')
               if (flag) return
               setFlag(true)
             }}
          onMouseOut={() => {
               console.log('out')
               if (!flag) return
               setFlag(false)
             }}
      >
          <li className={flag ? 'reverse back' : 'front'}></li>
      </ul>
    </div>
  )
}

export default SecondScreen
