import React, {useState} from 'react';
import {StyleSheet, View, Button, FlatList, StatusBar} from 'react-native';

import GoalItem from './GoalItem';
import GoalInput from './GoalInput';
interface Goal {
  text: string;
  id: string;
}

export default function App() {
  const [isModelVisible, setIsModalVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState<Goal[]>([]);

  const startAddGoalHandler = () => {
    setIsModalVisible(true);
  };

  const endAddGoalHandler = () => {
    setIsModalVisible(false);
  };

  const addGoalHandler = (enteredGoalText: string) => {
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals,
      {text: enteredGoalText, id: Math.random().toString()},
    ]);
    endAddGoalHandler();
  };

  const deleteGoalHandler = (id: string) => {
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter(goal => goal.id !== id);
    });
  };

  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={styles.appContainer}>
        <Button
          title="Add new goal"
          color="#a065ec"
          onPress={startAddGoalHandler}
        />
        <GoalInput
          visible={isModelVisible}
          onAddGoal={addGoalHandler}
          onCancel={endAddGoalHandler}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            renderItem={itemData => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  id={itemData.item.id}
                  onDeleteItem={deleteGoalHandler}
                />
              );
            }}
            keyExtractor={item => item.id}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  },
});
