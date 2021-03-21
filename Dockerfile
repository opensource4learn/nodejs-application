# Latest Stable Nodejs Docker Image
FROM        node:12.16.2

# Set working directory
WORKDIR     /app

# Copy the artefacts
COPY        code/ ./
COPY        wait-for-postgres.sh ./

# Bind Port
EXPOSE      3000

# Install Postgres Client
RUN         apt-get update -y ; apt-get install -y postgresql-client

# Make ./wait-for-postgres.sh executable
RUN         chmod +x wait-for-postgres.sh

# Entry point that will start the Microservice in Docker Container
ENTRYPOINT  ["./wait-for-postgres.sh", "npm", "start"]