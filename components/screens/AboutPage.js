import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function AboutPage({navigation}) {
    return (
        <View style={styles.container}>
            <Text onPress={() => navigation.navigate('Home')}>
                About Screen
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