import * as React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import Header from '../Header';

const HomeScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style = {styles.container2}>
            <Text style = {{fontColor: '#e81e25',fontWeight: 'bold'}}>REPORT A DISASTER</Text>
            </View>
        </View>
    );
}

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e3ebf1',
        height: height,
        width: width,
        alignItems: 'center',
        justifyContent: 'center'
    },
    container2: {
        width: width,
        height: 20,
        alignItems: 'center',
        justifyContent: 'center'
        
        

    }
})

export default HomeScreen;


// import * as React from 'react';
// import { StyleSheet, View, Text } from 'react-native';
// import Header from '../Header';

// const HomeScreen = ({navigation}) => {
//     return (
      
//         <View style={styles.container}>
//             <Text style = {{fontColor: '#e81e25',fontWeight: 'bold'}}>REPORT A DISASTER</Text>
//         </View>
        
//     );
// }

// const styles = StyleSheet.create({
//     container: {
        
//         backgroundColor: '#3ebf1',
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center'
//     }
// })

// export default HomeScreen;