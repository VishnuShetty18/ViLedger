import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function DashboardScreen() {
  return (
    <ScrollView style={styles.container}>
      
      <Text style={styles.header}>Good Morning, Shopkeeper! 👋</Text>

      <View style={styles.row}>
        <View style={[styles.card, styles.creditCard]}>
          <Text style={styles.cardLabel}>Credit Given Today</Text>
          <Text style={styles.cardAmount}>₹ 1,200</Text>
        </View>
        <View style={[styles.card, styles.paymentCard]}>
          <Text style={styles.cardLabel}>Payments Received</Text>
          <Text style={styles.cardAmount}>₹ 800</Text>
        </View>
      </View>

      <View style={styles.pendingCard}>
        <Text style={styles.pendingLabel}>Total Pending Balance</Text>
        <Text style={styles.pendingAmount}>₹ 12,500</Text>
      </View>
      <Text style={styles.sectionTitle}>Your Customers</Text>

      <View style={styles.customerCard}>
        <View>
          <Text style={styles.customerName}>Raju Kumar</Text>
          <Text style={styles.customerPhone}>98765 43210</Text>
        </View>
        <View style={styles.balanceBadge}>
          <Text style={styles.balanceText}>₹ 500</Text>
        </View>
      </View>

      <View style={styles.customerCard}>
        <View>
          <Text style={styles.customerName}>Meena Devi</Text>
          <Text style={styles.customerPhone}>91234 56789</Text>
        </View>
        <View style={styles.balanceBadge}>
          <Text style={styles.balanceText}>₹ 1,200</Text>
        </View>
      </View>

    </ScrollView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333333',
    marginTop: 40,
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 12,
  },
  card: {
    flex: 1,
    borderRadius: 16,
    padding: 20,
  },
  creditCard: {
    backgroundColor: '#FFE8E8',
  },
  paymentCard: {
    backgroundColor: '#E8F5E9',
  },
  cardLabel: {
    fontSize: 13,
    color: '#666666',
    marginBottom: 8,
  },
  cardAmount: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
  },
  pendingCard: {
    backgroundColor: '#2E86AB',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    marginTop: 4,
  },
  pendingLabel: {
    fontSize: 14,
    color: '#ffffff',
    opacity: 0.8,
    marginBottom: 8,
  },
  pendingAmount: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
    marginTop: 24,
    marginBottom: 12,
  },
  customerCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#eeeeee',
  },
  customerName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
  },
  customerPhone: {
    fontSize: 13,
    color: '#888888',
    marginTop: 4,
  },
  balanceBadge: {
    backgroundColor: '#FFE8E8',
    borderRadius: 8,
    padding: 8,
  },
  balanceText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#E53935',
  },
});