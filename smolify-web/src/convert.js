function convert(longLink) {
  // make api call
  return fetch("http://localhost:8000/handleconvert", {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      link: longLink,
    }),
  })
    .then((response) => {
        return response.json()
    })
    .catch((error) => console.warn(error));
}

export default convert;
