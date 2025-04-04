/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export", // Enables full static export (SSG without a server)
    images: {
        unoptimized: true, // Disables Next.js image optimization for full static export
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.sciencebuddies.org',
            },
        ], 
    },
    devIndicators: false,
};
//module.exports = nextConfig;
export default nextConfig;






// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     images: {
//         //domains: ['cdn.mos.cms.futurecdn.net'],
//         remotePatterns: [
//           {
//               protocol: 'https',
//               hostname: 'www.sciencebuddies.org',
//           },
//       ], 
//       },
//     devIndicators: false
// };

// export default nextConfig;



// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   output: "export", 
//   images: {
//     unoptimized: true,
//   },
// };

// module.exports = nextConfig;
