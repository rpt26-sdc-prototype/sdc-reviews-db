const { userProvisions: uP, reviewProvisions: rP } = require('./machineConfig/provisions.js');
const client = require('./machineConfig/PGIndex.js');

(async () => {
  try {
    await client.connect();
    await [rP].reduce(async (count, provisions) => {
      await count;
      await require('./csvMachine')(provisions);
      return count += 1;
    }, 0)
    await client.end();
    process.exit(1);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
})();