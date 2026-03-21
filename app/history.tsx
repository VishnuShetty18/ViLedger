import { ScrollView, StyleSheet, Text, View } from 'react-native';

const transactions = [
  { id: 1, type: 'credit', amount: 500, notes: 'Rice 2kg, Sugar 1kg', date: '21/3/2026, 10:00 AM' },
  { id: 2, type: 'payment', amount: 200, notes: 'Cash payment', date: '21/3/2026, 02:00 PM' },
  { id: 3, type: 'credit', amount: 300, notes: 'Oil 1L, Biscuits', date: '20/3/2026, 11:00 AM' },
  { id: 4, type: 'payment', amount: 100, notes: 'UPI payment', date: '19/3/2026, 04:00 PM' },
  { id: 5, type: 'credit', amount: 450, notes: 'Vegetables', date: '18/3/2026, 09:00 AM' },
];

export default function HistoryScreen() {
  const totalCredit = transactions
    .filter(t => t.type === 'credit')
    .reduce((sum, t) => sum + t.amount, 0);

  const totalPayment = transactions
    .filter(t => t.type === 'payment')
    .reduce((sum, t) => sum + t.amount, 0);

  const balance = totalCredit - totalPayment;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Raju Kumar</Text>
      <Text style={styles.phone}>98765 43210</Text>

      <View style={styles.summaryRow}>
        <View style={[styles.summaryCard, styles.creditSummary]}>
          <Text style={styles.summaryLabel}>Total Credit</Text>
          <Text style={styles.summaryAmount}>₹ {totalCredit}</Text>
        </View>
        <View style={[styles.summaryCard, styles.paymentSummary]}>
          <Text style={styles.summaryLabel}>Total Paid</Text>
          <Text style={styles.summaryAmount}>₹ {totalPayment}</Text>
        </View>
      </View>

      <View style={styles.balanceCard}>
        <Text style={styles.balanceLabel}>Pending Balance</Text>
        <Text style={styles.balanceAmount}>₹ {balance}</Text>
      </View>

      <Text style={styles.sectionTitle}>Transaction History</Text>

      {transactions.map((transaction) => (
        <View key={transaction.id} style={styles.transactionCard}>
          <View style={[
            styles.typeBadge,
            transaction.type === 'credit' ? styles.creditBadge : styles.paymentBadge
          ]}>
            <Text style={styles.typeText}>
              {transaction.type === 'credit' ? 'CREDIT' : 'PAYMENT'}
            </Text>
          </View>
          <View style={styles.transactionDetails}>
            <Text style={styles.transactionNotes}>{transaction.notes}</Text>
            <Text style={styles.transactionDate}>{transaction.date}</Text>
          </View>
          <Text style={[
            styles.transactionAmount,
            transaction.type === 'credit' ? styles.creditAmount : styles.paymentAmount
          ]}>
            {transaction.type === 'credit' ? '+' : '-'} ₹{transaction.amount}
          </Text>
        </View>
      ))}

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333333',
    marginTop: 40,
    marginBottom: 4,
  },
  phone: {
    fontSize: 14,
    color: '#888888',
    marginBottom: 20,
  },
  summaryRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 12,
  },
  summaryCard: {
    flex: 1,
    borderRadius: 12,
    padding: 16,
  },
  creditSummary: {
    backgroundColor: '#FFE8E8',
  },
  paymentSummary: {
    backgroundColor: '#E8F5E9',
  },
  summaryLabel: {
    fontSize: 12,
    color: '#666666',
    marginBottom: 4,
  },
  summaryAmount: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333333',
  },
  balanceCard: {
    backgroundColor: '#2E86AB',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    marginBottom: 24,
  },
  balanceLabel: {
    fontSize: 13,
    color: '#ffffff',
    opacity: 0.8,
    marginBottom: 4,
  },
  balanceAmount: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 12,
  },
  transactionCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#eeeeee',
    gap: 12,
  },
  typeBadge: {
    borderRadius: 6,
    padding: 6,
    minWidth: 70,
    alignItems: 'center',
  },
  creditBadge: {
    backgroundColor: '#FFE8E8',
  },
  paymentBadge: {
    backgroundColor: '#E8F5E9',
  },
  typeText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#333333',
  },
  transactionDetails: {
    flex: 1,
  },
  transactionNotes: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333333',
  },
  transactionDate: {
    fontSize: 12,
    color: '#888888',
    marginTop: 2,
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  creditAmount: {
    color: '#E53935',
  },
  paymentAmount: {
    color: '#2E7D32',
  },
});