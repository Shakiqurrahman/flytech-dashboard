import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { FaTimes } from "react-icons/fa";

function DragnDrop({ setForm, className }) {
    const [preview, setPreview] = useState(null);
    // console.log(preview);

    // const fileReader =

    const { getRootProps, getInputProps } = useDropzone({
        accept: {
            "image/*": [],
        },
        maxFiles: 1,
        onDrop: (acceptedFiles) => {
            const file = acceptedFiles[0];
            if (file) {
                const previewUrl = URL.createObjectURL(file);
                setPreview({ file, url: previewUrl });
            }
        },
    });

    // Cleanup preview on unmount or when image is removed
    useEffect(() => {
        return () => {
            if (preview?.url) URL.revokeObjectURL(preview.url);
        };
    }, [preview]);

    const removeImage = () => {
        if (preview?.url) URL.revokeObjectURL(preview.url);
        setPreview(null);
    };

    return (
        <section
            className={`w-full flex flex-col items-center ${
                className ? className : "pt-5"
            } `}
        >
            {!preview ? (
                <div
                    {...getRootProps()}
                    className="w-full h-[200px] border-2 border-dashed border-gray-300 flex justify-center items-center cursor-pointer rounded-md"
                >
                    <input {...getInputProps()} />
                    <p className="text-center text-gray-500">
                        Drag & drop an image here, or click to select
                    </p>
                </div>
            ) : (
                <div className="relative mt-4 w-64 h-64 rounded overflow-hidden border shadow">
                    <img
                        src={preview.url}
                        alt="Preview"
                        className="object-cover w-full h-full"
                    />
                    <button
                        onClick={removeImage}
                        className="absolute top-2 right-2 bg-black bg-opacity-60 hover:bg-opacity-80 text-white p-2 rounded-full"
                    >
                        <FaTimes />
                    </button>
                </div>
            )}
        </section>
    );
}

export default DragnDrop;

// export default DragnDrop;
