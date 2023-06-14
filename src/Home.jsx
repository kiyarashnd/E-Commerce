import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className='main-container'>
      <div className='first-container'>
        <h2>Design Your Comfort Zone</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus debitis distinctio magnam, alias facere fugit soluta
          provident ratione deserunt. Nemo modi eaque perspiciatis excepturi
          illo nobis repellat neque tempore quis.
        </p>
        <Link to='/Products' className='btn'>
          Shop Now
        </Link>
      </div>
      <div class='container'>
        <img src='img2.jpeg' alt='Image 2' />
        {/* <img src='image3.jpg' alt='Image 3' /> */}
        <img src='img1.jpeg' alt='Image 1' />
      </div>
    </section>
  );
};

export default Home;
