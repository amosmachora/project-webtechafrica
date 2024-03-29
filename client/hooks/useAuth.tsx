import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import { onSnapshot } from "firebase/firestore";
import React, { createContext, useContext, useEffect } from "react";
import { LOCAL_STORAGE_KEYS } from "../util/utilities";
import { useLocalStorage } from "./useLocalStorage";
import { doc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { UserData } from "@/types/Global";
import axios from "axios";

const authContext = createContext<AuthContext>({
  user: null,
  setUserData: () => {},
  userData: null,
});

type AuthContext = {
  userData: UserData | null;
  setUserData: React.Dispatch<React.SetStateAction<UserData | null>>;
  user: User | null;
};

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [userData, setUserData] = useLocalStorage<UserData | null>(
    null,
    LOCAL_STORAGE_KEYS.USER_DATA
  );
  const [user, setUser] = useLocalStorage<User | null>(
    null,
    LOCAL_STORAGE_KEYS.USER
  );

  const auth = getAuth();

  onAuthStateChanged(auth, (user) => {
    setUser(user);
    if (user) {
      axios.post("/api/sign-in", { user });
    }
    if (typeof localStorage !== "undefined") {
      localStorage.setItem(
        LOCAL_STORAGE_KEYS.LAST_SIGN_IN_DATE,
        new Date().toISOString()
      );
    }
  });

  useEffect(() => {
    const userDataRef = user?.uid ? doc(db, "users", user.uid) : null;

    if (userDataRef) {
      onSnapshot(userDataRef, (doc) => {
        setUserData(doc.data() as UserData);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <authContext.Provider
      value={{
        userData,
        setUserData,
        user,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

export const useAuth = () => useContext(authContext);
