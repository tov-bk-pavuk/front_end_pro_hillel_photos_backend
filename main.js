const createPhotoObjects = require("./generate_photo_objects");

const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
	const reqUrl = url.parse(req.url, true);

	// Handling GET request to '/'
	if (reqUrl.pathname === '/' && req.method === 'GET') {
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write('<h1>Node Server works</h1>');
		res.end();
	}
	// Handling GET request to '/photos'
	else if (reqUrl.pathname === '/photos' && req.method === 'GET') {
		res.writeHead(
			200,
			{
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*',
				'Access-Control-Allow-Methods': 'OPTIONS, GET'
			}
		);
		const mockPhotoObjects = createPhotoObjects(25)
		res.write(JSON.stringify(mockPhotoObjects));
		res.end();
	}
	// Handling undefined routes
	else {
		res.writeHead(404, {'Content-Type': 'text/html'});
		res.end('<h1>404 Not Found</h1>');
	}
});

const port = 3000;
server.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
