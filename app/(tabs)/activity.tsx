import React, { useState } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function activity() {
  const [isHide, setIsHide] = useState(false);

  const toggleHide = () => {
    setIsHide(prev => !prev);
  }
  return (
    <SafeAreaView>
      <ScrollView>
        {/* Header */}
        <View style={{ backgroundColor: "#3f8ce2", padding: 24, paddingHorizontal: 32, height: 170 }} >

          <View style={{ marginTop: 16, justifyContent: "space-between", alignItems: "center", width: "100%" }}>
            <Text style={{ color: "#fff", fontSize: 20, fontWeight: "700", textAlign: "center" }}>
              History Transaction
            </Text>
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "100%", marginTop: 24, backgroundColor: "#2968b1ff", borderRadius: 8, paddingRight: 7 }} >
              <View style={{ paddingVertical: 6, paddingHorizontal: 12, margin: 2, paddingRight: 0, marginRight: 0, width: '50%' }} >
                <Text style={{ color: "#fff", fontSize: 14, textAlign: "center" }}>In Complete</Text>
              </View>
              <View style={{ backgroundColor: "#3f8ce2", paddingVertical: 6, paddingHorizontal: 12, borderRadius: 10, margin: 2, width: '50%' }} >
                <Text style={{ color: "#fff", fontSize: 14, textAlign: "center" }}>Completed</Text>
              </View>
            </View>
          </View>

        </View>

        {/* History Pembayaran */}
        <View style={{ padding: 16, backgroundColor: "#fff", borderRadius: 12, margin: 10, marginTop: 16 }} >
          <View style={{ flexDirection: "row", alignItems: "center", gap: 12, justifyContent: "space-between" }} >
            <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
              <Image source={require('./../../assets/myImages/ellipse6.png')} style={{ width: 45, height: 45, borderRadius: 12 }} />
              <View>
                <Text style={{ fontWeight: "700", color: "#000" }}>Send Money</Text>
                <Text>30 Jun, 2023 21:00</Text>
              </View>
            </View>
            <Text style={{ fontWeight: "700", color: "#ff0000" }}>- Rp 37.899.000,00</Text>
          </View>
        </View>
        <View style={{ padding: 16, backgroundColor: "#fff", borderRadius: 12, margin: 10, marginTop: 16 }} >
          <View style={{ flexDirection: "row", alignItems: "center", gap: 12, justifyContent: "space-between" }} >
            <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
              <Image source={require('./../../assets/myImages/ellipse6.png')} style={{ width: 45, height: 45, borderRadius: 12 }} />
              <View>
                <Text style={{ fontWeight: "700", color: "#000" }}>Send Money</Text>
                <Text>30 Jun, 2023 21:00</Text>
              </View>
            </View>
            <Text style={{ fontWeight: "700", color: "#ff0000" }}>- Rp 899.499,00</Text>
          </View>
        </View>
        <View style={{ padding: 16, backgroundColor: "#fff", borderRadius: 12, margin: 10, marginTop: 16 }} >
          <View style={{ flexDirection: "row", alignItems: "center", gap: 12, justifyContent: "space-between" }} >
            <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
              <Image source={require('./../../assets/myImages/ellipse6.png')} style={{ width: 45, height: 45, borderRadius: 12 }} />
              <View>
                <Text style={{ fontWeight: "700", color: "#000" }}>Send Money</Text>
                <Text>30 Jun, 2023 21:00</Text>
              </View>
            </View>
            <Text style={{ fontWeight: "700", color: "#ff0000" }}>- Rp 899.499,00</Text>
          </View>
        </View>
        <View style={{ padding: 16, backgroundColor: "#fff", borderRadius: 12, margin: 10, marginTop: 16 }} >
          <View style={{ flexDirection: "row", alignItems: "center", gap: 12, justifyContent: "space-between" }} >
            <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
              <Image source={require('./../../assets/myImages/ellipse6.png')} style={{ width: 45, height: 45, borderRadius: 12 }} />
              <View>
                <Text style={{ fontWeight: "700", color: "#000" }}>Send Money</Text>
                <Text>30 Jun, 2023 21:00</Text>
              </View>
            </View>
            <Text style={{ fontWeight: "700", color: "#ff0000" }}>- Rp 899.499,00</Text>
          </View>
        </View>
        <View style={{ padding: 16, backgroundColor: "#fff", borderRadius: 12, margin: 10, marginTop: 16 }} >
          <View style={{ flexDirection: "row", alignItems: "center", gap: 12, justifyContent: "space-between" }} >
            <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
              <Image source={require('./../../assets/myImages/ellipse6.png')} style={{ width: 45, height: 45, borderRadius: 12 }} />
              <View>
                <Text style={{ fontWeight: "700", color: "#000" }}>Send Money</Text>
                <Text>30 Jun, 2023 21:00</Text>
              </View>
            </View>
            <Text style={{ fontWeight: "700", color: "#ff0000" }}>- Rp 899.499,00</Text>
          </View>
        </View>
        <View style={{ padding: 16, backgroundColor: "#fff", borderRadius: 12, margin: 10, marginTop: 16 }} >
          <View style={{ flexDirection: "row", alignItems: "center", gap: 12, justifyContent: "space-between" }} >
            <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
              <Image source={require('./../../assets/myImages/ellipse6.png')} style={{ width: 45, height: 45, borderRadius: 12 }} />
              <View>
                <Text style={{ fontWeight: "700", color: "#000" }}>Top Up</Text>
                <Text>30 Jun, 2023 21:00</Text>
              </View>
            </View>
            <Text style={{ fontWeight: "700", color: "#00ff00" }}>+ Rp 41.497.496,00</Text>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  )
}