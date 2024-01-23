function VisitVideo() {
  return (
    <section className="p-2 md:px-32">
      <div className="aspect-video p-[2px] bg-primary-pink rounded-xl">
        <iframe
          className="w-full h-full rounded-xl"
          src="https://www.youtube.com/embed/xAbgeOZvD1M?si=DYQT1w0wN0je_TYl"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}

export default VisitVideo;
