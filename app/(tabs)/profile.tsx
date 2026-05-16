import { View, Text, TouchableOpacity } from 'react-native';
import { useLanguageStore } from '@/store/useLanguageStore';
import { useRouter } from 'expo-router';
import { useAuth } from '@clerk/expo';

export default function Profile() {
  const { selectedLanguage, clearLanguage } = useLanguageStore();
  const { signOut } = useAuth();
  const router = useRouter();

  return (
    <View className="flex-1 p-6 bg-white justify-center">
      <Text className="text-2xl font-bold mb-8 text-center">Profile</Text>

      <View className="bg-slate-50 p-6 rounded-2xl mb-8">
        <Text className="text-lg text-slate-600 mb-2">Selected Language:</Text>
        <Text className="text-3xl font-bold text-primary">
          {selectedLanguage ? selectedLanguage.name : 'None selected'}
        </Text>
      </View>

      <TouchableOpacity
        onPress={() => router.push('/language-selection')}
        className="bg-primary p-4 rounded-xl mb-4 items-center"
      >
        <Text className="text-white font-bold text-lg">Choose Language</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={clearLanguage}
        className="bg-slate-200 p-4 rounded-xl mb-4 items-center"
      >
        <Text className="text-slate-700 font-bold text-lg">Clear Language</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => signOut()}
        className="bg-red-50 p-4 rounded-xl items-center mt-8"
      >
        <Text className="text-red-600 font-bold text-lg">Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
}
