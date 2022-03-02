import classes from './LeaderBoard.module.scss'
import LeaderBoardRow from './LeaderBoardRow'
import useHttp from '../../hooks/use-http'
import { useEffect } from 'react'
import LoadingSpinner from '../UI/LoadingSpinner'

const LeaderBoard = props => {
    const {status, error, data, sendRequest} = useHttp(`https://api.football-data.org/v2/competitions/${props.leagueId}/standings`)
    let table

    useEffect(() => {
        sendRequest()
    }, [sendRequest])

    if (status === 'spending'){
        table = <LoadingSpinner />
    }
    if (status === 'completed' && error){
        table = <h2>{error}</h2>
    }
    if (status === 'completed' && !error){
        table = data.standings[0].table.map(value => <LeaderBoardRow key={value.team.id} row={value} />)
    }
    

    return (
        <>
            {table}
        </>
    )
}

export default LeaderBoard