/** @type {import('next').NextConfig} */
const nextConfig = {async headers() {
    return [
      {
        // matching all routes
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'no-referrer-when-downgrade' },
          { key: 'Content-Security-Policy', value: "default-src 'self'" },
          { key: 'Permissions-Policy',  value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()'}
        ],
      },
    ]
  }, 
}


module.exports = nextConfig