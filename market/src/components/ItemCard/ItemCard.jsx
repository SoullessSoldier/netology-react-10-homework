import PropTypes from "prop-types"
import "./item_card.css"

const ItemCard = ({data}) => {
    const {name, price, image, discount} = data;
    const isDiscount = discount > 0;
    const finalPrice = isDiscount
      ? ((price * (100 - discount)) / 100).toFixed(2)
      : price;
    const strPrice = new Intl.NumberFormat("ru-RU", {
      style: "currency",
      currency: "RUB",
      trailingZeroDisplay: "stripIfInteger",
    }).format(price);
    const strFinalPrice = new Intl.NumberFormat("ru-RU", {
      style: "currency",
      currency: "RUB",
      trailingZeroDisplay: "stripIfInteger",
    }).format(finalPrice);
    return (
      <div className="item-card">
        <div className="item-card-image-wrapper">
          <img className="item-card-image" src={image} alt={name} />
        </div>
        <div className="item-card-price-wrapper">
          <span className="item-card-price-final">{strFinalPrice}</span>
          {isDiscount && (
            <span className="item-card-price">{strPrice}</span>
          )}
        </div>

        <h5 className="item-card-title" title={name}>{name}</h5>
        {isDiscount && <div className="item-card-discount">{discount}%</div>}
      </div>
    ); 
}

ItemCard.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    image: PropTypes.string,
    dateCreated: PropTypes.string,
    discount: PropTypes.number,
  }),
};

export default ItemCard;