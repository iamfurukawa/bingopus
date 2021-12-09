import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import MaskedInput from 'antd-mask-input'
import { Button, Form, message } from 'antd'

import localStorageService from '../../services/local-storage/local-storage-service'
import firebaseFirestoreService from '../../services/firebase/firebase-firestore-service'

import styles from './home.module.scss'

const HomePage = () => {

    const [cpfData, setCpfData] = useState("")
    const key = 'myUniqueKey'
    const history = useHistory();

    const play = async () => {
        message.loading({ content: 'Logando...', key });
        try {
            let cpf = cpfData.replace(/\./g, '').replace(/\-/g, '')
            let snap = await firebaseFirestoreService.getByCpf(cpf)
            localStorageService.savePeople({
                cpf: snap.id,
                name: snap.data().nome,
                games: snap.data().games,
            })
            message.destroy()
            history.push('/bingo')
        } catch (e) {
            console.log(e)
            message.error({ content: 'Falha ao logar :(', key, duration: 3 });
        }
    }

    const peopleStored = localStorageService.getPeople()
    if (peopleStored !== null) history.push("/bingo")

    return (
        <div className={styles.container}>
            <div className={styles.containerLeft}>
                <h1>Bingopus.</h1>
            </div>

            <Form
                name="basic"
                layout="vertical"
                initialValues={{ remember: true }}
                className={styles.containerRight}
            >
                <div className={styles.header}>
                    <h1>Olá</h1>
                    <h2>Bem-vindo ao bingo da Opus.</h2>
                </div>

                <Form.Item
                    label="CPF"
                    name="cpf"
                    rules={[{ required: true, message: 'Por favor preencha com o seu CPF!' }]}
                >
                    <MaskedInput mask="111.111.111-11" name="card" size="20" onChange={(e) => setCpfData(e.target.value)} />
                </Form.Item >

                <Button type="primary" htmlType="submit" onClick={play}>
                    Entrar
                </Button>
            </Form>
        </div>

    )
}

export default HomePage