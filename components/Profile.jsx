import PromptCard from "./PromptCard";
import MoviesList from "./MovieList";

const Profile = ({
  name,
  desc,
  myPosts,
  handleEdit,
  handleDelete,
  myMovies,
}) => {
  return (
    <section className='w-full'>
      <h1 className='head_text text-left'>
        <span className='blue_gradient'>{name} Profile</span>
      </h1>
      <p className='desc text-left'>{desc}</p>

      <div className='mt-10 prompt_layout'>
        {myPosts.map((post) => (
          <PromptCard
            key={post._id}
            post={post}
            handleEdit={() => handleEdit && handleEdit(post)}
            handleDelete={() => handleDelete && handleDelete(post)}
          />
        ))}
      </div>
      <MoviesList
        movies={myMovies}
        title={"Watch List"}
        category={"myProfile"}
      />
    </section>
  );
};

export default Profile;
