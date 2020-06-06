# threeWayHandshake
A three way handshake for passing out an ngrok address to an application

# How it works
onlineServer should be set to running first. It acts as the man in the middle for passing the ngrok address.
Once onlineServer is running, start the local server. It will get an ngrok address to allow outside tunneling and send the address to the online Server.
Start the application which will query the online server for the ngrok address to allow access to the local service from outwith the network.

