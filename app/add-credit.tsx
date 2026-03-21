import { useRouter } from 'expo-router';
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function AddCreditScreen() {
  const [amount, setAmount] = useState('');
  const [notes, setNotes] = useState('');
  const router = useRouter();

  const handleAddCredit = () => {
    if (amount.length === 0) {
      alert('Please enter an amount!');
      return;
    }
    alert(`Credit of ₹${amount} added successfully!`);
    router.back();
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Add Credit</Text>
      <Text style={styles.subtitle}>Recording credit for Raju Kumar</Text>

      <View style={styles.card}>

        <Text style={styles.label}>Amount (₹)</Text>
        <TextInput
          style={styles.amountInput}
          placeholder="0"
          keyboardType="numeric"
          value={amount}
          onChangeText={setAmount}
        />

        <Text style={styles.label}>Notes (optional)</Text>
        <TextInput
          style={styles.notesInput}
          placeholder="e.g. Rice 2kg, Sugar 1kg..."
          value={notes}
          onChangeText={setNotes}
          multiline
        />

        <View style={styles.dateRow}>
          <Text style={styles.label}>Date & Time</Text>
          <Text style={styles.dateText}>
            {new Date().toLocaleString('en-IN')}
          </Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleAddCredit}>
          <Text style={styles.buttonText}>Add Credit Entry</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.paymentButton} onPress={() => router.push('/add-payment')}>
          <Text style={styles.paymentButtonText}>Record Payment Instead</Text>
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
    backgroundColor: '#FFF3E0',
    borderWidth: 1,
    borderColor: '#FFB74D',
    borderRadius: 10,
    padding: 16,
    fontSize: 32,
    fontWeight: 'bold',
    color: '#E65100',
    textAlign: 'center',
    marginBottom: 8,
  },
  notesInput: {
    backgroundColor: '#f9f9f9',
    borderWidth: 1,
    borderColor: '#dddddd',
    borderRadius: 10,
    padding: 14,
    fontSize: 16,
    marginBottom: 8,
    minHeight: 80,
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
    backgroundColor: '#E53935',
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
  paymentButton: {
    backgroundColor: '#2E7D32',
    borderRadius: 10,
    padding: 16,
    alignItems: 'center',
    marginTop: 8,
  },
  paymentButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});