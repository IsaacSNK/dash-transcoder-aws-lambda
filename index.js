const { generateDashVideo } = require("dash-transcoder-service");

exports.handler = async function (event) {
  const { srcBucket, srcKey, destBucket, destKey } = event;
  console.log("EVENT\n" + JSON.stringify(event, null, 2));
  return;
};
