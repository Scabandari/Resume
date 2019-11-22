const useS3BucketEndpoint = () => {
    const {
        REACT_APP_S3_BUCKET_ENDPOINT: s3Bucket,
    } = process.env;
    return s3Bucket;
  };
  
  export default useS3BucketEndpoint;
  