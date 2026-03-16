import { useRouter } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function LoginScreen() {
  const [phone, setPhone] = useState('');
  const router = useRouter();

  const handleSendOTP = () => {
    if (phone.length === 10) {
      router.push('/dashboard');
    } else {
      alert('Please enter a valid 10 digit phone number!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.appName}>ViLedger</Text>
      <Text style={styles.tagline}>Digital Khata for every shop</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Enter your phone number</Text>
        <TextInput
          style={styles.input}
          placeholder="98765 43210"
          keyboardType="phone-pad"
          maxLength={10}
          value={phone}
          onChangeText={setPhone}
        />
        <TouchableOpacity style={styles.button} onPress={handleSendOTP}>
          <Text style={styles.buttonText}>Send OTP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  appName: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#2E86AB',
  },
  tagline: {
    fontSize: 16,
    color: '#666666',
    marginTop: 8,
    marginBottom: 40,
  },
  card: {
    width: '100%',
    backgroundColor: '#f9f9f9',
    borderRadius: 16,
    padding: 24,
    borderWidth: 1,
    borderColor: '#eeeeee',
  },
  label: {
    fontSize: 14,
    color: '#444444',
    marginBottom: 12,
  },
  input: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#dddddd',
    borderRadius: 10,
    padding: 14,
    fontSize: 18,
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#2E86AB',
    borderRadius: 10,
    padding: 16,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});