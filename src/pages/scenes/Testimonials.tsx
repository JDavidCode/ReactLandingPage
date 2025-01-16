import Card from "@components/cards/TestimonialCard";
import { fetchFeedContent } from "@utils/lib/ApiContent";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  AnimatePresence,
} from "framer-motion";
import { useEffect, useState } from "react";

interface Stat {
  value: string;
  description: string;
  color: string;
}
interface Testimonial {
  id: number;
  content: string;
  authorName: string;
}
function Testimonials() {
  const [testimonialsPosts, setTestimonialsPosts] = useState<Testimonial[]>([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const fetchedPosts: Testimonial[] = await fetchFeedContent(
          "tags=testimonials&limit=4"
        );
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
  const stats: Stat[] = [
    {
      value: "70k+",
      description: "users optimizing their daily workflows with Arnica",
      color: "text-white",
    },
    {
      value: "35%",
      description:
        "boost in efficiency when managing projects and tasks with our tools",
      color: "text-orange-500",
    },
    {
      value: "15.3%",
      description:
        "reduction in correction and maintenance times thanks to our solutions",
      color: "text-orange-500",
    },
    {
      value: "2x",
      description: "faster execution of daily tasks and project management",
      color: "text-white",
    },
  ];

  function getAnimationTarget(value: string): number {
    const numericValue = parseFloat(value);
    return isNaN(numericValue) ? 0 : numericValue;
  }

  function getSuffix(value: string): string {
    return value.replace(/[0-9.]/g, "");
  }

  return (
    <section className="bg-slate-900 text-white p-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-2">
        {/* Left Side */}
        <div>
          <div className="pb-4">
            <div className="inline-flex items-center gap-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent text-sm">
                Testimonials
              </span>
            </div>
            <h1 className="text-4xl font-black text-white/80">
              What Do They Say?
            </h1>
          </div>
          <motion.div className="w-96 h-20 relative hidden md:block">
            <AnimatePresence initial={false}>
              <Card key={index + 1} frontCard={false} />
              <Card
                key={index}
                frontCard={true}
                index={index}
                setIndex={setIndex}
                drag="x"
              />
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Right Side: Stats */}
        <div className="md:grid grid-cols-2 gap-4 text-center space-y-4 md:space-y-0">
          {stats.map((stat, index) => {
            const numericValue = getAnimationTarget(stat.value);
            const suffix = getSuffix(stat.value);
            return (
              <div
                key={index}
                className="flex flex-col items-center justify-center bg-slate-800 p-6 rounded-lg"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 * index }}
                >
                  <AnimatedValue
                    value={numericValue}
                    suffix={suffix}
                    color={stat.color}
                  />
                </motion.div>
                <p className="text-gray-400 text-sm">{stat.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

interface AnimatedValueProps {
  value: number;
  suffix: string;
  color: string;
}

function AnimatedValue({ value, suffix, color }: AnimatedValueProps) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    const animation = animate(count, value, {
      duration: 2,
    });
    return animation.stop;
  }, [value]);

  return (
    <p className={`text-2xl font-bold ${color}`}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </p>
  );
}

export default Testimonials;
