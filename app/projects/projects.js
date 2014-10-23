(function() {
    'use strict';
    var controllerId = 'projects';

    angular.module('app').controller(controllerId, ['common', projects]);

    function projects(common) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        var vm = this;
        vm.title = 'Projects';
        vm.builds = [{ slug: 'project-1', title: 'Title One', subtitle: 'SubTitle One' },
            { slug: 'project-2', title: 'Title Two', subtitle: 'SubTitle Two' },
            { slug: 'project-3', title: 'Title Three', subtitle: 'SubTitle Three' }
        ];

        activate();

        function activate() {
            common.activateController([], controllerId)
                .then(function() { log('Activated Projects View'); });
        }
    }
})();