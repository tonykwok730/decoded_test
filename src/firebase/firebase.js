import app from 'firebase/app';
import 'firebase/database';
import 'firebase/storage';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyCPON5xevxdKzxG3bGSZFy9uTVWkYMasvw",
    authDomain: "find-a-friend-557a3.firebaseapp.com",
    databaseURL: "https://find-a-friend-557a3-default-rtdb.firebaseio.com",
    projectId: "find-a-friend-557a3",
    storageBucket: "find-a-friend-557a3.appspot.com",
    messagingSenderId: "973677100762",
    appId: "1:973677100762:web:f38cd0effcec593287efe3"
};

app.initializeApp(firebaseConfig);

class Firebase {
    constructor() {
        this.database = app.database;
        this.storage = app.storage;
        this.auth = app.auth;
    }

    debugError(error) {
        alert(`${error.code} error has occueerd - ${error.message}`);
    }

    writeDatabase(root, json) {
        this.database.ref(root).set(json)
            .catch(this.debugError);
    }

    readDatabase(root, event, callback) {
        this.database.ref(root).on(event, callback);
    }

    onUserActive(callback, fallback=null) {
        this.auth.onAuthStateChanged((userInstance) => {
            if(userInstance != null) {
                callback(userInstance.uid);
            }
            else if (fallnack != null) {
                fallback();
            }
        });
    }
}

export default Firebase;