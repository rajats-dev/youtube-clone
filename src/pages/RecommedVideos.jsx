import React from "react";
import { getRecommendVideos } from "../store/reducers/getRecommedVideos";
import { useAppDispatch, useAppSelector } from "../hooks/useApp";
import RecommendVideoCard from "../components/RecommendVideoCard";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "../components/Spinner";

const RecommedVideos = () => {
  const dispatch = useAppDispatch();
  const recommendedVideo = useAppSelector(
    (state) => state.youtubeApp.recommendedVideo
  );

  return (
    <div>
      {recommendedVideo.length ? (
        <div>
          <InfiniteScroll
            dataLength={recommendedVideo.length}
            next={() => dispatch(getRecommendVideos(true))}
            hasMore={recommendedVideo.length < 500}
            loader={<Spinner />}
            height={650}
          >
            {recommendedVideo.map((item, index) => (
              <div className="mt-2 pr-6" key={item.videoId || index}>
                <RecommendVideoCard data={item} />
              </div>
            ))}
          </InfiniteScroll>
        </div>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default RecommedVideos;
