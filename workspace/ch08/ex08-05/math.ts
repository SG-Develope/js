// Named Export
export function plus(a: number, b: number) {
  console.log(`${a} + ${b} = ${a + b}`);
  return a + b;
}

// Named Export
export function minus(a: number, b: number) {
  console.log(`${a} - ${b} = ${a - b}`);
  return a - b;
}

function multiply(a: number, b: number) {
  console.log(`${a} * ${b} = ${a * b}`);
  return a * b;
}

function printUser(user: User) {
  console.log(`${user.name} ${user.age}`);
}

type User = {
  name: string;
  age: number;
}

// Default Export
