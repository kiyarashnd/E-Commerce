import { WiEarthquake, WiAlien, WiBarometer } from 'react-icons/wi';
import style from './Services.module.css';

const Services = () => {
  return (
    <section className={style['main-class']}>
      <div className={style.innerMain}>
        <div className={style.header}>
          <h4 className={style.heading4}>
            Custom Furniture Built Only For You
          </h4>
          <p className={style.para}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod
            quaerat laborum aliquid facilis error? Rerum aperiam quidem ut,
            itaque nostrum corrupti architecto assumenda similique nobis dolores
            illo eius dolorem praesentium?
          </p>
        </div>
        <div className={style.center}>
          <article className={style.services}>
            <WiEarthquake className={style.myIcon} />
            <h5 className={style.heading5}>Mission</h5>
            <p className={style['para-article']}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              perferendis sapiente debitis totam ab laborum praesentium ullam
              non eum quae?
            </p>
          </article>
          <article className={style.services}>
            <WiAlien className={style.myIcon} />
            <h5 className={style.heading5}>Vision</h5>
            <p className={style['para-article']}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              perferendis sapiente debitis totam ab laborum praesentium ullam
              non eum quae?
            </p>
          </article>
          <article className={style.services}>
            <WiBarometer className={style.myIcon} />
            <h5 className={style.heading5}>History</h5>
            <p className={style['para-article']}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              perferendis sapiente debitis totam ab laborum praesentium ullam
              non eum quae?
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Services;
