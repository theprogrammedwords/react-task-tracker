//import logo from './logo.svg';
import Tasks from './components/Tasks';
import Header from './components/Header';
import AddTask from './components/AddTask';
import { useState } from 'react';
import './App.css';

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctor's Appointment",
      day: 'Feb 5th at 12:30 PM',
      reminder: true,
    },
    {
      id: 2,
      text: 'Chess Game',
      day: 'Feb 8th at 01:30 PM',
      reminder: true,
    },
    {
      id: 3,
      text: "Manager's meeting",
      day: 'Feb 15th at 12:30 PM',
      reminder: true,
    },
    {
      id: 4,
      text: 'Dubai Flight',
      day: 'Feb 25th at 08:30 PM',
      reminder: true,
    },
  ]);

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  const addTasks = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = {
      id,
      ...task,
    };
    setTasks([...tasks, newTask]);
  };
  return (
    <div className="container">
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTasks} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        'No Tasks To Do'
      )}
    </div>
  );
}

export default App;
