
import {db} from '../firebase/FirebaseConfig'


export const dbMethods = {
  // firebase store helper methods go here...
  create: (email,username) => {
    db.collection("Users").doc(username).set({
        username: username,
        
        email: email,
        todos: [],
    })
    .then(() => {
        console.log("Document successfully written!");
    })
    .catch((error) => {
        console.error("Error writing document: ", error);
    });

  },
  add: () => {
    

  },
  
  delete: () => {
    

  },
};
