import { Helmet } from 'react-helmet-async';
import { auth } from 'src/firebase-config/firebase';
import { UserView } from 'src/sections/account/view';

// ----------------------------------------------------------------------

export default function UserPage() {
  if (!auth.currentUser) {
    window.location.href = '/login';
  } return (
    <>
      <Helmet>
        <title> My Account | Trustly </title>
      </Helmet>

      <UserView />
    </>
  );
}
