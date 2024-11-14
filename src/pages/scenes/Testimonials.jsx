import React, { useEffect, useState } from "react";
import { fetchFeedContent } from "../../utils/lib/ApiContent";
import QuoteIcon from "../../assets/svg/Quotes";

export default function Testimonials() {
  const [testimonialsPosts, setTestimonialsPosts] = useState([]);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const fetchedPosts = await fetchFeedContent();
        setTestimonialsPosts(fetchedPosts);
      } catch {
        setTestimonialsPosts([
          {
            id: 1,
            content:
              "Arnica has transformed the way we approach technology. The platform's user-driven ideas inspire us every day.",
            authorName: "Alice Thompson",
          },
          {
            id: 2,
            content:
              "Being part of the Arnica community means my ideas are valued. It’s refreshing to see a tech project that prioritizes user input.",
            authorName: "Michael Rodriguez",
          },
          {
            id: 3,
            content:
              "The innovation at Arnica is driven by real user experiences. It feels great to contribute to something that genuinely listens.",
            authorName: "Sofia Chen",
          },
          {
            id: 4,
            content:
              "Arnica's commitment to adopting user ideas has created a thriving ecosystem. I love being part of this journey!",
            authorName: "James Smith",
          },
          {
            id: 5,
            content:
              "With Arnica, I feel like my voice matters. It’s empowering to see how our suggestions shape the platform.",
            authorName: "Emma Johnson",
          },
          {
            id: 6,
            content:
              "The collaboration within the Arnica community has been incredible. Together, we are redefining the future of technology.",
            authorName: "Liam Brown",
          },
        ]);
      }
    };

    fetchBlogPosts();
  }, []);
  return (
    <section className="py-8 mx-auto w-10/12">
        <div className="">
          <h1 className="text-4xl font-black text-white/80">
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
        <div className="flex flex-wrap justify-center">
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 space-x-2">
            {testimonialsPosts.map((item) => (
              <div key={item.id} className="p-5 mt-8 bg-gray-900 rounded-lg flex flex-col items-center">
                <div className="relative -top-10">
                  <QuoteIcon />
                </div>
                <p className="text-sm pb-8">{item.content}</p>
                <p className="text-orange-500 text-sm self-end">
                  <em>{item.authorName}</em>
                </p>
              </div>
            ))}
          </div>
        </div>
    </section>
  );
}
