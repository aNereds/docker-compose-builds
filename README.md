# docker-compose-builds

Docker compose self education 

## Installation & Usage

From cloned dir run:

```bash
docker-compose up --build - For Prod Mode Run

OR

docker-compose -f docker-compose.yml -f docker-compose.development.yml up --build - For Dev env/mode run

Local domain will be: realworld-docker.loc
Note: should be added to local hosts file.
```

```bash
Simple Servie with simpliest routing under hood.
```
# Ports
Check available ports on your local(in dev mode if :80 is already taken by another app)

*Ports can be set in compose files and nginx configs

# Domains
Should be set in hosts file (for local development)

## Used technologies
Express.js
Node.js
React.js
Docker
Docker-compose
MongoDB
NoDemon
Axios
