const Card = (name) => {
  return (
    <div className="card">
      <img src="https://thumbs.dreamstime.com/b/amazon-logo-white-background-montreal-canada-july-printed-paper-98221126.jpg" alt="amazon image" />
      <h1>Hii {name.user}</h1>
      <p>This is a simple card component.</p>
      <button className="button">Click me</button>
    </div> 
  )
}

export default Card