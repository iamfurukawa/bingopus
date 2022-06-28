import firebase from 'firebase/app'
import 'firebase/firestore'

const FirebaseService = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyC-D_ow4S1XGXtbuwZPW7h2sL_wOTRAQPs",
    authDomain: "bingopus-e5cd5.firebaseapp.com",
    projectId: "bingopus-e5cd5",
    storageBucket: "bingopus-e5cd5.appspot.com",
    messagingSenderId: "234168139261",
    appId: "1:234168139261:web:31381dee8a95cfd13bed94",

    type: "service_account",
    project_id: "bingopus-e5cd5",
    private_key_id: "4c69bc074d0463173300e1b9be2dca31cfa9ecd0",
    private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDCiAjNBPm8ST6x\n4SDbQ/0kngzWLrdoZ6tYqGg9cjPa+euvnJVGwpFZwsZFSAM/RhXAoSXMcWus/4+E\nn9rD9rQKyB4J5s7WY62gIqCskX/BpdFv84VepVZZmRk1NV6BYxPqaTGfa0sfWXHP\ngOAHe9watL2+Pb6Y9yZjY4dNr998ixlDAh212O0myv5Qw84Fr7BcUDsBPZ2p7ANj\nCv9tGyGkUt4R40IqNMKWsKKiOhYy5TjLPNsFiVn8O1TZDVJzDlc+CRXNDyRQ254L\nD4fe/yt09XtCbHc37RfpHFqwzJu47sS8xNuWwcDBz85GaCvttMCGBWnFrikxFDhR\nDZMX4FUFAgMBAAECggEAJ6mpU7XtPlbXxdhfRN2UpkvkVaIySoMCpGG32Tlo+b+F\nrqlYJVSD4r+MAfG4GcVOJ5ejt46zk9MKfdHC/rwVAvLA7ydkakFqE/GjfXPwDrli\nnbcS7RR8aenFgjwGsA5Vr/BxSe4MI9Dum86MvvHh038hBcIck58msFKJco1GnaN6\nKifLRaHHNiR5wUck8Tfn9+zqHTaJFtEJekJKoeoXoLGKj4hKxWsIRkieWSUzxxjz\n/1xzKZeC3qsXuATaXDJOqUnSLiRVLtTs8lnus/197ElrAeoUe7YYWluRJ/1un9X4\ntl5CAeIedQpdGYlciUpTfFgO4UQYvjdY8bPktG+waQKBgQD7B9Vr1LJVDaC6yYhZ\nuIvpQ1RuJ+fBEuWyBBV4RTpkYsbdWr2uDG0UxGnlQmk2pjAOJEZ7yHeoVDcRNdf5\nObEKEa3T3wjHT+K2s+VcS3rtBptAHE4c6wOCZwpVjPEB55gODUjns/Wzt+4Jo6t2\nuur4YQ+0hTmBsSA9Lgy3Mpvx+QKBgQDGYeAdeFCT/YaDgMccQuSUero6yYvEjIX/\nnbx2OHXDMckrvTVecJ2FnIAntBLlDUywYH+li2KyVnlmsMkbCOjXB+X15TinHXfo\nxuALjesnt9okP4kNipPDM69kYWNmBv14/lm7uGC6dTTIpYGbfViQgAw9JWKfCQ3R\nYUMIteA+bQKBgQDf1cNazCRbrLQl+a/H+MNgsnWlZ5XB1hzUV8nhHTGM83rJQ7Eg\ncdoOC3k1QLtaTGNLKNNkaoMvqDAV+4Hhq6yOAueRpS1Js5S/PreETZWFpj9mshaA\nuJm/fCt9zxfTj/NIjFX2rMOohZgOJk+spc0AvmNnnueBGjRZ+SbDb7AX2QKBgQCX\nDHcEeVOBGwyMnET+s8AvfbLGiCcvpH9yvbt9mEeyM/okn5A/NCf8T8kUcfvhA1td\nAFyww4yGlWkiU4EMYKBI+e6SZ9HXDIz8ZFC6+3gNaeNiri3Abb9MZdIp8C0qxi/B\nLIlOcXjU/+EM1Vf1+F6yx4yKEikhRleLES9lNnZjkQKBgQCFp4GspCMbl7h7zraq\nU2IOlilU8QXWW7CP4F4l8j2MwpXy7d2PDZ4WbfNX3Rr5/XygcTe86c25yzd9bNdc\n/KpXyLLrvDzgzMnLwB4DyBt57doGweK9O7obzei6XIoBjLweK2sPXRB26EL6sEna\nD6vpJL2a3fhaazI9UK7yoS4JOA==\n-----END PRIVATE KEY-----\n",
    client_email: "firebase-adminsdk-igfic@bingopus-e5cd5.iam.gserviceaccount.com",
    client_id: "105498031498435408929",
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-igfic%40bingopus-e5cd5.iam.gserviceaccount.com",

    databaseURL: 'https://bingopus-e5cd5-default-rtdb.firebaseio.com/'
  }

  const app = () => {
    if (!firebase.apps.length) {
      return firebase.initializeApp(firebaseConfig);
    }
    return firebase.app()
  };

  return { app }
}

export default FirebaseService()