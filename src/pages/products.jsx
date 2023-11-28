import { Helmet } from 'react-helmet-async';

import { ProductsView } from 'src/sections/products/view';
import { auth } from 'src/firebase-config/firebase';

// ----------------------------------------------------------------------

export default function ProductsPage() {
  if (!auth.currentUser) {
    window.location.href = '/login';
  } 
  return (
    <>
      <Helmet>
        <title> Products | Minimal UI </title>
      </Helmet>

      <ProductsView />
    </>
  );
}
