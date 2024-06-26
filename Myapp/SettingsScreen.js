// SettingsScreen.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Switch, TouchableOpacity } from 'react-native';
import { useTheme } from './ThemeContext'; // Ensure correct import
import BottomNavBar from './bottomNavBar';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import the icon

export default function SettingsScreen({ navigation }) {
  const { theme, toggleTheme, isDarkTheme } = useTheme(); // Retrieve toggleTheme and isDarkTheme from useTheme()

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <ScrollView>
        <Text style={[styles.header, { color: theme.colors.text }]}>Settings</Text>
        
        <TouchableOpacity style={styles.settingItem} onPress={() => console.log('Navigate to Language')}>
          <Text style={[styles.settingText, { color: theme.colors.text }]}>Language</Text>
          <Icon name="angle-right" size={24} color={theme.colors.text} />
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.settingItem} onPress={() => console.log('Navigate to My Profile')}>
          <Text style={[styles.settingText, { color: theme.colors.text }]}>My Profile</Text>
          <Icon name="angle-right" size={24} color={theme.colors.text} />
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.settingItem} onPress={() => console.log('Navigate to Contact Us')}>
          <Text style={[styles.settingText, { color: theme.colors.text }]}>Contact Us</Text>
          <Icon name="angle-right" size={24} color={theme.colors.text} />
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.settingItem} onPress={() => console.log('Navigate to Change Password')}>
          <Text style={[styles.settingText, { color: theme.colors.text }]}>Change Password</Text>
          <Icon name="angle-right" size={24} color={theme.colors.text} />
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.settingItem} onPress={() => console.log('Navigate to Privacy Policy')}>
          <Text style={[styles.settingText, { color: theme.colors.text }]}>Privacy Policy</Text>
          <Icon name="angle-right" size={24} color={theme.colors.text} />
        </TouchableOpacity>

        <View style={styles.switchContainer}>
          <Text style={[styles.settingText, { color: theme.colors.text }]}>Theme</Text>
          <TouchableOpacity style={styles.switchTouchable} onPress={toggleTheme}>
            <Switch
              value={isDarkTheme}
              onValueChange={toggleTheme} 
              thumbColor={isDarkTheme ? '#f4f3f4' : '#fff'}
              trackColor={{ false: '#767577', true: '#81b0ff' }}
              style={styles.switch}
            />
          </TouchableOpacity>
        </View>
        
      </ScrollView>
      <BottomNavBar navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 20 
  },
  header: { 
    fontSize: 26, 
    fontWeight: 'bold', 
    marginBottom: 20, 
    textAlign: 'center',
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  settingText: { 
    fontSize: 18, 
    fontWeight: '500',
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
  },
  switchTouchable: {
    borderRadius: 30, 
    padding: 10, 
    backgroundColor: 'transparent', 
  },
  switch: {
    transform: [{ scaleX: 1.6 }, { scaleY: 1.8 }], 
  },
});
