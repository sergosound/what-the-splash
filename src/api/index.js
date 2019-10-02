const key = '5f96323678d05ff0c4eb264ef184556868e303b32a2db88ecbf15746e6f25e02';
const url = 'https://api.unsplash.com/photos/';

const fetchImages = async (page) => {
  const res = await fetch(`${url}${key}&per_page=3&page=${page}`);
  const data = await res.json();
  if (res.status >= 400) {
    throw new Error('error', data.errors);
  }
};

export { fetchImages };
