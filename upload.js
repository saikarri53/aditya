const AWS = require('aws-sdk');
const config = require('./aws-config');

AWS.config.update(config);

const s3 = new AWS.S3();

async function uploadToS3(file) {
  const params = {
    Bucket: 'your-bucket-name',
    Key: file.name,
    Body: file.data,
    ACL: 'public-read'
  };
  return await s3.upload(params).promise();
}

module.exports = { uploadToS3 };
