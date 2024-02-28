import {Image, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

interface ItemCardContainerProps {
  key: number;
  imgSrc: string;
  title: string;
  location: string;
}

const ItemCardContainer = ({
  imgSrc,
  title,
  location,
}: ItemCardContainerProps) => {
  return (
    <TouchableOpacity className="rounded-md border border-gray-300 space-y-2 px-3 py-2 shadow-md bg-white w-[182px] my-2">
      <Image
        source={{uri: imgSrc}}
        className="w-full h-40 object-cover rounded-md"
      />
      <Text className="text-lg font-bold text-emerald-600">
        {title?.length > 14 ? `${title.slice(0, 14)}..` : title}
      </Text>
      <View className="flex-row space-x-1">
        <Icon name={'map-marker'} size={20} color={'#8597A2'} />
        <Text className="text-gray-500 text-sm">
          {location?.length > 18 ? `${location.slice(0, 14)}..` : location}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
export default ItemCardContainer;
