import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function profile() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{ backgroundColor: "#3f8ce2", padding: 24, paddingHorizontal: 32, height: 270 }} >

          <View style={{ marginTop: 16, justifyContent: "space-between", alignItems: "center", width: "100%" }}>
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "100%", marginTop: 24, backgroundColor: "#2968b1ff", borderRadius: 8, paddingRight: 7 }} >
              <View style={{ backgroundColor: "#3f8ce2", paddingVertical: 6, paddingHorizontal: 12, borderRadius: 10, margin: 2, width: '50%' }} >
                <Text style={{ color: "#fff", fontSize: 14, textAlign: "center" }}>Personal</Text>
              </View>
              <View style={{ paddingVertical: 6, paddingHorizontal: 12, margin: 2, paddingRight: 0, marginRight: 0, width: '50%' }} >
                <Text style={{ color: "#fff", fontSize: 14, textAlign: "center" }}>Bisnis</Text>
              </View>
            </View>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}