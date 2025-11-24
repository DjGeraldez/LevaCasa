/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Configurações para reduzir erros de rede no HMR
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      }
    }
    return config
  },
  // Desabilitar telemetria para reduzir requisições
  telemetry: {
    enabled: false,
  },
}

module.exports = nextConfig
