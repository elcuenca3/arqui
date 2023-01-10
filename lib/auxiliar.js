import React, { useState, useEffect } from 'react'
import Styles from '/styles/Home.module.css'

export default function Auxiliar() {

    const [item, setItem] = useState([])

    const peticion = async () => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
        const games = await res.json()
        setItem(games)
    }

    useEffect(() => {
        peticion();

    }, [])




    return (
        <div className={Styles.cards}>
            {
                item.map(item => (
                    <div key={item.id} >
                        <div className={Styles.card}>
                        <h4 className={Styles.title_content}>{item.name}</h4>
                        <a className={Styles.descri}>{item.email}</a>
                        <p className={Styles.descri}>{item.phone}</p>
                        </div>
                    </div>
                ))}
        </div>
    )
}
