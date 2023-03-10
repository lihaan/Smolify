import { HOSTNAME, PORT_BACKEND } from "./App";

function redirect(hash) {
  // make api call
 return fetch(`${HOSTNAME}:${PORT_BACKEND}/handleredirect`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      hash: hash,
    }),
  })
    .then((response) => {
      return response.json();
    })
    .catch((error) => console.warn(error));
}

export default redirect;
