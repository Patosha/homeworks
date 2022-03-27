import React from 'react'
import {AffairType} from './HW2'
import styles from './Affair.module.css'

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType// need to fix any
    deleteAffairCallback: (_id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {

    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }// need to fix

    return (
        <div className={styles.Affair}>

           <p className={styles.text}>
               show some text
           </p>
            <div>
                <button className={styles.btnDelete} onClick={deleteCallback}>X</button>
            </div>
        </div>
    )
}

export default Affair
