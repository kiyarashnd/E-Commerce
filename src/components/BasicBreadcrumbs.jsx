import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import styles from './BasicBreadcrumbs.module.css';

export default function BasicBreadcrumbs() {
  return (
    <Breadcrumbs aria-label='breadcrumb' className={styles.Breadcrumbs}>
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
        Products
      </Typography>
    </Breadcrumbs>
  );
}
