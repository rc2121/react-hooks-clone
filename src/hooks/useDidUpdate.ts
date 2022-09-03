import { useRef, useEffect } from 'react';

export const useDidUpdate = (callback: (prevProps:any) => void, dep: number[]) => {
  const count = useRef(dep[0]);
  const didUpdateRef = useRef(false);

  useEffect(() => {
    didUpdateRef.current = true;
  }, [dep]);

  if (didUpdateRef.current) {
    console.log(
      'Your props or state just updated, so we will perfrom component did udpate======================'
    );

    if (count.current !== dep[0]) {
      console.log('****************component did update******************');
      callback(count.current);
      count.current = dep[0];
    } else {
      console.log(
        'Abort performing componentDidUpdate, because changes are not detected============'
      );
    }
  }
  return;
};
