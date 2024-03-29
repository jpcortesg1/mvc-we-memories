import AWS from "aws-sdk";
import { promisify } from "util";

const uploadFile = async (name, buffer) => {
  AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION,
  });
  const s3 = new AWS.S3();

  const key = `MVC-memories/${Date.now()}_${name}`;

  const params = {
    Bucket: "jpcortesg-bucket",
    Key: key,
    Body: buffer,
  };

  const uploadAsync = promisify(s3.upload.bind(s3));

  try {
    const data = await uploadAsync(params);
    return data;
  } catch (error) {
    console.error("Error uploading file:", error);
    throw error;
  }
};

export default uploadFile;
