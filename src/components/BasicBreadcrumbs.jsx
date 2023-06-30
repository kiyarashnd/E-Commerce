import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import styles from './BasicBreadcrumbs.module.css';

import { useState } from 'react';

function sliceWordBetweenLastTwoSlashes(text) {
  const lastIndex = text.lastIndexOf('/');
  if (lastIndex === -1) {
    return null; // No slashes found
  }
  return text.slice(lastIndex + 1, text.length);
}

export default function BasicBreadcrumbs() {
  window.addEventListener('popstate', () => {
    setLastURL(sliceWordBetweenLastTwoSlashes(window.location.href));
  });
  const [lastURL, setLastURL] = useState(
    sliceWordBetweenLastTwoSlashes(window.location.href)
  );

  return (
    <Breadcrumbs className={styles.Breadcrumbs}>
      <Link underline='hover' color='inherit' href='/'>
        Home
      </Link>
      {/* <Link
        underline='hover'
        color='inherit'
        href='/material-ui/getting-started/installation/'
      >
        Products
      </Link> */}
      <Typography color='text.primary' className={styles.Breadcrumbs}>
        {lastURL}
      </Typography>
    </Breadcrumbs>
  );
}
