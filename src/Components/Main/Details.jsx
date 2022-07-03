export const Details = ({title,items,pricefortwo,minPrice,cash=false,card=false,upi=true})=> {
    return (
      <div className="details">
        <div className="details-title">{title}</div>
        <div className="details-p">{items.join(",")}</div>
        <div className="details-p">Cost ₹{pricefortwo} for two</div>
        <div className="details-p-black">Min ₹{minPrice} up to 30min </div>
        <div className="details-p-black">Accepts {cash&&"cash"}  {card&&"card"}  {upi&&"upi"} Payments</div>
      </div>
    )
  }