import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import { useRouter } from 'expo-router'

import { ScreenTitles } from '@/core/texts/screenTitles'
import { useLang } from '@/core/providers'

export default function NotFound() {
  const router = useRouter()
  const { lang } = useLang()

  useEffect(() => {
    const t = setTimeout(() => {
      router.replace('/') 
    }, 2000)

    return () => clearTimeout(t)
  }, [router])

  return (
    <View className="flex-1 justify-center items-center bg-zinc-900">
      <Text className="text-white text-lg mb-2">
       {ScreenTitles[lang].errorHeading}
      </Text>
      <Text className="text-zinc-400">
           {ScreenTitles[lang].directMessage}
      </Text>
    </View>
  )
}
