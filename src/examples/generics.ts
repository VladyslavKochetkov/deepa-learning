// TypeScript Generics Example

// Generic function
function identity<T>(arg: T): T {
  return arg;
}

console.log(identity<string>("Hello"));
console.log(identity<number>(42));

// Generic interface
interface Box<T> {
  value: T;
}

const stringBox: Box<string> = { value: "A string in a box" };
const numberBox: Box<number> = { value: 123 };

console.log(stringBox.value);
console.log(numberBox.value);

// Generic class
class DataStore<T> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  getAll(): T[] {
    return this.items;
  }

  getFirst(): T | undefined {
    return this.items[0];
  }
}

const numberStore = new DataStore<number>();
numberStore.add(1);
numberStore.add(2);
numberStore.add(3);
console.log("Numbers:", numberStore.getAll());

const stringStore = new DataStore<string>();
stringStore.add("apple");
stringStore.add("banana");
console.log("Strings:", stringStore.getAll());

// Union types
type StringOrNumber = string | number;

function formatValue(value: StringOrNumber): string {
  if (typeof value === "string") {
    return value.toUpperCase();
  }
  return value.toFixed(2);
}

console.log(formatValue("hello"));
console.log(formatValue(3.14159));

export { identity, Box, DataStore };
