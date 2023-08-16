import style from './Join.module.css';

const Join = () => {
  return (
    <section className={style.main}>
      <div className={style['section-center']}>
        <h3 className={style.heading}>Join our newsletter and get 20% off</h3>
        <div className={style.content}>
          <p className={style.para}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi
            officia dolores accusantium autem veritatis, delectus aperiam
            quaerat aliquam molestias nostrum!
          </p>
          <form onSubmit={(e) => e.preventDefault()} className={style.form}>
            <input
              type='email'
              className={style.inp}
              placeholder='Enter your Email'
            />
            <button className={style.btn}>subscribe</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Join;
