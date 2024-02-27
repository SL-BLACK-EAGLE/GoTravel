import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import {HeroImage} from '../assets';

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="bg-white flex-1 relative">
      {/*First Section*/}
      <View className="flex-row px-6 mt-8 items-center space-x-2">
        <View className="w-16 h-16 bg-black rounded-full items-center justify-center">
          <Text className="text-emerald-600 text-3xl font-semibold">GO</Text>
        </View>
        <Text className="text-3xl font-semibold text-gray-700">Travel</Text>
      </View>

      {/*Second Section*/}
      <View className="flex-col px-6 mt-8 items-start space-y-3 ">
        <Text className="text-gray-600 text-4xl font-medium">
          Enjoy the trip with
        </Text>
        <Text className="text-cyan-600 text-4xl font-medium">Good Moments</Text>
      </View>

      {/*Third Section*/}
      <View className=" flex-row px-6 mt-4 items-center space-x-2">
        <Text className="text-gray-500 text-lg font-light">
          Plan your next adventure, seamlessly book flights & hotels, and
          discover hidden gems - all from one app.
        </Text>
      </View>

      {/*circle Section*/}
      <View className=" flex-col bottom-36 -right-32 items-center justify-center absolute">
        <View className="w-96 h-96 bg-cyan-500 rounded-full items-center justify-center" />
      </View>
      <View className="flex-col -bottom-32 -left-32 items-center justify-center absolute">
        <View className="w-96 h-96 bg-orange-300 rounded-full items-center justify-center" />
      </View>

      {/*Image Section*/}
      <View className="flex-1  items-center justify-center relative">
        <Animatable.Image
          animation="fadeIn"
          easing="ease-in-out"
          source={HeroImage}
          className="object-cover h-full w-full -bottom-9 absolute"
        />
      </View>

      {/*Button Section*/}
      <View className="flex-row items-center justify-center absolute bottom-20 right-0 left-0 cursor-pointer">
        <TouchableOpacity onPress={() => navigation.navigate('Discover')}>
          <View className="w-24 h-24  border-l-2 border-t-4 border-r-2 border-cyan-600 rounded-full items-center justify-center">
            <Animatable.View
              animation="pulse"
              easing="ease-in-out"
              iterationCount="infinite"
              duration={1500}
              className="w-20 h-20 bg-cyan-500 rounded-full items-center justify-center">
              <Text className="text-white text-[36px] font-semibold">Go</Text>
            </Animatable.View>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default HomeScreen;
