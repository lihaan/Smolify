function redirect(hash) {
  // make api call
  return fetch("http://localhost:8000/handleredirect", {
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
