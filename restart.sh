kill $(ps aux | grep '[k]ittum' | awk '{print $2}')
./kittum >> web.log &
