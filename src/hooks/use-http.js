import axios from "axios";
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
                data: action.data,
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
    const sendRequest = useCallback( async(query = null) => {
        dispatch({type: 'SEND'})
        
        try {
            const data = await axios({
                method: 'GET',
                url:url,
                headers: {
                    'X-Auth-Token': TOKEN,
                },
                params: query ?? null
            })
            // console.log(data)
            // if (!response.ok){
            //     dispatch({type: 'ERROR', error: 'something went wrong!'})
            // }
            // const data = await response.json()
            dispatch({type: 'SUCCESS', data: data.data})
        } catch (error) {
            dispatch({type: 'ERROR', error: 'Cause the free API. So there are only 10 requests per 40 seconds. Try again later!'})
            console.dir(error.response)
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