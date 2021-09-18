import {useCallback, useEffect, useRef} from "react";

const useTimeOut = (callback: () => void, delay: number) => {
    const callbackRef = useRef(callback)
    const timeoutRef = useRef()

    useEffect(() => {
        callbackRef.current = callback
    }, [callback])

    const set = useCallback(() => {
        timeoutRef.current
    }, [delay])
}

export default useTimeOut;
