kill $(ps aux | grep '[s]erver.js' | awk '{print $2}')
node "server.js" >> web.log &
