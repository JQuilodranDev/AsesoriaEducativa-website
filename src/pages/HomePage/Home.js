import Hero from 'pages/Hero'
import React from 'react'
import { homeObjOne, homeObjTwo, homeObjTree } from './Data'

function Home() {
    return (
        <>
          <Hero {...homeObjOne} /> 
          <Hero {...homeObjTwo} />  
          <Hero {...homeObjTree} />
        </>
    )
}

export default Home
