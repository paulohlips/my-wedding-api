import * as dynamoose from "dynamoose";

const env = process.env.ENV;

if (env == "development") {
  try {
    dynamoose.aws.ddb.local();
    console.log("DDB Local is connected");
  } catch (error) {
    console.error(`Error on DDB local connection: ${error}`);
  }
} else {
  try {
    dynamoose.aws.ddb();
    console.log("Using AWS DynamoDB");
  } catch (error) {
    console.error(`Error on DDB connection (AWS): ${error}`);
  }
}

export default dynamoose;
