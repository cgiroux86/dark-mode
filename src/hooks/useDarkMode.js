import {useEffect} from 'react'
import {useLocalStorage} from './useLocalStorage'

export const useDarkMode = () => {
 const [darkmode, setdarkmode] = useLocalStorage('on')


 useEffect(() => {
   const body = document.querySelector('body')
   return  darkmode ? body.classList.add('dark-mode') : body.classList.remove('dark-mode')
 }, [])

 return [darkmode, setdarkmode]
}