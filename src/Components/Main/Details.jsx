export const Details = ({title,items,pricefortwo,minPrice,time,cash=true,card=false,upi=false})=> {
    return (
      <div className="details">
        <div className="details-title">{title}</div>
        <div className="details-p">{items.join(",")}</div>
        <div className="details-p">Cost ₹{pricefortwo} for two</div>
        <div className="details-p-black">Min ₹{minPrice} up to {time}min </div>
        <div className="details-p-black">Accepts {cash&&"cash"}  {card&&"card"}  {upi&&"upi"} Payments</div>
      </div>
    )
  }