import { decryptString } from "@/processing";
import axios from "axios";

const ADDRESS = "https://activity-tracker-backend-wtih.onrender.com/";
type result = {
  id: string;
  encryptedContent: string;
  userId: string;
}[];
export async function fetchUserActivity(userId: string, key: string) {
  const response = await axios.post(`${ADDRESS}/fetch_data`, {
    userId,
  });
  const encryptedLog = response.data as result;
  const penpotDataRaw = encryptedLog.map((value) => {
    const decryptedContent = JSON.parse(
      decryptString(key, value.encryptedContent),
    );
    return decryptedContent;
  });
  return penpotDataRaw;
}
export async function validateUserKey(key: string, userId: string) {
  const response = await axios.post(`${ADDRESS}/validate_user_key`, {
    userId,
    key,
  });
  console.log("Response for validate_user_key:", response.data);
  return response.data.isValid;
}

export async function check_user(userId: string) {
  const response = await axios.post(`${ADDRESS}/check_user`, {
    userId,
  });
  console.log("Response for check_user:", response.data);
  return response.data.isPresent;
}
export async function appendToDb(userId: string, encryptedContent: string) {
  const response = await axios.post(`${ADDRESS}/append_to_db`, {
    userId,
    encryptedContent,
  });
  console.log("Response:", response.data);
  return response.data;
}
