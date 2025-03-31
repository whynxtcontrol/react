import ProductCard from "./ProductCard";
import "./ProductList.css";

const ProductList = ({ products }) => {
  return (
    <div className="container">
      <ul className="card">
        {products.map((item) => (
          <li className="card-li">
            <ProductCard
              key={item.id}
              imgUrl={item.imageUrl}
              discount={item.discount}
              price={item.price}
              title={item.title}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
