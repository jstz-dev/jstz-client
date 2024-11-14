# Accounts

## Balance

Types:

- <code><a href="./src/resources/accounts/balance.ts">BalanceRetrieveResponse</a></code>

Methods:

- <code title="get /accounts/{address}/balance">client.accounts.balance.<a href="./src/resources/accounts/balance.ts">retrieve</a>(address) -> BalanceRetrieveResponse</code>

## Code

Types:

- <code><a href="./src/resources/accounts/code.ts">ParsedCode</a></code>

Methods:

- <code title="get /accounts/{address}/code">client.accounts.code.<a href="./src/resources/accounts/code.ts">retrieve</a>(address) -> string</code>

## Kv

Types:

- <code><a href="./src/resources/accounts/kv/kv.ts">KvValue</a></code>

Methods:

- <code title="get /accounts/{address}/kv">client.accounts.kv.<a href="./src/resources/accounts/kv/kv.ts">retrieve</a>(address) -> string</code>

### Subkeys

Types:

- <code><a href="./src/resources/accounts/kv/subkeys.ts">SubkeyListResponse</a></code>

Methods:

- <code title="get /accounts/{address}/kv/subkeys">client.accounts.kv.subkeys.<a href="./src/resources/accounts/kv/subkeys.ts">list</a>(address) -> SubkeyListResponse</code>

## Nonce

Types:

- <code><a href="./src/resources/accounts/nonce.ts">Nonce</a></code>

Methods:

- <code title="get /accounts/{address}/nonce">client.accounts.nonce.<a href="./src/resources/accounts/nonce.ts">retrieve</a>(address) -> Nonce</code>

# Logs

Types:

- <code><a href="./src/resources/logs/logs.ts">LogRecord</a></code>

Methods:

- <code title="get /logs/{address}/stream">client.logs.<a href="./src/resources/logs/logs.ts">stream</a>(address) -> void</code>

## PersistentRequests

Types:

- <code><a href="./src/resources/logs/persistent-requests.ts">PersistentRequestRetrieveResponse</a></code>
- <code><a href="./src/resources/logs/persistent-requests.ts">PersistentRequestListResponse</a></code>

Methods:

- <code title="get /logs/{address}/persistent/requests/{request_id}">client.logs.persistentRequests.<a href="./src/resources/logs/persistent-requests.ts">retrieve</a>(address, requestId) -> PersistentRequestRetrieveResponse</code>
- <code title="get /logs/{address}/persistent/requests">client.logs.persistentRequests.<a href="./src/resources/logs/persistent-requests.ts">list</a>(address, { ...params }) -> PersistentRequestListResponse</code>

# Operations

Methods:

- <code title="post /operations">client.operations.<a href="./src/resources/operations/operations.ts">inject</a>({ ...params }) -> void</code>

## Receipt

Types:

- <code><a href="./src/resources/operations/receipt.ts">Receipt</a></code>

Methods:

- <code title="get /operations/{operation_hash}/receipt">client.operations.receipt.<a href="./src/resources/operations/receipt.ts">retrieve</a>(operationHash) -> Receipt</code>

# Crypto

Types:

- <code><a href="./src/resources/crypto.ts">PublicKey</a></code>
- <code><a href="./src/resources/crypto.ts">PublicKeyHash</a></code>
- <code><a href="./src/resources/crypto.ts">Signature</a></code>
