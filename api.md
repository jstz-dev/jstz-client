# Shared

Types:

- <code><a href="./src/resources/shared.ts">PublicKey</a></code>
- <code><a href="./src/resources/shared.ts">PublicKeyHash</a></code>
- <code><a href="./src/resources/shared.ts">Signature</a></code>

# Accounts

Types:

- <code><a href="./src/resources/accounts/accounts.ts">Account</a></code>
- <code><a href="./src/resources/accounts/accounts.ts">Code</a></code>
- <code><a href="./src/resources/accounts/accounts.ts">KvValue</a></code>
- <code><a href="./src/resources/accounts/accounts.ts">Nonce</a></code>
- <code><a href="./src/resources/accounts/accounts.ts">AccountGetBalanceResponse</a></code>
- <code><a href="./src/resources/accounts/accounts.ts">AccountGetSubkeysResponse</a></code>

Methods:

- <code title="get /accounts/{address}">client.accounts.<a href="./src/resources/accounts/accounts.ts">get</a>(address) -> Account</code>
- <code title="get /accounts/{address}/balance">client.accounts.<a href="./src/resources/accounts/accounts.ts">getBalance</a>(address) -> AccountGetBalanceResponse</code>
- <code title="get /accounts/{address}/code">client.accounts.<a href="./src/resources/accounts/accounts.ts">getCode</a>(address) -> string</code>
- <code title="get /accounts/{address}/kv">client.accounts.<a href="./src/resources/accounts/accounts.ts">getKv</a>(address) -> string</code>
- <code title="get /accounts/{address}/nonce">client.accounts.<a href="./src/resources/accounts/accounts.ts">getNonce</a>(address) -> Nonce</code>
- <code title="get /accounts/{address}/kv/subkeys">client.accounts.<a href="./src/resources/accounts/accounts.ts">getSubkeys</a>(address) -> AccountGetSubkeysResponse</code>

## Logs

Types:

- <code><a href="./src/resources/accounts/logs.ts">LogRecord</a></code>

## Methods

## Subresources

# Operations

Types:

- <code><a href="./src/resources/operations.ts">Operation</a></code>
- <code><a href="./src/resources/operations.ts">Receipt</a></code>
- <code><a href="./src/resources/operations.ts">SignedOperation</a></code>
- <code><a href="./src/resources/operations.ts">OperationHashResponse</a></code>

Methods:

- <code title="get /operations/{operation_hash}/receipt">client.operations.<a href="./src/resources/operations.ts">getReceipt</a>(operationHash) -> Receipt</code>
- <code title="post /operations/hash">client.operations.<a href="./src/resources/operations.ts">hash</a>({ ...params }) -> string</code>
- <code title="post /operations">client.operations.<a href="./src/resources/operations.ts">inject</a>({ ...params }) -> void</code>
