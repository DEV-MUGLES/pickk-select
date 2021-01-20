import { baseConfig } from '../Api';

export const uploadFileConfig = (images: File[]) => {
  const data = new FormData();
  images.forEach((image) => {
    data.append('images', image);
  });
  return baseConfig().post('/images/file/', data, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
};
