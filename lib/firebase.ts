import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'

const firebaseConfig = {
    apiKey: 'AIzaSyC_eZvu9KwI9Wf4yufz-5j2cS0EJRYRWQE',
    authDomain: 'turnos-web-4c948.firebaseapp.com',
    databaseURL: 'https://turnos-web-4c948-default-rtdb.firebaseio.com',
    projectId: 'turnos-web-4c948',
    storageBucket: 'turnos-web-4c948.appspot.com',
    messagingSenderId: '974036005117',
    appId: '1:974036005117:web:41c66ebac042cb84a8ce94',
}

const app = initializeApp(firebaseConfig)
const rtdb = getDatabase(app)

export { rtdb }
