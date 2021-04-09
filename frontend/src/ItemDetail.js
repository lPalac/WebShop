import React, {useState,useEffect} from 'react'

export default function ItemDetail({match}) {
    const [game, setGame] = useState([]);
    console.log(match)//korsitit match za detalje od id

    useEffect(()=>{setGame()},[]);

    const getGame = async () => {
        const response = await fetch("https://cloud.mongodb.com/v2/6028ee4be5320302b42ba42d#metrics/replicaSet/6028ef5a50dca2446fd6757f/explorer/Products/get?ids=${match.params.id}")
        const data = await response.json();
        
        setGame(data)
      }
    return (
        <div>
            <h1 style={{color:"red"}}>
            {game.name}
            </h1>
            <p>
                detalji o igri :{game.details}  i cijena {game.price}$
            </p>

        </div>
    )
}
