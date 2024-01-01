import { Formik } from 'formik';
import SignInForm from './SignInForm';
import * as yup from 'yup'

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
  const onSubmit = values => {
    const user = values.user;
    const password = values.password;

    console.log(`${user}`, `${password}`);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );

};

export default SignIn;