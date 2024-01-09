import React, {useRef, useEffect} from 'react';

function AutoFocusInput() {
  const inputRef = useRef();

  useEffect(() => {
    // Focus on the input element on mount
    inputRef.current.focus();
  }, []);

  return <input ref={inputRef} />;
}

export default AutoFocusInput;