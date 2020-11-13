import firebase from "firebase/app";
import "firebase/auth";

export const logoutUser = () => {
  firebase.auth().signOut();
};
 
export const signInUser = async ({ name, email, password }) => {
  try {
    await firebase.auth().createUserWithEmailAndPassword(email, password);
    firebase.auth().currentUser.updateProfile({
      displayName: name
    });

    return {};
  } catch (error) {
    switch (error.code) {
      case "auth/email-already-in-use":
        return {
          error: "Correo ya esta en uso."
        };
      case "auth/invalid-email":
        return {
          error: "Formato de Correo invalido."
        };
      case "auth/weak-password":
        return {
          error: "La contraseña es demasiado débil."
        };
      case "auth/too-many-requests":
        return {
          error: "Tardo demasiado en responder. Vuelve a intentarlo en un momento."
        };
      default:
        return {
          error: "Verifica tu Conexión."
        };
    }
  }
};

export const loginUser = async ({ email, password }) => {
  try {
    await firebase.auth().signInWithEmailAndPassword(email, password);
    return {};
  } catch (error) {
    switch (error.code) {
      case "auth/invalid-email":
        return {
          error: "Formato de Correo invalido."
        };
      case "auth/user-not-found":
      case "auth/wrong-password":
        return {
          error: "Correo o Contraseña invalido."
        };
      case "auth/too-many-requests":
        return {
          error: "Tardo demasiado en responder. Vuelve a intentarlo en un momento."
        };
      default:
        return {
          error: "Verifica tu Conexión."
        };
    }
  }
};

export const sendEmailWithPassword = async email => {
  try {
    await firebase.auth().sendPasswordResetEmail(email);
    return {};
  } catch (error) {
    switch (error.code) {
      case "auth/invalid-email":
        return {
          error: "Formato de Correo invalido."
        };
      case "auth/user-not-found":
        return {
          error: "No existe una cuenta con ese Correo."
        };
      case "auth/too-many-requests":
        return {
          error: "Tardo demasiado en responder. Vuelve a intentarlo en un momento."
        };
      default:
        return {
          error: "Verifica tu Conexión."
        };
    }
  }
};
