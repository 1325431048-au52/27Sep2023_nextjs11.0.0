
import Head from 'next/head'
import React from 'react'
import Header from './Header'
import Asideleft from './Asideleft'
import Asideright from './Asideright'
import Footer from './Footer'

export default function CommonLayout({children}) {
  return (
    
        <div>
          <Head>
              <title>Create Next App</title>
              <meta name="description" content="Generated by create next app" />
              <link rel="icon" href="/favicon.ico" />
          </Head>
          <div className='container-fluid'>
          <Header />
              <main className='row m-0 s_tbdr'>
          <Asideleft/> 
          {children}
          <Asideright/>
              </main>
          
              <Footer/>
          </div>
      
          </div>
   
  )
}
