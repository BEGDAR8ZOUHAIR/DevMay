import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Stack, useNavigation } from 'expo-router';
import Header from '@/components/header/Header';
import { Ionicons, Octicons } from '@expo/vector-icons';

const BMICalculator = () => {
  const [name, setName] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBMI] = useState(null);
  const [bmiCategory, setBMICategory] = useState('');
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const calculateBMI = () => {

    
    const weightNum = parseFloat(weight);
    const heightNum = parseFloat(height) / 100; // Convert cm to m
    if (weightNum > 0 && heightNum > 0) {
      const bmiValue = weightNum / (heightNum * heightNum);
      setBMI(bmiValue.toFixed(1));
      setBMICategory(getBMICategory(bmiValue));
    }
  };

  const getBMICategory = (bmi) => {
    if (bmi < 18.5) return 'Underweight';
    if (bmi < 25) return 'Normal weight';
    if (bmi < 30) return 'Overweight';
    return 'Obese';
  };

  const getCategoryColor = () => {
    if (!bmi) return styles.normalColor;
    if (bmi < 18.5) return styles.underweightColor;
    if (bmi < 25) return styles.normalColor;
    if (bmi < 30) return styles.overweightColor;
    return styles.obeseColor;
  };

  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };

	const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.safeArea}>
      	<Stack.Screen options={{ headerShown: false }} />
			<Header
				leftButton={{ child: <Ionicons name="arrow-back-outline" size={30} color="#9b4521" />, onPress: () => navigation.goBack() }}
				rightButton={{ child: <Octicons name="info" size={30} color="#9b4521" />, onPress: () => alert('Info') }}
				middleButton={{ child: <Text style={{ fontSize: 25, fontFamily: 'SpaceMono' }}>Editor</Text> }}
			/>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.container}>
          <Text style={styles.title}>BMI Calculator</Text>
          
          <TextInput
            style={styles.input}
            placeholder="Full Name"
            value={name}
            onChangeText={setName}
          />

         

          <TextInput
            style={styles.input}
            placeholder="Weight (kg)"
            keyboardType="numeric"
            value={weight}
            onChangeText={setWeight}
          />

          <TextInput
            style={styles.input}
            placeholder="Height (cm)"
            keyboardType="numeric"
            value={height}
            onChangeText={setHeight}
          />
          
          <TouchableOpacity style={styles.dateInput} onPress={() => setShowDatePicker(true)}>
            <Text style={styles.dateText}>
              {date.toLocaleDateString()}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={calculateBMI}>
            <Text style={styles.buttonText}>Calculate BMI</Text>
          </TouchableOpacity>

          {bmi && (
            <View style={[styles.resultContainer, getCategoryColor()]}>
              <Text style={styles.resultText}>Your BMI</Text>
              <Text style={styles.bmiValue}>{bmi}</Text>
              <Text style={styles.categoryText}>{bmiCategory}</Text>
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f0f4f8',
  },
  scrollView: {

    justifyContent: 'center',
  },
  container: {
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#2c3e50',
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#bdc3c7',
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 20,
    marginBottom: 15,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  dateInput: {
    width: '100%',
    height: 50,
    borderColor: '#bdc3c7',
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 20,
    marginBottom: 15,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  dateText: {
    fontSize: 16,
    color: '#34495e',
  },
  button: {
    backgroundColor: '#3498db',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  resultContainer: {
    marginTop: 30,
    alignItems: 'center',
    padding: 20,
    borderRadius: 15,
    width: '100%',
  },
  resultText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
  },
  bmiValue: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#fff',
    marginVertical: 10,
  },
  categoryText: {
    fontSize: 20,
    color: '#fff',
    marginTop: 5,
  },
  underweightColor: { backgroundColor: '#3498db' },
  normalColor: { backgroundColor: '#2ecc71' },
  overweightColor: { backgroundColor: '#f39c12' },
  obeseColor: { backgroundColor: '#e74c3c' },
});

export default BMICalculator;