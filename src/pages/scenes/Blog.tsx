import { useEffect, useState } from "react";
import FullButton from "../../components/buttons/FullButton";
import { fetchFeedContent } from "../../utils/lib/ApiContent";
import { useNavigate } from "react-router-dom";
import TimeAgo from "@components/texts/TimeAgo";

interface BlogPost {
  title: string;
  content: string;
  image: string;
  tag: string;
  authorName: string;
  createdAt: string;
}

export default function Blog() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/blog");
  };

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const fetchedPosts = await fetchFeedContent(
          "tags=updates&tags=company&limit=3"
        );
        setBlogPosts(fetchedPosts);
      } catch {
        setBlogPosts([
          {
            title: "New Office!",
            content:
              "We're excited to announce our new office location, designed for collaboration and creativity.",
            image:
              "https://images.unsplash.com/photo-1533158326339-7f3cf2404354?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            tag: "company",
            authorName: "Luke Skywalker",
            createdAt: "2025-01-01T10:30:00Z",
          },
          {
            title: "Product Launch",
            content:
              "Discover the latest features in Arnica 2.0 and how it will enhance your user experience.",
            image:
              "https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            tag: "product",
            authorName: "Leia Organa",
            createdAt: "2024-11-20T15:00:00Z",
          },
          {
            title: "User Feedback Matters",
            content:
              "We've implemented new changes based on your feedback. Thank you for helping us improve!",
            image:
              "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            tag: "community",
            authorName: "Han Solo",
            createdAt: "2024-12-18T12:00:00Z",
          },
        ]);
      }
    };

    fetchBlogPosts();
  }, []);

  return (
    <section className="w-full">
      <div className="w-10/12 mx-auto">
        <div className="text-center">
          <div className="inline-flex items-center gap-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-indigo-200/50">
            <span className="inline-flex bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent text-sm">
              Last from our
            </span>
          </div>
          <h1 className="text-4xl font-black pt-4 text-white/80">Blog</h1>
          <p className="text-sm py-4 text-slate-300">
            Explore our latest articles, updates, and product launches.
            <br />
            Everything about your products in one place.
          </p>
          <div className="flex text-center py-4 gap-4 flex-wrap">
            {blogPosts.map((post, index) => (
              <div
                key={index}
                className="rounded overflow-hidden flex flex-col max-w-md mx-auto group cursor-pointer"
              >
                <div className="relative">
                  <a
                    href="#"
                    className="left-4 top-4 rounded-lg bg-slate-800 capitalize py-1 px-3 text-sm font-extrabold text-slate-100 opacity-0 group-hover:opacity-100 transition-all ease-in duration-150 absolute"
                  >
                    {post.tag}
                  </a>
                  <img
                    className="w-full rounded-lg shadow-md shadow-slate-800 h-96"
                    src={post.image}
                    alt="Blog image"
                  />
                </div>
                <div className="relative -mt-32 group-hover:-mt-72 transition-all duration-200 delay-100 px-8 py-8 bg-slate-900 m-10 rounded-md shadow-md shadow-slate-800/50">
                  <a
                    href="#"
                    className="font-semibold text-md text-slate-100 hover:text-sky-700 transition duration-500 ease-in-out inline-block mb-2"
                  >
                    {post.title}
                  </a>
                  <p className="text-slate-400 text-sm line-clamp-3 group-hover:line-clamp-4">
                    {post.content}
                  </p>
                  <p className="mt-5 text-slate-400 text-xs hidden group-hover:inline-block transition-all ease-in duration-150">
                    By{" "}
                    <a
                      href="#"
                      className="text-xs text-sky-700 transition duration-500 ease-in-out"
                    >
                      {post.authorName}
                    </a>{" "}
                    <span className="text-xs">
                      {<TimeAgo date={post.createdAt} />}
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center py-2">
          <div className="mt-2 mb-12 w-36">
            <FullButton title="See More!" action={() => handleClick()} />
          </div>
        </div>
      </div>
    </section>
  );
}
