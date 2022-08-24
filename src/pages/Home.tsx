import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { Header } from '../components/Header';
import { Task, TasksList } from '../components/TasksList';
import { TodoInput } from '../components/TodoInput';


export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {

    const newTask:Task = Object.assign({}, {
      title: newTaskTitle,
      id: new Date().getTime(),
      done: false,
    })
    setTasks((prevState) => [...prevState, newTask]);
  }

  function handleToggleTaskDone(id: number) {
    const todosChanged = tasks.map(item => {
      if(item.id === id) {
        item.done = !item.done
      }
      return item;
    });

    setTasks(todosChanged)
  }

  function handleRemoveTask(id: number) {
    const tasksFiltered = tasks.filter(task => task.id !== id)

    console.log(tasksFiltered)

    setTasks(tasksFiltered)
  }

  return (
    <View style={styles.container}>
      <Header tasksCounter={tasks.length} />

      <TodoInput addTask={handleAddTask} />

      <TasksList 
        tasks={tasks} 
        toggleTaskDone={handleToggleTaskDone}
        removeTask={handleRemoveTask} 
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEBEB'
  }
})