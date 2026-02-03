import React from 'react'
import { Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function pay() {
    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
            <Image source={require('@/assets/images/FREDDY.jpg')} style={{ width: '100%', height: '100%' }} />
        </SafeAreaView>
    )
}