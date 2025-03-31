import "./ProductCard.css";

const ProductCard = ({ imgUrl, price, title, discount }) => {
  let discountPrice = price - discount * price;

  return (
    <div className="product-list">
      <img className="product-img" src={imgUrl} alt="IMG" />
      <div className="price-discount_div">
        {discount ? (
          <>
            <p className="product-discount">{discountPrice} ₽</p>
            <span className="span-price">{price} ₽</span>
          </>
        ) : (
          <span className="span-price-discount">{price} ₽</span>
        )}
      </div>
      <p className="product-title">{title}</p>
    </div>
  );
};

export default ProductCard;
