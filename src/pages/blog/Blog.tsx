import { useState, useEffect } from "react";
import Header from "./components/Header";
import WidePaperPost from "./components/posts/WidePaperPost";
import RightSideImagePost from "./components/posts/RightSideImagePost";
import TopSideImagePost from "./components/posts/TopSideImagePost";
import Footer from "../../partials/Footer";
import FAQ from "../../partials/FAQ";
import { fetchFeedContent } from "../../utils/lib/ApiContent";
import FadeInSection from "./components/FadeInSection";

export default function Blog() {
  const [blogContent, setBlogContent] = useState(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const content = await fetchFeedContent();
        setBlogContent(content);
      } catch (error) {
        console.error("Error fetching blog content:", error.message);
      }
    };
    fetchContent();
  }, []);

  return (
    <main className="w-full h-full bg-gradient-to-tl from-slate-950 to-slate-900">
      <Header />

      <div className="mx-auto px-4 mt-16">
        <FadeInSection>
          {blogContent ? (
            <div className="mt-12">
              <WidePaperPost post={blogContent.main[0]} />
              <div className="grid grid-cols-2 gap-4 mt-8">
                {blogContent.secondary.map((post) => (
                  <FadeInSection key={post.id}>
                    <div>
                      <RightSideImagePost post={post} />
                    </div>
                  </FadeInSection>
                ))}
              </div>
              <div className="grid grid-cols-3 gap-4 mt-8">
                {blogContent.terceary.map((post) => (
                  <FadeInSection key={post.id}>
                    <div>
                      <TopSideImagePost post={post} />
                    </div>
                  </FadeInSection>
                ))}
              </div>
            </div>
          ) : (
            <p className="text-center text-lg">Loading...</p>
          )}
        </FadeInSection>
      </div>

      <FadeInSection>
        <FAQ />
      </FadeInSection>

      <FadeInSection>
        <Footer />
      </FadeInSection>
    </main>
  );
}
