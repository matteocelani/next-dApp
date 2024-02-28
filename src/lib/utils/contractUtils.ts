import { ethers } from "ethers";

// Initialize the contract
export function getContract(
  address: string,
  abi: ethers.Interface | ethers.InterfaceAbi,
  signerOrProvider: ethers.Signer | ethers.Provider
) {
  return new ethers.Contract(address, abi, signerOrProvider);
}
