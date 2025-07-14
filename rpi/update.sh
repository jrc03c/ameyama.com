git submodule update --init --remote --recursive

git add . --all && \
  git commit -m '...' && \
  git push origin `git rev-parse --abbrev-ref HEAD`
