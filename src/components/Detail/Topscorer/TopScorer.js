import classes from './TopScorer.module.scss'

import useHttp from '../../../hooks/use-http'
import { useEffect } from 'react'

import TopScorerRow from './TopScorerRow'
import LoadingSpinner from '../../UI/LoadingSpinner'

const TopScorer = props => {
    const leagueId = props.leagueId
    const {data, error, status, sendRequest} = useHttp(`https://api-gscore.herokuapp.com/scorer/${leagueId}`)
    const {data: teamData, error: teamError, status: teamStatus, sendRequest: teamSendRequest} = useHttp(`https://api.football-data.org/v2/competitions/${props.leagueId}/standings`)

    useEffect(() => {
        sendRequest()
        teamSendRequest()
    }, [sendRequest]);
    
    const getUrl = (id) =>{
        if (teamStatus === 'completed'){
            return teamData.standings[0].table.find(value => value.team.id === id).team.crestUrl
        }
        return null
    }

    let topscorerTable

    if (status === 'pending'){
        topscorerTable = <div className="centered">
        <LoadingSpinner />
      </div>
    }

    if (status === 'completed' && !error){
        topscorerTable = data?.scorers.map((value, index) => {
            const restUrl = getUrl(value.team.id)
            return <TopScorerRow teamStatus={teamStatus} crestUrl={restUrl} key={value.player.id} row={value} index={index + 1} />
        })
    }

    if (status === 'completed' && error){
        topscorerTable = <h2>{error}</h2>
    }

    return (
        <div className={classes.topScorer}>
                <TopScorerRow header />
                {topscorerTable}
        </div>
    )
}

export default TopScorer