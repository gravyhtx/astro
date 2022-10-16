const CardSpread = ({ cards }) => {
  return (
    <div className="card-spread">
      <div className="top center row">{ cards[0] }</div>
      <div className="middle center row">{ cards[1] }{ cards[2] }{ cards[3] }</div>
      <div className="bottom center row">{ cards[4] }</div>
    </div>
  )
}

export default CardSpread;