import { Schema, model, models } from "mongoose";

const MovieSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  movieId: {
    type: Number,
  },
  title: {
    type: String,
  },
  poster_path: {
    type: String,
  },
  vote_average: {
    type: Number,
  },
});

const Movie = models.Movie || model("Movie", MovieSchema);

export default Movie;
