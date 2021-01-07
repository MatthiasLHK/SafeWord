import {StyleSheet} from 'react-native';

const AppStylesheet = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        flex: 1,
        resizeMode: 'stretch',
        alignItems: 'center',
    },
    safeIcon: {
        top: 40
    },
})

export default AppStylesheet;
