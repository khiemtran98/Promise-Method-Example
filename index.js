//************

// var fs = require('promise-fs');

// function onDone(data) {
// 	console.log(data)
// }

// function onError(err) {
// 	console.log(err);
// }

// function readFile(path) {
// 	return fs.readFile(path, {encoding: 'utf8'});
// }

// readFile('data-1.json')
// 	.then(onDone)
// 	.then(function() {
// 		return readFile('data-2.json');
// 	})
// 	.then(onDone)
// 	.catch(onError);

//************
//************

// var fs = require('fs');

// function readFilePromise(path) {
// 	return new Promise(function(resolve, reject) {
// 		fs.readFile(path, {encoding: 'utf8'}, function(err, data) {
// 			if (err) {
// 				reject(data);
// 			} else {
// 				resolve(data);
// 			}
// 		});
// 	});
// }

// readFilePromise('data-1.json')
// 	.then(function(data) {
// 		console.log(data);
// 	})
// 	.catch(function(error) {
// 		console.log(error);
// 	})

//************