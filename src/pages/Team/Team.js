import Hero from 'pages/Hero'
import React from 'react'
import { homeObjTwo } from './Data'

function Team() {
    return (
        <>
          <Hero {...homeObjTwo} />  
        </>
    )
}

export default Team
