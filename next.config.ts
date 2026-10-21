import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  experimental: {
    agentFeedback: true,
    serverActions: {
      bodySizeLimit: "5mb", // On augmente la limite à 5 Mo
    },
  },
};

export default withNextIntl(nextConfig);