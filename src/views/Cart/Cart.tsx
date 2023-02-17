import { useSelector } from 'react-redux';
import { removeFromCart } from '../../features/cart/cartSlice';
import { Product } from '../../types/Product';
import Styles from './Cart.module.css';
import { useAppDispatch } from '../../store/hooks';

const Cart = () => {
  const cart = useSelector((state: any) => {
    return state.cart;
  });
  console.log(cart);
  const dispatch = useAppDispatch();

  const handleRemoveFromCart = (item: Product) => {
    dispatch(removeFromCart(item));
  };

  return (
    <div>
      <h1>Cart</h1>

      <p>
        <b>Total:</b>
        {cart.value} $
      </p>

      <div className={Styles.list}>
        {cart.items.map((item: Product) => {
          return (
            <div key={item.id}>
              <h2>{item.name}</h2>
              <img alt={item.name} src={item.image} className={Styles.image} />
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
              <button
                type="button"
                onClick={() => {
                  return handleRemoveFromCart(item);
                }}
              >
                Remove from cart
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
