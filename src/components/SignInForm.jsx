import { View, Pressable } from 'react-native';
import Text from './Text';
import FormikTextInput from './FormikTextInput';

const SignInForm = ({ onSubmit }) => {

  return (
    <View>
      <FormikTextInput name="user" placeholder="username" />
      <FormikTextInput secureTextEntry={true} name="password" placeholder="password" />
      <Pressable onPress={onSubmit} >
        <View style={{
          height: 40,
          margin: 12,
          padding: 10,
          backgroundColor: '#0275d8',
          flexDirection: 'row',
          justifyContent: 'center',
          borderRadius: 6
        }}>

          <Text style={{color: 'white'}} fontWeight={'bold'}>Sign In</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default SignInForm;