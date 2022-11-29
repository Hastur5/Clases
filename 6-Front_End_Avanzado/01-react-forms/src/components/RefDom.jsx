import { useEffect, useRef } from 'react'

const RefDom = () => {
  const inputRef = useRef()

  useEffect(() => {
    inputRef.current.focus()
    inputRef.current.value = 'olis'
  }, [])

  return (
    <div>
      <input ref={inputRef} type='text' />
    </div>
  )
}

export default RefDom
