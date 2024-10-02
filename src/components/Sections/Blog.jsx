import React from "react";
// Components
import BlogBox from "../Elements/BlogBox";
import FullButton from "../Buttons/FullButton";
import TestimonialSlider from "../Elements/TestimonialSlider";
const blogPosts = [
  {
    title: "New Office!",
    text: "We're excited to announce our new office location, designed for collaboration and creativity.",
    tag: "company",
    author: "Luke Skywalker, 2 days ago",
  },
  {
    title: "Product Launch",
    text: "Discover the latest features in Arnica 2.0 and how it will enhance your user experience.",
    tag: "product",
    author: "Leia Organa, 1 week ago",
  },
  {
    title: "User Feedback Matters",
    text: "We've implemented new changes based on your feedback. Thank you for helping us improve!",
    tag: "community",
    author: "Han Solo, 3 days ago",
  },
  {
    title: "Tech Innovations",
    text: "Join us as we explore the latest trends in technology and what to expect in the coming year.",
    tag: "technology",
    author: "Rey, 5 days ago",
  },
  {
    title: "Sustainability Initiatives",
    text: "Learn about our commitment to sustainability and the steps we're taking to reduce our footprint.",
    tag: "sustainability",
    author: "Chewbacca, 1 month ago",
  },
  {
    title: "Community Spotlight",
    text: "Read inspiring stories from our users who have made a difference using Arnica.",
    tag: "community",
    author: "C-3PO, 2 weeks ago",
  },
];
export default function Blog() {
  return (
    <section id="blog" className="w-full pt-12 mx-auto bg-white">
      <div className="w-10/12 mx-auto">
        <div className="container">
          <div className="my-8">
            <h1 className="text-4xl font-black text-black pt-4">
              Our Blog Stories
            </h1>
            <p className="text-sm pt-4 pb-8">
              Explore our latest articles, updates, and product launches.
              <br />
              Everything about your products in one place.
            </p>
            <div className="flex flex-wrap text-center mb-8">
              {blogPosts.map((post, index) => (
                <div
                  key={index}
                  className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2"
                >
                  <BlogBox
                    title={post.title}
                    text={post.text}
                    tag={post.tag}
                    author={post.author}
                    action={() => alert("clicked")}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center mb-8">
            <div className="my-12 w-52">
              <FullButton title="Load More" action={() => alert("clicked")} />
            </div>
          </div>
        </div>
      </div>
      <div className="py-12 bg-gray-200">
        <div className="container mx-auto w-10/12 ">
          <div className="">
            <h1 className="text-4xl font-extrabold text-black">
              What Do They Say?
            </h1>
            <p className="text-sm pb-9 pt-3">
              "Our experience has been outstanding. The team is highly
              professional and dedicated to delivering quality results.
              <br />
              They exceeded our expectations, and we are thrilled with the
              outcome."
            </p>
          </div>
          <TestimonialSlider />
        </div>
      </div>
    </section>
  );
}
