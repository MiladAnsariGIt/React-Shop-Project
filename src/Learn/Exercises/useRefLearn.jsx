import { useState, useRef } from 'react'

function UseRefLearn() {  // حرف اول بزرگ
  const inputRef = useRef(null)
  const [list, setList] = useState([])  // حرف اول کوچک (قرارداد)

  const addToArray = () => {
    const value = inputRef.current.value.trim()
    if (value === '') return  // اگر خالی بود کاری نکن

    // ساختن آرایه جدید با افزودن مقدار
    setList(prev => [...prev, value])

    // پاک کردن input و برگرداندن فوکوس
    inputRef.current.value = ''
    inputRef.current.focus()
  }

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="متن را وارد کنید" />
      <button onClick={addToArray}>افزودن به لیست</button>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default UseRefLearn