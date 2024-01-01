import Movie from "@models/movie";
import { connectToDB } from "@utils/database";

export const DELETE = async (request, { params }) => {
  try {
    console.log("PARAMS :>> ", { params, request });

    // Find the movie by ID and remove it
    await Movie.findOneAndRemove(params._id);

    return new Response("Movie deleted successfully", { status: 200 });
  } catch (error) {
    console.log("PARAMS :>> ", { params });
    return new Response("Error deleting movie", { status: 500 });
  }
};
