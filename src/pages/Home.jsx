import React, { useEffect } from "react";
import NavBar from "../components/Navbar";
import SideBar from "../components/SideBar";
import { useAppDispatch, useAppSelector } from "../hooks/useApp";
import { getHomePageVideo } from "../store/reducers/getHomePageVideo";

const Home = () => {
  const dispatch = useAppDispatch();
  const video = useAppSelector((state) => state.youtubeApp.videos);

  useEffect(() => {
    dispatch(getHomePageVideo(false));
  }, [dispatch]);

  return (
    <div>
      <NavBar />
      <SideBar />
    </div>
  );
};

export default Home;
