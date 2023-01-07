docker system prune
docker run -it \
        -p 3000:3000 \
        -v ~/_legacy/sherek2:/home/admin/pooria-sherek \
        --name sherek\
        moho/nodejs:1
