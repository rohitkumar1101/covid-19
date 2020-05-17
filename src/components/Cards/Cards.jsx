import React from 'react'
import { Graph, Header } from '../index'
import styles from './Cards.module.css'
import CountUp from 'react-countup' 

// Importing the Images
import active from '../../img/icon-active.png'
import cured from '../../img/icon-inactive.png'
import virus from '../../img/icon-infected.png'

const Cards = ({stateData, summary}) => {
    let activeCases, discharged, deaths, total, graphData, fatalityRate, recoveryRate = 0;

    if(!stateData) {
        activeCases = summary.total - summary.discharged - summary.deaths
        total = summary.total
        discharged = summary.discharged
        deaths = summary.deaths
        graphData = summary
        fatalityRate = (summary.deaths/summary.total) * 100
        recoveryRate = (summary.discharged/summary.total) * 100
    } else {
        activeCases = stateData.totalConfirmed - stateData.discharged - stateData.deaths
        total = stateData.totalConfirmed
        discharged = stateData.discharged
        deaths = stateData.deaths
        graphData = stateData
        fatalityRate = (stateData.deaths/stateData.totalConfirmed) * 100
    }

    return (
        <div>
            <div className={styles.heading}>
                <Header />
                <h5>{ stateData.loc ? <strong>{stateData.loc}</strong> : <strong>INDIA</strong> }</h5>
            </div>
            <div className="row">
                <div className="col s6 l3">
                    <div className={styles.card}>
                        <div className={styles.total}>
                            <img src={virus} alt="total" />
                            <h4> <CountUp start={0} end={total} duration={1} separator="," /> </h4>
                            <h6>Total Cases</h6> 
                        </div>
                    </div>
                </div>
                <div className="col s6 l3">
                    <div className={styles.card}>
                        <div className={styles.infected}>
                            <img src={active} alt="active" />
                            <h4> <CountUp start={0} end={activeCases} duration={1} separator="," /> </h4>
                            <h6>Active Cases</h6> 
                        </div>
                    </div>
                </div>
                <div className="col s6 l3">
                    <div className={styles.card}>
                        <div className={styles.discharged}>
                            <img src={cured} alt="active" />
                            <h4> <CountUp start={0} end={discharged} duration={1} separator=","  /> </h4>
                            <h6>Cured / Discharged</h6>
                        </div>
                    </div>
                </div>
                <div className="col s6 l3">
                    <div className={styles.card}>
                        <div className={styles.deaths}>
                            <img src={virus} alt="active" />
                            <h4> <CountUp start={0} end={deaths} duration={1} separator=","  /> </h4>
                            <h6>Deaths</h6>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col s6 l3">
                    <div className={styles.card}>
                        <h4>{fatalityRate.toFixed(2)}%</h4>
                        <h6>Fatality Rate</h6>
                    </div>
                </div>
                <div className="col s6 l3">
                    <div className={styles.card}>
                        <h4>{recoveryRate.toFixed(2)}%</h4>
                        <h6>Recovery Rate</h6>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className={styles.showGraph}>
                    <Graph graphData={graphData} />
                </div>
            </div>
        </div>
    )
}

export default Cards
