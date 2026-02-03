import { Banknote, PlusSquare, Search, UserRound } from 'lucide-react-native';
import React, { useState } from 'react';
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function wallet() {

  const [isModal, setModal] = useState(false);
  const [isPopup, setPopup] = useState(false);

  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  const formatAmount = (value: string) => {
    const numericValue = value.replace(/[^0-9]/g, '');
    return numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }

  const toggleCloseAll = () => {
    setModal(false);
    setPopup(false);
  }

  const toggleKirim = () => {
    setModal(false);
    setPopup(true);
  }

  return (
    <SafeAreaView style={{ flex: 1 }} >
      <ScrollView style={{ flex: 1 }} >
        <View>
          <View style={{ backgroundColor: "#3f8ce2", padding: 24, paddingHorizontal: 32, height: 100 }} >

            <View style={{ marginTop: 16, justifyContent: "space-between", alignItems: "center", width: "100%", flexDirection: "row" }}>
              <Image source={require('./../../assets/myImages/logoDanaPutih.png')} style={{ width: 30, height: 30 }} />
              <Text style={{ color: "#fff", fontSize: 14, fontWeight: "700", textAlign: "center" }}>
                Wallet
              </Text>
              <TouchableOpacity onPress={() => setModal(true)}>
                <PlusSquare color="#fff" size={28} fill="#8CBAEE" />
              </TouchableOpacity>
            </View>

          </View>

          <View style={{ width: "90%", alignSelf: "center", marginTop: -16, position: "relative" }}>
            <Search color="#00000066" size={20} style={{ position: "absolute", top: 16, left: 12, zIndex: 10 }} />
            <TextInput placeholder="Search" style={{ backgroundColor: "#fff", borderRadius: 8, padding: 12, paddingVertical: 16, paddingLeft: 40 }} />
          </View>

          <Image source={require('./../../assets/myImages/bca.png')} style={{ width: 345, height: 396, alignSelf: "center", marginTop: 16 }} />
        </View>

        {/* Modal */}
      </ScrollView>

      {(isModal || isPopup) && (
        <View style={{ height: "100%", width: "100%", backgroundColor: "rgba(0, 0, 0, 0.5)", justifyContent: "center", alignItems: "center", position: "absolute", top: 0, left: 0 }} >
          <TouchableOpacity onPress={toggleCloseAll} style={{ position: "absolute", height: "100%", width: "100%" }} />

          {isModal && (
            <View style={{ width: "100%", backgroundColor: "transparent", position: "absolute", bottom: -30 }} >
              <View style={{ width: "100%", backgroundColor: "#fff", justifyContent: "center", alignItems: "center", zIndex: 20, borderTopLeftRadius: 20, borderTopRightRadius: 20, paddingVertical: 20 }} >
                <View style={{ width: "100%", borderRadius: 12, padding: 16 }} >
                  <Text style={{ fontSize: 18, fontWeight: "700", marginBottom: 20, textAlign: "center" }}>Kirim Uang</Text>
                  <View>
                    <TextInput placeholder="Masukkan Nomor Rekening" style={{ borderWidth: 1, borderColor: "#ccc", borderRadius: 8, padding: 12, marginBottom: 12 }} />
                    <TextInput placeholder="Masukkan Nama Penerima" style={{ borderWidth: 1, borderColor: "#ccc", borderRadius: 8, padding: 12, marginBottom: 12 }} value={name} onChangeText={setName} />
                    <TextInput placeholder="Masukkan Jumlah Uang (Satuan Rp)" style={{ borderWidth: 1, borderColor: "#ccc", borderRadius: 8, padding: 12, marginBottom: 12 }} keyboardType='numeric' value={amount} onChangeText={(text) => setAmount(formatAmount(text))} />
                    <TextInput placeholder="Catatan (Opsional)" style={{ borderWidth: 1, borderColor: "#ccc", borderRadius: 8, padding: 12, marginBottom: 12 }} />
                  </View>
                </View>
                <View style={{ width: "90%", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }} >
                  <TouchableOpacity onPress={() => setModal(false)} style={{ backgroundColor: "#efefef", paddingVertical: 12, paddingHorizontal: 24, marginTop: 8, width: "45%", borderRadius: 12 }} >
                    <Text style={{ fontSize: 16, fontWeight: "700", textAlign: "center" }}>Close</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => toggleKirim()} style={{ backgroundColor: "#3f8ce2", paddingVertical: 12, paddingHorizontal: 24, marginTop: 8, width: "45%", borderRadius: 12 }} >
                    <Text style={{ fontSize: 16, fontWeight: "700", textAlign: "center", color: "#fff" }}>Kirim</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}

          {isPopup && (
            <View style={{ width: "80%", backgroundColor: "#fff", justifyContent: "center", alignItems: "center", zIndex: 20, borderRadius: 20, padding: 24 }} >
              <Text style={{ fontSize: 18, fontWeight: "700", marginBottom: 16, textAlign: "center" }}>Uang Berhasil Dikirim!</Text>
              <Text style={{ fontSize: 16, textAlign: "center", marginBottom: 24 }}>Detail Transaksi:</Text>
              <View style={{ width: "100%", flexDirection: "column", gap: 16, marginBottom: 24 }} >
                <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }} >
                  <UserRound fill="#3f8ce2" color="#fff" size={28} style={{ alignSelf: "center" }} />
                  <View style={{ flexDirection: "row" }} >
                    <Text>Nama Penerima: </Text>
                    <Text style={{ fontWeight: "700" }} >{name}</Text>
                  </View>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }} >
                  <Banknote fill="#3f8ce2" color="#fff" size={28} style={{ alignSelf: "center" }} />
                  <View style={{ flexDirection: "row" }} >
                    <Text>Jumlah Uang: </Text>
                    <Text style={{ fontWeight: "700" }} >Rp {amount}</Text>
                  </View>
                </View>
              </View>
              <TouchableOpacity onPress={toggleCloseAll} style={{ backgroundColor: "#3f8ce2", paddingVertical: 12, paddingHorizontal: 24, borderRadius: 12, width: "100%" }} >
                <Text style={{ fontSize: 16, fontWeight: "700", textAlign: "center", color: "#fff" }}>OK</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      )}

    </SafeAreaView>

  )
}