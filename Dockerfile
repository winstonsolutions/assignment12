FROM node:18

# Set working directory
WORKDIR /zhao_wentao_ui_garden

# Copy package.json and .npmrc
COPY package*.json .npmrc ./

# Set NPM_TOKEN environment variable
ARG NPM_TOKEN
ENV NPM_TOKEN=$NPM_TOKEN

# Remove node_modules and package-lock.json if they exist
RUN rm -rf node_modules package-lock.json

# Reinstall dependencies
RUN npm install

# Additional steps if you encounter issues. Often not needed.
# RUN npm rebuild rollup
# RUN npm install @rollup/rollup-linux-x64-gnu

# Copy the rest of the source code
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Command to run the application
CMD ["npm", "run", "dev"]