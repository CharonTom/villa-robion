import React from "react";

function VisitVideo() {
  return (
    <section className="h-screen w-full">
      <div className="w-[85%] h-[85%] p-4 mx-auto">
        <iframe
          className="h-full w-full rounded-xl"
          src="https://www.youtube.com/embed/xAbgeOZvD1M?si=DYQT1w0wN0je_TYl"
          title="YouTube video player"
          // frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}

export default VisitVideo;
