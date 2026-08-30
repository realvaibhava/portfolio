/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    // Required for styled-components SSR: keeps generated class names
    // consistent between the server and client bundles.
    styledComponents: true,
  },
  images: {
    // Next 16 narrowed the default allow-list to [75] and coerces any
    // other quality to the nearest allowed value. Without 100 here the
    // eight quality={100} images would silently drop to 75; 75 stays so
    // the one image that omits the prop keeps its default.
    qualities: [75, 100],
  },
};

export default nextConfig;
