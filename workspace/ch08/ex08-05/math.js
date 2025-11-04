// Named Export
export function plus(a, b) {
    console.log(`${a} + ${b} = ${a + b}`);
    return a + b;
}
// Named Export
export function minus(a, b) {
    console.log(`${a} - ${b} = ${a - b}`);
    return a - b;
}
function multiply(a, b) {
    console.log(`${a} * ${b} = ${a * b}`);
    return a * b;
}
function printUser(user) {
    console.log(`${user.name} ${user.age}`);
}
// Default Export
