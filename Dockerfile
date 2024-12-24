FROM nginx:alpine

# Set working directory in the container
WORKDIR /usr/share/nginx/html

# Remove the default Nginx index page
RUN rm -rf ./*

# Copy the project files to the container's working directory
COPY FILE/ .
COPY ICON/ ICON/.

# Expose port 80 to allow external access
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
