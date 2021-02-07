import firebase from "firebase";
import Firebaseconfig from "./FirebaseConfig";
import { dbMethods } from "./dbMethods";
export const authMethods = {
  // firebase auth helper methods go here...
  signup: (newUser, setErrors, setToken) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(newUser.email, newUser.password)
      //make res asynchronous so that we can make grab the token before saving it.

      .then(async (res) => {
        dbMethods.create(newUser.username, newUser.email, res.user.uid);
        const token = await Object.entries(res.user)[5][1].b;
        await localStorage.setItem("token", token);
        setToken(window.localStorage.token);
      })

      .catch((err) => {
        setErrors((prev) => [...prev, err.message]);
      });
  },
  signin: (user, setUser, setErrors, setToken) => {
    //change from create users to...
    firebase
      .auth()
      .signInWithEmailAndPassword(user.email, user.password)
      //everything is almost exactly the same as the function above
      .then(async (res) => {
        setUser((user.uid = res.user.uid));

        const token = await Object.entries(res.user)[5][1].b;
        //set token to localStorage
        await localStorage.setItem("token", token);
        setToken(window.localStorage.token);
      })
      .catch((err) => {
        setErrors((prev) => [...prev, err.message]);
      });
  },
  //no need for email and password
  signout: (setErrors, setToken) => {
    // signOut is a no argument function
    firebase
      .auth()
      .signOut()
      .then((res) => {
        //remove the token
        localStorage.removeItem("token");
        //set the token back to original state
        setToken(null);
      })
      .catch((err) => {
        //there shouldn't every be an error from firebase but just in case
        setErrors((prev) => [...prev, err.message]);
        //whether firebase does the trick or not i want my user to do there thing.
        localStorage.removeItem("token");
        setToken(null);
        console.error(err.message);
      });
  },
};
