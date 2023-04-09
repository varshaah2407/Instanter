import React from "react";
import AppIcon from '../assets/appIcon.png'
import {View,Text, StyleSheet,Image} from 'react-native';

const Header = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.icon} source={AppIcon} />
            <Text style={styles.baseText}>
                INSTAN
                <Text style={styles.innerText}> TER</Text></Text>
        </View>
    );
};

const styles = StyleSheet.create({
    baseText: {
        fontFamily: 'Quicksand',
        fontWeight: 'bold',
        color: 'white',
        fontSize: 30,
        marginHorizontal: 40,
    },
    innerText: {
        fontFamily: 'Quicksand',
        color: 'red',
        fontWeight: 'bold',
    },
    container: {
        marginTop: 30,
        flexDirection: 'row',
        alignItems: 'center',
        height: 70,
        backgroundColor: '#474747',
    },
    icon: {
        width: 60,
        height: 70,
    },
    titleText: {
        flex: 1,
        textAlign: 'center',
        fontFamily: 'Quicksand',
        fontWeight: 'bold',
        color: 'white',
        fontSize: 20,
    },
});

export default Header;
