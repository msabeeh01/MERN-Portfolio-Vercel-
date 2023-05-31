const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://msabeeh:umeriscute123@users.n9g7cfr.mongodb.net/test';

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

client.connect(err => {
  if (err) {
    console.error('Error connecting to MongoDB Atlas:', err);
    return;
  }
  console.log('Connected to MongoDB Atlas');
});


const { GridFSBucket } = require('mongodb');

const bucket = new GridFSBucket(client.db('test'), {
  bucketName: 'myBucket'
});

const fs = require('fs');

const imageData = fs.createReadStream('./images/fish.jpg');
const uploadStream = bucket.openUploadStream('myImage.jpg');

imageData.pipe(uploadStream)
.on('error', err => console.error('Error saving image:', err))
.on('finish', () => console.log('Image saved:', uploadStream.id));

