import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useTheme } from './ThemeContext';
import Icon from 'react-native-vector-icons/FontAwesome';

const BottomNavBar = ({ navigation, currentRouteName }) => {
  const { theme } = useTheme();

  const getIconColor = (routeName) => {
    return currentRouteName === routeName ? 'blue' : theme.colors.text;
  };

  return (
    <View style={[styles.navBar, { backgroundColor: theme.colors.surface }]}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.navItem}>
        <Icon name="home" size={24} color={getIconColor('Home')} style={styles.navIcon} />
        <Text style={[styles.navText, { color: getIconColor('Home') }]}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('MyCards')} style={styles.navItem}>
        <Icon name="credit-card" size={24} color={getIconColor('MyCards')} style={styles.navIcon} />
        <Text style={[styles.navText, { color: getIconColor('MyCards') }]}>My Cards</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Statistics')} style={styles.navItem}>
        <Icon name="line-chart" size={24} color={getIconColor('Statistics')} style={styles.navIcon} />
        <Text style={[styles.navText, { color: getIconColor('Statistics') }]}>Statistics</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Settings')} style={styles.navItem}>
        <Icon name="cog" size={24} color={getIconColor('Settings')} style={styles.navIcon} />
        <Text style={[styles.navText, { color: getIconColor('Settings') }]}>Settings</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff', 
    height: 60,
  },
  navItem: {
    alignItems: 'center',
  },
  navIcon: {
    width: 24,
    height: 24,
  },
  navText: {
    fontSize: 14,
    fontWeight: '600',
    marginTop: 5,
  },
});

export default BottomNavBar;
