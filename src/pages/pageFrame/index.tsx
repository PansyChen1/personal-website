import React from "react";
import FirstScreen from "@/components/firstScreen"
import SecondScreen from "@/components/secondScreen"

const pageFrame = () => {

  const initModuleProps = (props: any) => {
    return {
      page: props.page
    }
  }

  const getComponentList = (props: any) => {
    const parameters = initModuleProps(props);
    // return <M ...parameters />
  }

  return (
    <>
      {/*<FirstScreen/>*/}
      {/*<SecondScreen/>*/}
    </>
  )
}

export default pageFrame;
