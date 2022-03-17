import { useCallback, useState } from 'react'
import useHttp from '../../../hooks/use-http'
import useInfiniteScroll from '../../../hooks/use-infinite-scroll'
import classes from './Matches.module.scss'

const Matches = props => {
    const [currMatches, setCurrMatches] = useState([])
    currMatches.push('lopreaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
    const {data, sendRequest: getMatches} = useHttp('https://api-gscore.herokuapp.com/matches/2021')
    const insertMatches = useCallback(async () => {
        await getMatches()
        setCurrMatches(prev => [...prev, data])
    }, [])
    useInfiniteScroll(insertMatches)

    
    return (
        <>
            {currMatches.map(value => {
                return <div className={classes.main}></div>
            })}
        </>
    )
}

export default Matches