import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';


type ButtonProps = {
  title: string;
  onPress: () => void;
  buttonClassName: string;
  textClassName: string;
  flexDirectionClass?: string ;
children?: React.ReactNode;
};

export default function ButtonComponent({
  title,
  onPress,
  buttonClassName,
  textClassName,
  flexDirectionClass ="flex-row",
  children
}: ButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`${buttonClassName}`}
    >
      <View className={`${flexDirectionClass} items-center justify-center`}>
        {children}
         <Text className={`${textClassName}`}>{title}</Text>
      </View>
     
    </TouchableOpacity>
  );
}
