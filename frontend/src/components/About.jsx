import BreadCrumbs from './BasicBreadcrumbs';
import styles from './About.module.css';

const About = () => {
  return (
    <>
      <BreadCrumbs title={'About'} />
      <section className={styles.container}>
        <img src='about.jpeg' alt='table' className={styles.left} />

        <article className={styles.right}>
          <h3 className={styles.header}>Our Story</h3>
          <div className={styles.underline}></div>
          <p className={styles.para}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
            accusantium sapiente tempora sed dolore esse deserunt eaque
            excepturi, delectus error accusamus vel eligendi, omnis beatae.
            Quisquam, dicta. Eos quod quisquam esse recusandae vitae neque
            dolore, obcaecati incidunt sequi blanditiis est exercitationem
            molestiae delectus saepe odio eligendi modi porro eaque in libero
            minus unde sapiente consectetur architecto. Ullam rerum, nemo iste
            ex, eaque perspiciatis nisi, eum totam velit saepe sed quos
            similique amet. Ex, voluptate accusamus nesciunt totam vitae esse
            iste.
          </p>
        </article>
      </section>
      <footer className={styles.footer}>
        <p className={styles.footerPara}>
          © 2023 <span>kiyarash Nadri</span> All rights reserved
        </p>
      </footer>
    </>
  );
};

export default About;
