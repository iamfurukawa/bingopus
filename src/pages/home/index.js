import React, { useState } from 'react'
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
            history.push('/bingo')
        } catch (e) {
            console.log(e)
            message.error({ content: 'Falha ao logar :(', key, duration: 3 });
        }
    }

    return (
        <Form
            name="basic"
            labelCol={{ span: 3 }}
            wrapperCol={{ span: 3 }}
            initialValues={{ remember: true }}
        >
            <Form.Item
                label="Insira seu CPF"
                name="cpf"
                rules={[{ required: true, message: 'Por favor preencha com o seu CPF!' }]}
            >
                <MaskedInput mask="111.111.111-11" name="card" size="20" onChange={(e) => setCpfData(e.target.value)} />
            </Form.Item >

            <Form.Item wrapperCol={{ offset: 5, span: 3 }}>
                <Button type="primary" htmlType="submit" onClick={play}>
                    Jogar!
                </Button>
            </Form.Item>
        </Form>
    )
}

export default HomePage