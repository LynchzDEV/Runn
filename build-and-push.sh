#!/bin/bash

# Multi-architecture Docker build and push script for Next.js application
# Repository: lynchz/running-app

set -e  # Exit on any error

# Configuration
IMAGE_NAME="lynchz/running-app"
PLATFORMS="linux/amd64,linux/arm64"

echo "Building and pushing multi-architecture Docker image: $IMAGE_NAME"
echo "Target platforms: $PLATFORMS"

# Ensure Docker Buildx is available and configured for multi-platform builds
echo "Setting up Docker Buildx..."
docker buildx create --name multiarch-builder --use 2>/dev/null || docker buildx use multiarch-builder

# Inspect the builder to ensure it supports the required platforms
echo "Checking builder capabilities..."
docker buildx inspect --bootstrap

# Build and push the multi-architecture image
echo "Building and pushing multi-architecture image..."
docker buildx build \
  --platform $PLATFORMS \
  --tag $IMAGE_NAME:latest \
  --tag $IMAGE_NAME:$(date +%Y%m%d-%H%M%S) \
  --push \
  .

echo "Successfully built and pushed multi-architecture image: $IMAGE_NAME"
echo ""
echo "Available tags:"
echo "  - $IMAGE_NAME:latest"
echo "  - $IMAGE_NAME:$(date +%Y%m%d-%H%M%S)"
echo ""
echo "To run the image locally:"
echo "  docker run -p 3000:3000 $IMAGE_NAME:latest"
echo ""
echo "To pull and run on different architectures:"
echo "  docker pull $IMAGE_NAME:latest"
echo "  docker run -p 3000:3000 $IMAGE_NAME:latest"