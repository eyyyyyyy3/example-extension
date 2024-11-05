function listener(data) {
  console.log("I am the listener and i recieved the following message: ", data);
}

export async function initialize(endpoint) {
  await endpoint.registerUI("main", "app", "app-extension", listener);
  console.log("hello from the extension");
}

export async function terminate() {
  console.log("Am I going to die?");
}
