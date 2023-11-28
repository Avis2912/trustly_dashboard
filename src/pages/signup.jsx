import { Helmet } from 'react-helmet-async';

import { SignUpView } from 'src/sections/signup';

// ----------------------------------------------------------------------

export default function SignUpPage() {
  return (
    <>
      <Helmet>
        <title> SignUp | Trustly </title>
      </Helmet>

      <SignUpView />
    </>
  );
}
