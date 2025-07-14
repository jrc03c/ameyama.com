# doas true

podman-compose down
podman-compose build
podman-compose up --detach

# nohup node index.mjs &
# doas caddy reverse-proxy --from ameyama.com --to localhost:8923
# 
# podman-compose down
