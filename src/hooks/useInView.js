import { useCallback } from "react";
import { useState } from "react";
import { useRef } from "react";

const useInView = ({ viewOnce = false, ...rest }) => {
  const { root, rootMargin, threshold } = rest;
  const [state, setState] = useState({
    inView: false,
    entry: null,
    observer: null,
  });
  const targetRef = useRef(null);
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
      if (node) {
        const observer = new IntersectionObserver(callback, {
          root,
          rootMargin,
          threshold: threshold,
        });
        observer.observe(node.current);
        targetRef.current = node;
      }
    },
    [root, rootMargin, threshold, callback]
  );
  return { setRef, ...state };
};

export default useInView;
