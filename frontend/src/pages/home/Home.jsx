import myStyles from './Home.module.css';
import { Link } from 'react-router-dom';
import { products } from '../../data/data';
import Services from './Services';
import Footer from '../../components/Footer';
import Join from './Join';

const Home = () => {
  /*
  const url = 'http://localhost:5005/api/v1/resources/books/all';
  fetch(url)
    .then((res) => res.json())
    .then((resp) => console.log(resp));
*/

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
          <img
            className={myStyles.myImg}
            src='../src/assets/img2.jpeg'
            alt='Image 2'
          />
          {/* <img src='image3.jpg' alt='Image 3' /> */}
          <img
            className={myStyles.myImg}
            src='../src/assets/img1.jpeg'
            alt='Image 1'
          />
        </div>
      </section>
      <section className={myStyles['slider-container']}>
        <h2 className={myStyles.heading2}>Featured Products</h2>
        <div className={myStyles.underline}></div>
        <div className={myStyles['flex-container']}>
          <Link
            to={`/Products/${products[0].id}`}
            className={myStyles.product3}
          >
            <img
              src={products[0].img}
              alt={products[0].name}
              className={myStyles.myImage}
            />
            <div className={myStyles['inner-flex']}>
              <h5 className={myStyles.name}>{products[0].name}</h5>
              <p className={myStyles.price}>${products[0].price}</p>
            </div>
          </Link>
          <Link
            to={`/Products/${products[1].id}`}
            className={myStyles.product3}
          >
            <img
              src={products[1].img}
              alt={products[1].name}
              className={myStyles.myImage}
            />
            <div className={myStyles['inner-flex']}>
              <h5 className={myStyles.name}>{products[1].name}</h5>
              <p className={myStyles.price}>${products[1].price}</p>
            </div>
          </Link>
          <Link
            to={`/Products/${products[2].id}`}
            className={myStyles.product3}
          >
            <img
              src={products[2].img}
              alt={products[2].name}
              className={myStyles.myImage}
            />
            <div className={myStyles['inner-flex']}>
              <h5 className={myStyles.name}>{products[2].name}</h5>
              <p className={myStyles.price}>${products[2].price}</p>
            </div>
          </Link>
        </div>

        <Link to='/Products' className={myStyles.btn2}>
          ALL PRODUCTS
        </Link>
      </section>
      <Services />
      <Join />
      <Footer />
    </>
  );
};

export default Home;
