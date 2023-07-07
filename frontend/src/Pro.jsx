import { useHistory, useParams } from 'react-router-dom';
import { products } from './data';
import style from './Pro.module.css';

import { Link } from 'react-router-dom';
import { useState } from 'react';

import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import BreadCrumbs from './components/BasicBreadcrumbs';

const Pro = () => {
  const [count, setCount] = useState(1);

  const { id } = useParams();
  const myId = Number(id);
  const selectedItem = products.find((prod) => myId === prod.id);
  // console.log(selectedItem);
  function addNum() {
    setCount((num) => num + 1);
  }

  function minNum() {
    if (count > 1) setCount((num) => num - 1);
  }

  return (
    <>
      <BreadCrumbs title={id} />
      <section className={style['main-class']}>
        <div className={style.pic}>
          <img
            // src={`..//images/img${selectedItem.id}.jpeg`}
            src={`../${selectedItem.img}`}
            alt={selectedItem.name}
            className={style.myImg}
          />
        </div>
        <div className={style.about}>
          <h4 className={style.head}>{selectedItem.name}</h4>
          <p className={style.price}>${selectedItem.price}</p>
          <p className={style.desc}>{selectedItem.description}</p>
          <p>{`Available : ${selectedItem.Available}`}</p>
          <p>{`Brand : ${selectedItem.Brand}`}</p>
          <hr className={style.line} />

          <section className={style.cart}>
            <div className={style.setCart}>
              <button className={style.mybtn} onClick={minNum}>
                <AiOutlineMinus />
              </button>
              <p className={style.num}>{count}</p>
              <button className={style.mybtn} onClick={addNum}>
                <AiOutlinePlus />
              </button>
            </div>
            <Link to='/Cart' className={style.btn2}>
              Add to Cart
            </Link>
          </section>
        </div>
      </section>
    </>
  );
};

export default Pro;
