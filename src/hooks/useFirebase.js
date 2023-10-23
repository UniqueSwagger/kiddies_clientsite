import axios from "axios";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  signOut,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  updateProfile,
  getIdToken,
} from "firebase/auth";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useState, useEffect } from "react";
import initializeAuthentication, {
  storage,
} from "../firebase/firebase.init.js";
initializeAuthentication();
const useFirebase = () => {
  const auth = getAuth();
  //all state
  const [currentUser, setCurrentUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState("");
  const [admin, setAdmin] = useState(false);
  //all provider
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  // handle sign up
  const handleSignup = async (email, password, name) => {
    await createUserWithEmailAndPassword(auth, email, password);
    const newUser = { email, displayName: name };
    setCurrentUser(newUser);
    //save user to our database
    saveUser(email, name, "post");
    //send user to the firebase database
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then(() => {})
      .catch((error) => {
        console.log(error.message);
      });
  };

  //handle sign in
  const handleSignIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //handle google sign in
  const handleGoogleSignIn = async () => {
    const result = await signInWithPopup(auth, googleProvider);
    //save user to our database
    setCurrentUser(result.user);
    saveUser(result.user.email, result.user.displayName, "put");
  };

  //handle github sign in
  const handleGithubSignIn = async () => {
    const result = await signInWithPopup(auth, githubProvider);
    //save user to our database
    setCurrentUser(result.user);
    saveUser(result.user.email, result.user.displayName, "put");
  };

  //handle logout
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setCurrentUser({});
        setAdmin(false);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  //reset password
  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  const uploadImage = (file) => {
    const storageRef = ref(storage, `images/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // const progress = Math.round(
        //   (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        // );
      },
      (error) => {
        console.log(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {});
      }
    );
  };

  //admin check

  useEffect(() => {
    axios
      .get(`http://localhost:5000/users/${currentUser?.email}`)
      .then((res) => {
        if (res?.data?.role) setAdmin(true);
        else setAdmin(false);
      });
  }, [currentUser?.email, admin]);

  // observing the current user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
        getIdToken(user).then((idToken) => setToken(idToken));
      } else {
        setCurrentUser({});
      }
      setLoading(false);
    });
    return unsubscribe;
  }, [auth]);

  //save user to the database
  const saveUser = (email, displayName, httpMethod) => {
    const user = { email, displayName };
    axios({
      method: httpMethod,
      url: "http://localhost:5000/users",
      data: user,
    });
  };

  return {
    handleSignup,
    currentUser,
    loading,
    setCurrentUser,
    handleGoogleSignIn,
    handleGithubSignIn,
    handleLogout,
    handleSignIn,
    resetPassword,
    token,
    uploadImage,
    admin,
  };
};

export default useFirebase;
