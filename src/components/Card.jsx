import React from "react";
import { Link } from "react-router-dom";

const Card = ({ data }) => {
  return (
    <div className="w-72 h-60 flex gap-4 flex-col">
      <div className="relative">
        <span className="absolute bottom-24 right-3 text-xs text-white bg-gray-900 px-1 rounded-md">
          {data.videoDuration}
        </span>
        <Link to={`/watch/${data.videoId}`}>
          <img
            src={data.videoThumbnail}
            alt="Thumbnail"
            className="h-40 w-auto rounded-lg"
          />
        </Link>
        <div className="flex gap-3">
          <div className="min-w-fit py-3">
            <a href="#">
              <img
                src={data.channelInfo.image}
                alt="channel Img"
                className="h-9 w-9 rounded-full"
              />
            </a>
          </div>
          <div>
            <h3>
              <a href="#" className="line-clamp-none pt-2 text-sm">
                {data.videoTitle.slice(0, 51)}...
              </a>
            </h3>
            <div className="text-xs text-gray-400">
              <div>
                <a href="#" className="hover:text-white">
                  {data.channelInfo.name}
                </a>
              </div>
              <div>
                <span className="after:content-['•'] after:mx-1">
                  {data.videoViews} views
                </span>
                <span>{data.videoAge}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
