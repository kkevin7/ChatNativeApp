import firebase from 'firebase';

class Fire {
  constructor() {
    this.init();
    this.checkAuth();
  }

  init = () => {
    if (!firebase.apps.length) {
      firebase.initializeApp({
        apiKey: 'AIzaSyCwmwNhq5FUysgM5FBVzLBzr-Fa4pQhYCI',
        authDomain: 'chat-native-app-4db0e.firebaseapp.com',
        databaseURL: 'https://chat-native-app-4db0e.firebaseio.com',
        projectId: 'chat-native-app-4db0e',
        storageBucket: 'chat-native-app-4db0e.appspot.com',
        messagingSenderId: '385403235923',
        appId: '1:385403235923:web:add521f8e056cd6de7e0a6',
      });
    }
  };

  checkAuth = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        firebase.auth().signInAnonymously();
      }
    });
  };

  send = messages => {
      messages.forEach(item => {
          const message = {
            text: item.text,
            timestamp: firebase.database.ServerValue.TIMESTAMP,
            user: item.user,
          }
      });

      this.db.push(message);
  }

  parse = message => {
      const {user, text, timestap} = message.val();
      const {key: _id} = mesage;
      const createAt = new Date(timestap);

      return{
          _id,
          createAt,
          text,
          user
      }
  }

  get = callback => {
      this.db.on('child_added', snapshot => callback(this.parse(snapshot)));
  }

  off(){
      this.db.off();
  }

  get db(){
      return firebase.database().ref('message');
  }

  get uid(){
      return (firebase.auth().currentUser || {}).uid
  }

}

export default new Fire();
