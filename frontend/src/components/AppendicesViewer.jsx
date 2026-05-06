import React, { useState, useEffect } from "react";

const AppendicesViewer = ({ data }) => {
  const [activeAppendix, setActiveAppendix] = useState(null);
  const [fileIndex, setFileIndex] = useState(0);

  const open = (index) => {
    setActiveAppendix(index);
    setFileIndex(0);
  };

  const close = () => {
    setActiveAppendix(null);
    setFileIndex(0);
  };

  // 🔥 Scroll lock + keyboard navigation
  useEffect(() => {
  if (activeAppendix !== null) {
    document.body.style.overflow = "hidden";

    const handleKey = (e) => {
      if (e.key === "Escape") close();

      if (e.key === "ArrowRight") {
        setFileIndex((prev) =>
          prev < data[activeAppendix].files.length - 1 ? prev + 1 : prev
        );
      }

      if (e.key === "ArrowLeft") {
        setFileIndex((prev) =>
          prev > 0 ? prev - 1 : prev
        );
      }
    };

    window.addEventListener("keydown", handleKey);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKey);
    };
  }
}, [activeAppendix, data]);

  const files =
    activeAppendix !== null
      ? data[activeAppendix].files
      : [];

  const file = files[fileIndex];

  const next = () => {
    if (fileIndex < files.length - 1) {
      setFileIndex((prev) => prev + 1);
    }
  };

  const prev = () => {
    if (fileIndex > 0) {
      setFileIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="mt-10">
      {/* GRID */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.map((item, i) => (
          <div
            key={item.code}
            onClick={() => open(i)}
            className="border border-rule rounded-lg p-4 cursor-pointer hover:shadow-md transition"
          >
            <p className="text-sm font-semibold">
              Appendix {item.code}
            </p>
            <h3 className="text-base mt-2">{item.title}</h3>
            <p className="text-xs text-ink-muted mt-1">
              {item.description}
            </p>
            <p className="text-xs mt-2 text-accent">
              {item.files.length} file(s)
            </p>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {activeAppendix !== null && file && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-[9999]"
          onClick={close}
        >
          {/* BOX */}
          <div
            className="bg-white w-[95%] max-w-5xl max-h-[92vh] rounded-lg p-4 relative flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* CLOSE */}
            <button
              onClick={close}
              className="absolute top-2 right-3 text-xl"
            >
              ✕
            </button>

            {/* HEADER */}
            <h3 className="mb-1 font-semibold">
              Appendix {data[activeAppendix].code} —{" "}
              {data[activeAppendix].title}
            </h3>

            <p className="text-sm text-ink-muted mb-2">
              File {fileIndex + 1} of {files.length}
            </p>

            {/* MAIN VIEW */}
            <div className="flex-1 flex flex-col items-center justify-center overflow-auto">
              {file.type === "image" ? (
                <img
                  src={file.file}
                  alt={file.caption || ""}
                  className="max-w-full max-h-[70vh] object-contain rounded"
                />
              ) : (
                <iframe
                  src={file.file}
                  className="w-full h-[70vh] border rounded"
                  title="PDF Viewer"
                />
              )}

              {/* CAPTION */}
              {file.caption && (
                <p className="mt-3 text-sm text-center text-gray-600 max-w-[90%]">
                  {file.caption}
                </p>
              )}
            </div>

            {/* 🔥 THUMBNAIL STRIP */}
            <div className="mt-4 overflow-x-auto">
              <div className="flex gap-2">
                {files.map((f, i) => (
                  <button
                    key={i}
                    onClick={() => setFileIndex(i)}
                    className={`border rounded overflow-hidden flex-shrink-0 ${
                      i === fileIndex
                        ? "border-blue-500"
                        : "border-gray-300"
                    }`}
                  >
                    {f.type === "image" ? (
                      <img
                        src={f.file}
                        alt=""
                        className="h-16 w-20 object-cover"
                      />
                    ) : (
                      <div className="h-16 w-20 flex items-center justify-center text-xs bg-gray-100">
                        PDF
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* NAVIGATION */}
            <div className="flex justify-between mt-3">
              <button
                onClick={prev}
                disabled={fileIndex === 0}
                className="px-3 py-1 border rounded disabled:opacity-40"
              >
                ← Prev
              </button>

              <button
                onClick={next}
                disabled={fileIndex === files.length - 1}
                className="px-3 py-1 border rounded disabled:opacity-40"
              >
                Next →
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AppendicesViewer;