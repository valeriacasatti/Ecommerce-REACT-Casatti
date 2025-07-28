/* eslint-disable react/prop-types */
import "./ItemList.css";
import ProductCard from "../../commons/productCard/ProductCard";
import ProductSkeleton from "../../commons/productSkeleton/ProductSkeleton";
import { Link } from "react-router-dom";

const ItemList = ({
  items,
  categoryName,
  error,
  loading,
  onAdd,
  getQuantityById,
}) => {
  return (
    <>
      <div>
        <div className="itemTitle">
          <h6>explore our style</h6>
          {error ? (
            <div>
              <h3>{error}</h3>
              <h4>
                you can try: <Link to="/category/top">top</Link>,{" "}
                <Link to="/category/bottom">bottom</Link> or{" "}
                <Link to="/category/full">full</Link>
              </h4>
            </div>
          ) : (
            <h3>catalog | {categoryName || "all products"}</h3>
          )}
          {!loading && items.length === 0 && (
            <h4>looks like there are no products in this category yet🥺</h4>
          )}
        </div>

        <div className="itemList">
          {error
            ? null
            : loading
            ? Array(3)
                .fill(null)
                .map((_, i) => <ProductSkeleton key={i} />)
            : items.length > 0
            ? items.map((item) => {
                //quantity in cart
                const quantityInCart = getQuantityById(item.id);
                return (
                  <ProductCard
                    key={item.id}
                    item={item}
                    onAdd={onAdd(item)}
                    quantityInCart={quantityInCart}
                  />
                );
              })
            : null}
        </div>
      </div>
    </>
  );
};

export default ItemList;
