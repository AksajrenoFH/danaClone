import { CircleUser, Eye, EyeClosed } from "lucide-react-native";
import React, { useState } from 'react';
import { Image, Pressable, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function index() {
  const [isHide, setIsHide] = useState(false);

  const toggleHide = () => {
    setIsHide(prev => !prev);
  }
  return (
    <SafeAreaView>
      <ScrollView>
        {/* Header */}
        <View style={{ backgroundColor: "#3f8ce2", padding: 24, paddingHorizontal: 32, height: 275 }} >

          <View style={{ marginTop: 16, flexDirection: "row", justifyContent: "space-between", alignItems: "center", gap: 6 }} >
            <View style={{ flexDirection: "row", alignItems: "center", gap: 6 }} >
              <Image source={require('./../../assets/myImages/logoDanaPutih.png')} style={{ width: 25, height: 25 }} />
              <Text style={{ color: "#ffffffa4", fontWeight: "500", fontSize: 16 }}>Rp</Text>
              <Text style={{ color: "#fff", fontWeight: "500", fontSize: 16 }}>
                {isHide ? "•••" : "500,00"}
              </Text>
              <Pressable onPress={toggleHide} >
                {isHide ? (
                  <Eye color="#fff" size={20} />
                ) : (
                  <EyeClosed color="#fff" size={20} />
                )

                }
              </Pressable>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 6 }} >
              <Text style={{ color: "#fff", fontSize: 14, fontWeight: "500" }}>Aksajreno FH</Text>
              <CircleUser color="#fff" size={24} />
            </View>
          </View>

          <View style={{ marginTop: 32, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
            <View style={{ alignItems: "center", gap: 6 }} >
              <Image source={require('./../../assets/myImages/group9.png')} style={{ width: 40, height: 40 }} />
              <Text style={{ color: "#fff", fontSize: 14 }}>Scan</Text>
            </View>
            <View style={{ alignItems: "center", gap: 6 }} >
              <Image source={require('./../../assets/myImages/group10.png')} style={{ width: 40, height: 40 }} />
              <Text style={{ color: "#fff", fontSize: 14 }}>Top Up</Text>
            </View>
            <View style={{ alignItems: "center", gap: 6 }} >
              <Image source={require('./../../assets/myImages/group11.png')} style={{ width: 40, height: 40 }} />
              <Text style={{ color: "#fff", fontSize: 14 }}>Send</Text>
            </View>
            <View style={{ alignItems: "center", gap: 6 }} >
              <Image source={require('./../../assets/myImages/group12.png')} style={{ width: 40, height: 40 }} />
              <Text style={{ color: "#fff", fontSize: 14 }}>Request</Text>
            </View>
          </View>

        </View>

        {/* Grid Service */}
        <View style={{ padding: 16, backgroundColor: "#fff", borderRadius: 12, margin: 10, marginTop: -90 }} >
          <View>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 6, marginBottom: 24 }} >
              <Image source={require('./../../assets/myImages/image4.png')} style={{ width: 45, height: 45, borderRadius: 12 }} />
              <View >
                <Text style={{ fontWeight: "500" }}>Diskon Rp40Rb</Text>
                <Text>Yuk belanja Di Lazada</Text>
              </View>
              <TouchableOpacity style={{ marginLeft: "auto", backgroundColor: "#3f8ce2", paddingVertical: 8, paddingHorizontal: 16, borderRadius: 10 }} >
                <Text style={{ fontWeight: "500", color: "#fff" }}>Gunakan</Text>
              </TouchableOpacity>
            </View>

            <View style={{ flexDirection: "row", marginBottom: 16, flexWrap: "wrap" }} >
              <View style={{ width: "25%", alignItems: "center", marginBottom: 12, }} >
                <Image source={require('./../../assets/myImages/image5.png')} style={{ width: 30, height: 30, marginBottom: 4 }} />
                <Text style={{ fontSize: 12, textAlign: "center" }}>Voucher A+ Rewards</Text>
              </View>
              <View style={{ width: "25%", alignItems: "center", marginBottom: 12, }} >
                <Image source={require('./../../assets/myImages/image12.png')} style={{ width: 30, height: 30, marginBottom: 4 }} />
                <Text style={{ fontSize: 12, textAlign: "center" }}>Emas</Text>
              </View>
              <View style={{ width: "25%", alignItems: "center", marginBottom: 12, }} >
                <Image source={require('./../../assets/myImages/image7.png')} style={{ width: 30, height: 30, marginBottom: 4 }} />
                <Text style={{ fontSize: 12, textAlign: "center" }}>DANA Kaget</Text>
              </View>
              <View style={{ width: "25%", alignItems: "center", marginBottom: 12, }} >
                <Image source={require('./../../assets/myImages/image8.png')} style={{ width: 30, height: 30, marginBottom: 4 }} />
                <Text style={{ fontSize: 12, textAlign: "center" }}>Saldo Digital</Text>
              </View>
              <View style={{ width: "25%", alignItems: "center", marginBottom: 12, }} >
                <Image source={require('./../../assets/myImages/image9.png')} style={{ width: 30, height: 30, marginBottom: 4 }} />
                <Text style={{ fontSize: 12, textAlign: "center" }}>DANA Deals</Text>
              </View>
              <View style={{ width: "25%", alignItems: "center", marginBottom: 12, }} >
                <Image source={require('./../../assets/myImages/image6.png')} style={{ width: 30, height: 30, marginBottom: 4 }} />
                <Text style={{ fontSize: 12, textAlign: "center" }}>Games</Text>
              </View>
              <View style={{ width: "25%", alignItems: "center", marginBottom: 12, }} >
                <Image source={require('./../../assets/myImages/image10.png')} style={{ width: 30, height: 30, marginBottom: 4 }} />
                <Text style={{ fontSize: 12, textAlign: "center" }}>DANA Goals</Text>
              </View>
              <View style={{ width: "25%", alignItems: "center", marginBottom: 12, }} >
                <Image source={require('./../../assets/myImages/image11.png')} style={{ width: 30, height: 30, marginBottom: 4 }} />
                <Text style={{ fontSize: 12, textAlign: "center" }}>View All</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Feed */}
        <View style={{ padding: 16, backgroundColor: "#fff", borderRadius: 12, margin: 10, marginTop: 16 }} >
          <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }} >
            <View >
              <Text style={{ fontWeight: "500", color: "#000", fontSize: 20 }}>Feed</Text>
              <Text>Find out what’s new in your feed</Text>
            </View>
            <TouchableOpacity style={{ marginTop: 16, backgroundColor: "#fff", paddingVertical: 12, paddingHorizontal: 16, borderRadius: 10, alignItems: "center", justifyContent: "center", borderWidth: 1, borderColor: "#3f8ce2" }}>
              <Text style={{ fontWeight: "500", color: "#3f8ce2" }}>EXPLORE</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 12, marginTop: 16 }} >
            <Image source={require('./../../assets/myImages/ellipse6.png')} style={{ width: 45, height: 45, borderRadius: 12 }} />
            <View>
              <View style={{ flexDirection: "row", alignItems: "center", gap: 3, marginBottom: 4 }} >
                <Text style={{ fontWeight: "700", color: "#000" }}>Your Friends</Text>
                <Text> just received Pulsa Voucher</Text>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center", gap: 6 }} >
                <Text>from</Text>
                <Text style={{ fontWeight: "700", color: "#3f8ce2" }}>DANA Surprize</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Photos */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingVertical: 12 }}>
          <Image source={require('./../../assets/myImages/rectangle3.png')} style={{ width: 307, height: 127, borderRadius: 12, marginRight: 8 }} />
          <Image source={require('./../../assets/myImages/rectangle31.png')} style={{ width: 307, height: 127, borderRadius: 12, marginRight: 8 }} />
          <Image source={require('./../../assets/myImages/rectangle32.png')} style={{ width: 307, height: 127, borderRadius: 12, marginRight: 8 }} />
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  )
}