import React from 'react';
import {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
} from 'react-native';

interface Goal {
  Text: String;
  id: string;
}

export default function App() {
  const {enteredGoalText, setEnteredGoalText} = useState('');
  const {courseGoals, setCourseGoals} = useState<Goal[]>([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals,
      {Text: enteredGoalText, id: Math.random().toString()},
    ]);
  }

  return <View style={styles.appContainer} />;
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
});
