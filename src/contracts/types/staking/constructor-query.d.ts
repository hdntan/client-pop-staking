// Generated by dedot cli

import type { GenericSubstrateApi } from "dedot/types";
import type { AccountId32Like, Result } from "dedot/codecs";
import type {
  GenericConstructorQuery,
  GenericConstructorQueryCall,
  GenericConstructorCallResult,
  ConstructorCallOptions,
  ContractInstantiateResult,
} from "dedot/contracts";
import type { InkPrimitivesLangError } from "./types";

export interface ConstructorQuery<ChainApi extends GenericSubstrateApi>
  extends GenericConstructorQuery<ChainApi> {
  /**
   *
   * @param {AccountId32Like} owner
   * @param {AccountId32Like} tokenContract
   * @param {ConstructorCallOptions} options
   *
   * @selector 0x9bae9d5e
   **/
  new: GenericConstructorQueryCall<
    ChainApi,
    (
      owner: AccountId32Like,
      tokenContract: AccountId32Like,
      options: ConstructorCallOptions,
    ) => Promise<
      GenericConstructorCallResult<[], ContractInstantiateResult<ChainApi>>
    >
  >;
}
