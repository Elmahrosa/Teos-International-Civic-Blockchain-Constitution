import { Connection, PublicKey, clusterApiUrl } from "@solana/web3.js";
import { Program, AnchorProvider, Idl } from "@project-serum/anchor";

/**
 * Solana connection (default: devnet)
 */
const network = clusterApiUrl(process.env.NEXT_PUBLIC_SOLANA_CLUSTER || "devnet");
export const connection = new Connection(network, "confirmed");

/**
 * Get Anchor provider from wallet
 */
export function getProvider(wallet: any) {
  return new AnchorProvider(connection, wallet, {
    preflightCommitment: "processed",
  });
}

/**
 * Load an Anchor program by IDL + programId
 */
export async function loadProgram(idl: Idl, programId: string, wallet: any) {
  const provider = getProvider(wallet);
  return new Program(idl, new PublicKey(programId), provider);
}

