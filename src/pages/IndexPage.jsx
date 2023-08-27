import Hero from "../components/Hero";
import Post from "../components/Post";

const IndexPage = () => {
  return (
    <div className="container">
      <Hero className={"my-4"} />
      <section className="my-4">
        <h2 className="text-lg mb-6">Recent Posts</h2>
        <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
      </section>
    </div>
  );
};

export default IndexPage;
