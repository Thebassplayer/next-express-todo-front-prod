/** @type {import('next').NextConfig} */

const apiURL = process.env.API_URL

const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/auth/:path',
        destination: '/api/auth/:path*',
      },
      {
        source: '/api/:path*',
        destination: `${apiURL}/:path*`,
      },
    ]
  },
  images: {
    domains: ['lh3.googleusercontent.com', 'avatars.githubusercontent.com'],
  },
}

export default nextConfig
