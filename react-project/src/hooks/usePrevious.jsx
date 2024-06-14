import { useEffect, useRef } from "react";

const usePrevious = (value) => {
  const ref = useRef();
  console.log("value", value);
  console.log("ref", ref.current);
  useEffect(() => {
    console.log("useEffect", value);
    ref.current = value;
  }, [value]);

  return ref.current;
};

export default usePrevious;
