"use client"
import React from 'react'
import { ThreeCircles } from 'react-loader-spinner'

function loading() {
  return (<div className='h-screen w-full  justify-center flex items-center'>
 <ThreeCircles
  height="100"
  width="100"
  color="#064884"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  ariaLabel="three-circles-rotating"
  outerCircleColor=""
  innerCircleColor=""
  middleCircleColor=""
/>
  </div>
  )
}

export default loading