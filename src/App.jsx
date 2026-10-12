import { useState } from "react";
import Card from "./components/Card.jsx";
import TaskForm from "./components/TaskForm.jsx";
import TaskStats from "./components/TaskStats.jsx";
import FilterBar from "./components/FilterBar.jsx";
import TaskList from "./components/TaskList.jsx";
import ErrorBoundary from "./components/ErrorBoundary.jsx";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  const addTask = (title) => {
    setTasks((prev) => [...prev, { id: Date.now(), title, completed: false }]);
  };

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  const completed = tasks.filter((t) => t.completed).length;

  const visibleTasks = tasks.filter((t) => {
    if (filter === "completed") return t.completed;
    if (filter === "pending") return !t.completed;
    return true;
  });

  return (
    <main className="app">
      <h1>Student Task Manager</h1>

      <Card title="Add a task">
        <TaskForm onAdd={addTask} />
      </Card>

      <Card title="Progress">
        <TaskStats total={tasks.length} completed={completed} />
      </Card>

      <Card title="Your tasks">
        <FilterBar filter={filter} onChange={setFilter} />
        <ErrorBoundary>
          <TaskList
            tasks={visibleTasks}
            totalCount={tasks.length}
            filter={filter}
            onToggle={toggleTask}
            onDelete={deleteTask}
          />
        </ErrorBoundary>
      </Card>
    </main>
  );
}
