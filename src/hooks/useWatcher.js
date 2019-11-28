import { useEffect } from "react";

const useWatcher = (name, value) => {
  useEffect(() => {
    console.log(`${name}: ${JSON.stringify(value, null, 2)}`);
  }, [value]);
};

export default useWatcher;
