import { useSelector } from 'react-redux';
import { Product } from '../../types/Product';
import Styles from './Cart.module.css';
import CartItem from '../../components/cart/CartItem';

const Cart = () => {
  const cart = useSelector((state: any) => {
    return state.cart;
  });
  console.log(cart);

  return (
    <div>
      <h1>Cart</h1>

      <p>
        <b>Total:</b>
        {cart.value} $
      </p>

      <div className={Styles.list}>
        {cart.items.map((item: Product) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
};

export default Cart;
