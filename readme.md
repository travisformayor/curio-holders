# Holders

List everyone who has had a curio card (wrapped) at some point before a certain block

## Query

```
{
  holders(
    first: 1000
    orderBy: id
    orderDirection: asc
    where: {
      firstBlock_lt: 14352649, 
    }
  ) {
    id
    firstBlock
  }
}
```

Results exceed the limits for using skip to paginate. Instead the id's are sorted, and you ask for the next 1000 ids greater than the last id returned.

```
{
  holders(
    first: 1000
    orderBy: id
    orderDirection: asc
    where: {
      firstBlock_lt: 14352649, 
      id_gt: "0x1a34ac9d77f9a4c794063e7640d6c0c3777b1a4b"
    }
  ) {
    id
    firstBlock
  }
}
```