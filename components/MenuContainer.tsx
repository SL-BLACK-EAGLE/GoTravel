import {Image, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

interface MenuContainerProps {
  title: string;
  imageSrc: any;
  type: string;
  setType: (type: string) => void;
}

const MenuContainer = ({
  title,
  imageSrc,
  type,
  setType,
}: MenuContainerProps) => {
  const handlePress = () => {
    setType(title.toLowerCase());
  };

  return (
    <TouchableOpacity
      className="items-center justify-center space-y-2 shadow-sm shadow-gray-400"
      onPress={handlePress}>
      <View
        className={`w-24 h-24 p-2  rounded-full items-center justify-center ${
          type === title.toLowerCase() ? 'bg-gray-200' : ''
        }`}>
        <Image source={imageSrc} className="w-full h-full object-contain" />
      </View>
      <Text className="text-emerald-600 text-xl font-semibold">{title}</Text>
    </TouchableOpacity>
  );
};
export default MenuContainer;
