FROM node:16-alpine
WORKDIR /pocketbase/

ARG TARGETOS
ARG TARGETARCH
ARG VERSION=0.10.4

ENV BUILDX_ARCH="${TARGETOS:-linux}_${TARGETARCH:-amd64}"

RUN apk add --no-cache \
    ca-certificates \
    unzip \
    wget \
    zip \
    zlib-dev

RUN wget https://github.com/pocketbase/pocketbase/releases/download/v${VERSION}/pocketbase_${VERSION}_${BUILDX_ARCH}.zip \
    && unzip pocketbase_${VERSION}_${BUILDX_ARCH}.zip \
    && chmod +x /pocketbase

EXPOSE 8090
CMD ["/pocketbase/pocketbase", "serve", "--http=0.0.0.0:8090"]