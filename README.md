#Clone and Install
Clone
```
cd /var/www/
git clone https://github.com/prawee/node-simulator-api-server.git json-server
cd json-server
```
Install Package
```
npm install
or 
npm i 
```

#Run
```
json-server --watch faker.js 
or 
json-server --w faker.js
```

#View
open your browser and then 
http://localhost:3000/users

#RESTFul
POST
```
curl -X POST -H "Content-type: application/json"  localhost:3000/users -d '{"name": "Prawee Wongsa" }'
```
```
{
  "name": "Prawee Wongsa",
  "id": 51
}
```

#More Information about Tools
https://github.com/typicode/json-server

