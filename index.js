require('http').createServer((request, response) => {
  response.writeHead(
    210,
    'It\'s better this way',
    {'content-type': 'text/plain'}
  )
  response.end()
}).listen(1873)
