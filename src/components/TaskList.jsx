import TaskItem from "./TaskItem.jsx";

export default function TaskList({ tasks, totalCount, filter, onToggle, onDelete }) {
  if (totalCount === 0) {
    return <p className="empty">No tasks available</p>;
  }

  if (tasks.length === 0) {
    return <p className="empty">No {filter} tasks to show.</p>;
  }

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}
