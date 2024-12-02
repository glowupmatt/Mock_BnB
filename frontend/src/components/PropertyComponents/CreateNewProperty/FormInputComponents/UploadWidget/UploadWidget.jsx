// import { useEffect, useRef } from "react";

// let cloudinary;

// const UploadWidget = ({ children, onUpload, style }) => {
//   const widget = useRef();
//   useEffect(() => {
//     if (!cloudinary) {
//       cloudinary = window.cloudinary;
//     }

//     function onIdle() {
//       if (!widget.current) {
//         widget.current = createWidget();
//       }
//     }

//     "requestIdleCallback" in window
//       ? requestIdleCallback(onIdle)
//       : setTimeout(onIdle, 1);

//     return () => {
//       // widget.current?.destroy();
//       widget.current = undefined;
//     };
//   }, []);

//   function createWidget() {
//     const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
//     const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

//     if (!cloudName || !uploadPreset) {
//       console.warn(`Kindly ensure you have the cloudName and UploadPreset
//       setup in your .env file at the root of your project.`);
//     }
//     const options = {
//       cloudName: cloudName,
//       uploadPreset: uploadPreset,
//     };

//     return cloudinary?.createUploadWidget(options, function (error, result) {
//       if (
//         (error || result.event === "success") &&
//         typeof onUpload === "function"
//       ) {
//         onUpload(error, result, widget);
//       }
//     });
//   }

//   function open() {
//     if (!widget.current) {
//       widget.current = createWidget();
//       document.body.style.overflow = "visible";
//     }
//     widget.current && widget.current.open();
//   }

//   return (
//     <div onClick={open} style={style}>
//       {children}
//     </div>
//   );
// };

// export default UploadWidget;

import { useEffect, useRef, useCallback } from "react";

let cloudinary;

const UploadWidget = ({ children, onUpload, style }) => {
  const widget = useRef();

  const createWidget = useCallback(() => {
    const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
    const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

    if (!cloudName || !uploadPreset) {
      console.warn(`Kindly ensure you have the cloudName and UploadPreset 
      setup in your .env file at the root of your project.`);
    }
    const options = {
      cloudName: cloudName,
      uploadPreset: uploadPreset,
    };

    return cloudinary?.createUploadWidget(options, function (error, result) {
      if (
        (error || result.event === "success") &&
        typeof onUpload === "function"
      ) {
        onUpload(error, result, widget);
      }
    });
  }, [onUpload]);

  useEffect(() => {
    if (!cloudinary) {
      cloudinary = window.cloudinary;
    }

    function onIdle() {
      if (!widget.current) {
        widget.current = createWidget();
      }
    }

    "requestIdleCallback" in window
      ? requestIdleCallback(onIdle)
      : setTimeout(onIdle, 1);

    return () => {
      // widget.current?.destroy();
      widget.current = undefined;
    };
  }, [createWidget]);

  function open() {
    if (!widget.current) {
      widget.current = createWidget();
      document.body.style.overflow = "visible";
    }
    widget.current && widget.current.open();
  }

  return (
    <div onClick={open} style={style}>
      {children}
    </div>
  );
};

export default UploadWidget;
