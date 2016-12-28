# enlist

**En**glish-ize a **list** of strings, e.g.:

```js
const enlist = require('enlist');

console.log(enlist(['apples', 'oranges', 'bananas']));
// apples, oranges, and bananas

console.log(enlist.or(['chocolate', 'vanilla']));
// chocolate or vanilla

```

It's most useful when you don't know the size of the list beforehand.

## API

### `enlist([String]: items)`
Returns a well-formed string of the array of strings, `items`, depending on the number of items in `items`, e.g.:

| `items` | `enlist(items)`     |
| :------------- | :------------- |
| `[]`       | `''`       |
| `['A']`       | `'A'`       |
| `['A', 'B']`       | `'A and B'`       |
| `['A', 'B', 'C']`       | `'A, B, and C'`       |
| `['A', 'B', 'C', 'D']`       | `'A, B, C, and D'`       |


### `enlist.or([String]: items)`
Like `enlist(items)`, but the conjunction separating the final item is "or" instead of "and", e.g.:

```js
enlist.or(['A', 'B', 'C', 'D']) // A, B, C, or D
```
