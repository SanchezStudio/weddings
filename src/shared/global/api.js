import fetch from 'isomorphic-fetch'

export function fetchGalleries (slug) {
  const encodedURI = encodeURI(`https://weddings.nyc3.digitaloceanspaces.com/data/galleries/${slug}/index.json`)

  return fetch(encodedURI)
    .then((data) => data.json())
    .catch((error) => {
      console.warn(error)
      return null
    });
}
