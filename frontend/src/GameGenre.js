import React from "react"
import Game from "./Game"

export default function GameGenre({ gamesGenre }) {
   
    return (

        gamesGenre.map(game => {
            return <Game key= {game.id} genre={game.genre} />
        })

    );
}
