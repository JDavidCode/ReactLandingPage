import { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import Header from "../components/Header";
import Footer from "../../components/Footer";
import CommunityPost from "../components/posts/CommunityPost";
import ScrollToTopOnMount from "../../../components/ScrollToTop";
import { Stack } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { fetchCommunityContent } from "../../../utils/apiContent";
import FadeInSection from "../../components/FadeInSection";

export default function Community() {
  const [blogContent, setBlogContent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const content = await fetchCommunityContent();
        setBlogContent(content);
      } catch (error) {
        console.error("Error fetching blog content:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, []);
  return (
    <main>
      <ScrollToTopOnMount />
      <Header />
      <Container maxWidth="lg" sx={{ pt: { xs: 4, sm: 12 } }}>
        <FadeInSection>
          <Box
            alignItems={"center"}
            mx="auto"
            sx={{
              width: { sm: "100%", md: "60%" },
              textAlign: "center",
            }}
          >
            <Typography component="h2" variant="h4" color="text.primary">
              Community Post
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Share your experiences with our products and let others know what
              you love about them. We're dedicated to efficiency, durability,
              and customer satisfaction. Join our community to share your ideas,
              recommendations, and feedback, and help us shape the future of
              quality and innovation.
            </Typography>
          </Box>
          {blogContent ? (
            <Box mt={12}>
              <Stack
                display={"grid"}
                gridTemplateColumns={"3fr 3fr"}
                mt={2}
                gap={2}
              >
                {blogContent.main.map((post) => (
                  <FadeInSection key={post.id}>
                    <Box>
                      <CommunityPost post={post} key={post.id} />
                    </Box>
                  </FadeInSection>
                ))}
              </Stack>
            </Box>
          ) : (
            <Typography>...</Typography>
          )}
        </FadeInSection>
      </Container>
      <Footer />
    </main>
  );
}
