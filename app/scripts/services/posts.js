'use strict';

app.factory('Post', function ($resource) {
    return $resource('http://localhost:8080/api/posts/:id');
});