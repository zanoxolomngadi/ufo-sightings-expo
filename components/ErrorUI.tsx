import React from 'react'
import { Text, View } from 'react-native'

export default function ErrorUIcomponent({ message }: { message: string }) {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-red-500 text-lg">{message}</Text>
    </View>
  )
}
