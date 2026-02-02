import { useRouter } from 'expo-router';
import React from 'react';
import { Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function splash() {
    const router = useRouter();
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
            router.replace('/(tabs)');
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFFFFF' }}>
      <Image source={require('./../assets/myImages/logoDanaLebar.png')}  style={{ width: 193, height: 55 }} />
    </SafeAreaView>
  )
}