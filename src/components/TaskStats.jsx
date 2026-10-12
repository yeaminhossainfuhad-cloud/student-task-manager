export default function TaskStats({ total, completed }) {
  const remaining = total - completed;

  return (
    <dl className="stats">
      <div><dt>Total</dt><dd>{total}</dd></div>
      <div><dt>Completed</dt><dd>{completed}</dd></div>
      <div><dt>Remaining</dt><dd>{remaining}</dd></div>
    </dl>
  );
}
