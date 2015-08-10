(function() {
    'use strict';

    var serviceId = 'datacontext';
    angular.module('app').factory(serviceId, ['common', '$http', datacontext]);

    function datacontext(common, $http) {
        var $q = common.$q;

        var service = {
            getProjects: getProjectsFake,
            getMessageCount: getMessageCount
        };

        return service;

        function getMessageCount() { return $q.when(72); }

        function getProjectsFake() {
            var people = [
                { slug: 'project-1', title: 'Project One', subtitle: 'Subtitle One', rank: 1 },
                { slug: 'project-2', title: 'Project Two', subtitle: 'Subtitle Two', rank: 3 },
                { slug: 'project-3', title: 'Project Three', subtitle: 'Subtitle Three', rank: 2 },
            ];
            return $q.when(people);
        }

        function getProjects() {
            $http.get('http://localhost:8090/projects/').
                success(function(data, status, headers, config) {
                    // this callback will be called asynchronously
                    // when the response is available
                    return data;
                }).
                error(function(data, status, headers, config) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                });
        }
    }
})();