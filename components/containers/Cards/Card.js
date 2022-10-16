const Card = ({ children, onClick }) => {
  return (
    <div onClick={onClick} className="single-card col">
      <span>{ children }</span>
    </div>
  )
}

export default Card;