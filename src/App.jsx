import React, { useState } from 'react';
import Header from './components/Header.jsx'
import Way from './components/Way.jsx'
import Button from './components/Button/Button.jsx'
import { ways } from './data.js'

function App() {
  const [isActive, setIsActive] = useState(false);

  function handleClick() {
    setIsActive((prev) => !prev);
  }

  return (
    <div>
      <Header />
      <main>
        <h1>Hello React</h1>
        <section>
          <ul>
            { ways.map(((way, index) => (<Way key={index} title={way.title} description={way.description}/>))) }
          </ul>
        </section>
        <section>
          <Button isActive={isActive} onClick={handleClick}>Button</Button>
        </section>
      </main>
    </div>
  )
}

export default App
