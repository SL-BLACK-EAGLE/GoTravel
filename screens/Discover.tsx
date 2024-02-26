import {Image, SafeAreaView, Text, View} from 'react-native';
import React from 'react';
import {Avatar} from '../assets';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

const Discover = () => {
  return (
    <SafeAreaView>
      {/*  First section */}
      <View className="flex-row px-8 justify-between items-center">
        <View className="flex-col">
          <Text className="text-emerald-900 text-3xl font-bold">Discover</Text>
          <Text className="text-gray-500 text-[26px] font-normal">
            the beauty today
          </Text>
        </View>
        <View className="w-20 h-20">
          <Image
            source={Avatar}
            className="w-full h-full object-cover rounded-md"
          />
        </View>
      </View>

      {/*  Search section */}
      <View className="flex-row px-4 bg-white mt-8 mx-4 shadow-lg rounded-lg">
        <GooglePlacesAutocomplete
          placeholder="Search"
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(data, details);
          }}
          query={{
            key: 'YOUR API KEY',
            language: 'en',
          }}
        />
      </View>
    </SafeAreaView>
  );
};
export default Discover;
