import {useState,useEffect} from 'react'
export function Game() {
    const[factor,setFactor] = useState(0)
    const[multiplicand,setMultiplicand] = useState(0)
    const[limit,setLimit] = useState(10)

    const generator = (limit:number) => {
        return Math.floor(Math.random() * limit )
    }

    useEffect( () => {
        if(limit > 0) {
        setFactor(generator(limit))
        setMultiplicand(generator(limit))
        }
    }, [limit])
    return (
        <div id="game" className="game">
            <div className="problem" style={styles.problem}>
            <div className="factor">{factor}</div>
            &times;
            <div className="factor">{multiplicand}</div>
            </div>
        </div>
    )
}

const styles = {
    problem:{
        display: "flex",
        flexDirectin: "row",
        justifyContent: "center",
        gap:"1em",
        fontSize: "2em",
    }
}