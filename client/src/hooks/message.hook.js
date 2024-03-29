import { useCallback } from 'react'

export const useMessage = () => {
    return useCallback(text => {
        (window.M && text) && window.M.toast({ html: text })
    }, [])
}