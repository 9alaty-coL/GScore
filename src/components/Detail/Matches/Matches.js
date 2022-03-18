import { useCallback, useState, useEffect } from 'react'
import useHttp from '../../../hooks/use-http'
import useInfiniteScroll from '../../../hooks/use-infinite-scroll'
import classes from './Matches.module.scss'
import Match from './Match'
import Matchday from './Matchday'

const Matches = props => {
    const [currMatches, setCurrMatches] = useState([])
    const {data, sendRequest: getMatches} = useHttp('https://api-gscore.herokuapp.com/matches/2021')

    const insertMatches = useCallback(async () => {
        getMatches()
    }, [])
    useInfiniteScroll(insertMatches)

    useEffect(() => {
        if (data){
            const cpr = data[0].matchday
            const md1 = data.filter(value => value.matchday === cpr)
            const md2 = data.filter(value => value.matchday !== cpr)
            setCurrMatches(prev => [...prev, md1, md2])
        }
    }, [data])

    const matches = currMatches.map((value) => {
        return <Matchday key={value[0].id} data={value}/>
    })

    return (
        <>
            {matches}
        </>
    )
}

export default Matches