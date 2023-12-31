import Movie from "@models/movie";
import { connectToDB } from "@utils/database";

export const POST = async (request) => {
  const { userId, id, title, poster_path, vote_average } = await request.json();

  try {
    await connectToDB();
    const newMovie = new Movie({
      creator: userId,
      id,
      title,
      poster_path,
      vote_average,
    });

    await newMovie.save();
    return new Response(JSON.stringify(newMovie), { status: 201 });
  } catch (error) {
    return new Response("Failed to add item to watch list", { status: 500 });
  }
};
