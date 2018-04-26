import fetch from 'isomorphic-fetch'

export function fetchGalleries (couple) {
  couple = couple.replace(/-/g, '_')
  const encodedURI = encodeURI(`http://localhost:3000/data/gallery/${couple}.json`)

  return fetch(encodedURI)
    .then((data) => data.json())
    .catch((error) => {
      console.warn(error)
      return null
    });
}
