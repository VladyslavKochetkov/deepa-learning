// TypeScript Classes Example

class Animal {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }

  public makeSound(): void {
    console.log(`${this.name} makes a sound`);
  }
}

class Dog extends Animal {
  private breed: string;

  constructor(name: string, breed: string) {
    super(name);
    this.breed = breed;
  }

  public makeSound(): void {
    console.log(`${this.name} barks!`);
  }

  public getBreed(): string {
    return this.breed;
  }
}

// Usage
const dog = new Dog("Buddy", "Golden Retriever");
dog.makeSound();
console.log(`Breed: ${dog.getBreed()}`);

export { Animal, Dog };
