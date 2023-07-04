import BreadCrumbs from './components/BasicBreadcrumbs';
import { products } from './data';
import { Link } from 'react-router-dom';
import myStyles from './Products.module.css';
import { useState } from 'react';

const Products = () => {
  console.log(products);
  const [val, setVal] = useState(10);
  return (
    <>
      <BreadCrumbs />
      <section className={myStyles.container}>
        <aside className={myStyles.sidebar}>
          <input type='text' placeholder='search' />
          <h5>Category</h5>
          <button>All</button>
          <button>Office</button>
          <button>Living Room</button>
          <button>Kitchen</button>
          <button>Bedroom</button>
          <button>Dining</button>
          <button>Kids</button>

          <label htmlFor='company'>Company</label>
          <select name='cars' id='company'>
            <option value='all'>all</option>
            <option value='marcos'>marcos</option>
            <option value='liddy'>liddy</option>
            <option value='ikea'>ikea</option>
            <option value='caressa'>caressa</option>
          </select>

          {/* <input
            type='range'
            value='24'
            min='1'
            max='100'
            oninput='this.nextElementSibling.value = this.value'
          /> */}
          <input
            // value={val}
            type='range'
            min='0'
            max='9999999999'
            step='1'
            // onchange={setVal(this.value)}
          ></input>
          <output>{val}</output>
          <button>clear filters</button>
        </aside>
        <div>
          <header>header</header>
          <main className={myStyles.productsContainer}>
            {products.map((item) => {
              return (
                <Link
                  to={`/Products/${item.id}`}
                  className={myStyles.product3}
                  key={item.id}
                >
                  <img
                    src={item.img}
                    alt={item.name}
                    className={myStyles.myImage}
                  />
                  <div className={myStyles['inner-flex']}>
                    <h5 className={myStyles.name}>{item.name}</h5>
                    <p className={myStyles.price}>${item.price}</p>
                  </div>
                </Link>
              );
            })}
          </main>
        </div>
      </section>
    </>
  );
};

export default Products;
