import {useState} from 'react'

export const useLocalStorage = (key,initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        console.log(key)
        console.log(initialValue)
     return window.localStorage.getItem(key) ? JSON.parse(window.localStorage.getItem(key)) : initialValue     
    })
    console.log(window.localStorage.getItem(key))
    console.log(initialValue)

    const valueSetter = (value) => {
        setStoredValue(value)
        window.localStorage.setItem(key, JSON.stringify(value))
        console.log(value)
    }

    return [storedValue, valueSetter]
}