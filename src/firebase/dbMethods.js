import { db } from "../firebase/FirebaseConfig";
import firebase from "firebase";

export const dbMethods = {
  // firebase store helper methods go here...

  create: (username, email, uid) => {
    db.collection(uid)
      .doc("user")
      .set({
        username: username,
        email: email,
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
    db.collection(uid).doc(newTodo.id).set({
      id: newTodo.id,
      text: newTodo.text,
      finished: newTodo.finished,
    });
  },

  get: (uid) => {

  },
  remove: (uid,todoID) => {
    db.collection(uid)
      .doc(todoID)
      .delete()
      .then(() => {
        console.log("Document successfully deleted!");
      })
      .catch((error) => {
        console.error("Error removing document: ", error);
      });

  },
  update: (uid,todo) => {
    db.collection(uid).doc(todo.id).update({
      finished: !todo.finished,
    });
  }

 
};
