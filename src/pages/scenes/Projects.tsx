import PathLinkBox from "@components/buttons/PathLinkBox";
import React from "react";
import {
  SiAdobe,
  SiApple,
  SiFacebook,
  SiGoogle,
  SiLinkedin,
  SiShopify,
  SiSoundcloud,
  SiSpotify,
  SiTiktok,
} from "react-icons/si";
type ItemType = "Micro Service" | "App" | "Agent";

type ProjectItem = {
  id: number;
  type: ItemType;
  name: string;
  shortName: string;
  description: string;
  tag: string;
};

const items: ProjectItem[] = [
  {
    id: 1,
    type: "Micro Service",
    name: "Quantum Resource Optimizer",
    shortName: "QRO",
    description:
      "Intelligent system that dynamically allocates cloud resources using quantum-inspired algorithms for optimal performance and cost efficiency.",
    tag: "Backend Optimization",
  },
  {
    id: 2,
    type: "App",
    name: "DeepSight Analytics",
    shortName: "DSA",
    description:
      "Advanced computer vision platform that processes real-time video streams to detect safety violations in industrial environments.",
    tag: "Computer Vision",
  },
  {
    id: 3,
    type: "Agent",
    name: "Empathy Bridge",
    shortName: "EB",
    description:
      "Emotional intelligence-powered chatbot that adapts its communication style based on user sentiment and conversation context.",
    tag: "Conversational AI",
  },
  {
    id: 4,
    type: "Micro Service",
    name: "Nexus Stream Processor",
    shortName: "NSP",
    description:
      "High-throughput data processing engine that handles multiple data streams with advanced pattern recognition and anomaly detection.",
    tag: "Data Analytics",
  },
  {
    id: 5,
    type: "App",
    name: "VitalSync Pro",
    shortName: "VSP",
    description:
      "Comprehensive health tracking platform that integrates with multiple wearable devices and provides predictive health insights.",
    tag: "Wellness Tools",
  },
  {
    id: 6,
    type: "Agent",
    name: "Momentum AI Assistant",
    shortName: "MOM",
    description:
      "Context-aware productivity assistant that learns from user behavior to automate routine tasks and optimize workflow patterns.",
    tag: "Productivity AI",
  },
  {
    id: 7,
    type: "Micro Service",
    name: "Chronos Edge Orchestrator",
    shortName: "CEO",
    description:
      "Distributed event scheduling system that handles complex recurring patterns and manages conflicts across multiple time zones.",
    tag: "Event Management",
  },
  {
    id: 8,
    type: "App",
    name: "StrategyForge Companion",
    shortName: "SFC",
    description:
      "Real-time gaming assistant that provides strategic recommendations and tracks performance metrics across multiple game genres.",
    tag: "Gaming Tools",
  },
  {
    id: 9,
    type: "Agent",
    name: "MindScribe Tutor",
    shortName: "MST",
    description:
      "Adaptive learning system that creates personalized study plans and provides interactive explanations based on individual learning patterns.",
    tag: "Educational AI",
  },
];

export default function Projects() {
  return (
    <section className="w-full">
      <div className="container mx-auto w-10/12 mb-8 flex flex-col gap-4 items-center">
        <div className="text-center">
        <div className="inline-flex items-center gap-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-indigo-200/50">
            <span className="inline-flex bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent text-sm">
              Take a tour into our
            </span>
          </div>
          <h1 className="text-4xl font-black text-white/80 py-4">Projects</h1>
          <p className="text-sm mx-auto w-5/6">
            Discover our innovative projects in microservices, Apps, and AI
            agents. Dive into our latest developments to uncover unique features
            and benefits. Every project is built upon our core features stack,
            ensuring innovation and quality in everything we create.
          </p>
        </div>
        <div className="w-full bg-gray-950 overflow-hidden rounded-xl">
        <div className="divide-y divide-neutral-900 border border-neutral-900 rounded-xl overflow-hidden">
      <div className="grid grid-cols-2 divide-x divide-neutral-900 rounded-t-lg">
        <PathLinkBox Icon={SiGoogle} href="" />
        <PathLinkBox Icon={SiShopify} href="" />
      </div>
      <div className="grid grid-cols-4 divide-x divide-neutral-900">
        <PathLinkBox Icon={SiApple} href="" />
        <PathLinkBox Icon={SiSoundcloud} href="" />
        <PathLinkBox Icon={SiAdobe} href="" />
        <PathLinkBox Icon={SiFacebook} href="" />
      </div>
      <div className="grid grid-cols-3 divide-x divide-neutral-900">
        <PathLinkBox Icon={SiTiktok} href="" />
        <PathLinkBox Icon={SiSpotify} href="" />
        <PathLinkBox Icon={SiLinkedin} href="" />
      </div>
    </div>        </div>
      </div>
    </section>
  );
}
