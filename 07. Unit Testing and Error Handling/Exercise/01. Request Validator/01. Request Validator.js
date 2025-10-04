function requestValidator(request) {
    const validMethod = ['GET', 'POST', 'DELETE', 'CONNECT'];
    const uriPattern = /^[\w.]+$/g;
    const validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    const specialChar = ['<', '>', '\\', '&', "'", '"'];

    if (!validMethod.includes(request.method)) {
        throw new Error('Invalid request header: Invalid Method');
    }

    if (!request.uri || !(request.uri === "*" || request.uri.match(uriPattern))) {
        throw new Error('Invalid request header: Invalid URI');
    }
    
    if (!validVersions.includes(request.version)) {
        throw new Error('Invalid request header: Invalid Version');
    }

    if (!request.hasOwnProperty('message')) {
        throw new Error('Invalid request header: Invalid Message');
    }

    for (let ch of request.message) {
        if (specialChar.includes(ch)) {
            throw new Error('Invalid request header: Invalid Message');
        }
    }

    return request;
}

requestValidator({

method: 'GET',

uri: 'svn.public.catalog',

version: 'HTTP/1.1',

message: ''

})