import { useRouter } from 'expo-router';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function DashboardScreen() {
  const router = useRouter();

  return (
    <View style={styles.wrapper}>

      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.headerTitle}>ViLedger</Text>
          <Text style={styles.headerSub}>Good Morning, Vishnu! 👋</Text>
        </View>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>VS</Text>
        </View>
      </View>

      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>

        {/* Summary Cards */}
        <View style={styles.row}>
          <View style={[styles.card, styles.creditCard]}>
            <Text style={styles.cardIcon}>📤</Text>
            <Text style={styles.cardLabel}>Credit Today</Text>
            <Text style={styles.cardAmount}>₹ 1,200</Text>
          </View>
          <View style={[styles.card, styles.paymentCard]}>
            <Text style={styles.cardIcon}>📥</Text>
            <Text style={styles.cardLabel}>Received Today</Text>
            <Text style={styles.cardAmount}>₹ 800</Text>
          </View>
        </View>

        {/* Pending Balance */}
        <View style={styles.pendingCard}>
          <Text style={styles.pendingLabel}>Total Pending Balance</Text>
          <Text style={styles.pendingAmount}>₹ 12,500</Text>
          <Text style={styles.pendingNote}>across 2 customers</Text>
        </View>

        {/* Customer List */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Your Customers</Text>
          <TouchableOpacity onPress={() => router.push('/add-customer')}>
            <Text style={styles.seeAll}>+ Add New</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.customerCard} onPress={() => router.push('/add-credit')}>
          <View style={styles.customerAvatar}>
            <Text style={styles.customerAvatarText}>RK</Text>
          </View>
          <View style={styles.customerInfo}>
            <Text style={styles.customerName}>Raju Kumar</Text>
            <Text style={styles.customerPhone}>98765 43210</Text>
          </View>
          <View style={styles.customerRight}>
            <Text style={styles.balanceText}>₹ 500</Text>
            <Text style={styles.balanceLabel}>pending</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.customerCard} onPress={() => router.push('/history')}>
          <View style={[styles.customerAvatar, styles.avatarGreen]}>
            <Text style={styles.customerAvatarText}>MD</Text>
          </View>
          <View style={styles.customerInfo}>
            <Text style={styles.customerName}>Meena Devi</Text>
            <Text style={styles.customerPhone}>91234 56789</Text>
          </View>
          <View style={styles.customerRight}>
            <Text style={styles.balanceText}>₹ 1,200</Text>
            <Text style={styles.balanceLabel}>pending</Text>
          </View>
        </TouchableOpacity>

        <View style={{ height: 100 }} />
      </ScrollView>

      {/* Floating Action Button */}
      <TouchableOpacity style={styles.fab} onPress={() => router.push('/add-credit')}>
        <Text style={styles.fabText}>+ Add Credit</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#f0f4f8',
  },
  header: {
    backgroundColor: '#1E5B8A',
    padding: 24,
    paddingTop: 48,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  headerSub: {
    fontSize: 14,
    color: '#B3D4EC',
    marginTop: 2,
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1E5B8A',
  },
  container: {
    flex: 1,
    padding: 20,
  },
  row: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 12,
    marginTop: 20,
  },
  card: {
    flex: 1,
    borderRadius: 16,
    padding: 16,
  },
  creditCard: {
    backgroundColor: '#FFE8E8',
  },
  paymentCard: {
    backgroundColor: '#E8F5E9',
  },
  cardIcon: {
    fontSize: 24,
    marginBottom: 8,
  },
  cardLabel: {
    fontSize: 12,
    color: '#666666',
    marginBottom: 4,
  },
  cardAmount: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333333',
  },
  pendingCard: {
    backgroundColor: '#1E5B8A',
    borderRadius: 20,
    padding: 24,
    alignItems: 'center',
    marginBottom: 24,
  },
  pendingLabel: {
    fontSize: 13,
    color: '#B3D4EC',
    marginBottom: 4,
  },
  pendingAmount: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  pendingNote: {
    fontSize: 12,
    color: '#B3D4EC',
    marginTop: 4,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
  },
  seeAll: {
    fontSize: 14,
    color: '#1E5B8A',
    fontWeight: '600',
  },
  customerCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  customerAvatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#1E5B8A',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  avatarGreen: {
    backgroundColor: '#2E7D32',
  },
  customerAvatarText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  customerInfo: {
    flex: 1,
  },
  customerName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
  },
  customerPhone: {
    fontSize: 13,
    color: '#888888',
    marginTop: 2,
  },
  customerRight: {
    alignItems: 'flex-end',
  },
  balanceText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#E53935',
  },
  balanceLabel: {
    fontSize: 11,
    color: '#888888',
    marginTop: 2,
  },
  fab: {
    position: 'absolute',
    bottom: 24,
    right: 24,
    backgroundColor: '#1E5B8A',
    borderRadius: 30,
    paddingHorizontal: 24,
    paddingVertical: 14,
    elevation: 6,
  },
  fabText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});