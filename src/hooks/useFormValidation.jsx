import {useState, useEffect} from 'react';

const useFormValidation = (initialState) => {
    const [values, setValues] = useState(initialState)
  return (
    <div>useFormValidation</div>
  )
}

export default useFormValidation