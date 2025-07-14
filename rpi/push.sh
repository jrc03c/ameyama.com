rsync \
  -arvz \
  -e "ssh -p $AMEYAMA_COM_SSH_PORT" \
  --delete \
  --exclude=submodules/everything/private \
  --exclude=submodules/stats/times.json \
  ./* \
  $AMEYAMA_COM_SSH_USERNAME@ameyama.com:$AMEYAMA_COM_SSH_DIR

rsync \
  -arvz \
  -e "ssh -p $AMEYAMA_COM_SSH_PORT" \
  --delete \
  --exclude=.git \
  ./.[^.]* \
  $AMEYAMA_COM_SSH_USERNAME@ameyama.com:$AMEYAMA_COM_SSH_DIR
