/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Industry, Service, Project, Leader, Value, Stat } from "./types";

export const INDUSTRIES_DATA: Industry[] = [
  {
    name: "Agriculture",
    tagline: "Cultivating Efficiency through Intelligence",
    icon: "Leaf",
    points: [
      "Smart Farming",
      "Crop Monitoring",
      "Precision Agriculture",
      "IoT-Based Farming Systems",
      "AI Agriculture Platforms"
    ]
  },
  {
    name: "Healthcare",
    tagline: "Redefining Lives through AI-Driven Wellness",
    icon: "HeartPulse",
    points: [
      "Medical Analytics",
      "AI Diagnostics",
      "Smart Healthcare Systems",
      "Hospital Management Solutions",
      "Health Monitoring Platforms"
    ]
  },
  {
    name: "Sustainability",
    tagline: "Preserving Resources for Generations of Tomorrow",
    icon: "Globe",
    points: [
      "Waste Management",
      "Recycling Systems",
      "Environmental Monitoring",
      "Smart Resource Management",
      "Green Technology Solutions"
    ]
  }
];

export const SERVICES_DATA: Service[] = [
  {
    title: "Artificial Intelligence Solutions",
    category: "Cognitive Intelligence",
    description: "Developing custom deep neural networks, generative intelligence frameworks, and cognitive agents that elevate enterprise efficiency and intelligence.",
    icon: "Cpu"
  },
  {
    title: "Machine Learning Systems",
    category: "Data Modeling",
    description: "Architecting predictive engines, anomaly detection, and classification pipelines modeled with mathematical precision and scalable algorithms.",
    icon: "Network"
  },
  {
    title: "Full Stack Web Development",
    category: "Software Engineering",
    description: "Engineering ultra-responsive, highly secure, and cloud-native full stack digital platforms designed for millisecond-latency performance.",
    icon: "Layers"
  },
  {
    title: "Mobile Application Development",
    category: "User Experience",
    description: "Crafting beautiful, high-fidelity iOS and Android applications utilizing modern performance architectures and fluid gestures.",
    icon: "Smartphone"
  },
  {
    title: "Cloud Solutions",
    category: "Infrastructure",
    description: "Deploying bulletproof, auto-scaling multi-cloud architectures with continuous delivery, solid encryption, and elastic computing.",
    icon: "Cloud"
  },
  {
    title: "IoT Systems",
    category: "Hardware & Edge",
    description: "Integrating intelligent edge gateways, ultra-low latency sensor telemetry, and remote mesh networking for hardware ecosystems.",
    icon: "Radio"
  },
  {
    title: "Data Analytics",
    category: "Analytics & Insights",
    description: "Unlocking hidden value from dark data reservoirs using big-data storage, real-time query engines, and predictive analytics dashboards.",
    icon: "Database"
  },
  {
    title: "Automation Platforms",
    category: "Process Efficiency",
    description: "Formulating robotic process automation systems, smart trigger networks, and continuous workflow orchestration engines.",
    icon: "Zap"
  },
  {
    title: "Smart Agriculture Solutions",
    category: "Specialized Tech",
    description: "Applying spatial multispectral imaging, robotic harvesting logic, and IoT weather networks directly into the modern agro-industrial grid.",
    icon: "Leaf"
  },
  {
    title: "Healthcare Management Systems",
    category: "Specialized Tech",
    description: "Building HIPAA-compliant patient data platforms, AI-powered diagnostic tools, and hospital resource management systems.",
    icon: "HeartPulse"
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    title: "EcoDrop",
    category: "Sustainability Platform",
    tagline: "AI-Based Waste Collection & Recycling",
    description: "A comprehensive solution optimizing urban waste collection routes through spatial AI, identifying recyclable material density, and rewarding eco-friendly communities dynamically.",
    metrics: ["82% Routing Efficiency", "340T Carbon Avoided", "Recycling Hub Connected"],
    color: "emerald"
  },
  {
    title: "FarmLink",
    category: "Agricultural Ecosystem",
    tagline: "Smart Marketplace & Farmer Network",
    description: "A global marketplace leveling the ground for rural agriculturalists. Providing automated grain-pricing insights, fair-deal commerce pipelines, and precision crop weather warnings.",
    metrics: ["$2.4M Trade Facilitated", "45K Farmers Enrolled", "22% Crop Waste Reduction"],
    color: "amber"
  },
  {
    title: "Medico AI",
    category: "Medical Intelligence",
    tagline: "Intelligent Medical Assistant Platform",
    description: "An advanced hospital companion processing clinical reports, validating diagnostic data under strict bio-ethics, and providing immediate patient treatment path options to physicians.",
    metrics: ["99.4% Diagnostic Assist", "4k Hospital Installs", "HIPAA Compliant Vaults"],
    color: "cyan"
  },
  {
    title: "Smart Resource Management",
    category: "Climatetech & IoT",
    tagline: "AI-Driven Sustainability Platform",
    description: "Enterprise-scale monitoring mapping carbon emissions, electrical water loss, and building thermal profiles. Empowering operations with real-time green actions and forecasts.",
    metrics: ["29% Energy Saved", "Zero-Waste Milestones", "Dynamic Solar Balancing"],
    color: "indigo"
  }
];

