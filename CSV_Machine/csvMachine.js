const {
  logs: { log, logStart, logVictoryMessage },
  utils: { drainWriter, postDBQuery }
} = require('./config/config.js');

module.exports = async function (provisions) {
  try {
    const start = logStart(provisions);
    const generationTime = await drainWriter(provisions);
    const insertionTime = await postDBQuery(provisions);
    logVictoryMessage(provisions, start, generationTime, insertionTime);
  } catch (err) {
    log(err.message);
    process.exit(1);
  }
}

