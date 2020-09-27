const KEY =
'?client_id=XZW1GGWTMMa-l-dhEtWtZ23diZLcp5vZ5hkNhTfAtJo'
const URL = 'https://api.unsplash.com/photos/'

const fetchImages = async (page) => {
  const url = `${URL}${KEY}&per_page=3&page=${page}`
  console.log(url)
  const response = await fetch(url)
  const data = await response.json()
  if (response.status !== 200) {
    throw new Error(data.errors);
  }
  return data
}
export { fetchImages };