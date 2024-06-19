# Nginx config error cause ws handshake error

## Start

```sh
# 1. Start Node Server
node app.js

# 2. Start Nginx
nginx -p $PWD/etc/nginx/ -c nginx.conf

# 3. Add host use vim
127.0.0.1 love.cat

# 4. Openn love.cat to view
```

## ERROR

### failed (48: Address already in use) STOP Default Start Nginx

```sh
nginx -s stop
```

## Other Operate

```sh
# Stop Nginx
nginx -p $PWD/etc/nginx/ -c nginx.conf -s stop

# Reload Nginx
nginx -p $PWD/etc/nginx/ -c nginx.conf -s reload
```
