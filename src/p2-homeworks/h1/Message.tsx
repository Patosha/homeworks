import React from 'react'
import styles from './Message.module.css'

type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessagePropsType) {
    return (
        <div className={styles.message}>
            <img className={styles.message__avatar} src={`${props.avatar}`} alt={"avatar"}/>

            <div className={styles.message__wrap}>

                <h3 className={styles.message__name}>
                    {props.name}
                </h3>

                <div className={styles.message__footer}>
                    <p className={styles.message__text}>
                        {props.message}
                    </p>

                    <span className={styles.message__time}>
                        {props.time}
                    </span>

                </div>
            </div>
        </div>
    )
}

export default Message
