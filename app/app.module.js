(function () {
    'use strict';

    angular.module('app', [
        'app.core',
        'app.widgets',
        'app.admin',
        'app.dashboard',
        'app.layout'
    ]);

    console.log('APPPPPPP module');

})();

require('./admin/admin.module.js');
require('./blocks/exception/exception.module.js');
require('./blocks/logger/logger.module.js');
require('./blocks/router/router.module.js');
require('./core/core.module.js');
require('./dashboard/dashboard.module.js');
require('./layout/layout.module.js');
require('./widgets/widgets.module.js');
require('./admin/admin.controller.js');
require('./admin/admin.route.js');
require('./blocks/exception/exception-handler.provider.js');
require('./blocks/exception/exception.js');
require('./blocks/logger/logger.js');
require('./blocks/router/router-helper.provider.js');
require('./core/config.js');
require('./core/constants.js');
require('./core/core.route.js');
require('./core/dataservice.js');
require('./dashboard/dashboard.controller.js');
require('./dashboard/dashboard.route.js');
require('./layout/ht-sidebar.directive.js');
require('./layout/ht-top-nav.directive.js');
require('./layout/shell.controller.js');
require('./layout/sidebar.controller.js');
require('./widgets/ht-img-person.directive.js');
require('./widgets/ht-widget-header.directive.js');
