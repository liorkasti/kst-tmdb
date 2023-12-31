import Movie from "@models/movie";
import { connectToDB } from "@utils/database";

export const GET = async (request, { params }) => {
  try {
    await connectToDB();

    const movie = await Movie.findById(params.id).populate("creator");
    if (!movie) return new Response("Prompt Not Found", { status: 404 });

    return new Response(JSON.stringify(movie), { status: 200 });
  } catch (error) {
    return new Response("Internal Server Error", { status: 500 });
  }
};

// export const PATCH = async (request, { params }) => {
//     const { prompt, tag } = await request.json();

//     try {
//         await connectToDB();

//         // Find the existing prompt by ID
//         const existingPrompt = await Movie.findById(params.id);

//         if (!existingPrompt) {
//             return new Response("Prompt not found", { status: 404 });
//         }

//         // Update the prompt with new data
//         existingPrompt.prompt = prompt;
//         existingPrompt.tag = tag;

//         await existingPrompt.save();

//         return new Response("Successfully updated the Prompts", { status: 200 });
//     } catch (error) {
//         return new Response("Error Updating Prompt", { status: 500 });
//     }
// };

export const DELETE = async (request, { params }) => {
  try {
    console.log("PARAMS :>> ", params.id);
    await connectToDB();

    // Find the movie by ID and remove it
    await Movie.findByIdAndRemove(params);

    return new Response("Movie deleted successfully", { status: 200 });
  } catch (error) {
    return new Response("Error deleting movie", { status: 500 });
  }
};
