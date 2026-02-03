import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Tabs } from 'expo-router';
import { CircleUser, QrCode, ReceiptText, Wallet } from 'lucide-react-native';
import React from 'react';
import { Platform, Text, TouchableOpacity, View } from 'react-native';

// Tambahkan type agar TS tidak marah
interface PayButtonProps {
  onPress?: (e: any) => void;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  const PayButton = ({ onPress }: PayButtonProps) => (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={{
        top: -25, // Diangkat biar floating
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <View
        style={{
          width: 70,
          height: 70,
          borderRadius: 35,
          backgroundColor: '#3b82f6',
          justifyContent: 'center',
          alignItems: 'center',
          // Shadow
          ...Platform.select({
            ios: {
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.3,
              shadowRadius: 4,
            },
            android: {
              elevation: 8,
            },
          }),
          borderWidth: 4,
          borderColor: 'white', // Border putih pemisah
        }}
      >
        <QrCode size={28} color="white" />
        <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold', marginTop: 2 }}>
          PAY
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarStyle: {
          height: 65,
          paddingBottom: 10,
          backgroundColor: 'white',
          borderTopWidth: 0, // Hilangkan garis atas tipis
          elevation: 10, // Shadow untuk tab bar
        }
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="activity"
        options={{
          title: 'Activity',
          tabBarIcon: ({ color }) => <ReceiptText size={28} color={color} />,
        }}
      />

      <Tabs.Screen
        name="pay"
        options={{
          tabBarLabel: () => null,
          tabBarButton: (props) => <PayButton {...props} />,
        }}
      />

      <Tabs.Screen
        name="wallet"
        options={{
          title: 'Wallet',
          tabBarIcon: ({ color }) => <Wallet size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Account',
          tabBarIcon: ({ color }) => <CircleUser size={28} color={color} />,
        }}
      />
    </Tabs>
  );
}