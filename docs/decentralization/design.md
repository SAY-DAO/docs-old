---
title: Design
description: something!.
---

# Intro

_Lorem Ipsum_ is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

## Open Source
## DAO

## Services

oracles, Filecoind , IPFS

## Data structure

DB today, IPFS later?

```typescript
// This example uses TypeScript to annotate the parameters and return types of our methods.
// We won't do any fancy type manipulation, though, so don't worry if you're not into TypeScript.
type Key = string;
type Value = string;

interface Nakama {
  def post(self, tx_hash):
        if not is_hexstr(tx_hash):
            return dict(message='Invalid tx hash'), 400

        tx_hash = tx_hash.lower()
        tx = session.query(NakamaTx).get(tx_hash)

        if tx:
            return dict(message='Tx Exists'), 400

        tx = NakamaTx(id=tx_hash)
        session.add(tx)
        try:
            tx.update()
        except web3.exceptions.TransactionNotFound:
            print(f'Tx {tx_hash} not mined yet')

        safe_commit(session)
        return tx
}
```

## smart contract

```
Starting up http-server, serving .
Available on:
  http://127.0.0.1:8080
  http://192.168.1.110:8080
```