export const LEADERS_DATA: Leader[] = [
  {
    name: "Chekuri Harsha Vardhan",
    role: "Founder",
    description: "Visionary leader driving innovation, strategy, partnerships, and organizational growth at HARVIONIX.",
    initials: "CH"
  },
  {
    name: "Mohan Krishna Thalla",
    role: "Chief Technology Officer (CTO)",
    description: "Leading technology architecture, AI innovation, and software engineering excellence across all platform divisions.",
    initials: "T"
  },
  {
    name: "Rakesh Kollipaka",
    role: "Chief Product Officer (CPO)",
    description: "Responsible for global product innovation, human-centered user experience, and aesthetic design excellence.",
    initials: "K"
  },
  {
    name: "Shaik Sameer",
    role: "Chief Marketing Officer (CMO)",
    description: "Driving brand growth, global marketing strategy, enterprise client acquisition, and developer community engagement.",
    initials: "S"
  }
];

export const VALUES_DATA: Value[] = [
  {
    title: "Innovation",
    description: "Pioneering state-of-the-art technological systems to dismantle complex bottlenecks.",
    iconName: "Cpu"
  },
  {
    title: "Sustainability",
    description: "Forging systems designed for zero-waste metrics and permanent environmental harmony.",
    iconName: "Globe"
  },
  {
    title: "Integrity",
    description: "Ensuring ironclad trust, ethical AI logic, transparent operations, and rigorous user privacy.",
    iconName: "Shield"
  },
  {
    title: "Excellence",
    description: "Striving for millisecond precision, stellar code health, and world-class craftsmanship.",
    iconName: "Award"
  },
  {
    title: "Collaboration",
    description: "Uniting multidimensional pioneers, builders, and visionaries under a singular objective.",
    iconName: "Users"
  },
  {
    title: "Impact",
    description: "Catalyzing real, empirical, of-value transformations for global communities daily.",
    iconName: "Zap"
  }
];

export const STATS_DATA: Stat[] = [
  {
    value: "150%",
    label: "Innovation Driven",
    description: "Exponential YoY research & product velocity",
    colorName: "gold"
  },
  {
    value: "2030",
    label: "Future Focused",
    description: "Target year for fully automated global smart networks",
    colorName: "cyan"
  },
  {
    value: "99.9%",
    label: "Smart Tech Solutions",
    description: "High-uptime, resilient multi-cloud IoT integrations",
    colorName: "indigo"
  },
  {
    value: "24/7",
    label: "Customer-Centric Approach",
    description: "Continuous adaptive support and ecosystem training",
    colorName: "amber"
  }
];
