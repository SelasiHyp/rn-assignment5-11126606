// HomeScreen.js
import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useTheme } from './ThemeContext'; // Ensure the import is correct
import BottomNavBar from './bottomNavBar';

export default function HomeScreen({ navigation }) {
  const { theme, isDark } = useTheme();

  const transactions = [
    { icon: require('./assets/apple.png'), text: 'Apple Store', category: 'Entertainment', amount: -5.99 },
    { icon: require('./assets/spotify.png'), text: 'Spotify', category: 'Music', amount: -12.99 },
    { icon: require('./assets/moneyTransfer.png'), text: 'Money Transfer', category: 'Transaction', amount: 300 },
    { icon: require('./assets/grocery.png'), text: 'Grocery', category: 'Grocery', amount: -88 },
  ];

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Image source={require('./assets/profile.png')} style={[styles.profilePic, isDark && { tintColor: 'white' }]} />
          <View style={styles.profileText}>
            <Text style={[styles.welcomeText, { color: theme.colors.text }]}>Welcome back,</Text>
            <Text style={[styles.profileName, { color: 'white' }]}>Eric Atsu</Text>
          </View>
          <TouchableOpacity onPress={() => {}}>
            <Image source={require('./assets/search.png')} style={[styles.searchIcon, isDark && { tintColor: 'white' }]} />
          </TouchableOpacity>
        </View>
        <Image source={require('./assets/Card.png')} style={[styles.cardImage, isDark && { tintColor: 'white' }]} />
        <View style={styles.topButtons}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={() => {}}>
              <Image source={require('./assets/send.png')} style={[styles.buttonIcon, isDark && { tintColor: 'white' }]} />
              <Text style={[styles.topUpText, { color: 'white' }]}>Sent</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={() => {}}>
              <Image source={require('./assets/receive.png')} style={[styles.buttonIcon, isDark && { tintColor: 'white' }]} />
              <Text style={[styles.topUpText, { color: 'white' }]}>Receive</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={() => {}}>
              <Image source={require('./assets/loan.png')} style={[styles.buttonIcon, isDark && { tintColor: 'white' }]} />
              <Text style={[styles.topUpText, { color: 'white' }]}>Loan</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={() => {}}>
              <Image source={require('./assets/topUp.png')} style={[styles.buttonIcon, isDark && { tintColor: 'white' }]} />
              <Text style={[styles.topUpText, { color: 'white' }]}>Topup</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.transactionHeaderContainer}>
          <Text style={[styles.transactionHeader, { color: theme.colors.text }]}>Transaction</Text>
          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.sellAll}>Sell All</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.transactions}>
          {transactions.map((transaction, index) => (
            <View key={index} style={styles.transactionItem}>
              <Image source={transaction.icon} style={[styles.transactionIcon, isDark && { tintColor: 'white' }]} />
              <View style={styles.transactionDetails}>
                <Text style={[styles.transactionText, { color: theme.colors.text }]}>{transaction.text}</Text>
                <Text style={[styles.categoryText, { color: theme.colors.textSecondary }]}>{transaction.category}</Text>
              </View>
              <Text style={[
                styles.transactionAmount,
                { color: transaction.amount > 0 ? 'blue' : theme.colors.text }
              ]}>
                ${transaction.amount.toFixed(2)}
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>
      <BottomNavBar navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 20,
  },
  profilePic: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  profileText: {
    left: 8,
    flex: 1,
    flexDirection: 'column',
  },
  welcomeText: {
    fontSize: 16,
    letterSpacing: -1,
  },
  profileName: {
    fontSize: 24,
    fontWeight: '800',
    letterSpacing: -1,
    color: 'white', // Ensures the profile name stays white
  },
  searchIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  cardImage: {
    width: '100%',
    borderRadius: 30,
    height: 200,
    marginVertical: 10,
  },
  topButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  buttonContainer: {
    width: 90,
    height: 90,
    borderRadius: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonIcon: {
    width: 50,
    borderRadius:25,
    height: 50,
  },
  topUpText: {
    alignItems: 'center',
    fontSize: 14,
    fontWeight: '600',
    marginTop: 8,
    color: 'white', // Ensures the button text stays white
  },
  transactions: {
    flex: 1,
    marginBottom: 20,
  },
  transactionHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  transactionHeader: {
    fontSize: 18,
    fontWeight: '600',
  },
  sellAll: {
    fontSize: 16,
    color: 'blue',
  },
  transactionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  transactionIcon: {
    width: 40,
    height: 40,
  },
  transactionDetails: {
    flex: 1,
    marginLeft: 10,
  },
  transactionText: {
    fontSize: 16,
    fontWeight: '600',
  },
  categoryText: {
    fontSize: 14,
    color: '#666',
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: '600',
  },
});
