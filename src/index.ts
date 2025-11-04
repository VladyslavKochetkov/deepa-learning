// Welcome to TypeScript!
// This is your main entry point for learning TypeScript

// Basic Types
const message: string = "Hello, TypeScript!";
const count: number = 42;
const isLearning: boolean = true;

console.log(message);
console.log(`Count: ${count}, Learning: ${isLearning}`);

// Functions with type annotations
function greet(name: string): string {
  return `Hello, ${name}!`;
}

console.log(greet("Developer"));

// Array types
const numbers: number[] = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(`Sum of numbers: ${sum}`);

// Object types
interface Person {
  name: string;
  age: number;
  email?: string; // Optional property
}

const person: Person = {
  name: "Alice",
  age: 25
};

console.log(`Person: ${person.name}, Age: ${person.age}`);

// Type inference
const inferredString = "TypeScript infers this is a string";
const inferredNumber = 100;

console.log("\nTypeScript is set up and ready for learning!");
