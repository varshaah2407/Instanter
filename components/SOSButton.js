import React, { useState } from 'react';
import { View, TouchableOpacity, Animated } from 'react-native';
import { Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

const SOSButton = () => {
  const [animation] = useState(new Animated.Value(1));

  const handlePress = () => {
    Animated.sequence([
      Animated.timing(animation, {
        toValue: 2,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(animation, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start();
    // Perform SOS action here
  };

  const waveScale = animation.interpolate({
    inputRange: [1, 2],
    outputRange: [0.8, 2],
  });

  const waveOpacity = animation.interpolate({
    inputRange: [1, 2],
    outputRange: [1, 0],
  });

  return (
    <TouchableOpacity onPress={handlePress}>
     
      <View
   
        style={{
          width: width/2,
          height: height/7,
          borderRadius: 40,
          backgroundColor: 'red',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Animated.View
          style={{
           
            // position: 'relative',
            
            width: width/2,
            height: height/7,
            borderRadius: 40,
            borderWidth: 4,
            borderColor: 'white',
            transform: [{ scale: waveScale }],
            opacity: waveOpacity,
          }}
        />
      </View>
    </TouchableOpacity>
  );
};

export default SOSButton;