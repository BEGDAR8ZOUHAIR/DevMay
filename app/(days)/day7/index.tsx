import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, FlatList, Modal, SafeAreaView } from 'react-native';
import { Svg, Circle, Path } from 'react-native-svg';

const IconHome = (props :any) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <Path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
    <Path d="M9 22V12h6v10" />
  </Svg>
);


const IconList = (props :any) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <Path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" />
  </Svg>
);

const IconChart = (props :any) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <Path d="M18 20V10M12 20V4M6 20v-6" />
  </Svg>
);

const FitTrack = () => {
  const [workouts, setWorkouts] = useState([]);
  const [newWorkout, setNewWorkout] = useState({ activity: '', duration: '', calories: '' });
  const [currentScreen, setCurrentScreen] = useState('home');
  const [modalVisible, setModalVisible] = useState(false);

  const addWorkout = () => {
    if (newWorkout.activity && newWorkout.duration && newWorkout.calories) {
      setWorkouts([{ ...newWorkout, id: Date.now() }, ...workouts]);
      setNewWorkout({ activity: '', duration: '', calories: '' });
      setModalVisible(false);
    }
  };

  const HomeScreen = () => (
    <ScrollView style={styles.screenContainer}>
      <Text style={styles.greeting}>Hello, Fitness Enthusiast!</Text>
      <Text style={styles.subtitle}>Let's crush your goals today</Text>
      
      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>{workouts.length}</Text>
          <Text style={styles.statLabel}>Workouts</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>
            {workouts.reduce((sum, workout) => sum + parseInt(workout.duration), 0)}
          </Text>
          <Text style={styles.statLabel}>Minutes</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>
            {workouts.reduce((sum, workout) => sum + parseInt(workout.calories), 0)}
          </Text>
          <Text style={styles.statLabel}>Calories</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Recent Workouts</Text>
      {workouts.slice(0, 3).map((workout) => (
        <View key={workout.id} style={styles.workoutItem}>
          <View style={styles.workoutIcon}>
            <Text style={styles.workoutIconText}>{workout.activity[0].toUpperCase()}</Text>
          </View>
          <View style={styles.workoutInfo}>
            <Text style={styles.workoutActivity}>{workout.activity}</Text>
            <Text style={styles.workoutDetails}>{workout.duration} min | {workout.calories} cal</Text>
          </View>
        </View>
      ))}

      <TouchableOpacity style={styles.addButton} onPress={() => setModalVisible(true)}>
        <Text style={styles.addButtonText}>Add New Workout</Text>
      </TouchableOpacity>
    </ScrollView>
  );

  const WorkoutListScreen = () => (
    <FlatList
      style={styles.screenContainer}
      data={workouts}
      keyExtractor={(item) => item.id.toString()}
      ListHeaderComponent={<Text style={styles.sectionTitle}>Your Workout History</Text>}
      renderItem={({ item }) => (
        <View style={styles.workoutItem}>
          <View style={styles.workoutIcon}>
            <Text style={styles.workoutIconText}>{item.activity[0].toUpperCase()}</Text>
          </View>
          <View style={styles.workoutInfo}>
            <Text style={styles.workoutActivity}>{item.activity}</Text>
            <Text style={styles.workoutDetails}>{item.duration} min | {item.calories} cal</Text>
          </View>
        </View>
      )}
    />
  );

  const ProgressScreen = () => (
    <ScrollView style={styles.screenContainer}>
      <Text style={styles.sectionTitle}>Your Fitness Journey</Text>
      <View style={styles.progressCard}>
        <Text style={styles.progressTitle}>Total Workouts</Text>
        <Text style={styles.progressValue}>{workouts.length}</Text>
      </View>
      <View style={styles.progressCard}>
        <Text style={styles.progressTitle}>Total Time</Text>
        <Text style={styles.progressValue}>
          {workouts.reduce((sum, workout) => sum + parseInt(workout.duration), 0)} min
        </Text>
      </View>
      <View style={styles.progressCard}>
        <Text style={styles.progressTitle}>Calories Burned</Text>
        <Text style={styles.progressValue}>
          {workouts.reduce((sum, workout) => sum + parseInt(workout.calories), 0)} cal
        </Text>
      </View>
    </ScrollView>
  );

  return (
    <SafeAreaView style={styles.container}>
      {currentScreen === 'home' && <HomeScreen />}
      {currentScreen === 'workouts' && <WorkoutListScreen />}
      {currentScreen === 'progress' && <ProgressScreen />}

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>Add New Workout</Text>
            <TextInput
              style={styles.input}
              placeholder="Activity"
              placeholderTextColor="#A0A0A0"
              value={newWorkout.activity}
              onChangeText={(text) => setNewWorkout({...newWorkout, activity: text})}
            />
            <TextInput
              style={styles.input}
              placeholder="Duration (minutes)"
              placeholderTextColor="#A0A0A0"
              value={newWorkout.duration}
              onChangeText={(text) => setNewWorkout({...newWorkout, duration: text})}
              keyboardType="numeric"
            />
            <TextInput
              style={styles.input}
              placeholder="Calories burned"
              placeholderTextColor="#A0A0A0"
              value={newWorkout.calories}
              onChangeText={(text) => setNewWorkout({...newWorkout, calories: text})}
              keyboardType="numeric"
            />
            <TouchableOpacity style={styles.addButton} onPress={addWorkout}>
              <Text style={styles.addButtonText}>Save Workout</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.closeButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <View style={styles.navbar}>
        <TouchableOpacity style={styles.navButton} onPress={() => setCurrentScreen('home')}>
          <IconHome stroke={currentScreen === 'home' ? '#007AFF' : '#A0A0A0'} />
          <Text style={[styles.navButtonText, currentScreen === 'home' && styles.navButtonTextActive]}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => setCurrentScreen('workouts')}>
          <IconList stroke={currentScreen === 'workouts' ? '#007AFF' : '#A0A0A0'} />
          <Text style={[styles.navButtonText, currentScreen === 'workouts' && styles.navButtonTextActive]}>Workouts</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => setCurrentScreen('progress')}>
          <IconChart stroke={currentScreen === 'progress' ? '#007AFF' : '#A0A0A0'} />
          <Text style={[styles.navButtonText, currentScreen === 'progress' && styles.navButtonTextActive]}>Progress</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F6F8',
  },
  screenContainer: {
    flex: 1,
    padding: 20,
  },
  greeting: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 20,
    marginBottom: 15,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007AFF',
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  workoutItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  workoutIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  workoutIconText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  workoutInfo: {
    flex: 1,
  },
  workoutActivity: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  workoutDetails: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  addButton: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  addButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  progressCard: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 20,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  progressTitle: {
    fontSize: 18,
    color: '#666',
    marginBottom: 10,
  },
  progressValue: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#007AFF',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  input: {
    height: 50,
    width: '100%',
    borderColor: '#E0E0E0',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 15,
    paddingHorizontal: 15,
    fontSize: 16,
  },
  closeButton: {
    marginTop: 10,
  },
  closeButtonText: {
    color: '#007AFF',
    fontSize: 16,
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  navButton: {
    alignItems: 'center',
  },
  navButtonText: {
    color: '#A0A0A0',
    fontSize: 12,
    marginTop: 5,
  },
  navButtonTextActive: {
    color: '#007AFF',
  },
});

export default FitTrack;