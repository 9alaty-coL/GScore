import { useReducer, useCallback } from "react";

const TOKEN = '44c653df2a634ad1ab55c573f62981cc'

const initialStatus = {
    status: null,
    data: null,
    error: null,
}

const reducer = (state, action) => {
    switch(action.type){
        case 'SEND':
            return {
                status: 'pending',
                data: null,
                error: null,
            }
            break
        case 'ERROR':
            return {
                status: 'completed',
                data: null,
                error: action.error,
            }
            break
        case 'SUCCESS':
            return {
                status: 'completed',
                data: action.data,
                error: null,
            }
            break
        default:
            return state
    }
}

const useHttp = (url) => {
    const [status, dispatch] = useReducer(reducer, initialStatus)
    const sendRequest = useCallback( async() => {
        dispatch({type: 'SEND'})
        try {
            const response = await fetch(url, {
                headers: {
                    'X-Auth-Token': TOKEN,
                }
            })
            if (!response.ok){
                dispatch({type: 'ERROR', error: 'something went wrong!'})
            }
            const data = await response.json()
            dispatch({type: 'SUCCESS', data: data})
        } catch (error) {
            dispatch({type: 'ERROR', error: error.message || 'something went wrong!'})
        }
    }, [url])
    return {
        data: status.data,
        error: status.error,
        status: status.status,
        sendRequest: sendRequest,
    }
}

export default useHttp