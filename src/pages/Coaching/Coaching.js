import Hero from 'pages/Hero'
import React from 'react'
import { homeObjTree } from './Data'

function Coaching() {
    return (
        <>
          <Hero {...homeObjTree} />  
        </>
    )
}

export default Coaching