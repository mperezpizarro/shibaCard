import React from 'react'
import Title from './components/Title'
import ShibaCard from './components/ShibaCard'
import Social from './components/Social'

import './App.css'

const App = () => {

  let lang = navigator.language || navigator.userLanguage
  
  if(/^es-*/g.test(lang))
    window.appLang='ES'
  else
    window.appLang='EN'

  return (
    <div className="App">
        <Title />
        <ShibaCard />
        <Social />
    </div>
  )
}

export default App
