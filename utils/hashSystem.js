import CryptoJS from "crypto-js";

export const hash = (string, action) => {

  let key = process.env.CRYPTO_SECRET_KEY || "12345678901234567890123456789012";
  key = CryptoJS.enc.Utf8.parse(key);
  
  let iv = process.env.CRYPTO_SECRET_IV || "1234567890123456";
  iv = CryptoJS.enc.Utf8.parse(iv);

  let encrypted = CryptoJS.AES.encrypt(string, key, { iv: iv });
  encrypted = encrypted.toString();

  let decrypted = CryptoJS.AES.decrypt(string, key, { iv: iv });
  decrypted = decrypted.toString(CryptoJS.enc.Utf8);

  return action === "decrypt" ? decrypted : encrypted;
}