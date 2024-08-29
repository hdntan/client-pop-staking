// Generated by dedot cli

import type { GenericSubstrateApi } from "dedot/types";
import type { Result, AccountId32Like, AccountId32 } from "dedot/codecs";
import type {
  GenericContractQuery,
  GenericContractQueryCall,
  ContractCallOptions,
  GenericContractCallResult,
  ContractCallResult,
} from "dedot/contracts";
import type {
  StakingErrorsStakingError,
  InkPrimitivesLangError,
  StakingDataUserStakeData,
} from "./types";

export interface ContractQuery<ChainApi extends GenericSubstrateApi>
  extends GenericContractQuery<ChainApi> {
  /**
   *
   * @param {bigint} amount
   * @param {ContractCallOptions} options
   *
   * @selector 0x5adb38de
   **/
  stake: GenericContractQueryCall<
    ChainApi,
    (
      amount: bigint,
      options: ContractCallOptions,
    ) => Promise<
      GenericContractCallResult<
        Result<[], StakingErrorsStakingError>,
        ContractCallResult<ChainApi>
      >
    >
  >;

  /**
   *
   * @param {bigint} amount
   * @param {ContractCallOptions} options
   *
   * @selector 0x410fcc9d
   **/
  withdraw: GenericContractQueryCall<
    ChainApi,
    (
      amount: bigint,
      options: ContractCallOptions,
    ) => Promise<
      GenericContractCallResult<
        Result<[], StakingErrorsStakingError>,
        ContractCallResult<ChainApi>
      >
    >
  >;

  /**
   *
   * @param {ContractCallOptions} options
   *
   * @selector 0x9a8353a7
   **/
  claimReward: GenericContractQueryCall<
    ChainApi,
    (
      options: ContractCallOptions,
    ) => Promise<
      GenericContractCallResult<
        Result<[], StakingErrorsStakingError>,
        ContractCallResult<ChainApi>
      >
    >
  >;

  /**
   *
   * @param {bigint} period
   * @param {ContractCallOptions} options
   *
   * @selector 0x00a64005
   **/
  setLockTime: GenericContractQueryCall<
    ChainApi,
    (
      period: bigint,
      options: ContractCallOptions,
    ) => Promise<GenericContractCallResult<[], ContractCallResult<ChainApi>>>
  >;

  /**
   *
   * @param {ContractCallOptions} options
   *
   * @selector 0x02c779a5
   **/
  getTotalStaked: GenericContractQueryCall<
    ChainApi,
    (
      options: ContractCallOptions,
    ) => Promise<
      GenericContractCallResult<bigint, ContractCallResult<ChainApi>>
    >
  >;

  /**
   *
   * @param {ContractCallOptions} options
   *
   * @selector 0xa78a0844
   **/
  getTotalReward: GenericContractQueryCall<
    ChainApi,
    (
      options: ContractCallOptions,
    ) => Promise<
      GenericContractCallResult<bigint, ContractCallResult<ChainApi>>
    >
  >;

  /**
   *
   * @param {AccountId32Like} user
   * @param {ContractCallOptions} options
   *
   * @selector 0x334c51cd
   **/
  getUserData: GenericContractQueryCall<
    ChainApi,
    (
      user: AccountId32Like,
      options: ContractCallOptions,
    ) => Promise<
      GenericContractCallResult<
        StakingDataUserStakeData,
        ContractCallResult<ChainApi>
      >
    >
  >;

  /**
   *
   * @param {AccountId32Like} user
   * @param {ContractCallOptions} options
   *
   * @selector 0xdfd48348
   **/
  getUserReward: GenericContractQueryCall<
    ChainApi,
    (
      user: AccountId32Like,
      options: ContractCallOptions,
    ) => Promise<
      GenericContractCallResult<bigint, ContractCallResult<ChainApi>>
    >
  >;

  /**
   *
   * @param {ContractCallOptions} options
   *
   * @selector 0x0003a813
   **/
  getAllStakers: GenericContractQueryCall<
    ChainApi,
    (
      options: ContractCallOptions,
    ) => Promise<
      GenericContractCallResult<
        Array<AccountId32>,
        ContractCallResult<ChainApi>
      >
    >
  >;

  /**
   *
   * @param {AccountId32Like} user
   * @param {ContractCallOptions} options
   *
   * @selector 0x624d1009
   **/
  startTime: GenericContractQueryCall<
    ChainApi,
    (
      user: AccountId32Like,
      options: ContractCallOptions,
    ) => Promise<
      GenericContractCallResult<bigint, ContractCallResult<ChainApi>>
    >
  >;

  /**
   *
   * @param {ContractCallOptions} options
   *
   * @selector 0x4488d24e
   **/
  durationTime: GenericContractQueryCall<
    ChainApi,
    (
      options: ContractCallOptions,
    ) => Promise<
      GenericContractCallResult<bigint, ContractCallResult<ChainApi>>
    >
  >;

  /**
   *
   * @param {AccountId32Like} user
   * @param {ContractCallOptions} options
   *
   * @selector 0x5f3e43a4
   **/
  endTime: GenericContractQueryCall<
    ChainApi,
    (
      user: AccountId32Like,
      options: ContractCallOptions,
    ) => Promise<
      GenericContractCallResult<bigint, ContractCallResult<ChainApi>>
    >
  >;

  /**
   *
   * @param {AccountId32Like} user
   * @param {ContractCallOptions} options
   *
   * @selector 0x8fd74857
   **/
  timeRemaining: GenericContractQueryCall<
    ChainApi,
    (
      user: AccountId32Like,
      options: ContractCallOptions,
    ) => Promise<
      GenericContractCallResult<bigint, ContractCallResult<ChainApi>>
    >
  >;
}
