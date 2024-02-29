import {Image, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

interface ItemCardContainerProps {
  imgSrc: string;
  title?: string;
  location?: string;
  data?: Data;
}

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

const ItemCardContainer: React.FC<ItemCardContainerProps> = ({
  imgSrc,
  title,
  location,
  data,
}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('ItemScreen', {param: data})}
      className="rounded-md border border-gray-300 space-y-2 px-3 py-2 shadow-md bg-white w-[182px] my-2">
      <Image
        source={{uri: imgSrc}}
        className="w-full h-40 object-cover rounded-md"
      />
      {title ? (
        <>
          <Text className="text-lg font-bold text-emerald-600">
            {title && title?.length > 14 ? `${title?.slice(0, 14)}..` : title}
          </Text>
          <View className="flex-row space-x-1">
            <Icon name={'map-marker'} size={20} color={'#8597A2'} />
            <Text className="text-gray-500 text-sm">
              {location && location?.length > 18
                ? `${location?.slice(0, 14)}..`
                : location}
            </Text>
          </View>
        </>
      ) : (
        <></>
      )}
    </TouchableOpacity>
  );
};
export default ItemCardContainer;
