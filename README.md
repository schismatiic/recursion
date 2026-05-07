# Recursion (JavaScript)

A JavaScript project focused on understanding and practicing **recursion** through two classic computer science problems: **Fibonacci Sequence** and **Merge Sort**.

This project explores both iterative and recursive approaches while reinforcing core concepts such as divide-and-conquer algorithms, recursive thinking, and problem decomposition.

---

## Features

- Iterative Fibonacci sequence generator
- Recursive Fibonacci sequence generator
- Recursive Merge Sort algorithm
- Multiple test cases for validation

---

## Concepts Covered

- Recursion
- Iteration vs Recursion
- Divide and Conquer
- Array Manipulation
- Algorithmic Thinking
- Sorting Algorithms

---

## Project Structure

```id="g1f2de"
/recursion
│── fibonacci/
│──── fibs.js
│──── fibs.spec.js
│──── fibsRec.js
│──── fibsRec.spec.js
│── mergeSort/
│──── mergeSort.js
│──── mergeSort.js
│── node_modules/
│── .gitignore
│── package-lock.json
│── package.json
└── README.md
```

---

## Fibonacci

### Iterative Version

- `fibs(n)`
- Returns an array containing the first `n` Fibonacci numbers using iteration.

Example:

```js id="rt4n8q"
fibs(8);
// [0, 1, 1, 2, 3, 5, 8, 13]
```

---

### Recursive Version

- `fibsRec(n)`
- Solves the same problem recursively to better understand recursive execution flow.

Example:

```js id="x0z7kl"
fibsRec(8);
// [0, 1, 1, 2, 3, 5, 8, 13]
```

---

## Merge Sort

### Recursive Sorting Algorithm

- `mergeSort(array)`
- Uses the divide-and-conquer methodology to recursively sort arrays.

Examples:

```js id="m3q7vb"
mergeSort([3, 2, 1, 13, 8, 5, 0, 1]);
// [0, 1, 1, 2, 3, 5, 8, 13]

mergeSort([105, 79, 100, 110]);
// [79, 100, 105, 110]
```

---

## Running the Project

This project is designed to run in the command line using Node.js.

Run a file:

```bash id="k8r1yt"
node filename.js
```

Example:

```bash id="u4v6pl"
node mergeSort.js
```

---

## Testing Recursion

To visualize recursive calls, add:

```js id="s2p4ow"
console.log("This was printed recursively");
```

inside the recursive function and run it with:

```js id="d5m8xn"
fibsRec(8);
```

This helps demonstrate how recursion repeatedly invokes the same function until reaching the base case.

---

## Learning Goal

The main objective of this project is to develop a deeper understanding of:

- How recursion works internally
- Base cases and recursive calls
- Recursive problem decomposition
- Efficient sorting strategies

---

## License

This project is open-source.
