import bundleAnalyzer from "@next/bundle-analyzer";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
  reactStrictMode: false,
  optimizePackageImports: ["@mantine/core", "@mantine/hooks"],
};

export default withNextIntl(withBundleAnalyzer(nextConfig));

// import createNextIntlPlugin from "next-intl/plugin";

// const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

// const nextConfig = {
//   reactStrictMode: false,
//   optimizePackageImports: ["@mantine/core", "@mantine/hooks"],
// };

// export default withNextIntl(nextConfig);
