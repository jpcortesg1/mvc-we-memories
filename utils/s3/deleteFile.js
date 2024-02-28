import AWS from "aws-sdk";
import { promisify } from "util";

const deleteFile = async (key) => {
  AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION,
  });
  const s3 = new AWS.S3();
  
  const params = {
    Bucket: "jpcortesg-bucket",
    Key: key,
  };

  const deleteAsync = promisify(s3.deleteObject.bind(s3));
  
  try {
    await deleteAsync(params);
  } catch (error) {
    console.error("Error deleting file:", error);
    throw error;
  }
};

export default deleteFile;