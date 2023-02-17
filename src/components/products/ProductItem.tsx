import { Product } from '../../types/Product';
import Styles from './ProductItem.module.css';
import { addToCart } from '../../features/cart/cartSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { RootState } from '../../store/store';
import Button from '../button/Button';

const ProductItem = (props: Product) => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state: RootState) => {
    return state.cart;
  });
  const lastItem = cart.items[cart.items.length - 1];
  const id = lastItem ? lastItem.id + 1 : 1;
  const { name, image, description, price } = props;
  const item = {
    id,
    name,
    image,
    description,
    price,
  };

  const handleAddToCart = () => {
    dispatch(addToCart(item));
  };
  return (
    <div>
      <h2>{item.name}</h2>
      <img alt={item.name} src={`${item.image}`} className={Styles.image} />
      <p>
        <b>Description:</b>
        <br />
        {item.description}
      </p>
      <p>
        <b>Price:</b>
        <br />
        {item.price} $
      </p>
      <Button onClick={handleAddToCart} variant="primary">
        Add to cart
      </Button>
    </div>
  );
};

export default ProductItem;
