import BreadCrumbs from './components/BasicBreadcrumbs';
import { products } from './data';
import { Link } from 'react-router-dom';
import myStyles from './Products.module.css';
import { useState } from 'react';

const Products = () => {
  let data = products;
  const [val, setVal] = useState(10);

  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  data = data.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function handelSubmit(eve) {
    eve.preventDefault();
  }

  const changeRange = (event) => {
    setVal(event.target.value);
  };
  return (
    <>
      <BreadCrumbs />
      <p>{`${data.length} item found`}</p>
      <section className={myStyles.container}>
        <form onSubmit={handelSubmit}>
          <aside className={myStyles.sidebar}>
            <div>
              <input
                type='text'
                placeholder='search'
                value={searchTerm}
                onChange={handleChange}
                className={myStyles.inputText}
              />
            </div>
            <div className={myStyles['form-control']}>
              <h5 className={myStyles.head5}>Category</h5>
              <div>
                <button className={myStyles.btn}>All</button>
                <button className={myStyles.btn}>Office</button>
                <button className={myStyles.btn}>Living Room</button>
                <button className={myStyles.btn}>Kitchen</button>
                <button className={myStyles.btn}>Bedroom</button>
                <button className={myStyles.btn}>Dining</button>
                <button className={myStyles.btn}>Kids</button>
              </div>
            </div>
            <div className={myStyles['form-control']}>
              <h5 className={myStyles.head5}>Company</h5>
              <select name='comp' id='company' className={myStyles.comp}>
                <option value='all'>all</option>
                <option value='marcos'>marcos</option>
                <option value='liddy'>liddy</option>
                <option value='ikea'>ikea</option>
                <option value='caressa'>caressa</option>
              </select>
            </div>

            <div className={myStyles['form-control']}>
              <h5 className={myStyles.head5}>price</h5>

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
                value={val}
                onInput={changeRange}
              ></input>
              <output>{val}</output>
            </div>
            <div className={myStyles['form-control']}>
              <button className={myStyles.clearBtn}>clear filters</button>
            </div>
          </aside>
        </form>
        <div>
          <header>header</header>
          <main className={myStyles.productsContainer}>
            {data.map((item) => {
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
