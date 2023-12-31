"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import Profile from "@components/Profile";

const UserProfile = ({ params }) => {
  const searchParams = useSearchParams();
  const userName = searchParams.get("name");

  const [userPosts, setUserPosts] = useState([]);
  const [userMovies, setUserMovies] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${params?.id}/posts`);
      const data = await response.json();
      setUserPosts(data);
    };

    const fetchWatchList = async () => {
      const response = await fetch(`/api/users/${params.id}/watch_list`);
      const data = await response.json();
      setUserMovies(data);
    };

    if (params?.id) {
      fetchPosts();
      fetchWatchList();
    }
  }, [params.id]);

  return (
    <Profile
      name={userName}
      desc={`Welcome to ${userName}'s personalized profile page. Explore ${userName}'s exceptional prompts and be inspired by the power of their imagination`}
      data={userPosts}
      myMovies={userMovies}
    />
  );
};

export default UserProfile;
