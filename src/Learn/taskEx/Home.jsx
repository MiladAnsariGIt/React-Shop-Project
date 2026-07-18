function Home({ tasks, onToggle, onClear }) {
  if (tasks.length === 0) {
    return (
      <div>
        <h1>لیست تسک‌ها</h1>
        <p>هیچ تسکی وجود ندارد.</p>
        {onClear && tasks.length > 0 && (
          <button onClick={onClear}>حذف همه تسک‌ها</button>
        )}
      </div>
    )
  }

  return (
    <div>
      <h1>لیست تسک‌ها</h1>
      <ul>
        {tasks.map(task => (
          <li
            key={task.id}
            onClick={() => onToggle(task.id)}
            style={{
              textDecoration: task.done ? 'line-through' : 'none',
              cursor: 'pointer',
              marginBottom: '8px'
            }}
          >
            {task.title}
          </li>
        ))}
      </ul>
      {tasks.length > 0 && (
        <button onClick={onClear}>حذف همه تسک‌ها</button>
      )}
    </div>
  )
}

export default Home