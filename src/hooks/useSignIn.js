import { useApolloClient, useMutation } from "@apollo/client";
import { LOGIN } from "../graphql/mutations";

import useAuthStorage from './useAuthStorage';

export const useSignIn = () => {
    const authStorage = useAuthStorage();
    const apolloClient = useApolloClient()

    const [login] = useMutation(LOGIN, {
        onError: error => {
            console.log((error.graphQLErrors[0].message))
        },
    })

    const signIn = async ({ username, password }) => {
        console.log('CREDENTIALS: ', username, password)
        const { data } = await login({ variables: { username, password } })
        console.log(data.authenticate.accessToken)
        await authStorage.setAccessToken(data.authenticate.accessToken)
        apolloClient.resetStore();
    };

    return [signIn];
};

