import Styles from '../../views/Cart/Cart.module.css';
import { useAppDispatch } from '../../store/hooks';
import { removeFromCart } from '../../features/cart/cartSlice';
import ImagesProductsImport from '../../services/imagesProductsImport';
import { Product } from '../../types/Product';

const CartItem = (props: Product) => {
  const item = props;

  const dispatch = useAppDispatch();

  // eslint-disable-next-line no-shadow
  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(item));
  };

  const imageImport = ImagesProductsImport;

  const imagePath = imageImport[item.id - 1];

  return (
    <div key={item.id}>
      <h2>{item.name}</h2>
      <img alt={item.name} src={imagePath} className={Styles.image} />
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
      <button type="button" onClick={handleRemoveFromCart}>
        Remove from cart
      </button>
    </div>
  );
};

export default CartItem;
