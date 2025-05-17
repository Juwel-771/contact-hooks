import { useState } from 'react'
import './App.css'
import Navigation from './components/Navigation/Navigation'
import ContactHeader from './components/ContactHeader/ContactHeader'
import Contact from './components/Contact/Contact'

function App() {
 

  return (
    <>
      <Navigation></Navigation>
      <ContactHeader></ContactHeader>
      <Contact></Contact>
    </>
  )
}

export default App
