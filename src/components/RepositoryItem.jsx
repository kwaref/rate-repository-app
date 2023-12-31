import Text from './Text';
import { View, Image, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
    },
    logo: {
        width: 58,
        height: 58,
        borderRadius: 6
    },
    general: {
        flexDirection: 'column',
        marginLeft: 20,
        marginTop: 18,
        justifyContent: 'space-between',

    },
    fullname: {
        marginBottom: 5,
        paddingRight: 50
    },
    upperRow: {
        flexDirection: 'row',
        height: 100,
        padding: 20,
    },
    bottomRow: {
        flexDirection: 'row',
        height: 100,
        padding: 20,
        justifyContent: 'space-around',
        marginTop: 20
    },
    stats: {
        alignItems: 'center',
    },
    languageText: {
        backgroundColor: '#0275d8',
        alignSelf: 'flex-start',
        padding: 5,
        borderRadius: 5,
        color: '#ffffff'
    },
    wrapper: {
        display: 'flex',
        backgroundColor: 'white',
        justifyContent: 'space-evenly',
        padding: 5
    }
});

const RepositoryItem = ({ item }) => {
    return (
        <View style={styles.wrapper}>
            <View style={styles.upperRow}>
                <View>
                    <Image
                        style={styles.logo}
                        source={{ uri: item.ownerAvatarUrl }}
                    />
                </View>
                <View style={styles.general}>
                    <Text fontWeight={'bold'} style={styles.fullname}>
                        {item.fullName}
                    </Text>
                    <Text style={styles.fullname}>
                        {item.description}
                    </Text>

                    <Text style={styles.languageText}>
                        {item.language}
                    </Text>
                </View>
            </View>
            <View style={styles.bottomRow}>
                <View style={styles.stats}>
                    <Text fontWeight={'bold'}>
                        {item.stargazersCount >= 1000 ? `${(item.stargazersCount/1000).toFixed(1)}k` : item.stargazersCount}
                    </Text>
                    <Text>
                        Stars
                    </Text>
                </View>
                <View style={styles.stats}>
                    <Text fontWeight={'bold'}>
                        {item.forksCount >= 1000 ? `${(item.forksCount/1000).toFixed(1)}k` : item.forksCount}
                    </Text>
                    <Text>
                        Forks
                    </Text>
                </View>
                <View style={styles.stats}>
                    <Text fontWeight={'bold'}>
                        {item.reviewCount >= 1000 ? `${(item.reviewCount/1000).toFixed(1)}k` : item.reviewCount}
                    </Text>
                    <Text>
                        Reviews
                    </Text>
                </View>
                <View style={styles.stats}>
                    <Text fontWeight={'bold'}>
                        {item.ratingAverage}
                    </Text>
                    <Text>
                        Rating
                    </Text>
                </View>
            </View>
        </View>
    );
};

export default RepositoryItem;