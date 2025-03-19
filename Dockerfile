FROM node:18

# Set working directory
WORKDIR /zhao_wentao_ui_garden_build_checks

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Set environment variables before npm install
ENV ROLLUP_SKIP_NODEJS_NATIVE=1
ENV NODE_ENV=development

# Create .npmrc and install dependencies
ARG GITHUB_TOKEN
RUN echo "@winstonsolutions:registry=https://npm.pkg.github.com/" > .npmrc && \
    echo "//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}" >> .npmrc && \
    npm cache clean --force && \
    npm install

# Copy the rest of the source code
COPY . .

# Expose the port the app runs on
EXPOSE 8018

# Start development server
CMD ["npm", "run", "dev", "--", "--port", "8018"]