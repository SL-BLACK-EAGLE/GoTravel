import {
  ActivityIndicator,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {GOOGLE_MAPS_API_KEY} from '@env';
import MenuContainer from '../components/MenuContainer.tsx';
import {Attractions, Avatar, Hotels, NotFound, Restaurants} from '../assets';
import Icon from 'react-native-vector-icons/FontAwesome';
import ItemCardContainer from '../components/ItemCardContainer.tsx';
import {getPlacesData} from '../api';

interface Data {
  photo?: {
    images?: {
      medium?: {
        url?: string;
      };
    };
  };
  name?: string;
  location_string?: string;
}

const Discover = () => {
  const [type, setType] = useState('restaurants');

  const [isLoading, setIsLoading] = useState(false);
  const [mainData, setMainData] = useState([]);

  const [bl_lat, setBl_lat] = useState(null);
  const [bl_lng, setBl_lng] = useState(null);
  const [tr_lat, setTr_lat] = useState(null);
  const [tr_lng, setTr_lng] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    getPlacesData(bl_lat, bl_lng, tr_lat, tr_lng, type).then(data => {
      setMainData(data);
      setInterval(() => {
        setIsLoading(false);
      }, 2000);
    });
  }, [bl_lat, bl_lng, tr_lat, tr_lng, type]);

  return (
    <SafeAreaView className="flex-1 bg-white">
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
            setBl_lat(details?.geometry?.viewport?.southwest?.lat);
            setBl_lng(details?.geometry?.viewport?.southwest?.lng);
            setTr_lat(details?.geometry?.viewport?.northeast?.lat);
            setTr_lng(details?.geometry?.viewport?.northeast?.lng);
          }}
          query={{
            key: GOOGLE_MAPS_API_KEY,
            language: 'en',
          }}
        />
      </View>

      {/*  Menu section */}
      {isLoading ? (
        <View className="justify-center items-center flex-1">
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : (
        <ScrollView>
          <View className="flex-row justify-between px-8 mt-8 bg-white">
            <MenuContainer
              key={'hotels'}
              title="Hotels"
              imageSrc={Hotels}
              type={type}
              setType={setType}
            />

            <MenuContainer
              key={'attractions'}
              title="Attractions"
              imageSrc={Attractions}
              type={type}
              setType={setType}
            />

            <MenuContainer
              key={'restaurants'}
              title="Restaurants"
              imageSrc={Restaurants}
              type={type}
              setType={setType}
            />
          </View>

          {/*  Title section */}
          <View>
            <View className="flex-row flex justify-between items-center mt-8 px-4">
              <Text className="text-emerald-700 text-[28px] font-bold">
                Top Tips
              </Text>
              <TouchableOpacity className="flex-row flex justify-between items-center space-x-2">
                <Text className="text-gray-500 text-xl">Explore</Text>
                <Icon name="long-arrow-right" size={25} color="gray" />
              </TouchableOpacity>
            </View>
            <View className="px-4 mt-8 flex-row items-center justify-evenly flex-wrap">
              {mainData?.length > 0 ? (
                <>
                  {mainData?.map((data: Data, index) => (
                    <ItemCardContainer
                      key={index}
                      imgSrc={
                        data?.photo?.images?.medium?.url
                          ? data?.photo?.images?.medium?.url
                          : 'https://successafrika.com/wp-content/uploads/2022/01/How-to-say-no-in-difficult-situations.jpg'
                      }
                      title={data?.name}
                      location={data?.location_string}
                      data={data}
                    />
                  ))}
                </>
              ) : (
                <>
                  <View className="w-full h-[400px] items-center space-y-8 justify-center">
                    <Image
                      source={NotFound}
                      className="w-32 h-32 object-cover"
                    />
                    <Text className="text-gray-500 text-xl font-semibold">
                      Opps...No data found
                    </Text>
                  </View>
                </>
              )}
            </View>
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};
export default Discover;
