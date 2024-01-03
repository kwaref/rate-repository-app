import { Formik } from 'formik';
import SignInForm from './SignInForm';
import * as yup from 'yup'
import { useSignIn } from '../hooks/useSignIn';

const initialValues = {
  user: '',
  password: '',
};

const validationSchema = yup.object().shape({
  user: yup
    .string()
    .required('Username is required'),
  password: yup.string()
    .required('A password is required'),
});

const SignIn = () => {


  const [signIn, result] = useSignIn();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      await signIn({ username, password });

      console.log(result.data.authenticate.accessToken);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );

};

export default SignIn;