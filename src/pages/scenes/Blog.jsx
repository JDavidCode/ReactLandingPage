import React, { useEffect, useState } from "react";
import BlogBox from "../../components/BlogBox";
import FullButton from "../../components/Buttons/FullButton";
import { fetchFeedContent } from "../../utils/lib/ApiContent";
import { useNavigate } from "react-router-dom";
import AddImage2 from "../../assets/img/msip_banner.png";

export default function Blog() {
  const [blogPosts, setBlogPosts] = useState([]);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/blog");
  };
  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const fetchedPosts = await fetchFeedContent();
        setBlogPosts(fetchedPosts);
        console.log(blogPosts);
        setTestimonialsPosts(fetchedPosts);
      } catch {
        setBlogPosts([
          {
            title: "New Office!",
            content:
              "We're excited to announce our new office location, designed for collaboration and creativity.",
            tag: "company",
            authorName: "Luke Skywalker, 2 days ago",
          },
          {
            title: "Product Launch",
            content:
              "Discover the latest features in Arnica 2.0 and how it will enhance your user experience.",
            tag: "product",
            authorName: "Leia Organa, 1 week ago",
          },
          {
            title: "User Feedback Matters",
            content:
              "We've implemented new changes based on your feedback. Thank you for helping us improve!",
            tag: "community",
            authorName: "Han Solo, 3 days ago",
          },
          {
            title: "Sustainability Initiatives",
            content:
              "Learn about our commitment to sustainability and the steps we're taking to reduce our footprint.",
            tag: "sustainability",
            authorName: "Chewbacca, 1 month ago",
          },
        ]);
      }
    };

    fetchBlogPosts();
  }, []);
  return (
    <section id="blog" className="w-full py-8">
      <div className="w-10/12 mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-black pt-4 text-white/80">
            From Our Blog
          </h1>
          <p className="text-sm py-4">
            Explore our latest articles, updates, and product launches.
            <br />
            Everything about your products in one place.
          </p>
          <div className="flex flex-wrap text-center py-4">
            {blogPosts.map((post, index) => (
              <div
                key={index}
                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2"
              >
                <BlogBox
                  title={post.title}
                  text={post.content}
                  tag={post.tag}
                  author={post.authorName}
                  action={() => alert("clicked")}
                />
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
      <div className="py-14 mt-10 bg-gray-900">
        <div className="container mx-auto  w-11/12">
          <div className="flex flex-wrap justify-between items-center py-24">
            <div className="relative w-full md:w-1/2 mb-8 md:mb-0 hidden md:block">
              <div className="absolute top-[-300px] left-0 w-full">
                <img
                  className="rounded-lg w-[426px] h-[607px]"
                  src={AddImage2}
                  alt="add"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h4 className="text-sm font-semibold">MSIP Model Launch</h4>
              <h2 className="text-4xl font-extrabold ">
                Module Standardization and Integration Platform
              </h2>
              <p className="text-xs">
                This model allows EMMA to easily search, download, install, and
                manage modules by automating the process of module installation,
                upgrade, and removal.
              </p>
              <div className="flex justify-center md:justify-start mt-8">
                <div className="w-48 mr-4">
                  <FullButton
                    title="Know More"
                    action={() => alert("clicked")}
                  />
                </div>
                <div className="w-48">
                  <FullButton
                    title="Documentation"
                    action={() => alert("clicked")}
                    border
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
