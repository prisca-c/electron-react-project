import ProductItem from '../../components/products/ProductItem';
import productList from '../../data/productList.json';
import Styles from './Products.module.css';

const Products = () => {
  return (
    <div className={Styles.product}>
      <h1>Products</h1>
      <div className={Styles.list}>
        {productList.map((item) => {
          return <ProductItem key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
};

export default Products;
