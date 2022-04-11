import { Address, BigInt, log } from "@graphprotocol/graph-ts";
// Import helpers for interacting with smart contract
import {
  WrapperContract,
  TransferSingle as TransferSingleEvent,
  TransferBatch as TransferBatchEvent,
} from "../generated/WrapperContract/WrapperContract";

// Import helpers for interacting with indexer node
import { Holder } from "../generated/schema";

// const burnAddr: string = "0x0000000000000000000000000000000000000000";
// const contractAddr: string = "0x73DA73EF3a6982109c4d5BDb0dB9dd3E3783f313";
// const contractDeployer: string = "0x53f46BFBEcB075B4feb3BcE6828b9095e630d371";

// To Do:
// Exclude: Burn address and contract address
// Check holder list has no duplicates
// Filter by first seen block number

export function handleTransferSingle (event: TransferSingleEvent): void {
  // event: TransferSingle(indexed address,indexed address,indexed address,uint256,uint256)

  // Collect event information
  const sentTo: string = event.params._to.toHexString();
  const blockNumber: BigInt = event.block.number;

  // Check if user exists yet, or create new and log blocknumber
  let holder = Holder.load(sentTo);
  if (!holder) {
    holder = new Holder(sentTo);
    holder.firstBlock = blockNumber;
    holder.save();
  }
}

export function handleTransferBatch (event: TransferBatchEvent): void {
  //event: TransferBatch(indexed address,indexed address,indexed address,uint256[],uint256[])
  
  // Collect event information
  const sentTo: string = event.params._to.toHexString();
  const blockNumber: BigInt = event.block.number;

  // Check if user exists yet, or create new and log blocknumber
  let holder = Holder.load(sentTo);
  if (!holder) {
    holder = new Holder(sentTo);
    holder.firstBlock = blockNumber;
    holder.save();
  }
}
