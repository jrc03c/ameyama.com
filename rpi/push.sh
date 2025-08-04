rsync \
  -avz \
  --delete \
  -e "ssh -p 666" \
  ./* \
  josh@192.168.1.14:/home/josh/storage/apps/www/
