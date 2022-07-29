import { SocketClient } from "@cognigy/socket-client";

const { ENDPOINT_BASE_URL, ENDPOINT_URL_TOKEN } = process.env;

const client = new SocketClient(
  ENDPOINT_BASE_URL as string,
  ENDPOINT_URL_TOKEN as string,
  { forceWebsockets: true }
);

client.connect();

const sendMessage = (message: string) => client.sendMessage(message);
const addListener = (handler: (...args: any[]) => void) =>
  client.on("output", handler);

export { sendMessage, addListener };
