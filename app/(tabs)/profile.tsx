import {
  ArrowDownCircle,
  ArrowUpCircle,
  ChevronRight,
  Coins,
  FileText,
  Headphones,
  Info,
  LogOut,
  Percent,
  QrCode,
  Settings,
  Target,
  User,
  Users,
  Wallet
} from 'lucide-react-native';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Profile() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f5f5f5' }}>
      <ScrollView>
        {/* Header Blue Section */}
        <View style={{ backgroundColor: "#118eea", padding: 20}}>

          {/* Toggle Personal/Bisnis */}
          <View style={{ flexDirection: "row", backgroundColor: "#0e78c8", borderRadius: 10, padding: 4, marginBottom: 25 }}>
            <TouchableOpacity style={{ flex: 1, backgroundColor: "#4ca9ef", paddingVertical: 8, borderRadius: 8 }}>
              <Text style={{ color: "#fff", textAlign: "center", fontWeight: 'bold' }}>Personal</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ flex: 1, paddingVertical: 8 }}>
              <Text style={{ color: "#fff", textAlign: "center" }}>Bisnis</Text>
            </TouchableOpacity>
          </View>

          {/* Profile Info */}
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
            <View style={{ width: 60, height: 60, borderRadius: 30, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center' }}>
              <User size={30} color="#cbd5e0" />
            </View>
            <View style={{ marginLeft: 15, flex: 1 }}>
              <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold' }}>08••••••••60</Text>
              <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5, borderWidth: 1, borderColor: 'rgba(255,255,255,0.5)', borderRadius: 20, paddingHorizontal: 10, paddingVertical: 2, alignSelf: 'flex-start' }}>
                <QrCode size={14} color="#fff" />
                <Text style={{ color: '#fff', fontSize: 12, marginLeft: 5, fontWeight: 'bold' }}>MY QR</Text>
                <ChevronRight size={16} color="#fff" />
              </TouchableOpacity>
            </View>
            <ChevronRight size={30} color="#fff" />
          </View>
        </View>

        {/* Content Area */}
        <View style={{ marginTop: 16, paddingHorizontal: 15 }}>

          {/* Icon Grid Section (Manual) */}
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', backgroundColor: '#fff', marginTop: 15, borderRadius: 10, paddingVertical: 20 }}>
            {/* Balance */}
            <View style={{ width: '33.3%', alignItems: 'center', marginBottom: 20 }}>
              <Wallet size={24} color="#118eea" />
              <Text style={{ fontSize: 12, fontWeight: 'bold', marginTop: 8 }}>Balance</Text>
              <Text style={{ fontSize: 10, color: '#118eea' }}>Let's Top Up</Text>
            </View>
            {/* DANA Goals */}
            <View style={{ width: '33.3%', alignItems: 'center', marginBottom: 20 }}>
              <Target size={24} color="#e91e63" />
              <Text style={{ fontSize: 12, fontWeight: 'bold', marginTop: 8 }}>DANA Goals</Text>
              <Text style={{ fontSize: 10, color: '#118eea' }}>Create goals!</Text>
            </View>
            {/* Family Account */}
            <View style={{ width: '33.3%', alignItems: 'center', marginBottom: 20 }}>
              <Users size={24} color="#f39c12" />
              <Text style={{ fontSize: 12, fontWeight: 'bold', marginTop: 8 }}>Family Account</Text>
              <Text style={{ fontSize: 10, color: '#118eea' }}>Let's Activate!</Text>
            </View>
            {/* eMAS */}
            <View style={{ width: '33.3%', alignItems: 'center' }}>
              <Coins size={24} color="#f1c40f" />
              <Text style={{ fontSize: 12, fontWeight: 'bold', marginTop: 8 }}>eMAS</Text>
              <Text style={{ fontSize: 10, color: '#118eea' }}>Start Investing</Text>
            </View>
          </View>

          {/* Income & Expense */}
          <View style={{ flexDirection: 'row', backgroundColor: '#fff', marginTop: 15, borderRadius: 10, padding: 15 }}>
            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', borderRightWidth: 1, borderRightColor: '#eee' }}>
              <ArrowUpCircle size={24} color="#27ae60" />
              <View style={{ marginLeft: 10 }}>
                <Text style={{ fontSize: 12, color: '#7b7b7b' }}>Income</Text>
                <Text style={{ fontWeight: 'bold' }}>Rp0</Text>
              </View>
            </View>
            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', paddingLeft: 15 }}>
              <ArrowDownCircle size={24} color="#f39c12" />
              <View style={{ marginLeft: 10 }}>
                <Text style={{ fontSize: 12, color: '#7b7b7b' }}>Expense</Text>
                <Text style={{ fontWeight: 'bold' }}>Rp0</Text>
              </View>
            </View>
          </View>

          {/* Menu List (Manual) */}
          <View style={{ backgroundColor: '#fff', marginTop: 15, borderRadius: 10, marginBottom: 20 }}>
            {/* My Bills */}
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', padding: 18, borderBottomWidth: 1, borderBottomColor: '#f0f0f0' }}>
              <FileText size={20} color="#f39c12" />
              <Text style={{ flex: 1, marginLeft: 15, fontSize: 16, color: '#333' }}>My Bills</Text>
              <ChevronRight size={24} color="#ccc" />
            </TouchableOpacity>

            {/* Voucher Promo */}
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', padding: 18, borderBottomWidth: 1, borderBottomColor: '#f0f0f0' }}>
              <Percent size={20} color="#f39c12" />
              <Text style={{ flex: 1, marginLeft: 15, fontSize: 16, color: '#333' }}>Voucher Promo</Text>
              <ChevronRight size={24} color="#ccc" />
            </TouchableOpacity>

            {/* Settings */}
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', padding: 18, borderBottomWidth: 1, borderBottomColor: '#f0f0f0' }}>
              <Settings size={20} color="#118eea" />
              <Text style={{ flex: 1, marginLeft: 15, fontSize: 16, color: '#333' }}>Settings</Text>
              <ChevronRight size={24} color="#ccc" />
            </TouchableOpacity>

            {/* General Info */}
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', padding: 18, borderBottomWidth: 1, borderBottomColor: '#f0f0f0' }}>
              <Info size={20} color="#27ae60" />
              <Text style={{ flex: 1, marginLeft: 15, fontSize: 16, color: '#333' }}>General Info</Text>
              <ChevronRight size={24} color="#ccc" />
            </TouchableOpacity>

            {/* DIANA */}
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', padding: 18 }}>
              <View style={{ width: 28, height: 28, borderRadius: 14, backgroundColor: '#118eea', justifyContent: 'center', alignItems: 'center' }}>
                <Headphones size={16} color="#fff" />
              </View>
              <View style={{ flex: 1, marginLeft: 15 }}>
                <Text style={{ fontSize: 16, color: '#333' }}>DIANA is here to help!</Text>
                <Text style={{ fontSize: 12, color: '#aaa' }}>Let's chat if you need assistance.</Text>
              </View>
              <ChevronRight size={24} color="#ccc" />
            </TouchableOpacity>
          </View>

          {/* Log Out */}
          <View style={{ backgroundColor: '#fff', borderRadius: 10, marginBottom: 50, borderColor: '#ff0000', borderWidth: 1 }}>
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', padding: 18 }}>
              <LogOut size={20} color="#ff0000" />
              <Text style={{ flex: 1, marginLeft: 15, fontSize: 16, color: '#ff0000', fontWeight: '700' }}>Log Out</Text>
            </TouchableOpacity>
          </View>

          <Text style={{ textAlign: 'center', color: '#aaa', fontSize: 12, marginBottom: 50 }}>Version 2.112.0</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}