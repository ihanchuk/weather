import { useRef, useEffect } from "react";
import { EmptyCallback } from "../types/callbacks";

export const usePolling = (callback: EmptyCallback, interval = 100) => {
  const intervalRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    intervalRef.current = setInterval(callback, interval);
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [callback, interval]);
};
