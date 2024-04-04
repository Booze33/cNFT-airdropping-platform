const bs58 = require("bs58");
const { Keypair } = require("@solana/web3.js");

(async () => {
  const privateKey = Uint8Array.from([78,192,176,10,114,154,128,216,206,34,221,14,65,146,247,8,153,60,250,4,193,107,244,117,197,4,202,32,114,122,198,43,10,101,61,99,247,149,195,67,117,164,186,165,252,83,242,135,201,62,89,163,176,143,10,238,145,238,67,168,246,158,29,180]);

  const secretKey = bs58.encode(privateKey);
  console.log("Base58 Encoded Private Key:", secretKey);

  const keypair = Keypair.fromSecretKey(privateKey);
  const publicKey = keypair.publicKey.toString();
  console.log("Public Key:", publicKey);
})();