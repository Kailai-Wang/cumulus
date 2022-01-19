initSidebarItems({"constant":[["VERSION",""],["WASM_BINARY",""],["WASM_BINARY_BLOATY",""]],"enum":[["Call",""],["Event",""],["OriginCaller",""],["ProxyType","The type used to represent the kinds of proxying allowed."]],"fn":[["native_version","The version information used to identify this runtime when compiled natively."]],"mod":[["api",""],["constants",""]],"struct":[["Ancestry",""],["AnnouncementDepositBase",""],["AnnouncementDepositFactor",""],["ApprovalDeposit",""],["AssetAccountDeposit",""],["AssetDeposit",""],["AssetsPalletLocation",""],["AssetsStringLimit",""],["AttributeDepositBase",""],["BaseFilter",""],["CheckingAccount",""],["ClassDeposit",""],["DepositBase",""],["DepositFactor",""],["DepositPerByte",""],["DotLocation",""],["ExecutiveBody",""],["ExistentialDeposit",""],["GenesisConfig",""],["InstanceDeposit",""],["KeyLimit",""],["Local",""],["MaxAuthorities",""],["MaxCandidates",""],["MaxDownwardMessageWeight",""],["MaxInstructions",""],["MaxInvulnerables",""],["MaxLocks",""],["MaxPending",""],["MaxProxies",""],["MaxReserves",""],["MaxSignatories",""],["MetadataDepositBase","Key = 32 bytes, Value = 36 bytes (32+1+1+1+1)"],["MetadataDepositPerByte",""],["MinCandidates",""],["MinimumPeriod",""],["Offset",""],["OperationalFeeMultiplier",""],["Origin","The runtime origin type representing the origin of a call."],["PalletInfo","Provides an implementation of `PalletInfo` to provide information about the pallet setup in the runtime."],["ParentOrParentsExecutivePlurality",""],["ParentOrSiblings",""],["Period",""],["PotId",""],["ProxyDepositBase",""],["ProxyDepositFactor",""],["RelayChainOrigin",""],["RelayNetwork",""],["ReservedDmpWeight",""],["ReservedXcmpWeight",""],["Runtime",""],["RuntimeApi",""],["RuntimeApiImpl","Implements all runtime apis for the client side."],["RuntimeBlockLength",""],["RuntimeBlockWeights",""],["SS58Prefix",""],["SessionKeys",""],["SessionLength",""],["TransactionByteFee","Relay Chain `TransactionByteFee` / 10"],["UncleGenerations",""],["UniquesMetadataDepositBase",""],["UniquesStringLimit",""],["UnitWeightCost",""],["ValueLimit",""],["Version",""],["XcmConfig",""]],"trait":[["BuildStorage","Complex storage builder stuff."]],"type":[["Address","The address format for describing accounts."],["AllPallets","All pallets included in the runtime as a nested tuple of types."],["AllPalletsReversedWithSystemFirst","All pallets included in the runtime as a nested tuple of types in reversed order. With the system pallet first."],["AllPalletsWithSystem","All pallets included in the runtime as a nested tuple of types."],["AllPalletsWithSystemReversed","All pallets included in the runtime as a nested tuple of types in reversed order."],["AllPalletsWithoutSystem","All pallets included in the runtime as a nested tuple of types. Excludes the System pallet."],["AllPalletsWithoutSystemReversed","All pallets included in the runtime as a nested tuple of types in reversed order. Excludes the System pallet."],["AssetTransactors","Means for transacting assets on this chain."],["AssetTxPayment",""],["Assets",""],["AssetsForceOrigin","We allow root and the Relay Chain council to execute privileged asset operations."],["Aura",""],["AuraConfig",""],["AuraExt",""],["AuraExtConfig",""],["Authorship",""],["Balances",""],["BalancesConfig",""],["Barrier",""],["Block","Block type as expected by this runtime."],["BlockId","BlockId type as expected by this runtime."],["CheckedExtrinsic","Extrinsic type that has already been checked."],["CollatorSelection",""],["CollatorSelectionConfig",""],["CollatorSelectionUpdateOrigin","We allow root and the Relay Chain council to execute privileged collator selection operations."],["CumulusXcm",""],["CurrencyTransactor","Means for transacting the native currency on this chain."],["DmpQueue",""],["Executive","Executive: handles dispatch to the various modules."],["FungiblesTransactor","Means for transacting assets besides the native currency on this chain."],["LocalOriginToLocation","Converts a local signed origin into an XCM multilocation. Forms the basis for local origins sending/executing XCMs."],["LocationToAccountId","Type for specifying how a `MultiLocation` can be converted into an `AccountId`. This is used when determining ownership of accounts for asset transacting and when attempting to use XCM `Transact` in order to determine the dispatch Origin."],["Multisig",""],["ParachainInfo",""],["ParachainInfoConfig",""],["ParachainSystem",""],["ParachainSystemConfig",""],["PolkadotXcm",""],["Proxy",""],["Session",""],["SessionConfig",""],["SignedBlock","A Block signed with a Justification"],["SignedExtra","The SignedExtension to the basic transaction logic."],["System",""],["SystemConfig",""],["Timestamp",""],["TransactionPayment",""],["UncheckedExtrinsic","Unchecked extrinsic type as expected by this runtime."],["Uniques",""],["Utility",""],["XcmOriginToTransactDispatchOrigin","This is the type we use to convert an (incoming) XCM origin into a local `Origin` instance, ready for dispatching a transaction with Xcm’s `Transact`. There is an `OriginKind` which can biases the kind of local `Origin` it will become."],["XcmRouter","The means for routing XCM messages which are not for local execution into the right message queues."],["XcmpQueue",""]]});