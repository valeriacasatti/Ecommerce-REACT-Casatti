import "./ItemList.css";
import ProductCard from "../../commons/productCard/ProductCard";
import ProductSkeleton from "../../commons/productSkeleton/ProductSkeleton";

const ItemList = ({ items, categoryName }) => {
  let arr = [1, 2, 3];

  return (
    <>
      <div>
        <div className="itemTitle">
          <h6>explore our style</h6>
          <h3>catalog | {categoryName}</h3>
        </div>

        <div className="itemList">
          {items.length > 0
            ? items.map((item) => {
                return <ProductCard key={item.id} item={item} />;
              })
            : arr.map((el) => {
                return <ProductSkeleton key={el} />;
              })}

          {}
        </div>
      </div>
    </>
  );
};

export default ItemList;
