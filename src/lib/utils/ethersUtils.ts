/**
 * @file contractUtils.ts
 * @description Ethers.js Contract Utilities
 *
 * ⚠️ IMPORTANT NOTE ⚠️
 * These hooks provide Ethers.js compatibility for projects using Wagmi.
 * While Viem is the recommended library for Wagmi interactions, these adapters
 * are provided for cases where Ethers.js is still needed, such as:
 *
 * - Gradual migration from Ethers.js to Viem
 * - Integration with third-party libraries that require Ethers.js
 * - Personal preference for Ethers.js
 *
 * If your project doesn't specifically require Ethers.js, it's recommended
 * to use Viem directly with Wagmi for better performance and compatibility.
 *
 * @see https://wagmi.sh/react/guides/ethers
 * @see https://viem.sh
 *
 * This utility provides:
 * - getContract: Creates an Ethers.js Contract instance with given ABI and address
 */
import { ethers } from 'ethers';

// Initialize the contract
export function getContract(
  address: string,
  abi: ethers.Interface | ethers.InterfaceAbi,
  signerOrProvider: ethers.Signer | ethers.Provider
) {
  return new ethers.Contract(address, abi, signerOrProvider);
}
