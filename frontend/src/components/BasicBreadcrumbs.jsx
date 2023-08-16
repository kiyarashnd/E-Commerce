import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import styles from './BasicBreadcrumbs.module.css';
import { products } from './../data';

import { useState } from 'react';

function sliceWordBetweenLastTwoSlashes(text) {
  console.log('products is ::', products);
  const lastIndex = text.lastIndexOf('/');
  if (lastIndex === -1) {
    return null; // No slashes found
  }
  return text.slice(lastIndex + 1, text.length);
}

export default function BasicBreadcrumbs({ title }) {
  window.addEventListener('popstate', () => {
    setLastURL(sliceWordBetweenLastTwoSlashes(window.location.href));
  });
  const [lastURL, setLastURL] = useState(
    sliceWordBetweenLastTwoSlashes(window.location.href)
  );

  let flag = true;
  if (title === 'About' || title === 'Products') {
    flag = false;
  }

  let myProduct = '';
  if (flag) {
    const item = products.filter((product) => product.id === Number(lastURL));
    myProduct = item[0].name;
  }
  return (
    <Breadcrumbs className={styles.Breadcrumbs}>
      <Link underline='hover' color='inherit' href='/'>
        Home
      </Link>
      {flag ? (
        <Link underline='hover' color='inherit' href='/Products'>
          Products
        </Link>
      ) : (
        <Typography color='text.primary' className={styles.Breadcrumbs2}>
          {lastURL}
        </Typography>
      )}

      {flag ? (
        <Typography color='text.primary' className={styles.Breadcrumbs2}>
          {myProduct}
        </Typography>
      ) : null}
    </Breadcrumbs>
  );
}
