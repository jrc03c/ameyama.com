rsync \
  -avz \
  --delete \
  --delete-excluded \
  --exclude=submodules/media/files \
  ./* \
  josh@rpi:/home/josh/containers/ameyama.com/rpi/

rsync \
  -avz \
  --delete \
  --delete-excluded \
  --exclude=submodules/media/files \
  ./.[^.]* \
  josh@rpi:/home/josh/containers/ameyama.com/rpi/
