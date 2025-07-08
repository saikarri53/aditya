# ☁️ Cloud Based File Storage System

This is a simple Node.js + AWS S3 project where users can upload files via a web interface and store them securely in an S3 bucket.

## 🔧 Tech Stack
- Node.js + Express
- AWS SDK (S3)
- HTML/CSS
- express-fileupload

## 🚀 Features
- Upload files via web browser
- Store files in S3 bucket
- Public file access (optional)
- Easily deployable to EC2

## 🗂️ Project Structure
```
cloud-drive-project/
├── public/
│   └── index.html
├── app.js
├── upload.js
├── aws-config.js
├── package.json
```

## 🛠️ Setup Instructions

1. Clone the repo
2. Run `npm install`
3. Add your AWS credentials to `aws-config.js`
4. Run the app with `node app.js`
5. Visit `http://localhost:3000`
