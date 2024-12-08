/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import "./App.css";
import { PenpotDataRaw } from "./lib/types";
import { appendToDb, check_user, validateUserKey } from "./lib/server";
import { encryptString } from "./processing";
import { Loader } from "./components/Loader";
import { FormContainer } from "./components/FormContainer";
import { Tracking } from "./components/Tracking";

function Plugin() {
  const url = new URL(window.location.href);
  const initialTheme = url.searchParams.get("theme");
  const [theme] = useState(initialTheme || null);
  const [userKey, setUserKey] = useState<string | null>(null);
  const [user, setUser] = useState<string | null>(null);
  const [isPresent, setIsPresent] = useState<boolean>(false);
  const [isChecking, setIsChecking] = useState<boolean>(false);

  parent.postMessage(
    {
      message: "id_request",
    },
    "*",
  );
  useEffect(() => {
    if (!user) return console.log("User not defined yet");
    const checkUser = async () => {
      try {
        setIsChecking(true);
        const checkUserResponse = await check_user(user);
        setIsChecking(false);
        setIsPresent(checkUserResponse);
      } catch (error) {
        console.log(error);
      }
    };
    checkUser();
  }, [user]);

  const handleAddItem = (item: PenpotDataRaw, userId: string) => {
    try {
      const rawJson = JSON.stringify(item);
      if (!userKey) return console.log("User key not defined yet");
      const encryptedContent = encryptString(rawJson, userKey);
      const log = appendToDb(userId, encryptedContent);
      console.log(log);
    } catch {
      console.log("Error creating transaction");
    }
  };

  window.addEventListener("message", (event) => {
    const message = event.data;
    if (message.type == "user_id_response") {
      const userId = message.userId;
      setUser(userId);
    }
    if (message.type == "append_to_db") {
      const penpotDataUnit = message.payload as PenpotDataRaw;
      const userId = message.userId;
      handleAddItem(penpotDataUnit, userId);
    }
  });

  function handleSetUserKey(data: { key: string }): void {
    try {
      if (!user) return console.log("User not initialized yet");
      if (isPresent) {
        const isValid = validateUserKey(data.key, user);
        if (!isValid) return console.log("Key is not valid");
        return setUserKey(data.key);
      }
      return setUserKey(data.key);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div
      data-theme={theme}
      className="flex flex-col gap-4 items-center p-4 dark w-full"
    >
      {isChecking ? (
        <Loader />
      ) : userKey ? (
        <Tracking userId={user!} />
      ) : (
        <FormContainer isPresent={isPresent} setUserKey={handleSetUserKey} />
      )}
    </div>
  );
}

export default Plugin;
