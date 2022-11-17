import cloudinary from "@configs/cloudinary.config";

import logger from "@utils/logger";

const saveImage = async (image: string) => {
  try {
    const { secure_url } = await cloudinary.uploader.upload(image);

    return secure_url;
  } catch (error) {
    if (error instanceof Error) {
      // ✅ TypeScript knows err is Error
      logger.error(error.message);
    } else {
      logger.error("Unexpected error: ", error);
    }
  }
};

export default saveImage;
