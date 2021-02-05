
import {db} from '../firebase/FirebaseConfig'


export const dbMethods = {
  // firebase store helper methods go here...
  create: (username,email,uid) => {
    db.collection("Users").doc(uid).set({
        username: username,      
        email: email,
        todos: [],
        uid:uid,
        
    })
    .then(() => {
        console.log("Document successfully written!");
    })
    .catch((error) => {
        console.error("Error writing document: ", error);
    });

  },
  add: (uid,newTodo) => {
    console.log(uid)
    db.collection("Users").doc(uid).update({
      
      todos: newTodo
  })
  .then(() => {
      console.log("Document successfully updated!");
  });

  },
  

  read: () => {
    

  },
};
