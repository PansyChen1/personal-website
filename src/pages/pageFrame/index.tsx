import React from "react";
import FirstScreen from "@/components/firstScreen"

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
      <FirstScreen/>
    </>
  )
}

export default pageFrame;
