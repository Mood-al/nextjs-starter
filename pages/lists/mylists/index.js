import Card from "../../../compos/Card";
let loader = false;
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  loader = true;
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  loader = false;
  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
      loader,
    },
  };
}

const Lists = ({ posts, loader }) => {
  console.log(loader);
  return (
    <div>
      {posts.map((post) => (
        <Card post={post} key={post.id} />
      ))}
    </div>
  );
};

export default Lists;
