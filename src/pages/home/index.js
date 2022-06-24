import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import MaskedInput from 'antd-mask-input'
import { Button, Form, message } from 'antd'

import localStorageService from '../../services/local-storage/local-storage-service'
import firebaseFirestoreService from '../../services/firebase/firebase-firestore-service'

import styles from './home.module.scss'

import LogoOpenMind from './images/Logo-openmind.png'
import LogoOpus from './images/Logo-opus.png'
import Shape1 from './images/shape-1.png'
import Shape2 from './images/shape-2.png'
import Shape3 from './images/shape-3.png'
import Shape4 from './images/shape-4.png'
import Shape5 from './images/shape-5.png'
import Shape6 from './images/shape-6.png'
import Shape7 from './images/shape-7.png'
import Shape8 from './images/shape-8.png'
import Shape81 from './images/shape-81.png'
import Shape9 from './images/shape-9.png'
import versionService from '../../services/version/version-service'
import Column from 'antd/lib/table/Column'

var md5 = require('md5')

const HomePage = () => {

    versionService.frontValidation()

    const [cpfData, setCpfData] = useState("")
    const key = 'myUniqueKey'
    const history = useHistory()

    const play = async () => {
        message.loading({ content: 'Logando...', key });
        try {
            let cpf = cpfData.replace(/\./g, '').replace(/\-/g, '')
            let snap = await firebaseFirestoreService.getByCpf(cpf)

            localStorageService.savePeople({
                cpf: md5(snap.id),
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
                <img id={styles.openMind} src={LogoOpenMind} alt="logo-openmind" />
                <img id={styles.opusLogo} src={LogoOpus} alt="logo opus" />
                <img id={styles.shape1} src={Shape1} alt="forma abstrata" />
                <img id={styles.shape2} src={Shape2} alt="forma abstrata" />
                <img id={styles.shape3} src={Shape3} alt="forma abstrata" />
                <img id={styles.shape4} src={Shape4} alt="forma abstrata" />
                <img id={styles.shape5} src={Shape5} alt="forma abstrata" />
                <img id={styles.shape6} src={Shape6} alt="forma abstrata" />
                <img id={styles.shape7} src={Shape7} alt="forma abstrata" />
                <div className={styles.shapeGroup}>
                    <img id={styles.shape8} src={Shape8} alt="forma abstrata" />
                    <img id={styles.shape81} src={Shape81} alt="forma abstrata" />
                    <img id={styles.shape82} src={Shape8} alt="forma abstrata" />
                </div>
                <img id={styles.shape9} src={Shape9} alt="forma abstrata" />
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

                <Form
                layout={null}
                >
                    <Form.Item
                        name="cpf"
                        label={<label className={styles.label}>CPF</label>}
                        rules={[{ required: true, message: 'Por favor preencha com o seu CPF!' }]}
                    >
                        <MaskedInput mask="111.111.111-11" inputmode="numeric" name="card" size="20" onChange={(e) => setCpfData(e.target.value)} />
                    </Form.Item >
                </Form>

                <Button type="primary" htmlType="submit" onClick={play}>
                    Entrar
                </Button>
            </Form>
        </div>
    )
}

export default HomePage