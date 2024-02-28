/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
      return [
        {
          // matching all routes
          source: '/(.*)',
          headers: [
            { key: 'X-Frame-Options', value: 'DENY' },
            { key: 'X-Content-Type-Options', value: 'nosniff' },
            { key: 'Referrer-Policy', value: 'no-referrer-when-downgrade' },
            { key: 'Content-Security-Policy', value: "default-src 'self'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: https://www.google.com; connect-src 'self' https://firestore.googleapis.com; font-src 'self' https://fonts.gstatic.com; script-src 'self' 'unsafe-inline' 'unsafe-eval';" },
            { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()' }
          ],
        },
      ];
    },
  };
  
  module.exports = nextConfig;
  
  
  