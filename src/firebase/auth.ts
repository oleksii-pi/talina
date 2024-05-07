import { auth } from './firebase-config';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, onAuthStateChanged } from 'firebase/auth';

export const signUpEmail = async (email: string, password: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    await sendEmailVerification(userCredential.user);
    return userCredential;
  } catch (error) {
    throw new Error("Failed to sign up and send verification email.");
  }
};

export const signInEmail = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    if (!userCredential.user.emailVerified) {
      throw new Error("Please verify your email first.");
    }
    return userCredential;
  } catch (error) {
    throw error;
  }
};

export const signInGoogle = async () => {
    // TODO: Implement Google sign-in
}
