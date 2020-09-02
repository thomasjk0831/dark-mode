import { useLocalStorage } from './useLocalStorage'

export const useDarkMode = (key, initialValue) => {
  
    const [value, setValue] = useLocalStorage(key, initialValue)

    const toggleMode = e => {
    e.preventDefault();
    setValue(!value);
  };

  return [value, setValue, toggleMode]
}