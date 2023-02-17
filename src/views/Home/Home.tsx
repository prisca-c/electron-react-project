import {useSelector} from 'react-redux';

const Home = () => {
  const cart = useSelector((state: any) => state.cart);

  return (
    <div>
      <h1>Home</h1>

      <div>
        <p>
          Cart Items Count: <b>{cart.itemsCount}</b>
          <br/> Cart Total: <b>{cart.value}</b> $
        </p>

      </div>
    </div>
  );
};

export default Home;