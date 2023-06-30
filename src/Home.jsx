import myStyles from './Home.module.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <section className={myStyles['main-container']}>
        <div className={myStyles['first-container']}>
          <h2 className={myStyles.heading2}>Design Your Comfort Zone</h2>
          <p className={myStyles.para2}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus debitis distinctio magnam, alias facere fugit soluta
            provident ratione deserunt. Nemo modi eaque perspiciatis excepturi
            illo nobis repellat neque tempore quis.
          </p>
          <Link to='/Products' className={myStyles.btn}>
            Shop Now
          </Link>
        </div>
        <div className={myStyles.container2}>
          <img className={myStyles.myImg} src='img2.jpeg' alt='Image 2' />
          {/* <img src='image3.jpg' alt='Image 3' /> */}
          <img className={myStyles.myImg} src='img1.jpeg' alt='Image 1' />
        </div>
      </section>
      <section className={myStyles['slider-container']}>
        <h2 className={myStyles.heading2}>Featured Products</h2>
        <div className={myStyles.underline}></div>
      </section>
    </>
  );
};

export default Home;
