import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import WidePaperPost from './components/posts/WidePaperPost';
import RightSideImagePost from './components/posts/RightSideImagePost';
import TopSideImagePost from './components/posts/TopSideImagePost';
import Footer from '../scenes/Footer';
import FAQ from '../scenes/FAQ';
import { fetchFeedContent } from '../../utils/lib/ApiContent';
import FadeInSection from './components/FadeInSection';

export default function Blog() {
  const [blogContent, setBlogContent] = useState(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const content = await fetchFeedContent();
        setBlogContent(content);
      } catch (error) {
        console.error('Error fetching blog content:', error.message);
      }
    };
    fetchContent();
  }, []);

  return (
    <div className={`min-h-screen`}>
      <Header  />

      <div className="container mx-auto px-4 py-8">
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
    </div>
  );
}
