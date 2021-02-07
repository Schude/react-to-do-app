import { db } from "../firebase/FirebaseConfig";
import firebase from 'firebase'

export const dbMethods = {
  // firebase store helper methods go here...

  create: (username, email, uid) => {
    db.collection("Users")
      .doc(uid)
      .set({
        username: username,
        email: email,
        todos: [],
        uid: uid,
      })
      .then(() => {
        console.log("Document successfully written!");
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
  },
  add: (uid, newTodo) => {
    db.collection("Users")
      .doc(uid)
      .update({
        todos: firebase.firestore.FieldValue.arrayUnion(newTodo)
      })
      .then(() => {
        console.log("Document successfully updated!");
      });
  },

  read: (uid) => {
    var docRef = db.collection("Users").doc("deneme");

    docRef.get().then((doc) => {
        if (doc.exists) {
           return doc.data().deneme;
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });

  },
};
