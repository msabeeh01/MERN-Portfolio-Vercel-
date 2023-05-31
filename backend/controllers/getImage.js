const { MongoClient, GridFSBucket, ObjectId } = require('mongodb');

const uri = 'mongodb+srv://msabeeh:umeriscute123@users.n9g7cfr.mongodb.net/test';
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});


const getImageById = async (req, res) => {
  const imageId = req.params.id;

  try {
    console.log(imageId);
    await client.connect();
    console.log('Connected to MongoDB Atlas');

    const bucket = new GridFSBucket(client.db('test'), {
      bucketName: 'myBucket'
    });

    const downloadStream = bucket.openDownloadStreamByName(req.params.id);

    downloadStream.on('error', (err) => {
      console.error('Error retrieving image:', err);
      res.status(500).send('Internal Server Error');
    });

    downloadStream.on('data', (chunk) => {
      // Handle the image data as per your requirement
      // For example, you can write it to the response directly
      res.write(chunk);
    });

    downloadStream.on('end', () => {
      console.log('Image retrieval complete');
      res.end();
    });
  } catch (err) {
    console.error('Error connecting to MongoDB Atlas:', err);
    res.status(500).send('Internal Server Error');
  }
};

module.exports = {
  getImageById
};
