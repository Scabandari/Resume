const useServer = () => {
  const {
    REACT_APP_PRODUCTION: production,
    REACT_APP_PRODUCTION_SERVER: prodServer,
    REACT_APP_DEVELOPMENT_SERVER: devServer
  } = process.env;
  const prod_mode = JSON.stringify(production) === JSON.stringify('true');
  return prod_mode ? prodServer : devServer;
};

export default useServer;
