import {Image, SafeAreaView, ScrollView, Text, View} from 'react-native';
import React, {useState} from 'react';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {GOOGLE_MAPS_API_KEY} from '@env';
import MenuContainer from '../components/MenuContainer.tsx';
import {Attractions, Avatar, Hotels, Restaurants} from '../assets';

const Discover = () => {
  const [type, setType] = useState('restaurants');

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
          GooglePlacesDetailsQuery={{
            fields: 'geometry',
          }}
          placeholder="Search"
          fetchDetails={true}
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(details?.geometry?.viewport);
          }}
          query={{
            key: GOOGLE_MAPS_API_KEY,
            language: 'en',
          }}
        />
      </View>

      {/*  Menu section */}
      <ScrollView>
        <View className="flex-row justify-between px-8 mt-8">
          <MenuContainer
            key="hotel"
            title="Hotels"
            imageSrc={Hotels}
            type={type}
            setType={setType}
          />

          <MenuContainer
            key="attractions"
            title="Atractions"
            imageSrc={Attractions}
            type={type}
            setType={setType}
          />

          <MenuContainer
            key="restaurants"
            title="Restaurants"
            imageSrc={Restaurants}
            type={type}
            setType={setType}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Discover;
