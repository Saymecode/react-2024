const now = new Date()
function Header() {
  return(
    <header>
      <h3>
        React Test 2024
      </h3>
      <span>
          Time { now.toLocaleTimeString() }
        </span>
    </header>
  )
}

export default Header
