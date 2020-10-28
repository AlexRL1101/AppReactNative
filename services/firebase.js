import * as firebase from 'firebase';
import 'firebase/firebase-firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBOs6N6MYgn5b1eFzca7MgLLaVfOa91C1U",
  authDomain: "awesome-project-760f2.firebaseapp.com",
  databaseURL: "https://awesome-project-760f2.firebaseio.com",
  projectId: "awesome-project-760f2",
  storageBucket: "awesome-project-760f2.appspot.com",
  messagingSenderId: "563507867835",
  appId: "1:563507867835:web:2ade97ba15a659d128f99e",
  measurementId: "G-YSE86YW053",
};

class Firebase {
    constructor() {
        firebase.initializeApp(firebaseConfig);
        this.auth = firebase.auth();
        this.database = firebase.database();
    }
    login = (email, pass) => {
        return this.auth.signInWithEmailAndPassword(email, pass)
    }
    createUser = async (name, user, pass) => {
        await this.auth.createUserWithEmailAndPassword(user,pass);
        // return this.auth.currentUser.updateProfile({
        //     displayName: name
        // })
        return this.writeUserData(name, user);
    }
    getUser = () => {
        return this.auth.currentUser.displayName
    }

    writeUserData = (userName, mail) => {
        const email = mail.replace(/\./g,'');
        return this.database.ref(email).set({
            userName: userName
        })
    }

    readUserData = () => {
        const mail = this.auth.currentUser.email;
        const email = mail.replace(/\./g,'');
        return this.database.ref(email).once('value').then((data) => {
            const valueData = (data.val() && data.val()) || {userName: 'Not user data'}
            return valueData.userName;
        });
    }

}

const firebaseService = new Firebase();
export default firebaseService;