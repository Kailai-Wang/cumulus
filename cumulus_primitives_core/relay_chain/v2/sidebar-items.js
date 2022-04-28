initSidebarItems({"struct":[["BlakeTwo256","Blake2-256 Hash implementation."],["CandidateHash","Unit type wrapper around [`Hash`] that represents a candidate hash."],["InboundDownwardMessage","A wrapped version of `DownwardMessage`. The difference is that it has attached the block number when the message was sent."],["InboundHrmpMessage","An HRMP message seen from the perspective of a recipient."],["OutboundHrmpMessage","An HRMP message seen from the perspective of a sender."],["UncheckedExtrinsic","Simple blob to hold an extrinsic without committing to its format and ensure it is serialized correctly."]],"trait":[["HashT","Abstraction around hashing"]],"type":[["AccountId","Alias to the opaque account ID type for this chain, actually a `AccountId32`. This is always 32 bytes."],["AccountIndex","The type for looking up accounts. We don’t expect more than 4 billion of them."],["AccountPublic","Alias to the public key used for this chain, actually a `MultiSigner`. Like the signature, this also isn’t a fixed size when encoded, as different cryptos have different size public keys."],["Balance","The balance of an account. 128-bits (or 38 significant decimal figures) will allow for 10 m currency (`10^7`) at a resolution to all for one second’s worth of an annualised 50% reward be paid to a unit holder (`10^11` unit denomination), or `10^18` total atomic units, to grow at 50%/year for 51 years (`10^9` multiplier) for an eventual total of `10^27` units (27 significant decimal figures). We round denomination to `10^12` (12 SDF), and leave the other redundancy at the upper end so that 32 bits may be multiplied with a balance in 128 bits without worrying about overflow."],["Block","Block type."],["BlockId","Block ID."],["BlockNumber","The block number type used by Polkadot. 32-bits will allow for 136 years of blocks assuming 1 block per second."],["ChainId","Identifier for a chain. 32-bit should be plenty."],["DownwardMessage","A message sent from the relay-chain down to a parachain."],["Hash","A hash of some data used by the relay chain."],["Header","Header type."],["Moment","An instant or duration in time."],["Nonce","Index of a transaction in the relay chain. 32-bit should be plenty."],["Remark","The information that goes alongside a `transfer_into_parachain` operation. Entirely opaque, it will generally be used for identifying the reason for the transfer. Typically it will hold the destination account to which the transfer should be credited. If still more information is needed, then this should be a hash with the pre-image presented via an off-chain mechanism on the parachain."],["Signature","Alias to type for a signature for a transaction on the relay chain. This allows one of several kinds of underlying crypto to be used, so isn’t a fixed size when encoded."]]});