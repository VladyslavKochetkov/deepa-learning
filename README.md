# TypeScript Learning Project

A simple TypeScript project setup for learning JavaScript/TypeScript with tsx for fast transpiling.

## Features

- TypeScript 5.x with strict type checking enabled
- tsx for fast development without build step
- Comprehensive tsconfig.json with learning-friendly settings
- Example files demonstrating key TypeScript concepts

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run the Main File

```bash
npm run dev
```

### Run Example Files

```bash
# Classes example
npm run run:classes

# Generics example
npm run run:generics
```

### Build Project

```bash
npm run build
```

This compiles TypeScript to JavaScript in the `dist` folder.

### Run Compiled Code

```bash
npm start
```

### Watch Mode

```bash
npm run watch
```

This watches for changes and recompiles automatically.

## Project Structure

```
deepa-learning/
├── src/
│   ├── index.ts          # Main entry point
│   └── examples/
│       ├── classes.ts    # Classes and inheritance
│       └── generics.ts   # Generics and advanced types
├── dist/                 # Compiled JavaScript (after build)
├── tsconfig.json         # TypeScript configuration
└── package.json          # Project dependencies and scripts
```

## TypeScript Config Highlights

- **Strict mode enabled**: Catches more errors at compile time
- **ES2022 target**: Modern JavaScript features
- **Source maps**: Easy debugging
- **No unused variables/parameters**: Keeps code clean
- **Comprehensive type checking**: Best practices for learning

## Learning Resources

- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [TypeScript Deep Dive](https://basarat.gitbook.io/typescript/)
- [tsx Documentation](https://tsx.is/)

## Tips for Learning

1. Start by exploring the example files in `src/examples/`
2. Try modifying the code and see TypeScript catch errors
3. Use `npm run dev` for quick iteration
4. Check the TypeScript errors - they're helpful for learning!
5. Experiment with different types and see what works
