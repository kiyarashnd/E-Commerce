import BreadCrumbs from './components/BasicBreadcrumbs';
import { products, category } from './data';
import { Link } from 'react-router-dom';
import myStyles from './Products.module.css';
import { useState } from 'react';

const company = ['all', ...new Set(products.map((item) => item.Brand))];
let sortPrice = [...products.map((item) => item.price)];
sortPrice = sortPrice.sort((a, b) => a - b);
const categories = ['all', ...category.map((cat) => cat.name)];

const Products = () => {
  // let data = products;
  const [data, setData] = useState(products);
  // console.log('data is : ', data);
  const [selectedCategory, setSelectedCategory] = useState('all');

  // console.log(data);
  // console.log(company);
  // console.log('category is : ', category);
  // console.log('sorted price is : ', sortPrice);
  const [val, setVal] = useState(sortPrice[sortPrice.length - 1]);

  // const [searchTerm, setSearchTerm] = useState('');

  // const handleChange = (event) => {
  //   setSearchTerm(event.target.value);
  // };
  // data = data.filter((product) =>
  //   product.name.toLowerCase().includes(searchTerm.toLowerCase())
  // );

  function handelSubmit(eve) {
    eve.preventDefault();
  }

  const changeRange = (event) => {
    setVal(event.target.value);
  };

  const filterItems = (category, type) => {
    if (type === 'category') setSelectedCategory(category);
    if (category === 'all') {
      setData(products);
      return;
    }
    const newItems = data.filter((item) => item[type] === category);
    setData(newItems);
  };

  // const filterComp = (comp) => {
  //   if (comp === 'all') {
  //     setData(products);
  //     return;
  //   }
  //   const newItems = products.filter((item) => item.Brand === comp);
  //   setData(newItems);
  // };

  return (
    <>
      <BreadCrumbs title={'Products'} />
      <section className={myStyles.container}>
        <form onSubmit={handelSubmit}>
          <aside className={myStyles.sidebar}>
            <div>
              {/* <input
                type='text'
                placeholder='search'
                value={searchTerm}
                onChange={handleChange}
                className={myStyles.inputText}
              /> */}
            </div>
            <div className={myStyles['form-control']}>
              <h5 className={myStyles.head5}>Category</h5>
              <div>
                {categories.map((cat, index) => {
                  return (
                    <button
                      key={index}
                      className={`${myStyles.btn} ${
                        cat === selectedCategory ? myStyles.active : undefined
                      }`}
                      onClick={() => filterItems(cat, 'category')}
                    >
                      {cat}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className={myStyles['form-control']}>
              <h5 className={myStyles.head5}>Company</h5>
              <select
                name='comp'
                id='company'
                className={myStyles.comp}
                onChange={(e) => filterItems(e.target.value, 'Brand')}
              >
                {company.map((comp, index) => {
                  return (
                    <option key={index} value={comp}>
                      {comp}
                    </option>
                  );
                })}
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
                min={sortPrice[0]}
                max={sortPrice[sortPrice.length - 1]}
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
          <header>
            <p>{`${data.length} item${data.length > 1 ? 's' : ''} found`}</p>
          </header>
          <main className={myStyles.productsContainer}>
            {data.length === 0 ? (
              <h5 className={myStyles.notFound}>
                Sorry, no products matched your search.
              </h5>
            ) : (
              data.map((item) => {
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
              })
            )}
          </main>
        </div>
      </section>
    </>
  );
};

export default Products;
