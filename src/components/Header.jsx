import React, { useState } from 'react';
function Header() {

  const [time, updateTime] = useState(new Date())

  setInterval(() => updateTime(new Date()), 1000)

  return(
    <header>
      <h3>
        React Test 2024
      </h3>
      <span>
          Time { time.toLocaleTimeString() }
        </span>
    </header>
  )
}

export default Header
