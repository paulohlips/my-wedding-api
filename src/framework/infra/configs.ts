import * as dotenv from "dotenv";
import { resolve } from "path";

const env = process.env.ENV || "dev";
const envFile = `.env.${env}`;
dotenv.config({ path: resolve(process.cwd(), envFile) });

console.log(`Loaded environment: ${envFile}`);
