# --- Base versions ---
ARG NODE_VERSION=22

# --- Build stage: installs deps & builds Next (turbopack supported) ---
FROM node:${NODE_VERSION}-bookworm-slim AS builder
ENV NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1
WORKDIR /app

# Install system deps (git/ca-certificates for npm installs if needed)
RUN apt-get update && apt-get install -y --no-install-recommends \
    ca-certificates git openssl && \
    rm -rf /var/lib/apt/lists/*

# Copy only manifests first for cached installs
COPY package*.json ./

# Install full deps for build (includes dev deps for Next build)
RUN npm ci

# Copy source and build
COPY . .
# If you rely on Turbopack, Next 15 supports it by default via your package.json
RUN npm run build

# --- Runtime stage: minimal files from standalone output ---
FROM node:${NODE_VERSION}-bookworm-slim AS runtime
ENV NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1 \
    PORT=3000
WORKDIR /app

# Create non-root user
RUN addgroup --system app && adduser --system --ingroup app app

# Copy the standalone server, static assets, and public files
# .next/standalone contains a self-contained Node app (with production node_modules)
COPY --from=builder /app/.next/standalone ./ 
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

# Ownership
RUN chown -R app:app /app
USER app

EXPOSE 3000
# Next standalone server entry is in server.js under the copied standalone bundle
CMD ["node", "server.js"]
