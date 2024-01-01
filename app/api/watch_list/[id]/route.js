import Movie from "@models/movie";

export const DELETE = async (request, { params }) => {
  try {
    // Find the movie by ID and remove it
    await Movie.findOneAndRemove(params._id);

    return new Response("Movie deleted successfully", { status: 200 });
  } catch (error) {
    console.log("PARAMS :>> ", { params });
    return new Response("Error deleting movie", { status: 500 });
  }
};
