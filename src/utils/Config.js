import { config } from "dotenv";
import c from '../config.json' assert { type: "json" };
config();
let port = process.env.port ? process.env.port : c.port;
let host = process.env.host ? process.env.host : c.host;
export {
    port,
    host
}