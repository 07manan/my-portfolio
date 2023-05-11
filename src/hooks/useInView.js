import { useCallback } from "react";
import { useState } from "react";
import { useRef } from "react";

const useInView = ({ viewOnce = true, ...rest }) => {
  //   console.log("rest", rest);
  const { root, rootMargin, threshold } = rest;
  const [state, setState] = useState({
    inView: false,
    entry: null,
    observer: null,
  });
  const instanceRef = useRef(null);
  const targetRef = useRef(null);
  //   const thresholds = useLatest(threshold);
  const callback = useCallback(
    ([entry], observer) => {
      const inView =
        entry.isIntersecting &&
        observer.thresholds.some((t) => entry.intersectionRatio >= t);
      setState({ inView, entry, observer });
      if (inView && viewOnce) {
        observer.unobserve(entry.target);
        observer.disconnect();
      }
    },
    [viewOnce]
  );

  const setRef = useCallback(
    (node) => {
      //   console.log("node", node);
      if (node) {
        const observer = new IntersectionObserver(callback, {
          root: node.current,
          rootMargin,
          threshold: threshold,
        });
        console.log("observer", observer);
        // node.current.observe(node);
        targetRef.current = node;
      }
    },
    [root, rootMargin, callback]
  );

  return { setRef, ...state };
};

export default useInView;
