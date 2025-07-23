export interface PricingPlan {
  name: string;
  description: string;
  priceMonthly: number;
  priceAnnual: number;
  features: string[];
  popular?: boolean;
}

export const pricingPlans: PricingPlan[] = [
  {
    name: "Basic",
    description: "Perfect for small projects and startups",
    priceMonthly: 999,
    priceAnnual: 9990,
    features: [
      "Single web or mobile application",
      "Basic UI/UX design",
      "Up to 5 pages/screens",
      "Responsive design",
      "1 month of support",
      "Basic SEO optimization"
    ]
  },
  {
    name: "Professional",
    description: "Ideal for growing businesses",
    priceMonthly: 2499,
    priceAnnual: 23990,
    popular: true,
    features: [
      "Web and mobile application",
      "Advanced UI/UX design",
      "Up to 15 pages/screens",
      "Responsive design",
      "3 months of support",
      "Full SEO optimization",
      "User authentication",
      "Basic analytics integration"
    ]
  },
  {
    name: "Enterprise",
    description: "For large-scale projects and businesses",
    priceMonthly: 4999,
    priceAnnual: 47990,
    features: [
      "Multi-platform development",
      "Premium UI/UX design",
      "Unlimited pages/screens",
      "Responsive design",
      "6 months of support",
      "Advanced SEO optimization",
      "Custom authentication system",
      "Advanced analytics integration",
      "Performance optimization",
      "Custom integrations",
      "Dedicated project manager"
    ]
  }
];