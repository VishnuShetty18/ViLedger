import { useRouter } from 'expo-router';
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function AddPaymentScreen() {
  const [amount, setAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('Cash');
  const router = useRouter();

  const handleAddPayment = () => {
    if (amount.length === 0) {
      alert('Please enter an amount!');
      return;
    }
    alert(`Payment of ₹${amount} via ${paymentMethod} recorded successfully!`);
    router.back();
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Record Payment</Text>
      <Text style={styles.subtitle}>Payment from Raju Kumar</Text>

      <View style={styles.card}>

        <Text style={styles.label}>Amount Received (₹)</Text>
        <TextInput
          style={styles.amountInput}
          placeholder="0"
          keyboardType="numeric"
          value={amount}
          onChangeText={setAmount}
        />

        <Text style={styles.label}>Payment Method</Text>
        <View style={styles.methodRow}>
          {['Cash', 'UPI', 'Bank Transfer'].map((method) => (
            <TouchableOpacity
              key={method}
              style={[
                styles.methodButton,
                paymentMethod === method && styles.methodButtonActive
              ]}
              onPress={() => setPaymentMethod(method)}
            >
              <Text style={[
                styles.methodText,
                paymentMethod === method && styles.methodTextActive
              ]}>
                {method}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.dateRow}>
          <Text style={styles.label}>Date & Time</Text>
          <Text style={styles.dateText}>
            {new Date().toLocaleString('en-IN')}
          </Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleAddPayment}>
          <Text style={styles.buttonText}>Record Payment</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cancelButton} onPress={() => router.back()}>
          <Text style={styles.cancelText}>Cancel</Text>
        </TouchableOpacity>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333333',
    marginTop: 40,
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#888888',
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
  amountInput: {
    backgroundColor: '#E8F5E9',
    borderWidth: 1,
    borderColor: '#81C784',
    borderRadius: 10,
    padding: 16,
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2E7D32',
    textAlign: 'center',
    marginBottom: 8,
  },
  methodRow: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 4,
  },
  methodButton: {
    flex: 1,
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#dddddd',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
  },
  methodButtonActive: {
    backgroundColor: '#2E86AB',
    borderColor: '#2E86AB',
  },
  methodText: {
    fontSize: 13,
    color: '#666666',
    fontWeight: '500',
  },
  methodTextActive: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  dateRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 12,
    marginBottom: 20,
    padding: 12,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
  },
  dateText: {
    fontSize: 13,
    color: '#666666',
  },
  button: {
    backgroundColor: '#2E7D32',
    borderRadius: 10,
    padding: 16,
    alignItems: 'center',
    marginTop: 8,
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