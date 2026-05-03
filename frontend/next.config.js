/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'localhost',
      'lh3.googleusercontent.com',  // Google profile pictures
      'avatars.githubusercontent.com',
      'res.cloudinary.com',
    ],
  },
};

module.exports = nextConfig;
