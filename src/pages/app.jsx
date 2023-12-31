import { Helmet } from 'react-helmet-async';
import { auth } from 'src/firebase-config/firebase';

import { AppView } from 'src/sections/overview/view';

// ----------------------------------------------------------------------

export default function AppPage() {
  if (!auth.currentUser) {
    window.location.href = '/login';
  }  return (
    <>
      <Helmet>
        <title> Home | Trustly </title>
      </Helmet>

      <AppView />
    </>
  );
}

