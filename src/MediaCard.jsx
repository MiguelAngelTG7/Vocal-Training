import React from "react";

const MediaCard = ({ type, src, title, description }) => {
  return (
    <div className="bg-[#232f3e] rounded-2xl shadow-2xl w-[420px] md:w-[480px] p-0 mb-8 hover:shadow-yellow-400/40 hover:-translate-y-1 hover:scale-105 transition-all duration-200 overflow-hidden">
      <div className="w-full h-56 md:h-64 overflow-hidden">
        {type === "image" && (
          <img src={src} alt={title} className="w-full h-full object-cover" />
        )}
        {type === "audio" && (
          <div className="flex items-center justify-center h-full bg-slate-900">
            <audio controls className="w-11/12 rounded shadow-lg">
              <source src={src} type="audio/mp3" />
              Your browser does not support the audio element.
            </audio>
          </div>
        )}
        {type === "video" && (
          <video controls className="w-full h-full object-cover bg-slate-900">
            <source src={src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>
      <div className="px-8 py-7">
        <h3 className="text-4xl md:text-5xl font-extrabold mb-4 text-yellow-400 tracking-tight font-[Oswald,sans-serif] leading-tight">{title}</h3>
        <p className="text-white text-xl md:text-2xl leading-relaxed font-[Montserrat,sans-serif]">{description}</p>
      </div>
    </div>
  );
};

export default MediaCard;
