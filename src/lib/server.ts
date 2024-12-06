import axios from "axios";

export async function validateUserKey(key: string, userId: string) {
  const response = await axios.post("/validate_user_key", {
    userId,
    key,
  });
  console.log("Response for validate_user_key:", response.data);
  return response.data.isValid;
}

export async function check_user(userId: string) {
  const response = await axios.post("/check_user", {
    userId,
  });
  console.log("Response for check_user:", response.data);
  return response.data.isPresent;
}
export async function appendToDb(userId: string, encryptedContent: string) {
  const response = await axios.post("/append_to_db", {
    userId,
    encryptedContent,
  });
  console.log("Response:", response.data);
  return response.data;
}
