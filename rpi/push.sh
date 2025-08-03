rsync \
  -avz \
  --delete \
  -e "ssh -p 666" \
  ./* \
  josh@rpi.ameyama.com:/home/josh/storage/apps/www/