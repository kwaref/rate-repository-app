import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import Text from './Text';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import theme from '../theme';
import { Link } from 'react-router-native';

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

const AppBar = () => {
    return <View style={styles.container}>
        <AppBarTab text={"I'm pressable!"} link={'/'} />
        <AppBarTab text={"Sign in"} link={'/signin'}/>
    </View>
};

export default AppBar;