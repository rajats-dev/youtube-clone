import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const RecommendVideoCard = ({ data }) => {
  return (
    <div className="flex gap-3">
      <div className="relative">
        <span className="absolute bottom-12 right-2 text-xs bg-gray-900 px-2 py-0.5 z-10">
          {data.videoDuration}
        </span>
        <Link to={`/watch/${data.videoId}`}>
          <img
            src={data.videoThumbnail}
            alt="Thumbnail"
            className="h-20 w-72 rounded-lg"
          />
        </Link>
      </div>
      <div className="flex gap-1 flex-col">
        <h3 className="text-sm">
          <a href="#" className="line-clamp-2">
            {data.videoTitle}
          </a>
        </h3>

        <div className="min-w-fit">
          <a href="#" className="flex items-center gap-2 text-xs text-gray-400">
            <span>{data.channelInfo.name}</span>
          </a>
        </div>
        <div className="text-xs text-gray-400">
          <span>{data.videoViews} views</span> • <span>{data.videoAge}</span>
        </div>
      </div>
    </div>
  );
};

export default RecommendVideoCard;
