import { useMutation } from "@apollo/client";
import { LOGIN } from "../graphql/mutations";

export const useSignIn = () => {

    const [login, result] = useMutation(LOGIN, {
        onError: error => {
            console.log((error.graphQLErrors[0].message))
        },
    })

    const signIn = async ({ username, password }) => {
        console.log('CREDENTIALS: ', username, password)
        login({ variables: { username, password } })
    };

    return [signIn, result];
};

