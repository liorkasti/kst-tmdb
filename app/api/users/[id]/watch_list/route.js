import Movie from "@models/movie";
import { connectToDB } from "@utils/database";

export const GET = async (request, { params }) => {
  try {
    await connectToDB();

    const watch_list = await Movie.find({ creator: params.id }).populate(
      "creator"
    );

    return new Response(JSON.stringify(watch_list), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch watch list created by user", {
      status: 500,
    });
  }
};
