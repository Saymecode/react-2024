function Way({ title, description }) {
  return(
    <li>
      <p>
        <strong>{title}</strong> <br/><br/>
        {description}
      </p>
    </li>
  )
}

export default Way
