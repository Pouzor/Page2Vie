'use strict';

app.factory('Post', function ($resource) {

    return $resource('http://localhost:8080/api/posts/:id',
        { },{
            get :{method: 'get', isArray:true},
            deleteP : {method: 'delete', isArray:true},
            save: {method: 'post', isArray:false}

        });

});