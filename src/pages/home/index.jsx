import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import MaskedInput from 'antd-mask-input'
import { Button, Form, message } from 'antd'
import { MD5 } from "md5-js-tools"

import localStorageService from '../../services/local-storage/local-storage-service'
import firebaseFirestoreService from '../../services/firebase/firebase-firestore-service'

import styles from './home.module.scss'

import versionService from '../../services/version/version-service'

const HomePage = () => {

    versionService.frontValidation()

    const [cpfData, setCpfData] = useState("")
    const key = 'myUniqueKey'
    const history = useHistory()

    const play = async () => {
        message.loading({ content: 'Logando...', key });
        try {
            // eslint-disable-next-line
            let cpf = cpfData.replace(/\./g, '').replace(/\-/g, '')
            let snap = await firebaseFirestoreService.getByCpf(cpf)

            localStorageService.savePeople({
                cpf: MD5.generate(snap.id),
                name: snap.data().nome,
                games: snap.data().games,
            })
            message.destroy()
            history.push('/')
        } catch (e) {
            console.log(e)
            message.error({ content: 'Falha ao logar :(', key, duration: 3 });
        }
    }

    const peopleStored = localStorageService.getPeople()
    if (peopleStored !== null) history.push("/")

    return (
        <div className={styles.container}>
            <div className={styles.containerLeft}>
            </div>

            <div className={styles.containerRight}>
                <div className={styles.header}>
                    <h1>Olá</h1>
                    <h2>Bem-vindo ao bingo da Opus.</h2>
                </div>

                <Form
                    layout={null}
                    onKeyPress={(e) => {
                        if (e.key === "Enter") {
                            play();
                        }
                    }}
                >
                    <Form.Item
                        name="cpf"
                        label={<label className={styles.label}>CPF</label>}
                        rules={[{ required: true, message: 'Por favor preencha com o seu CPF!' }]}
                    >
                        <MaskedInput mask="111.111.111-11" inputMode="numeric" name="card" size="20" onChange={(e) => setCpfData(e.target.value)} />
                    </Form.Item >
                </Form>

                <Button type="primary" htmlType="submit" onClick={play}>
                    Entrar
                </Button>
            </div>
        </div>
    )
}

export default HomePage