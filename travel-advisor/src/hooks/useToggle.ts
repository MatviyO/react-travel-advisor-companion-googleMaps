import {useState} from 'react';

const useToggle = (defaultValue: boolean) => {
    const [value, setValue] = useState<boolean>(defaultValue);

    const toggleValue = (value: boolean) => {
        setValue(prevState => typeof value === 'boolean' ? value : !prevState)
    }

    return {value, toggleValue}
}
export default useToggle;
