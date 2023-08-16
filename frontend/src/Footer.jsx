import styles from './Footer.module.css';
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.footerPara}>
        © 2023 <span>kiyarash Nadri</span> All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
