import Movie from "@models/movie";
import { connectToDB } from "@utils/database";

export const GET = async (request) => {
  try {
    await connectToDB();

    const watch_list = await Movie.find({}).populate("creator");

    return new Response(JSON.stringify(watch_list), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch watch list", { status: 500 });
  }
};
