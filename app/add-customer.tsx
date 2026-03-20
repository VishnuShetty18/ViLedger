import { useRouter } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function AddCustomerScreen() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const router = useRouter();

  const handleAddCustomer = () => {
    if (name.length === 0) {
      alert('Please enter customer name!');
      return;
    }
    if (phone.length !== 10) {
      alert('Please enter a valid 10 digit phone number!');
      return;
    }
    alert(`Customer ${name} added successfully!`);
    router.back();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add New Customer</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Customer Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter full name"
          value={name}
          onChangeText={setName}
        />

        <Text style={styles.label}>Phone Number</Text>
        <TextInput
          style={styles.input}
          placeholder="98765 43210"
          keyboardType="phone-pad"
          maxLength={10}
          value={phone}
          onChangeText={setPhone}
        />

        <TouchableOpacity style={styles.button} onPress={handleAddCustomer}>
          <Text style={styles.buttonText}>Add Customer</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cancelButton} onPress={() => router.back()}>
          <Text style={styles.cancelText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 24,
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 24,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 24,
    borderWidth: 1,
    borderColor: '#eeeeee',
  },
  label: {
    fontSize: 14,
    color: '#444444',
    marginBottom: 8,
    marginTop: 12,
  },
  input: {
    backgroundColor: '#f9f9f9',
    borderWidth: 1,
    borderColor: '#dddddd',
    borderRadius: 10,
    padding: 14,
    fontSize: 16,
    marginBottom: 8,
  },
  button: {
    backgroundColor: '#2E86AB',
    borderRadius: 10,
    padding: 16,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  cancelButton: {
    borderRadius: 10,
    padding: 16,
    alignItems: 'center',
    marginTop: 8,
  },
  cancelText: {
    color: '#888888',
    fontSize: 16,
  },
});