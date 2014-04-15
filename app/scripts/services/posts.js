'use strict';

app.factory('Post', function ($resource) {
    return $resource('https:///posts/:id.json');
});