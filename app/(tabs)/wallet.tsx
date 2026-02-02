import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function wallet() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{ backgroundColor: "#3f8ce2", padding: 24, paddingHorizontal: 32, height: 170 }} >

          <View style={{ marginTop: 16, justifyContent: "space-between", alignItems: "center", width: "100%" }}>
            <Text style={{ color: "#fff", fontSize: 14, fontWeight: "700", textAlign: "center" }}>
              Wallet
            </Text>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>

  )
}