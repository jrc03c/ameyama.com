# Storage

- Create per-user storage buckets for files
- For both storage and regular data, maybe add a size limit

# Security

- Add account / IP address lock-out feature for request spamming or other malicious use
- Add an idle timeout / refresh / lock
- On the server side, figure out how to watch for anomalous authentication attempts (see: https://owasp.org/www-project-appsensor/)

# Misc

- Add a `baseurl` in the front-end to make sure that requests go to the right place
- Make sure all relevant paths / functions have unit tests.
- When not signed in, just send a person to the sign-in screen rather than showing them an error.
