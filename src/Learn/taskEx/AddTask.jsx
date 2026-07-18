import { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

function AddTask({ onAdd }) {
  const [title, setTitle] = useState('')
  const inputRef = useRef(null) // برای فوکوس خودکار
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const trimmed = title.trim()
    if (!trimmed) return

    onAdd(trimmed)          // صدا زدن تابع افزودن که از App آمده
    setTitle('')            // پاک کردن input
    inputRef.current.focus() // فوکوس دوباره
    navigate('/')           // هدایت به صفحه خانه
  }

  return (
    <div>
      <h1>افزودن تسک جدید</h1>
      <form onSubmit={handleSubmit}>
        <input
          ref={inputRef}
          type="text"
          placeholder="عنوان تسک..."
          value={title}
          onChange={e => setTitle(e.target.value)}
          autoFocus
        />
        <button type="submit">افزودن</button>
      </form>
    </div>
  )
}

export default AddTask