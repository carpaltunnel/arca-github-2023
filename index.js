const seconds = new Date().getSeconds();

console.log(`${new Date().toISOString()} Starting up...`);
console.log(`Current second is : ${seconds}`)

if (seconds % 3 === 0) {
  console.log(`\t${new Date().toISOString()} : Current second is evenly divisible by three`);
} else if (seconds % 3 === 1) {
  console.log(`\t${new Date().toISOString()} : Current second has a remainder of one.`);
} else if (seconds % 3 === 2) {
  console.log('\tCurrent second has a remainder of two');
}