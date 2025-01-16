import { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import Header from "../components/Header";
import Footer from "../../components/Footer";
import LeftSideImageMiniPost from "../components/posts/LeftSideImageMiniPost";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";
import Sidebar from "../components/Sidebar";
import ScrollToTopOnMount from "../../../components/ScrollToTop";
import MediumPaperPost from "../components/posts/MediumPaperPost";
import Box from "@mui/material/Box";
import { fetchUpdatesContent } from "../../../utils/apiContent";
import FadeInSection from "../../components/FadeInSection";

export default function Updates() {
  const [blogContent, setBlogContent] = useState(null);
  const [socialIcons, setSocialIcons] = useState([]);

  const loadIcons = async () => {
    try {
      const loadedIcons = await Promise.all(
        blogContent.sidebar.social.map(async (item) => {
          const { default: IconComponent } = await import(
            `@mui/icons-material/${item.name}`
          );
          return { name: item.name, icon: IconComponent };
        }),
      );
      setSocialIcons(loadedIcons);
    } catch (error) {
      console.error("Error loading icons:", error);
    }
  };

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const content = await fetchUpdatesContent();
        setBlogContent(content);
      } catch (error) {
        console.error("Error fetching blog content:", error.message);
      }
    };

    fetchContent();
  }, []);

  useEffect(() => {
    if (blogContent) {
      loadIcons();
    }
  }, [blogContent]);

  return (
    <main>
      <ScrollToTopOnMount />
      <Header />
      <Container maxWidth="lg">
        <FadeInSection>
          {blogContent ? (
            <Box mt={10}>
              <Stack>
                {blogContent.main.map((post) => (
                  <MediumPaperPost key={post.id} post={post} />
                ))}
              </Stack>
              <Box mt={4} display={"grid"} gridTemplateColumns={"6fr 3fr"}>
                <Stack spacing={2} mr={4}>
                  {blogContent.featured.map((post) => (
                    <LeftSideImageMiniPost key={post.id} post={post} />
                  ))}
                </Stack>
                <Sidebar
                  title={blogContent.sidebar.title}
                  description={blogContent.sidebar.description}
                  archives={blogContent.sidebar.archives}
                  social={socialIcons}
                />
              </Box>
            </Box>
          ) : (
            <Typography>Loading</Typography>
          )}
        </FadeInSection>
      </Container>
      <Footer />
    </main>
  );
}
