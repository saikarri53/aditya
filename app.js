const express = require('express');
const fileUpload = require('express-fileupload');
const { uploadToS3 } = require('./upload');

const app = express();
app.use(express.static('public'));
app.use(fileUpload());

app.post('/upload', async (req, res) => {
  if (!req.files || !req.files.file) {
    return res.status(400).send('No file uploaded.');
  }
  const file = req.files.file;
  try {
    const result = await uploadToS3(file);
    res.send('Uploaded successfully: ' + result.Location);
  } catch (err) {
    console.error(err);
    res.status(500).send('Upload failed');
  }
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
