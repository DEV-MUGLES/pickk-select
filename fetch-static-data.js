const axios = require('axios');
const fs = require('fs');
require('dotenv').config();

if(!process.env.DJANGO_API_HOST) {
  throw new Error('Env file not found!');
}

const fetchListData = (name, apiPath, filePath) => {
  axios(process.env.DJANGO_API_HOST + apiPath).then(res => {
    const obj = res.data.results;
    const path = __dirname + filePath;
    try {
      fs.mkdirSync(path.slice(0, path.lastIndexOf('/')));
    } catch {}
    fs.writeFileSync(path, JSON.stringify(obj, undefined, 2), 'utf-8');
    console.log(`[static] ${name} generated ✨`);
  });
};

fetchListData(
  'ITEM_MAJOR_TYPES',
  '/item_types/majors/',
  '/src/data/item/types.json'
);
fetchListData(
  'ITEM_TAGS',
  '/item_tags/?offset=0&limit=1000',
  '/src/data/item/tags.json'
);
