import React, { forwardRef, useEffect, useRef } from "react";

const CkeckBox = forwardRef(({ indeterminate, ...rest }, ref) => {
  const defaultRef = useRef();
  const resolvedRef = ref || defaultRef;
  useEffect(() => {
    resolvedRef.current.indeterminate = indeterminate;
  }, [resolvedRef, indeterminate]);

  return (
    <div>
      <input
        type="checkbox"
        ref={resolvedRef}
        {...rest}
        className="w-[20px] h-[20px]"
        style={{ width: "20px", height: "20px" }}
      />
    </div>
  );
});

export default CkeckBox;
