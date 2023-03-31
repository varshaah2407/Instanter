import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Map({navigation}) {
    return (
        <View style={styles.container}>
            <Text onPress={() => navigation.navigate('Home')}>
                Map Screen
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})