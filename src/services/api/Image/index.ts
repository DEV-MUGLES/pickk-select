import axios from 'axios';

import { uploadFileConfig } from './config';

const uploadFile = async (images: File[]): Promise<{ images: string[] }> =>
  axios(uploadFileConfig(images)).then((res) => res.data);

const ImageService = {
  uploadFile,
};

export default ImageService;
