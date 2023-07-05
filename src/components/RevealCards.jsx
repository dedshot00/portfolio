import React, { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from "framer-motion";

const RevealCards = ({children, index}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, {once:true})

  const mainControls = useAnimation()

  useEffect(() => {  
    if (isInView) {
      mainControls.start('visible')
    }
  }, [isInView])

  return (
    <div ref={ref}>
      <motion.div
        variants={{
          hidden: {opacity:0 , x:-75},
          visible: {opacity:1, x:0}
        }}
        initial={'hidden'}
        animate={mainControls}
        transition={{duration:0.5, delay:(index+1)*0.2}}
      >
        {children}
      </motion.div>
    </div>
  )
}

export default RevealCards