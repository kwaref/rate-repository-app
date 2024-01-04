import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import Text from './Text';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import theme from '../theme';
import { Link } from 'react-router-native';
import { useApolloClient, useQuery } from '@apollo/client';
import { ME } from '../graphql/queries';
import useAuthStorage from '../hooks/useAuthStorage';

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        backgroundColor: theme.colors.appBarBackground,
        flexDirection: 'row'
    },
    text: {
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 10,
    }
});

const AppBarTab = ({ text, link }) => {
    return <Pressable>
        <Link to={link}>
            <Text style={styles.text} color={'textSecondary'} fontSize={'subheading'} fontWeight={'bold'}>{text}</Text>
        </Link>
    </Pressable>
}

const AppBarTabLogOut = ({ text }) => {

    const authStorage = useAuthStorage();
    const apolloClient = useApolloClient();

    const handleLogOut = async () => {
        await authStorage.removeAccessToken();
        apolloClient.resetStore()
    }

    return <Pressable onPress={handleLogOut}>
        <Text style={styles.text} color={'textSecondary'} fontSize={'subheading'} fontWeight={'bold'}>{text}</Text>
    </Pressable>
}

const AppBar = () => {
    const user = useQuery(ME)

    return <View style={styles.container}>
        <ScrollView horizontal>
            <AppBarTab text={"Repositories"} link={'/'} />
            { user.data?.me ? <AppBarTabLogOut text={"Sign out"} /> : <AppBarTab text={"Sign in"} link={'/signin'} />}
        </ScrollView>
    </View>
};

export default AppBar;