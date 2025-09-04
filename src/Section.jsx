import React from "react";
import MediaCard from "./MediaCard";

const mediaItems = [
  {
    type: "image",
    src: "/vite.svg",
    title: "Sample Image",
    description: "This is a sample image card."
  },
  {
    type: "audio",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    title: "Sample Audio",
    description: "Listen to this audio sample."
  },
  {
    type: "video",
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    title: "Sample Video",
    description: "Watch this short video."
  }
];

const Section = () => (
  <section className="py-10">
  <h2 className="text-5xl md:text-6xl font-extrabold font-[Oswald,sans-serif] mb-14 text-white tracking-tight text-center">Featured Media</h2>
    <div className="flex flex-col gap-16 items-center">
      <MediaCard
        type="image"
        src="/vite.svg"
        title="Sample Image"
        description="This is a sample image card."
      />
      <MediaCard
        type="audio"
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
        title="Sample Audio"
        description="Listen to this audio sample."
      />
      <MediaCard
        type="video"
        src="https://www.w3schools.com/html/mov_bbb.mp4"
        title="Sample Video"
        description="Watch this short video."
      />
    </div>
  </section>
);

export default Section;
