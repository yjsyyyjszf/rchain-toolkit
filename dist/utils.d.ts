/// <reference types="node" />
import { Payment, DeployData, SigAlgorithm } from "./models";
import * as rnodeProtos from "./rnode-protos";
export declare const getValueFromBlocks: (blockInfo: rnodeProtos.casper.IDataWithBlockInfo[]) => rnodeProtos.IPar;
export declare const rholangMapToJsObject: (map: any) => {
    [key: string]: any;
};
export declare const unforgeableWithId: (id: Buffer) => string;
export declare const getPayment: (timestamp: number, term: string, phloPrice?: number, phloLimit?: number, validAfterBlockNumber?: number) => Payment;
export declare const getDeployDataToSign: (payment: Payment) => Uint8Array;
export declare const getBlake2Hash: (toHash: Uint8Array) => Uint8Array;
export declare const verifyPrivateAndPublicKey: (privateKey: string, publicKey: string) => void;
export declare const signSecp256k1: (hash: Uint8Array, privateKey: string) => Uint8Array;
export declare const getDeployData: (sigAlgorithm: SigAlgorithm, timestamp: number, term: string, privateKey: string, publicKey: string, phloPrice?: number, phloLimit?: number, validAfterBlockNumber?: number) => DeployData;