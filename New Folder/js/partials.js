(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/Activity-form-CW/Activity-form-CW.component.html',
    '<section layout="row" layout-sm="column" layout-align="center center" layout-wrap="">\n' +
    '    <h1 >Activities</h1>\n' +
    '</section>\n' +
    '\n' +
    '<div layout="row" layout-wrap>\n' +
    '    <div flex="20" ng-repeat="activity in vm.activities.activities">\n' +
    '        <md-card>\n' +
    '            <md-card-content>\n' +
    '                <h2>{{activity.name}}</h2>\n' +
    '                <p>{{activity.description}}</p>\n' +
    '                <p>{{activity.options}}</p>\n' +
    '            </md-card-content>\n' +
    '            <md-card-footer>\n' +
    '                <md-button class="md-primary md-raised" ng-click="vm.delete(activity.id)">Delete</md-button>\n' +
    '            </md-card-footer>\n' +
    '        </md-card>\n' +
    '    </div>\n' +
    '</div>\n' +
    '<section layout="row" layout-sm="column" layout-align="center center" layout-wrap="">\n' +
    '    <h1 >Add Activity</h1>\n' +
    '</section>\n' +
    '<section layout="row" layout-sm="column" layout-align="center center" layout-wrap="">\n' +
    '    <form ng-submit="vm.submit()">\n' +
    '\n' +
    '        <md-input-container>\n' +
    '            <label>Name</label>\n' +
    '            <input type="text" ng-model="vm.name">\n' +
    '        </md-input-container>\n' +
    '\n' +
    '        <md-input-container>\n' +
    '            <label>Description</label>\n' +
    '            <input type="text" ng-model="vm.description">\n' +
    '        </md-input-container>\n' +
    '        <md-input-container>\n' +
    '            <label>Options</label>\n' +
    '            <input type="text" ng-model="vm.options">\n' +
    '        </md-input-container>\n' +
    '\n' +
    '        <md-button type="submit" class="md-primary md-raised">Create Activity</md-button>\n' +
    '\n' +
    '    </form>\n' +
    '</section>');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/activity-page-cw/activity-page-cw.component.html',
    '<div class="start">\n' +
    '    <section layout="row" layout-align="center center">\n' +
    '    <div flex-xs="" flex-gt-xs="50" layout="column">\n' +
    '        <md-card>\n' +
    '            <md-card-header class="activity-header">\n' +
    '                <md-card-avatar>\n' +
    '                    <img src="{{vm.gurl}}">\n' +
    '                </md-card-avatar>\n' +
    '                <md-card-header-text>\n' +
    '                    <span class="md-title activity-title">{{vm.activityTitle}}</span>\n' +
    '                    <span class="activity-subhead">..be advised</span>\n' +
    '                </md-card-header-text>\n' +
    '                <md-card-avatar>\n' +
    '                    <md-menu-bar >\n' +
    '                        <md-menu >\n' +
    '                            <button ng-click="$mdOpenMenu()" style="padding:0;background-color:#483b9d">\n' +
    '                                <md-icon md-svg-src="img/icons/menu.svg" style="margin-left:0px;"></md-icon>\n' +
    '                            </button>\n' +
    '                            <md-menu-content>\n' +
    '                                <div class="menu-start">\n' +
    '                                    <section layout="row" layout-sm="column" layout-align="center center" layout-wrap="">\n' +
    '                                        <md-button class="md-raised md-primary" >Share</md-button>\n' +
    '                                        <md-button class="md-raised md-primary">Learn</md-button>\n' +
    '                                        <md-button class="md-raised md-primary" href="#/list-elements">Analyze</md-button>\n' +
    '\n' +
    '                                    </section>\n' +
    '                                    <section layout="row" layout-sm="column" layout-align="center center" layout-wrap="">\n' +
    '                                        <md-button class="md-raised md-primary"></md-button>\n' +
    '                                        <md-button class="md-raised md-primary"></md-button>\n' +
    '                                        <md-button class="md-raised md-primary"></md-button>\n' +
    '\n' +
    '                                    </section>\n' +
    '                                    <section layout="row" layout-sm="column" layout-align="center center" layout-wrap="">\n' +
    '                                        <md-button class="md-raised md-primary">Plan </md-button>\n' +
    '                                        <md-button class="md-raised md-primary">Perform</md-button>\n' +
    '                                        <md-button class="md-raised md-primary" href="#/evaluate">Evaluate</md-button>\n' +
    '                                    </section>\n' +
    '\n' +
    '                                </div>\n' +
    '\n' +
    '                            </md-menu-content>\n' +
    '                        </md-menu>\n' +
    '                    </md-menu-bar>\n' +
    '\n' +
    '                </md-card-avatar>\n' +
    '            </md-card-header>\n' +
    '\n' +
    '            <md-card-content>\n' +
    '                <p>\n' +
    '                    There is one very special type of personality, called psychopaths (similar to sociopaths).\n' +
    '                </p>\n' +
    '                <p>\n' +
    '                    You will most probably meet one, or maybe you already have. If you have, you will likely not forget it.\n' +
    '                    To meet a psychopath is usually a very traumatic experience.\n' +
    '\n' +
    '                </p>\n' +
    '                <p>\n' +
    '                    The fascinating yet terrifying thing with psychopaths is that almost none of us can detect it.\n' +
    '                    Most of us would be very much charmed by them.\n' +
    '                </p>\n' +
    '                <p>\n' +
    '                    Then, suddenly and unexpectedly the charmer and “friend” can turn your life into a real inferno!\n' +
    '                </p>\n' +
    '\n' +
    '                <p>\n' +
    '                    The basics of identifying psychopaths are something you and anybody else should know.\n' +
    '                    One of the extracurricular activities in this program is the “psychopath school”.\n' +
    '                </p>\n' +
    '                <p>\n' +
    '                    Of course not to learn how to be one but how to see one ;) \n' +
    '                </p>\n' +
    '                <!--<p>{{vm.activityText}}</p>-->\n' +
    '            </md-card-content>\n' +
    '        </md-card>\n' +
    '\n' +
    '    </div>\n' +
    '        </section>\n' +
    '\n' +
    '</div>');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/app-header/app-header.component.html',
    '<md-content class="Page-Container DemoHeader ">\n' +
    '    <div layout="row" >\n' +
    '        <div flex="90" flex-offset="5" class="DemoHeader-container">\n' +
    '            <div layout="row" layout-align="space-between">\n' +
    '                <div layout="row" layout-align="center center">\n' +
    '                    <img src="img/logo-1.png">\n' +
    '                    <div>\n' +
    '                        <h2 style="margin: 2px; color: red"> <span>Innernaut</span></h2>\n' +
    '                        <h4 style="margin: 2px; font-style: italic; color: #00A4C6">Leadership by being yourself</h4>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '                <div layout="row" layout-align="center stretch">\n' +
    '\n' +
    '                    <!--<a hide-xs class="DemoHeader-link md-subhead" href="#/create-activity">-->\n' +
    '                        <!--<md-icon md-svg-icon="img/icons/menu.svg"></md-icon>-->\n' +
    '                    <!--</a>-->\n' +
    '                    <md-menu-bar >\n' +
    '                        <md-menu >\n' +
    '                            <button ng-click="$mdOpenMenu()" style="padding:0;background-color:white">\n' +
    '                                <md-icon md-svg-src="img/icons/menu.svg" style="margin-left:0px;"></md-icon>\n' +
    '                            </button>\n' +
    '                            <md-menu-content>\n' +
    '                                <div class="menu-start">\n' +
    '                                    <section layout="row" layout-sm="column" layout-align="center center" layout-wrap="">\n' +
    '                                        <md-button class="md-raised md-primary" >Share</md-button>\n' +
    '                                        <md-button class="md-raised md-primary">Learn</md-button>\n' +
    '                                        <md-button class="md-raised md-primary" href="#/list-elements">Analyze</md-button>\n' +
    '\n' +
    '                                    </section>\n' +
    '                                    <section layout="row" layout-sm="column" layout-align="center center" layout-wrap="">\n' +
    '                                        <md-button class="md-raised md-primary"></md-button>\n' +
    '                                        <md-button class="md-raised md-primary"></md-button>\n' +
    '                                        <md-button class="md-raised md-primary"></md-button>\n' +
    '\n' +
    '                                    </section>\n' +
    '                                    <section layout="row" layout-sm="column" layout-align="center center" layout-wrap="">\n' +
    '                                        <md-button class="md-raised md-primary">Plan </md-button>\n' +
    '                                        <md-button class="md-raised md-primary">Perform</md-button>\n' +
    '                                        <md-button class="md-raised md-primary" href="#/evaluate">Evaluate</md-button>\n' +
    '                                    </section>\n' +
    '\n' +
    '                                </div>\n' +
    '\n' +
    '                            </md-menu-content>\n' +
    '                        </md-menu>\n' +
    '                    </md-menu-bar>\n' +
    '                    <!--<a hide-xs class="DemoHeader-link md-subhead" href="#/create-post">Posts</a>-->\n' +
    '                    <!--<md-button href="#/create-activity" class="md-icon-button md-primary" aria-label="Settings">-->\n' +
    '                    <!--<md-icon md-svg-icon="img/icons/menu.svg"></md-icon>-->\n' +
    '                    <!--</md-button>-->\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</md-content>\n' +
    '<div class="DemoHeader-spacer"></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/app-shell/app-shell.component.html',
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/app-view/app-view.component.html',
    '<div ui-view="header"></div>\n' +
    '<div ui-view="main"></div>\n' +
    '<!--<div ui-view="footer"></div>-->\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/create-element-CW/create-element-CW.component.html',
    '<form ng-submit="vm.submit()">\n' +
    '\n' +
    '    <md-input-container>\n' +
    '        <label>Titre</label>\n' +
    '        <input type="text" ng-model="vm.titre">\n' +
    '    </md-input-container>\n' +
    '    </br>\n' +
    '    <md-input-container>\n' +
    '        <label>Description</label>\n' +
    '        <input type="text" ng-model="vm.description">\n' +
    '    </md-input-container>\n' +
    '    </br>\n' +
    '    <md-input-container>\n' +
    '        <label>Lieu</label>\n' +
    '        <input type="text" ng-model="vm.lieu">\n' +
    '    </md-input-container>\n' +
    '    </br>\n' +
    '    <md-input-container>\n' +
    '        <label>Photo</label>\n' +
    '        <input type=\'file\' ng-model=\'vm.photo\' base-sixty-four-input>\n' +
    '    </md-input-container>\n' +
    '\n' +
    '\n' +
    '\n' +
    '    </br>\n' +
    '    <md-button type="submit" class="md-primary md-raised">Créer un élément</md-button>\n' +
    '\n' +
    '</form>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/create-group-CW/create-group-CW.component.html',
    '<section layout="row" layout-sm="column" layout-align="center center" layout-wrap="">\n' +
    '    <h1 >Groups</h1>\n' +
    '</section>\n' +
    '\n' +
    '<div layout="row" layout-wrap>\n' +
    '    <div flex="20" ng-repeat="group in vm.groups.groups">\n' +
    '        <md-card>\n' +
    '            <md-card-content>\n' +
    '                <h2>{{group.name}}</h2>\n' +
    '                <p>{{group.option}}</p>\n' +
    '            </md-card-content>\n' +
    '            <md-card-footer>\n' +
    '                <md-button class="md-primary md-raised" ng-click="vm.delete(group.id)">Delete</md-button>\n' +
    '            </md-card-footer>\n' +
    '        </md-card>\n' +
    '    </div>\n' +
    '</div>\n' +
    '<section layout="row" layout-sm="column" layout-align="center center" layout-wrap="">\n' +
    '    <h1 >Add Group</h1>\n' +
    '</section>\n' +
    '<section layout="row" layout-sm="column" layout-align="center center" layout-wrap="">\n' +
    '    <form ng-submit="vm.submit()">\n' +
    '\n' +
    '        <md-input-container>\n' +
    '            <label>Name</label>\n' +
    '            <input type="text" ng-model="vm.name">\n' +
    '        </md-input-container>\n' +
    '\n' +
    '        <md-input-container>\n' +
    '            <label>Option</label>\n' +
    '            <input type="text" ng-model="vm.option">\n' +
    '        </md-input-container>\n' +
    '\n' +
    '        <md-button type="submit" class="md-primary md-raised">Create Group</md-button>\n' +
    '\n' +
    '    </form>\n' +
    '</section>');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/create_post_form/create_post_form.component.html',
    '<form ng-submit="vm.submit()">\n' +
    '\n' +
    '    <md-input-container>\n' +
    '      <label>Name</label>\n' +
    '      <input type="text" ng-model="vm.name">\n' +
    '    </md-input-container>\n' +
    '\n' +
    '    <md-input-container>\n' +
    '      <label>Topic</label>\n' +
    '      <input type="text" ng-model="vm.topic">\n' +
    '     </md-input-container>\n' +
    '\n' +
    '    <md-button type="submit" class="md-primary md-raised">Create post</md-button>\n' +
    '\n' +
    '</form>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/day0-cw/day0-cw.component.html',
    '<div class="start">\n' +
    '    <div layout="row" layout-wrap class="panel">\n' +
    '        <div flex="49" >\n' +
    '            <md-card class="card">\n' +
    '                <md-card-content>\n' +
    '                    <section layout="row" layout-align="center center">\n' +
    '                        <div>\n' +
    '                            <h3 class="day-label1">Day Zero</h3>\n' +
    '                        </div>\n' +
    '                    </section>\n' +
    '                    <section layout="row" layout-align="center center" class="day-section">\n' +
    '                        <div>\n' +
    '                            <span style="color: #00A000">Oct 02,18:00</span>\n' +
    '                        </div>\n' +
    '                    </section>\n' +
    '                    <section layout="row" layout-align="center center" class="day-section">\n' +
    '                        <div>\n' +
    '                            <span class="day-label1">Zero</span>\n' +
    '                        </div>\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/1">\n' +
    '                                <img src="img/activity/Daystart.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '                        <span class="day-label1" flex="50">1. Day start + Roles</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/2">\n' +
    '                                <img src="img/activity/Presentation.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div >\n' +
    '                        <span class="day-label1" flex="50">2. Self-presentation</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/3">\n' +
    '                                <img src="img/activity/Pitch.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '                        <span class="day-label1" flex="50">3. Topic pitch</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/4" >\n' +
    '                                <img src="img/activity/exercise.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '                        <span class="day-label1" flex="50">4. Exercize</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/5">\n' +
    '                                <img src="img/activity/parliament.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '                        <span class="day-label1" flex="50">5. Parliament</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/6">\n' +
    '                                <img src="img/activity/system.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '                        <span class="day-label1" flex="50">6. system</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/7">\n' +
    '                                <img src="img/activity/focus.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '                        <span class="day-label1" flex="50">7. Focusing</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/8">\n' +
    '                                <img src="img/activity/rose.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '                        <span class="day-label1" flex="50">8. The Rose</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/9">\n' +
    '                                <img src="img/activity/assignment.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '                        <span class="day-label1" flex="50">9. Mission assignment</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '\n' +
    '                </md-card-content>\n' +
    '            </md-card>\n' +
    '        </div>\n' +
    '\n' +
    '        <div flex="49" >\n' +
    '            <md-card class="card">\n' +
    '                <md-card-content>\n' +
    '                    <section layout="row" layout-align="center center">\n' +
    '                        <div>\n' +
    '                            <h3 class="day-label1">Day Zero</h3>\n' +
    '                        </div>\n' +
    '                    </section>\n' +
    '                    <section layout="row" layout-align="center center" class="day-section">\n' +
    '                        <div>\n' +
    '                            <span style="color: #00A000">Oct 02,18:00</span>\n' +
    '                        </div>\n' +
    '                    </section>\n' +
    '                    <section layout="row" layout-align="center center" class="day-section">\n' +
    '                        <div>\n' +
    '                            <span class="day-label1">Zero</span>\n' +
    '                        </div>\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/10">\n' +
    '                                <img src="img/activity/Daystart.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '                        <span class="day-label1" flex="50">1. Day start + Roles</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/11">\n' +
    '                                <img src="img/activity/Presentation.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div >\n' +
    '                        <span class="day-label1" flex="50">2. Self-presentation</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/12">\n' +
    '                                <img src="img/activity/Pitch.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '                        <span class="day-label1" flex="50">3. Topic pitch</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/13" >\n' +
    '                                <img src="img/activity/exercise.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '                        <span class="day-label1" flex="50">4. Exercize</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/14">\n' +
    '                                <img src="img/activity/parliament.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '                        <span class="day-label1" flex="50">5. Parliament</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/15">\n' +
    '                                <img src="img/activity/system.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '                        <span class="day-label1" flex="50">6. system</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/16">\n' +
    '                                <img src="img/activity/focus.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '                        <span class="day-label1" flex="50">7. Focusing</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/17">\n' +
    '                                <img src="img/activity/rose.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '                        <span class="day-label1" flex="50">8. The Rose</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/18">\n' +
    '                                <img src="img/activity/assignment.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '                        <span class="day-label1" flex="50">9. Mission assignment</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '\n' +
    '                </md-card-content>\n' +
    '            </md-card>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/day1-cw/day1-cw.component.html',
    '<div class="start">\n' +
    '    <div layout="row" layout-wrap class="panel">\n' +
    '        <div flex="49" >\n' +
    '            <md-card class="card">\n' +
    '                <md-card-content>\n' +
    '                    <section layout="row" layout-align="center center">\n' +
    '                        <div>\n' +
    '                            <h3 class="day-label1">Day 1</h3>\n' +
    '                        </div>\n' +
    '                    </section>\n' +
    '                    <section layout="row" layout-align="center center" class="day-section">\n' +
    '                        <div>\n' +
    '                            <span style="color: #00A000">Oct 12,18:00</span>\n' +
    '                        </div>\n' +
    '                    </section>\n' +
    '                    <section layout="row" layout-align="center center" class="day-section">\n' +
    '                        <div>\n' +
    '                            <span class="day-label1">Goal</span>\n' +
    '                        </div>\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/19">\n' +
    '                                <img src="img/activity/Daystart.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '                        <span class="day-label1" flex="50">1. Day start + Roles</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/20">\n' +
    '                                <img src="img/activity/Presentation.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div >\n' +
    '                        <span class="day-label1" flex="50">2. Self-presentation</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/21">\n' +
    '                                <img src="img/activity/Pitch.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '                        <span class="day-label1" flex="50">3. Goal pitch</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/22" >\n' +
    '                                <img src="img/activity/exercise.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '                        <span class="day-label1" flex="50">4. Goal Exercize</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/23">\n' +
    '                                <img src="img/activity/parliament.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '                        <span class="day-label1" flex="50">5. Parliament</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/24">\n' +
    '                                <img src="img/activity/system.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '                        <span class="day-label1" flex="50">6. system 1</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/25">\n' +
    '                                <img src="img/activity/focus.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '                        <span class="day-label1" flex="50">7. Focusing</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/26">\n' +
    '                                <img src="img/activity/rose.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '                        <span class="day-label1" flex="50">8. The Rose</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/27">\n' +
    '                                <img src="img/activity/assignment.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '                        <span class="day-label1" flex="50">9. Mission assignment</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '\n' +
    '                </md-card-content>\n' +
    '            </md-card>\n' +
    '        </div>\n' +
    '\n' +
    '        <div flex="49" >\n' +
    '            <md-card class="card">\n' +
    '                <md-card-content>\n' +
    '                    <section layout="row" layout-align="center center">\n' +
    '                        <div>\n' +
    '                            <h3 class="day-label1">Day 1</h3>\n' +
    '                        </div>\n' +
    '                    </section>\n' +
    '                    <section layout="row" layout-align="center center" class="day-section">\n' +
    '                        <div>\n' +
    '                            <span style="color: #00A000">Oct 12,18:00</span>\n' +
    '                        </div>\n' +
    '                    </section>\n' +
    '                    <section layout="row" layout-align="center center" class="day-section">\n' +
    '                        <div>\n' +
    '                            <span class="day-label1">Goal</span>\n' +
    '                        </div>\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/28">\n' +
    '                                <img src="img/activity/Daystart.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '                        <span class="day-label1" flex="50">1. Day start + Roles</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/29">\n' +
    '                                <img src="img/activity/Presentation.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div >\n' +
    '                        <span class="day-label1" flex="50">2. Self-presentation</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/30">\n' +
    '                                <img src="img/activity/Pitch.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '                        <span class="day-label1" flex="50">3. Goal pitch</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/31" >\n' +
    '                                <img src="img/activity/exercise.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '                        <span class="day-label1" flex="50">4. Goal Exercize</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/32">\n' +
    '                                <img src="img/activity/parliament.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '                        <span class="day-label1" flex="50">5. Parliament</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/33">\n' +
    '                                <img src="img/activity/system.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '                        <span class="day-label1" flex="50">6. system 1</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/34">\n' +
    '                                <img src="img/activity/focus.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '                        <span class="day-label1" flex="50">7. Focusing</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/35">\n' +
    '                                <img src="img/activity/rose.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '                        <span class="day-label1" flex="50">8. The Rose</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/36">\n' +
    '                                <img src="img/activity/assignment.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '                        <span class="day-label1" flex="50">9. Mission assignment</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '\n' +
    '                </md-card-content>\n' +
    '            </md-card>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/day2-cw/day2-cw.component.html',
    '<div class="start">\n' +
    '    <div layout="row" layout-wrap class="panel">\n' +
    '        <div flex="49" >\n' +
    '            <md-card class="card">\n' +
    '                <md-card-content>\n' +
    '                    <section layout="row" layout-align="center center">\n' +
    '                        <div>\n' +
    '                            <h3 class="day-label1">Day 2</h3>\n' +
    '                        </div>\n' +
    '                    </section>\n' +
    '                    <section layout="row" layout-align="center center" class="day-section">\n' +
    '                        <div>\n' +
    '                            <span style="color: #00A000">Oct 24,18:00</span>\n' +
    '                        </div>\n' +
    '                    </section>\n' +
    '                    <section layout="row" layout-align="center center" class="day-section">\n' +
    '                        <div>\n' +
    '                            <span class="day-label1">Relationship</span>\n' +
    '                        </div>\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/37">\n' +
    '                                <img src="img/activity/Daystart.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '                        <span class="day-label1" flex="50">1. Day start + Roles</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/38">\n' +
    '                                <img src="img/activity/Presentation.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div >\n' +
    '                        <span class="day-label1" flex="50">2. Self-presentation</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/39">\n' +
    '                                <img src="img/activity/Pitch.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '                        <span class="day-label1" flex="50">3. Relations pitch</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/40" >\n' +
    '                                <img src="img/activity/exercise.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '                        <span class="day-label1" flex="50">4. Relation Exercize</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/41">\n' +
    '                                <img src="img/activity/parliament.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '                        <span class="day-label1" flex="50">5. Parliament</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/42">\n' +
    '                                <img src="img/activity/system.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '                        <span class="day-label1" flex="50">6. system 2</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/43">\n' +
    '                                <img src="img/activity/focus.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '                        <span class="day-label1" flex="50">7. Focusing</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/44">\n' +
    '                                <img src="img/activity/rose.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '                        <span class="day-label1" flex="50">8. The Rose</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/45">\n' +
    '                                <img src="img/activity/assignment.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '                        <span class="day-label1" flex="50">9. Mission assignment</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '\n' +
    '                </md-card-content>\n' +
    '            </md-card>\n' +
    '        </div>\n' +
    '\n' +
    '        <div flex="49" >\n' +
    '            <md-card class="card">\n' +
    '                <md-card-content>\n' +
    '                    <section layout="row" layout-align="center center">\n' +
    '                        <div>\n' +
    '                            <h3 class="day-label1">Day 2</h3>\n' +
    '                        </div>\n' +
    '                    </section>\n' +
    '                    <section layout="row" layout-align="center center" class="day-section">\n' +
    '                        <div>\n' +
    '                            <span style="color: #00A000">Oct 24,18:00</span>\n' +
    '                        </div>\n' +
    '                    </section>\n' +
    '                    <section layout="row" layout-align="center center" class="day-section">\n' +
    '                        <div>\n' +
    '                            <span class="day-label1">Relationship</span>\n' +
    '                        </div>\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/46">\n' +
    '                                <img src="img/activity/Daystart.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '                        <span class="day-label1" flex="50">1. Day start + Roles</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/47">\n' +
    '                                <img src="img/activity/Presentation.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div >\n' +
    '                        <span class="day-label1" flex="50">2. Self-presentation</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/48">\n' +
    '                                <img src="img/activity/Pitch.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '                        <span class="day-label1" flex="50">3. Relations pitch</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/49" >\n' +
    '                                <img src="img/activity/exercise.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '                        <span class="day-label1" flex="50">4. Relation Exercize</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/50">\n' +
    '                                <img src="img/activity/parliament.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '                        <span class="day-label1" flex="50">5. Parliament</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/51">\n' +
    '                                <img src="img/activity/system.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '                        <span class="day-label1" flex="50">6. system 2</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/52">\n' +
    '                                <img src="img/activity/focus.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '                        <span class="day-label1" flex="50">7. Focusing</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/53">\n' +
    '                                <img src="img/activity/rose.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '                        <span class="day-label1" flex="50">8. The Rose</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/54">\n' +
    '                                <img src="img/activity/assignment.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '                        <span class="day-label1" flex="50">9. Mission assignment</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '\n' +
    '                </md-card-content>\n' +
    '            </md-card>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/day3-cw/day3-cw.component.html',
    '<div class="start">\n' +
    '    <div layout="row" layout-wrap class="panel">\n' +
    '        <div flex="49" >\n' +
    '            <md-card class="card">\n' +
    '                <md-card-content>\n' +
    '                    <section layout="row" layout-align="center center">\n' +
    '                        <div>\n' +
    '                            <h3 class="day-label1">Day 3</h3>\n' +
    '                        </div>\n' +
    '                    </section>\n' +
    '                    <section layout="row" layout-align="center center" class="day-section">\n' +
    '                        <div>\n' +
    '                            <span style="color: #00A000">Nov 06,18:00</span>\n' +
    '                        </div>\n' +
    '                    </section>\n' +
    '                    <section layout="row" layout-align="center center" class="day-section">\n' +
    '                        <div>\n' +
    '                            <span class="day-label1">Focusing</span>\n' +
    '                        </div>\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/55">\n' +
    '                                <img src="img/activity/Daystart.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '                        <span class="day-label1" flex="50">1. Day start + Roles</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/56">\n' +
    '                                <img src="img/activity/Presentation.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div >\n' +
    '                        <span class="day-label1" flex="50">2. Self-presentation</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/57">\n' +
    '                                <img src="img/activity/Pitch.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '                        <span class="day-label1" flex="50">3. Focusing pitch</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/58" >\n' +
    '                                <img src="img/activity/exercise.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '                        <span class="day-label1" flex="50">4. Focusing Exercize</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/59">\n' +
    '                                <img src="img/activity/parliament.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '                        <span class="day-label1" flex="50">5. Parliament</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/60">\n' +
    '                                <img src="img/activity/system.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '                        <span class="day-label1" flex="50">6. system 3</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/61">\n' +
    '                                <img src="img/activity/focus.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '                        <span class="day-label1" flex="50">7. Focusing</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/62">\n' +
    '                                <img src="img/activity/rose.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '                        <span class="day-label1" flex="50">8. The Rose</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/63">\n' +
    '                                <img src="img/activity/assignment.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '                        <span class="day-label1" flex="50">9. Mission assignment</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '\n' +
    '                </md-card-content>\n' +
    '            </md-card>\n' +
    '        </div>\n' +
    '\n' +
    '        <div flex="49" >\n' +
    '            <md-card class="card">\n' +
    '                <md-card-content>\n' +
    '                    <section layout="row" layout-align="center center">\n' +
    '                        <div>\n' +
    '                            <h3 class="day-label1">Day 3</h3>\n' +
    '                        </div>\n' +
    '                    </section>\n' +
    '                    <section layout="row" layout-align="center center" class="day-section">\n' +
    '                        <div>\n' +
    '                            <span style="color: #00A000">Nov 06,18:00</span>\n' +
    '                        </div>\n' +
    '                    </section>\n' +
    '                    <section layout="row" layout-align="center center" class="day-section">\n' +
    '                        <div>\n' +
    '                            <span class="day-label1">Focusing</span>\n' +
    '                        </div>\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/64">\n' +
    '                                <img src="img/activity/Daystart.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '                        <span class="day-label1" flex="50">1. Day start + Roles</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/65">\n' +
    '                                <img src="img/activity/Presentation.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div >\n' +
    '                        <span class="day-label1" flex="50">2. Self-presentation</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/66">\n' +
    '                                <img src="img/activity/Pitch.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '                        <span class="day-label1" flex="50">3. Focusing pitch</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/67" >\n' +
    '                                <img src="img/activity/exercise.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '                        <span class="day-label1" flex="50">4. Focusing Exercize</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/68">\n' +
    '                                <img src="img/activity/parliament.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '                        <span class="day-label1" flex="50">5. Parliament</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/69">\n' +
    '                                <img src="img/activity/system.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '                        <span class="day-label1" flex="50">6. system 3</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/70">\n' +
    '                                <img src="img/activity/focus.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '                        <span class="day-label1" flex="50">7. Focusing</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/71">\n' +
    '                                <img src="img/activity/rose.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '                        <span class="day-label1" flex="50">8. The Rose</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/72">\n' +
    '                                <img src="img/activity/assignment.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '                        <span class="day-label1" flex="50">9. Mission assignment</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '\n' +
    '                </md-card-content>\n' +
    '            </md-card>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/day4-cw/day4-cw.component.html',
    '<div class="start">\n' +
    '    <div layout="row" layout-wrap class="panel">\n' +
    '        <div flex="49" >\n' +
    '            <md-card class="card">\n' +
    '                <md-card-content>\n' +
    '                    <section layout="row" layout-align="center center">\n' +
    '                        <div>\n' +
    '                            <h3 class="day-label1">Day 4</h3>\n' +
    '                        </div>\n' +
    '                    </section>\n' +
    '                    <section layout="row" layout-align="center center" class="day-section">\n' +
    '                        <div>\n' +
    '                            <span style="color: #00A000">Nov 13,18:00</span>\n' +
    '                        </div>\n' +
    '                    </section>\n' +
    '                    <section layout="row" layout-align="center center" class="day-section">\n' +
    '                        <div>\n' +
    '                            <span class="day-label1">Emotion</span>\n' +
    '                        </div>\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/73">\n' +
    '                                <img src="img/activity/Daystart.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '                        <span class="day-label1" flex="50">1. Day start + Roles</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/74">\n' +
    '                                <img src="img/activity/Presentation.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div >\n' +
    '                        <span class="day-label1" flex="50">2. Self-presentation</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/75">\n' +
    '                                <img src="img/activity/Pitch.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '                        <span class="day-label1" flex="50">3. Emotions pitch</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/76" >\n' +
    '                                <img src="img/activity/exercise.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '                        <span class="day-label1" flex="50">4. InRe Scan Exercize</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/77">\n' +
    '                                <img src="img/activity/parliament.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '                        <span class="day-label1" flex="50">5. Parliament</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/78">\n' +
    '                                <img src="img/activity/system.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '                        <span class="day-label1" flex="50">6. system 4</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/79">\n' +
    '                                <img src="img/activity/focus.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '                        <span class="day-label1" flex="50">7. Focusing</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/80">\n' +
    '                                <img src="img/activity/rose.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '                        <span class="day-label1" flex="50">8. The Rose</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/81">\n' +
    '                                <img src="img/activity/assignment.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '                        <span class="day-label1" flex="50">9. Mission assignment</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '\n' +
    '                </md-card-content>\n' +
    '            </md-card>\n' +
    '        </div>\n' +
    '\n' +
    '        <div flex="49" >\n' +
    '            <md-card class="card">\n' +
    '                <md-card-content>\n' +
    '                    <section layout="row" layout-align="center center">\n' +
    '                        <div>\n' +
    '                            <h3 class="day-label1">Day 4</h3>\n' +
    '                        </div>\n' +
    '                    </section>\n' +
    '                    <section layout="row" layout-align="center center" class="day-section">\n' +
    '                        <div>\n' +
    '                            <span style="color: #00A000">Nov 13,18:00</span>\n' +
    '                        </div>\n' +
    '                    </section>\n' +
    '                    <section layout="row" layout-align="center center" class="day-section">\n' +
    '                        <div>\n' +
    '                            <span class="day-label1">Emotion</span>\n' +
    '                        </div>\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/82">\n' +
    '                                <img src="img/activity/Daystart.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '                        <span class="day-label1" flex="50">1. Day start + Roles</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/83">\n' +
    '                                <img src="img/activity/Presentation.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div >\n' +
    '                        <span class="day-label1" flex="50">2. Self-presentation</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/84">\n' +
    '                                <img src="img/activity/Pitch.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '                        <span class="day-label1" flex="50">3. Emotions pitch</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/85" >\n' +
    '                                <img src="img/activity/exercise.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '                        <span class="day-label1" flex="50">4. InRe Scan Exercize</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/86">\n' +
    '                                <img src="img/activity/parliament.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '                        <span class="day-label1" flex="50">5. Parliament</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/87">\n' +
    '                                <img src="img/activity/system.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '                        <span class="day-label1" flex="50">6. system 4</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/88">\n' +
    '                                <img src="img/activity/focus.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '                        <span class="day-label1" flex="50">7. Focusing</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/89">\n' +
    '                                <img src="img/activity/rose.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '                        <span class="day-label1" flex="50">8. The Rose</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/90">\n' +
    '                                <img src="img/activity/assignment.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '                        <span class="day-label1" flex="50">9. Mission assignment</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '\n' +
    '                </md-card-content>\n' +
    '            </md-card>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/day5-cw/day5-cw.component.html',
    '<div class="start">\n' +
    '    <div layout="row" layout-wrap class="panel">\n' +
    '        <div flex="49" >\n' +
    '            <md-card class="card">\n' +
    '                <md-card-content>\n' +
    '                    <section layout="row" layout-align="center center">\n' +
    '                        <div>\n' +
    '                            <h3 class="day-label1">Day 5</h3>\n' +
    '                        </div>\n' +
    '                    </section>\n' +
    '                    <section layout="row" layout-align="center center" class="day-section">\n' +
    '                        <div>\n' +
    '                            <span style="color: #00A000">Nov 20,18:00</span>\n' +
    '                        </div>\n' +
    '                    </section>\n' +
    '                    <section layout="row" layout-align="center center" class="day-section">\n' +
    '                        <div>\n' +
    '                            <span class="day-label1">Insight</span>\n' +
    '                        </div>\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/91">\n' +
    '                                <img src="img/activity/Daystart.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '                        <span class="day-label1" flex="50">1. Day start + Roles</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/92">\n' +
    '                                <img src="img/activity/Presentation.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div >\n' +
    '                        <span class="day-label1" flex="50">2. Self-presentation</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/93">\n' +
    '                                <img src="img/activity/Pitch.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '                        <span class="day-label1" flex="50">3. Insight pitch</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/94" >\n' +
    '                                <img src="img/activity/exercise.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '                        <span class="day-label1" flex="50">4. Insight Exercize</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/95">\n' +
    '                                <img src="img/activity/parliament.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '                        <span class="day-label1" flex="50">5. Parliament</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/96">\n' +
    '                                <img src="img/activity/system.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '                        <span class="day-label1" flex="50">6. system 5</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/97">\n' +
    '                                <img src="img/activity/focus.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '                        <span class="day-label1" flex="50">7. Focusing</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/98">\n' +
    '                                <img src="img/activity/rose.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '                        <span class="day-label1" flex="50">8. The Rose</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/99">\n' +
    '                                <img src="img/activity/assignment.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '                        <span class="day-label1" flex="50">9. Mission assignment</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '\n' +
    '                </md-card-content>\n' +
    '            </md-card>\n' +
    '        </div>\n' +
    '\n' +
    '        <div flex="49" >\n' +
    '            <md-card class="card">\n' +
    '                <md-card-content>\n' +
    '                    <section layout="row" layout-align="center center">\n' +
    '                        <div>\n' +
    '                            <h3 class="day-label1">Day 5</h3>\n' +
    '                        </div>\n' +
    '                    </section>\n' +
    '                    <section layout="row" layout-align="center center" class="day-section">\n' +
    '                        <div>\n' +
    '                            <span style="color: #00A000">Nov 20,18:00</span>\n' +
    '                        </div>\n' +
    '                    </section>\n' +
    '                    <section layout="row" layout-align="center center" class="day-section">\n' +
    '                        <div>\n' +
    '                            <span class="day-label1">Insight</span>\n' +
    '                        </div>\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/100">\n' +
    '                                <img src="img/activity/Daystart.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '                        <span class="day-label1" flex="50">1. Day start + Roles</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/101">\n' +
    '                                <img src="img/activity/Presentation.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div >\n' +
    '                        <span class="day-label1" flex="50">2. Self-presentation</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/102">\n' +
    '                                <img src="img/activity/Pitch.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '                        <span class="day-label1" flex="50">3. Insight pitch</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/103" >\n' +
    '                                <img src="img/activity/exercise.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '                        <span class="day-label1" flex="50">4. Insight Exercize</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/104">\n' +
    '                                <img src="img/activity/parliament.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '                        <span class="day-label1" flex="50">5. Parliament</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/105">\n' +
    '                                <img src="img/activity/system.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '                        <span class="day-label1" flex="50">6. system 5</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/106">\n' +
    '                                <img src="img/activity/focus.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '                        <span class="day-label1" flex="50">7. Focusing</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/107">\n' +
    '                                <img src="img/activity/rose.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '                        <span class="day-label1" flex="50">8. The Rose</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/108">\n' +
    '                                <img src="img/activity/assignment.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '                        <span class="day-label1" flex="50">9. Mission assignment</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '\n' +
    '                </md-card-content>\n' +
    '            </md-card>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/day6-cw/day6-cw.component.html',
    '<div class="start">\n' +
    '    <div layout="row" layout-wrap class="panel">\n' +
    '        <div flex="49" >\n' +
    '            <md-card class="card">\n' +
    '                <md-card-content>\n' +
    '                    <section layout="row" layout-align="center center">\n' +
    '                        <div>\n' +
    '                            <h3 class="day-label1">Day 6</h3>\n' +
    '                        </div>\n' +
    '                    </section>\n' +
    '                    <section layout="row" layout-align="center center" class="day-section">\n' +
    '                        <div>\n' +
    '                            <span style="color: #00A000">Nov 27,18:00</span>\n' +
    '                        </div>\n' +
    '                    </section>\n' +
    '                    <section layout="row" layout-align="center center" class="day-section">\n' +
    '                        <div>\n' +
    '                            <span class="day-label1">Behavior</span>\n' +
    '                        </div>\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/109">\n' +
    '                                <img src="img/activity/Daystart.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '                        <span class="day-label1" flex="50">1. Day start + Roles</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/110">\n' +
    '                                <img src="img/activity/Presentation.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div >\n' +
    '                        <span class="day-label1" flex="50">2. Self-presentation</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/111">\n' +
    '                                <img src="img/activity/Pitch.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '                        <span class="day-label1" flex="50">3. Behavior pitch</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/112" >\n' +
    '                                <img src="img/activity/exercise.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '                        <span class="day-label1" flex="50">4. Behavior Exercize</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/113">\n' +
    '                                <img src="img/activity/parliament.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '                        <span class="day-label1" flex="50">5. Parliament</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/114">\n' +
    '                                <img src="img/activity/system.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '                        <span class="day-label1" flex="50">6. system 6</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/115">\n' +
    '                                <img src="img/activity/focus.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '                        <span class="day-label1" flex="50">7. Focusing</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/116">\n' +
    '                                <img src="img/activity/rose.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '                        <span class="day-label1" flex="50">8. The Rose</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/117">\n' +
    '                                <img src="img/activity/assignment.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '                        <span class="day-label1" flex="50">9. Mission assignment</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '\n' +
    '                </md-card-content>\n' +
    '            </md-card>\n' +
    '        </div>\n' +
    '\n' +
    '        <div flex="49" >\n' +
    '            <md-card class="card">\n' +
    '                <md-card-content>\n' +
    '                    <section layout="row" layout-align="center center">\n' +
    '                        <div>\n' +
    '                            <h3 class="day-label1">Day 6</h3>\n' +
    '                        </div>\n' +
    '                    </section>\n' +
    '                    <section layout="row" layout-align="center center" class="day-section">\n' +
    '                        <div>\n' +
    '                            <span style="color: #00A000">Nov 27,18:00</span>\n' +
    '                        </div>\n' +
    '                    </section>\n' +
    '                    <section layout="row" layout-align="center center" class="day-section">\n' +
    '                        <div>\n' +
    '                            <span class="day-label1">Behavior</span>\n' +
    '                        </div>\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/118">\n' +
    '                                <img src="img/activity/Daystart.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '                        <span class="day-label1" flex="50">1. Day start + Roles</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/119">\n' +
    '                                <img src="img/activity/Presentation.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div >\n' +
    '                        <span class="day-label1" flex="50">2. Self-presentation</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/120">\n' +
    '                                <img src="img/activity/Pitch.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '                        <span class="day-label1" flex="50">3. Behavior pitch</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/121" >\n' +
    '                                <img src="img/activity/exercise.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '                        <span class="day-label1" flex="50">4. Behavior Exercize</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/122">\n' +
    '                                <img src="img/activity/parliament.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '                        <span class="day-label1" flex="50">5. Parliament</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/123">\n' +
    '                                <img src="img/activity/system.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '                        <span class="day-label1" flex="50">6. system 6</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/124">\n' +
    '                                <img src="img/activity/focus.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '                        <span class="day-label1" flex="50">7. Focusing</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/125">\n' +
    '                                <img src="img/activity/rose.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '                        <span class="day-label1" flex="50">8. The Rose</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/126">\n' +
    '                                <img src="img/activity/assignment.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '                        <span class="day-label1" flex="50">9. Mission assignment</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '\n' +
    '                </md-card-content>\n' +
    '            </md-card>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/day7-cw/day7-cw.component.html',
    '<div class="start">\n' +
    '    <div layout="row" layout-wrap class="panel">\n' +
    '        <div flex="49" >\n' +
    '            <md-card class="card">\n' +
    '                <md-card-content>\n' +
    '                    <section layout="row" layout-align="center center">\n' +
    '                        <div>\n' +
    '                            <h3 class="day-label1">Day 7</h3>\n' +
    '                        </div>\n' +
    '                    </section>\n' +
    '                    <section layout="row" layout-align="center center" class="day-section">\n' +
    '                        <div>\n' +
    '                            <span style="color: #00A000">Dec 04,18:00</span>\n' +
    '                        </div>\n' +
    '                    </section>\n' +
    '                    <section layout="row" layout-align="center center" class="day-section">\n' +
    '                        <div>\n' +
    '                            <span class="day-label1">Create. Leadership 1</span>\n' +
    '                        </div>\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/127">\n' +
    '                                <img src="img/activity/Daystart.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '                        <span class="day-label1" flex="50">1. Day start + Roles</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/128">\n' +
    '                                <img src="img/activity/Presentation.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div >\n' +
    '                        <span class="day-label1" flex="50">2. Self-presentation</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/129">\n' +
    '                                <img src="img/activity/Pitch.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '                        <span class="day-label1" flex="50">3. Leadership 1 pitch</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/130" >\n' +
    '                                <img src="img/activity/exercise.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '                        <span class="day-label1" flex="50">4. Creative Exercize</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/131">\n' +
    '                                <img src="img/activity/parliament.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '                        <span class="day-label1" flex="50">5. Parliament</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/132">\n' +
    '                                <img src="img/activity/system.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '                        <span class="day-label1" flex="50">6. system 6</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/133">\n' +
    '                                <img src="img/activity/focus.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '                        <span class="day-label1" flex="50">7. Focusing</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/134">\n' +
    '                                <img src="img/activity/rose.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '                        <span class="day-label1" flex="50">8. The Rose</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/135">\n' +
    '                                <img src="img/activity/assignment.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '                        <span class="day-label1" flex="50">9. Mission assignment</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '\n' +
    '                </md-card-content>\n' +
    '            </md-card>\n' +
    '        </div>\n' +
    '\n' +
    '        <div flex="49" >\n' +
    '            <md-card class="card">\n' +
    '                <md-card-content>\n' +
    '                    <section layout="row" layout-align="center center">\n' +
    '                        <div>\n' +
    '                            <h3 class="day-label1">Day 7</h3>\n' +
    '                        </div>\n' +
    '                    </section>\n' +
    '                    <section layout="row" layout-align="center center" class="day-section">\n' +
    '                        <div>\n' +
    '                            <span style="color: #00A000">Dec 04,18:00</span>\n' +
    '                        </div>\n' +
    '                    </section>\n' +
    '                    <section layout="row" layout-align="center center" class="day-section">\n' +
    '                        <div>\n' +
    '                            <span class="day-label1">Create. Leadership 1</span>\n' +
    '                        </div>\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/136">\n' +
    '                                <img src="img/activity/Daystart.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '                        <span class="day-label1" flex="50">1. Day start + Roles</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/137">\n' +
    '                                <img src="img/activity/Presentation.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div >\n' +
    '                        <span class="day-label1" flex="50">2. Self-presentation</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/138">\n' +
    '                                <img src="img/activity/Pitch.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '                        <span class="day-label1" flex="50">3. Leadership 1 pitch</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/139" >\n' +
    '                                <img src="img/activity/exercise.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '                        <span class="day-label1" flex="50">4. Creative Exercize</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/140">\n' +
    '                                <img src="img/activity/parliament.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '                        <span class="day-label1" flex="50">5. Parliament</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/141">\n' +
    '                                <img src="img/activity/system.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '                        <span class="day-label1" flex="50">6. system 6</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/142">\n' +
    '                                <img src="img/activity/focus.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '                        <span class="day-label1" flex="50">7. Focusing</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/143">\n' +
    '                                <img src="img/activity/rose.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '                        <span class="day-label1" flex="50">8. The Rose</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/144">\n' +
    '                                <img src="img/activity/assignment.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '                        <span class="day-label1" flex="50">9. Mission assignment</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '\n' +
    '                </md-card-content>\n' +
    '            </md-card>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/day8-cw/day8-cw.component.html',
    '<div class="start">\n' +
    '    <div layout="row" layout-wrap class="panel">\n' +
    '        <div flex="49" >\n' +
    '            <md-card class="card">\n' +
    '                <md-card-content>\n' +
    '                    <section layout="row" layout-align="center center">\n' +
    '                        <div>\n' +
    '                            <h3 class="day-label1">Day 8</h3>\n' +
    '                        </div>\n' +
    '                    </section>\n' +
    '                    <section layout="row" layout-align="center center" class="day-section">\n' +
    '                        <div>\n' +
    '                            <span style="color: #00A000">Dec 18,18:00</span>\n' +
    '                        </div>\n' +
    '                    </section>\n' +
    '                    <section layout="row" layout-align="center center" class="day-section">\n' +
    '                        <div>\n' +
    '                            <span class="day-label1">Adapt. Leadership 2</span>\n' +
    '                        </div>\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/145">\n' +
    '                                <img src="img/activity/Daystart.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '                        <span class="day-label1" flex="50">1. Day start + Roles</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/146">\n' +
    '                                <img src="img/activity/Presentation.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div >\n' +
    '                        <span class="day-label1" flex="50">2. Self-presentation</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/147">\n' +
    '                                <img src="img/activity/Pitch.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '                        <span class="day-label1" flex="50">3. Leadership 2 pitch</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/148" >\n' +
    '                                <img src="img/activity/exercise.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '                        <span class="day-label1" flex="50">4. Adaptive Exercize</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/149">\n' +
    '                                <img src="img/activity/parliament.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '                        <span class="day-label1" flex="50">5. Parliament</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/150">\n' +
    '                                <img src="img/activity/system.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '                        <span class="day-label1" flex="50">6. system 8</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/151">\n' +
    '                                <img src="img/activity/focus.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '                        <span class="day-label1" flex="50">7. Focusing</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/152">\n' +
    '                                <img src="img/activity/rose.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '                        <span class="day-label1" flex="50">8. The Rose</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/153">\n' +
    '                                <img src="img/activity/assignment.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '                        <span class="day-label1" flex="50">9. Mission assignment</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '\n' +
    '                </md-card-content>\n' +
    '            </md-card>\n' +
    '        </div>\n' +
    '\n' +
    '        <div flex="49" >\n' +
    '            <md-card class="card">\n' +
    '                <md-card-content>\n' +
    '                    <section layout="row" layout-align="center center">\n' +
    '                        <div>\n' +
    '                            <h3 class="day-label1">Day 8</h3>\n' +
    '                        </div>\n' +
    '                    </section>\n' +
    '                    <section layout="row" layout-align="center center" class="day-section">\n' +
    '                        <div>\n' +
    '                            <span style="color: #00A000">Dec 18,18:00</span>\n' +
    '                        </div>\n' +
    '                    </section>\n' +
    '                    <section layout="row" layout-align="center center" class="day-section">\n' +
    '                        <div>\n' +
    '                            <span class="day-label1">Adapt. Leadership 2</span>\n' +
    '                        </div>\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/154">\n' +
    '                                <img src="img/activity/Daystart.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '                        <span class="day-label1" flex="50">1. Day start + Roles</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/155">\n' +
    '                                <img src="img/activity/Presentation.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div >\n' +
    '                        <span class="day-label1" flex="50">2. Self-presentation</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/156">\n' +
    '                                <img src="img/activity/Pitch.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '                        <span class="day-label1" flex="50">3. Leadership 2 pitch</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/157" >\n' +
    '                                <img src="img/activity/exercise.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '                        <span class="day-label1" flex="50">4. Adaptive Exercize</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/158">\n' +
    '                                <img src="img/activity/parliament.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '                        <span class="day-label1" flex="50">5. Parliament</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/159">\n' +
    '                                <img src="img/activity/system.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '                        <span class="day-label1" flex="50">6. system 8</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/160">\n' +
    '                                <img src="img/activity/focus.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '                        <span class="day-label1" flex="50">7. Focusing</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/161">\n' +
    '                                <img src="img/activity/rose.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '                        <span class="day-label1" flex="50">8. The Rose</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '                    <section layout="row" class="day-section">\n' +
    '                        <div flex="30">\n' +
    '                            <a  href="#/activity/162">\n' +
    '                                <img src="img/activity/assignment.png" class="day-button">\n' +
    '\n' +
    '                            </a>\n' +
    '                        </div>\n' +
    '                        <span class="day-label1" flex="50">9. Mission assignment</span>\n' +
    '                        <span class="day-label2" flex="19">3 min/pers</span>\n' +
    '\n' +
    '                    </section>\n' +
    '\n' +
    '                </md-card-content>\n' +
    '            </md-card>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/evluate-form-CW/evluate-form-CW.component.html',
    '<div class="evaluate-back">\n' +
    '    <md-tabs md-dynamic-height="" md-border-bottom="">\n' +
    '    <md-tab label="Sigle Question">\n' +
    '        <md-content class="md-padding">\n' +
    '            <div style="margin-top: 50px;"></div>\n' +
    '            <section layout="row" layout-sm="column" layout-align="center center" layout-wrap="">\n' +
    '                <h1 >Answer The Question</h1>\n' +
    '                <div style="margin-top: 50px;"></div>\n' +
    '\n' +
    '            </section>\n' +
    '            <section layout="row" layout-sm="column" layout-align="center center" layout-wrap="">\n' +
    '                <!--<div flex="20" ng-repeat="question in vm.questions.questions">-->\n' +
    '\n' +
    '                <h2>{{vm.firstquestions}}</h2>\n' +
    '                <!--</div>-->\n' +
    '            </section>\n' +
    '            <form ng-submit="vm.submit()">\n' +
    '                <section layout="row" layout-sm="column" layout-align="center center" layout-wrap="">\n' +
    '                    <div flex="10" layout="" layout-align="center center">\n' +
    '                        <img src="img/hand/down.png">\n' +
    '                    </div>\n' +
    '                    <md-slider flex="" md-discrete="" ng-model="vm.answer" step="1" min="0" max="100" aria-label="red" id="red-slider">\n' +
    '                    </md-slider>\n' +
    '                    <div flex="10" layout="" layout-align="center center">\n' +
    '                        <img src="img/hand/up.png">\n' +
    '\n' +
    '                    </div>\n' +
    '\n' +
    '                </section>\n' +
    '                <section layout="row" layout-sm="column" layout-align="center center" layout-wrap="">\n' +
    '\n' +
    '                    <div style="margin-top: 50px;"></div>\n' +
    '                    <h1 >Option</h1>\n' +
    '                    <md-input-container>\n' +
    '                        <label>Giver</label>\n' +
    '                        <input type="text" ng-model="vm.giver">\n' +
    '                    </md-input-container>\n' +
    '                    <md-input-container>\n' +
    '                        <label>Taker</label>\n' +
    '                        <input type="text" ng-model="vm.taker">\n' +
    '                    </md-input-container>\n' +
    '                    <md-input-container>\n' +
    '                        <label>Day (you only select from 1 to 9)</label>\n' +
    '                        <input type="text" ng-model="vm.day">\n' +
    '                    </md-input-container>\n' +
    '                </section>\n' +
    '                <div style="margin-top: 50px;"></div>\n' +
    '                <section layout="row" layout-sm="column" layout-align="center center" layout-wrap="">\n' +
    '                    <md-button type="submit" class="md-primary md-raised">save</md-button>\n' +
    '                </section>\n' +
    '\n' +
    '            </form>\n' +
    '        </md-content>\n' +
    '    </md-tab>\n' +
    '    <md-tab label="3*3 Question">\n' +
    '        <section layout="row" layout-sm="column" layout-align="center center" layout-wrap="">\n' +
    '            <h1 class="md-display-2">3*3 Question</h1>\n' +
    '\n' +
    '        </section>\n' +
    '\n' +
    '\n' +
    '                <section layout="row" layout-sm="column" layout-align="center center" layout-wrap="">\n' +
    '                    <md-button class="md-raised qbutton-width " ng-click="vm.three(1)">Motivation</md-button>\n' +
    '                    <md-button class="md-raised qbutton-width" ng-click="vm.three(2)">control</md-button>\n' +
    '                    <md-button class="md-raised qbutton-width" ng-click="vm.three(3)">Relations</md-button>\n' +
    '\n' +
    '                </section>\n' +
    '                <section layout="row" layout-sm="column" layout-align="center center" layout-wrap="">\n' +
    '                    <md-button class="md-raised qbutton-width" ng-click="vm.three(4)">Emotion</md-button>\n' +
    '                    <md-button class="md-raised qbutton-width" ng-click="vm.three(5)">Insight</md-button>\n' +
    '                    <md-button class="md-raised qbutton-width" ng-click="vm.three(6)">Functions</md-button>\n' +
    '\n' +
    '                </section>\n' +
    '                <section layout="row" layout-sm="column" layout-align="center center" layout-wrap="">\n' +
    '                    <md-button class="md-raised qbutton-width" ng-click="vm.three(7)">Adaptation </md-button>\n' +
    '                    <md-button class="md-raised qbutton-width" ng-click="vm.three(8)">Change</md-button>\n' +
    '                    <md-button class="md-raised qbutton-width" ng-click="vm.three(9)">Balance</md-button>\n' +
    '                </section>\n' +
    '        <md-content class="md-padding">\n' +
    '            <section layout="row" layout-sm="column" layout-align="center center" layout-wrap="">\n' +
    '                <!--<div flex="20" ng-repeat="question in vm.questions.questions">-->\n' +
    '                <img src="img/gquestion.png">\n' +
    '                <h2>{{vm.secondquestions}}</h2>\n' +
    '                <!--</div>-->\n' +
    '            </section>\n' +
    '            <form ng-submit="vm.submit1()">\n' +
    '                <section layout="row" layout-sm="column" layout-align="center center" layout-wrap="">\n' +
    '                    <div flex="10" layout="" layout-align="center center">\n' +
    '                        <img src="img/hand/down.png">\n' +
    '                    </div>\n' +
    '                    <md-slider flex="" md-discrete="" ng-model="vm.answer" step="1" min="0" max="100" aria-label="rating">\n' +
    '                    </md-slider>\n' +
    '                    <div flex="10" layout="" layout-align="center center">\n' +
    '                        <img src="img/hand/up.png">\n' +
    '\n' +
    '                    </div>\n' +
    '\n' +
    '                </section>\n' +
    '                <section layout="row" layout-sm="column" layout-align="center center" layout-wrap="">\n' +
    '\n' +
    '                    <div style="margin-top: 50px;"></div>\n' +
    '\n' +
    '                </section>\n' +
    '                <div style="margin-top: 50px;"></div>\n' +
    '                <section layout="row" layout-sm="column" layout-align="center center" layout-wrap="">\n' +
    '                    <md-button type="submit" class="md-primary md-raised">save</md-button>\n' +
    '                </section>\n' +
    '\n' +
    '            </form>\n' +
    '        </md-content>\n' +
    '    </md-tab>\n' +
    '    <md-tab label="3*3*2 Question">\n' +
    '        <section layout="row" layout-sm="column" layout-align="center center" layout-wrap="">\n' +
    '            <h1 class="md-display-2">3*3*2  Question</h1>\n' +
    '\n' +
    '        </section>\n' +
    '\n' +
    '        <section layout="row" layout-sm="column" layout-align="center center" layout-wrap="">\n' +
    '            <md-button class="md-raised qbutton-width " ng-click="vm.three(1)">Motivation</md-button>\n' +
    '            <md-button class="md-raised qbutton-width" ng-click="vm.three(2)">control</md-button>\n' +
    '            <md-button class="md-raised qbutton-width" ng-click="vm.three(3)">Relations</md-button>\n' +
    '\n' +
    '        </section>\n' +
    '        <section layout="row" layout-sm="column" layout-align="center center" layout-wrap="">\n' +
    '            <md-button class="md-raised qbutton-width" ng-click="vm.three(4)">Emotion</md-button>\n' +
    '            <md-button class="md-raised qbutton-width" ng-click="vm.three(5)">Insight</md-button>\n' +
    '            <md-button class="md-raised qbutton-width" ng-click="vm.three(6)">Functions</md-button>\n' +
    '\n' +
    '        </section>\n' +
    '        <section layout="row" layout-sm="column" layout-align="center center" layout-wrap="">\n' +
    '            <md-button class="md-raised qbutton-width" ng-click="vm.three(7)">Adaptation </md-button>\n' +
    '            <md-button class="md-raised qbutton-width" ng-click="vm.three(8)">Change</md-button>\n' +
    '            <md-button class="md-raised qbutton-width" ng-click="vm.three(9)">Balance</md-button>\n' +
    '        </section>\n' +
    '        <md-content class="md-padding">\n' +
    '            <section layout="row" layout-sm="column" layout-align="center center" layout-wrap="">\n' +
    '                <!--<div flex="20" ng-repeat="question in vm.questions.questions">-->\n' +
    '                <img src="img/gquestion.png">\n' +
    '                <h2>{{vm.secondquestions}}</h2>\n' +
    '                <!--</div>-->\n' +
    '            </section>\n' +
    '            <form ng-submit="vm.submit2()">\n' +
    '                <section layout="row" layout-sm="column" layout-align="center center" layout-wrap="">\n' +
    '                    <div flex="10" layout="" layout-align="center center">\n' +
    '                        <img src="img/hand/down.png">\n' +
    '                    </div>\n' +
    '                    <md-slider flex="" md-discrete="" ng-model="vm.answer1" step="1" min="0" max="100" aria-label="rating">\n' +
    '                    </md-slider>\n' +
    '                    <div flex="10" layout="" layout-align="center center">\n' +
    '                        <img src="img/hand/up.png">\n' +
    '\n' +
    '                    </div>\n' +
    '\n' +
    '                </section>\n' +
    '                <section layout="row" layout-sm="column" layout-align="center center" layout-wrap="">\n' +
    '\n' +
    '\n' +
    '                    <h2>Indicate with slider where you wish to come</h2>\n' +
    '\n' +
    '                </section>\n' +
    '                <section layout="row" layout-sm="column" layout-align="center center" layout-wrap="">\n' +
    '                    <div flex="10" layout="" layout-align="center center">\n' +
    '                        <img src="img/hand/down.png">\n' +
    '                    </div>\n' +
    '                    <md-slider flex="" md-discrete="" ng-model="vm.answer2" step="1" min="0" max="100" aria-label="rating">\n' +
    '                    </md-slider>\n' +
    '                    <div flex="10" layout="" layout-align="center center">\n' +
    '                        <img src="img/hand/up.png">\n' +
    '\n' +
    '                    </div>\n' +
    '\n' +
    '                </section>\n' +
    '                <section layout="row" layout-sm="column" layout-align="center center" layout-wrap="">\n' +
    '\n' +
    '                    <div style="margin-top: 50px;"></div>\n' +
    '\n' +
    '                </section>\n' +
    '                <div style="margin-top: 50px;"></div>\n' +
    '                <section layout="row" layout-sm="column" layout-align="center center" layout-wrap="">\n' +
    '                    <md-button type="submit" class="md-primary md-raised">save</md-button>\n' +
    '                </section>\n' +
    '\n' +
    '            </form>\n' +
    '        </md-content>\n' +
    '    </md-tab>\n' +
    '        <md-tab label="Group Scan">\n' +
    '            <md-content class="md-padding">\n' +
    '                <section layout="row" layout-sm="column" layout-align="center center" layout-wrap="">\n' +
    '                    <h1 class="md-display-2">Group Scan</h1>\n' +
    '                </section>\n' +
    '\n' +
    '                <section layout="row" layout-sm="column" layout-align="center center" layout-wrap="">\n' +
    '                    <md-button class="md-raised qbutton-width " ng-click="vm.three(1)">Motivation</md-button>\n' +
    '                    <md-button class="md-raised qbutton-width" ng-click="vm.three(2)">control</md-button>\n' +
    '                    <md-button class="md-raised qbutton-width" ng-click="vm.three(3)">Relations</md-button>\n' +
    '\n' +
    '                </section>\n' +
    '                <section layout="row" layout-sm="column" layout-align="center center" layout-wrap="">\n' +
    '                    <md-button class="md-raised qbutton-width" ng-click="vm.three(4)">Emotion</md-button>\n' +
    '                    <md-button class="md-raised qbutton-width" ng-click="vm.three(5)">Insight</md-button>\n' +
    '                    <md-button class="md-raised qbutton-width" ng-click="vm.three(6)">Functions</md-button>\n' +
    '\n' +
    '                </section>\n' +
    '                <section layout="row" layout-sm="column" layout-align="center center" layout-wrap="">\n' +
    '                    <md-button class="md-raised qbutton-width" ng-click="vm.three(7)">Adaptation </md-button>\n' +
    '                    <md-button class="md-raised qbutton-width" ng-click="vm.three(8)">Change</md-button>\n' +
    '                    <md-button class="md-raised qbutton-width" ng-click="vm.three(9)">Balance</md-button>\n' +
    '                </section>\n' +
    '                <md-content class="md-padding">\n' +
    '                    <section layout="row" layout-sm="column" layout-align="center center" layout-wrap="">\n' +
    '                        <!--<div flex="20" ng-repeat="question in vm.questions.questions">-->\n' +
    '                        <img src="img/gquestion.png">\n' +
    '                        <h2>{{vm.secondquestions}}</h2>\n' +
    '                        <!--</div>-->\n' +
    '                    </section>\n' +
    '                    <form ng-submit="vm.submit3()">\n' +
    '                        <section layout="row" layout-sm="column" layout-align="center center" layout-wrap="">\n' +
    '                            <p flex="10"></p>\n' +
    '                            <h3 flex="10">Ruslan</h3>\n' +
    '                            <div flex="80">\n' +
    '                                <section layout="row" layout-sm="column" layout-align="center center" layout-wrap="">\n' +
    '                                    <div flex="10" layout="" layout-align="center center">\n' +
    '                                        <img src="img/hand/down.png">\n' +
    '                                    </div>\n' +
    '                                    <md-slider flex="" md-discrete="" ng-model="vm.answer1" step="1" min="0" max="100" aria-label="rating">\n' +
    '                                    </md-slider>\n' +
    '                                    <div flex="10" layout="" layout-align="center center">\n' +
    '                                        <img src="img/hand/up.png">\n' +
    '\n' +
    '                                    </div>\n' +
    '\n' +
    '                                </section>\n' +
    '                                <section layout="row" layout-sm="column" layout-align="center center" layout-wrap="">\n' +
    '                                    <div flex="10" layout="" layout-align="center center">\n' +
    '                                        <img src="img/hand/down.png">\n' +
    '                                    </div>\n' +
    '                                    <md-slider flex="" md-discrete="" ng-model="vm.answer2" step="1" min="0" max="100" aria-label="rating">\n' +
    '                                    </md-slider>\n' +
    '                                    <div flex="10" layout="" layout-align="center center">\n' +
    '                                        <img src="img/hand/up.png">\n' +
    '\n' +
    '                                    </div>\n' +
    '\n' +
    '                                </section>\n' +
    '                            </div>\n' +
    '                            <p flex="9"></p>\n' +
    '                        </section>\n' +
    '                        <section layout="row" layout-sm="column" layout-align="center center" layout-wrap="">\n' +
    '                            <p flex="10"></p>\n' +
    '                            <h3 flex="10">Siv</h3>\n' +
    '                            <div flex="80">\n' +
    '                                <section layout="row" layout-sm="column" layout-align="center center" layout-wrap="">\n' +
    '                                    <div flex="10" layout="" layout-align="center center">\n' +
    '                                        <img src="img/hand/down.png">\n' +
    '                                    </div>\n' +
    '                                    <md-slider flex="" md-discrete="" ng-model="vm.answer3" step="1" min="0" max="100" aria-label="rating">\n' +
    '                                    </md-slider>\n' +
    '                                    <div flex="10" layout="" layout-align="center center">\n' +
    '                                        <img src="img/hand/up.png">\n' +
    '\n' +
    '                                    </div>\n' +
    '\n' +
    '                                </section>\n' +
    '                                <section layout="row" layout-sm="column" layout-align="center center" layout-wrap="">\n' +
    '                                    <div flex="10" layout="" layout-align="center center">\n' +
    '                                        <img src="img/hand/down.png">\n' +
    '                                    </div>\n' +
    '                                    <md-slider flex="" md-discrete="" ng-model="vm.answer4" step="1" min="0" max="100" aria-label="rating">\n' +
    '                                    </md-slider>\n' +
    '                                    <div flex="10" layout="" layout-align="center center">\n' +
    '                                        <img src="img/hand/up.png">\n' +
    '\n' +
    '                                    </div>\n' +
    '\n' +
    '                                </section>\n' +
    '                                <p flex="9"></p>\n' +
    '                            </div>\n' +
    '                        </section>\n' +
    '                        <section layout="row" layout-sm="column" layout-align="center center" layout-wrap="">\n' +
    '                            <p flex="10"></p>\n' +
    '                            <h3 flex="10">Anna</h3>\n' +
    '                            <div flex="80">\n' +
    '                                <section layout="row" layout-sm="column" layout-align="center center" layout-wrap="">\n' +
    '                                    <div flex="10" layout="" layout-align="center center">\n' +
    '                                        <img src="img/hand/down.png">\n' +
    '                                    </div>\n' +
    '                                    <md-slider flex="" md-discrete="" ng-model="vm.answer5" step="1" min="0" max="100" aria-label="rating">\n' +
    '                                    </md-slider>\n' +
    '                                    <div flex="10" layout="" layout-align="center center">\n' +
    '                                        <img src="img/hand/up.png">\n' +
    '\n' +
    '                                    </div>\n' +
    '\n' +
    '                                </section>\n' +
    '                                <section layout="row" layout-sm="column" layout-align="center center" layout-wrap="">\n' +
    '                                    <div flex="10" layout="" layout-align="center center">\n' +
    '                                        <img src="img/hand/down.png">\n' +
    '                                    </div>\n' +
    '                                    <md-slider flex="" md-discrete="" ng-model="vm.answer6" step="1" min="0" max="100" aria-label="rating">\n' +
    '                                    </md-slider>\n' +
    '                                    <div flex="10" layout="" layout-align="center center">\n' +
    '                                        <img src="img/hand/up.png">\n' +
    '\n' +
    '                                    </div>\n' +
    '\n' +
    '                                </section>\n' +
    '                                <p flex="9"></p>\n' +
    '                            </div>\n' +
    '                        </section>\n' +
    '                        <section layout="row" layout-sm="column" layout-align="center center" layout-wrap="">\n' +
    '                            <p flex="10"></p>\n' +
    '                            <h3 flex="10">Peter</h3>\n' +
    '                            <div flex="80">\n' +
    '                                <section layout="row" layout-sm="column" layout-align="center center" layout-wrap="">\n' +
    '                                    <div flex="10" layout="" layout-align="center center">\n' +
    '                                        <img src="img/hand/down.png">\n' +
    '                                    </div>\n' +
    '                                    <md-slider flex="" md-discrete="" ng-model="vm.answer7" step="1" min="0" max="100" aria-label="rating">\n' +
    '                                    </md-slider>\n' +
    '                                    <div flex="10" layout="" layout-align="center center">\n' +
    '                                        <img src="img/hand/up.png">\n' +
    '\n' +
    '                                    </div>\n' +
    '\n' +
    '                                </section>\n' +
    '                                <section layout="row" layout-sm="column" layout-align="center center" layout-wrap="">\n' +
    '                                    <div flex="10" layout="" layout-align="center center">\n' +
    '                                        <img src="img/hand/down.png">\n' +
    '                                    </div>\n' +
    '                                    <md-slider flex="" md-discrete="" ng-model="vm.answer8" step="1" min="0" max="100" aria-label="rating">\n' +
    '                                    </md-slider>\n' +
    '                                    <div flex="10" layout="" layout-align="center center">\n' +
    '                                        <img src="img/hand/up.png">\n' +
    '\n' +
    '                                    </div>\n' +
    '\n' +
    '                                </section>\n' +
    '                            </div>\n' +
    '                            <p flex="9"></p>\n' +
    '                        </section>\n' +
    '\n' +
    '                        <section layout="row" layout-sm="column" layout-align="center center" layout-wrap="">\n' +
    '\n' +
    '                            <div style="margin-top: 50px;"></div>\n' +
    '\n' +
    '                        </section>\n' +
    '                        <div style="margin-top: 50px;"></div>\n' +
    '                        <section layout="row" layout-sm="column" layout-align="center center" layout-wrap="">\n' +
    '                            <md-button type="submit" class="md-primary md-raised">save</md-button>\n' +
    '                        </section>\n' +
    '\n' +
    '                    </form>\n' +
    '                </md-content>\n' +
    '            </md-content>\n' +
    '        </md-tab>\n' +
    '</md-tabs>\n' +
    '</div>');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/forgot-password/forgot-password.component.html',
    '<form ng-submit="vm.submit()" class="ForgotPassword-form">\n' +
    '    <div>\n' +
    '        <md-input-container>\n' +
    '            <label>Email</label>\n' +
    '            <input type="email" ng-model="vm.email">\n' +
    '        </md-input-container>\n' +
    '\n' +
    '        <md-button type="submit" class="md-primary md-raised">Submit</md-button>\n' +
    '    </div>\n' +
    '</form>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/list-elements-CW/list-elements-CW.component.html',
    '<md-content>\n' +
    '    <section layout="row" layout-sm="column" layout-align="center center" layout-wrap="">\n' +
    '        <div layout="row" layout-wrap>\n' +
    '            <section layout="row" layout-sm="column" layout-align="center center" layout-wrap="">\n' +
    '                <div flex="33" ng-repeat="element in vm.elements.elements">\n' +
    '\n' +
    '                    <md-card>\n' +
    '                        <img src="data:image/png;base64,{{element.photo}}" class="md-card-image" alt="image caption">\n' +
    '                        <md-card-content>\n' +
    '                            <h2>{{element.titre}}</h2>\n' +
    '\n' +
    '                        </md-card-content>\n' +
    '\n' +
    '                    </md-card>\n' +
    '\n' +
    '                </div>\n' +
    '            </section>\n' +
    '        </div>\n' +
    '    </section>\n' +
    '</md-content>');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/list-evluate-CW/list-evluate-CW.component.html',
    '<md-content>\n' +
    '    <section layout="row" layout-sm="column" layout-align="center center" layout-wrap="">\n' +
    '        <div layout="row" layout-wrap>\n' +
    '            <section layout="row" layout-sm="column" layout-align="center center" layout-wrap="">\n' +
    '                <div flex="33" ng-repeat="evaluate in vm.evaluates.evaluates">\n' +
    '\n' +
    '                    <md-card>\n' +
    '\n' +
    '                        <md-card-content>\n' +
    '                            <label>group_id :</label>\n' +
    '                            <h4>{{evaluate.group_id}}</h4>\n' +
    '\n' +
    '                            <label>give_user_id :</label>\n' +
    '                            <h4>{{evaluate.give_user_id}}</h4>\n' +
    '\n' +
    '                            <label>take_user_id :</label>\n' +
    '                            <h4>{{evaluate.take_user_id}}</h4>\n' +
    '\n' +
    '                            <label>day :</label>\n' +
    '                            <h4>{{evaluate.day}}</h4>\n' +
    '\n' +
    '                            <label>activity_id :</label>\n' +
    '                            <h4>{{evaluate.activity_id}}</h4>\n' +
    '\n' +
    '                            <label>question_id :</label>\n' +
    '                            <h4>{{evaluate.question_id}}</h4>\n' +
    '\n' +
    '                            <label>measure :</label>\n' +
    '                            <h4>{{evaluate.measure}}</h4>\n' +
    '\n' +
    '                            <label>answer :</label>\n' +
    '                            <h4>{{evaluate.answer}}</h4>\n' +
    '\n' +
    '                            <label>created_at :</label>\n' +
    '                            <h4>{{evaluate.created_at}}</h4>\n' +
    '\n' +
    '                            <label>updated_at :</label>\n' +
    '                            <h4>{{evaluate.updated_at}}</h4>\n' +
    '\n' +
    '\n' +
    '                        </md-card-content>\n' +
    '\n' +
    '                    </md-card>\n' +
    '\n' +
    '                </div>\n' +
    '            </section>\n' +
    '\n' +
    '        </div>\n' +
    '    </section>\n' +
    '</md-content>');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/login-form/login-form.component.html',
    '<form ng-submit="vm.login()">\n' +
    '	<div>\n' +
    '		<md-input-container class="LoginForm-inputContainer">\n' +
    '			<label>Email</label>\n' +
    '			<input type="email" ng-model="vm.email">\n' +
    '		</md-input-container>\n' +
    '	</div>\n' +
    '\n' +
    '	<div>\n' +
    '		<md-input-container class="LoginForm-inputContainer">\n' +
    '			<label>Password</label>\n' +
    '			<input type="password" ng-model="vm.password">\n' +
    '		</md-input-container>\n' +
    '	</div>\n' +
    '\n' +
    '	<md-button type="submit" class="LoginForm-submit md-primary md-raised">Log in</md-button>\n' +
    '</form>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/nav-form-CW/nav-form-CW.component.html',
    '\n' +
    '<div class="start">\n' +
    '\n' +
    '    <section layout="row" layout-sm="column" layout-align="center center" layout-wrap="">\n' +
    '        <h1 >Functions</h1>\n' +
    '    </section>\n' +
    '    <section layout="row" layout-sm="column" layout-align="center center" layout-wrap="">\n' +
    '        <md-button class="md-raised md-primary" >Share</md-button>\n' +
    '        <md-button class="md-raised md-primary">Learn</md-button>\n' +
    '        <md-button class="md-raised md-primary" href="#/list-elements">Analyze</md-button>\n' +
    '\n' +
    '    </section>\n' +
    '    <section layout="row" layout-sm="column" layout-align="center center" layout-wrap="">\n' +
    '        <md-button class="md-raised md-primary"></md-button>\n' +
    '        <md-button class="md-raised md-primary"></md-button>\n' +
    '        <md-button class="md-raised md-primary"></md-button>\n' +
    '\n' +
    '    </section>\n' +
    '    <section layout="row" layout-sm="column" layout-align="center center" layout-wrap="">\n' +
    '        <md-button class="md-raised md-primary">Plan </md-button>\n' +
    '        <md-button class="md-raised md-primary">Perform</md-button>\n' +
    '        <md-button class="md-raised md-primary" href="#/evaluate">Evaluate</md-button>\n' +
    '    </section>\n' +
    '\n' +
    '</div>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/question-CW/question-CW.component.html',
    '<section layout="row" layout-sm="column" layout-align="center center" layout-wrap="">\n' +
    '    <h1 >Question</h1>\n' +
    '</section>\n' +
    '\n' +
    '<div layout="row" layout-wrap>\n' +
    '    <div flex="20" ng-repeat="question in vm.questions.questions">\n' +
    '        <md-card>\n' +
    '            <md-card-content>\n' +
    '                <h2>{{question.name}}</h2>\n' +
    '                <p>{{question.problem}}</p>\n' +
    '                <p>{{question.options}}</p>\n' +
    '            </md-card-content>\n' +
    '            <md-card-footer>\n' +
    '                <md-button class="md-primary md-raised" ng-click="vm.delete(question.id)">Delete</md-button>\n' +
    '            </md-card-footer>\n' +
    '        </md-card>\n' +
    '    </div>\n' +
    '</div>\n' +
    '<section layout="row" layout-sm="column" layout-align="center center" layout-wrap="">\n' +
    '    <h1 >Add question</h1>\n' +
    '</section>\n' +
    '<section layout="row" layout-sm="column" layout-align="center center" layout-wrap="">\n' +
    '    <form ng-submit="vm.submit()">\n' +
    '\n' +
    '        <md-input-container>\n' +
    '            <label>Activity Name</label>\n' +
    '            <input type="text" ng-model="vm.activity">\n' +
    '        </md-input-container>\n' +
    '\n' +
    '        <md-input-container>\n' +
    '            <label>Problem</label>\n' +
    '            <input type="text" ng-model="vm.problem">\n' +
    '        </md-input-container>\n' +
    '\n' +
    '        <md-input-container>\n' +
    '            <label>Options</label>\n' +
    '            <input type="text" ng-model="vm.option">\n' +
    '        </md-input-container>\n' +
    '\n' +
    '        <md-button type="submit" class="md-primary md-raised">Create question</md-button>\n' +
    '\n' +
    '    </form>\n' +
    '</section>');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/register-form/register-form.component.html',
    '<form ng-submit="vm.register()">\n' +
    '	<div>\n' +
    '		<md-input-container class="RegisterForm-inputContainer">\n' +
    '			<label>Name</label>\n' +
    '			<input type="text" ng-model="vm.name">\n' +
    '		</md-input-container>\n' +
    '	</div>\n' +
    '\n' +
    '	<div>\n' +
    '		<md-input-container class="RegisterForm-inputContainer">\n' +
    '			<label>Email</label>\n' +
    '			<input type="email" ng-model="vm.email">\n' +
    '		</md-input-container>\n' +
    '	</div>\n' +
    '\n' +
    '	<div>\n' +
    '		<md-input-container class="RegisterForm-inputContainer">\n' +
    '			<label>Password</label>\n' +
    '			<input type="password" ng-model="vm.password">\n' +
    '		</md-input-container>\n' +
    '	</div>\n' +
    '\n' +
    '	<md-button type="submit" class="RegisterForm-submit md-primary md-raised">Register</md-button>\n' +
    '</form>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/reset-password/reset-password.component.html',
    '<form ng-submit="vm.submit()">\n' +
    '\n' +
    '    <div ng-if="!vm.isValidToken" layout="row" layout-align="center center">\n' +
    '        <md-progress-circular md-mode="indeterminate"></md-progress-circular>\n' +
    '    </div>\n' +
    '\n' +
    '    <div ng-show="vm.isValidToken">\n' +
    '        <md-input-container class="ResetPassword-input">\n' +
    '            <label>Password</label>\n' +
    '            <input type="password" ng-model="vm.password">\n' +
    '        </md-input-container>\n' +
    '\n' +
    '        <md-input-container class="ResetPassword-input">\n' +
    '            <label>Confirm Password</label>\n' +
    '            <input type="password" ng-model="vm.password_confirmation">\n' +
    '        </md-input-container>\n' +
    '\n' +
    '        <md-button type="submit" class="md-primary md-raised">Submit</md-button>\n' +
    '    </div>\n' +
    '\n' +
    '</form>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/start-page-cw/start-page-cw.component.html',
    '<div class="start">\n' +
    '    <section layout="row" layout-sm="column" layout-align="center center" layout-wrap="">\n' +
    '        <h1 >Day</h1>\n' +
    '    </section>\n' +
    '    <section layout="row" layout-sm="column" layout-align="center center" layout-wrap="">\n' +
    '        <div class ="button-div">\n' +
    '            <a  href="#/day0">\n' +
    '                <img src="img/Day/day0.png" class="button-width">\n' +
    '\n' +
    '            </a>\n' +
    '            <h4 class="button-label" layout-align="center center">Day Zero</h4>\n' +
    '        </div>\n' +
    '        <div class ="button-div">\n' +
    '            <a  href="#/day1">\n' +
    '                <img src="img/Day/day1.png" class="button-width">\n' +
    '\n' +
    '            </a>\n' +
    '            <h4 class="button-label" layout-align="center center">D1 Goal</h4>\n' +
    '        </div>\n' +
    '        <div class ="button-div">\n' +
    '            <a  href="#/day2">\n' +
    '                <img src="img/Day/day2.png" class="button-width">\n' +
    '\n' +
    '            </a>\n' +
    '            <h4 class="button-label" layout-align="center center">D2 Relations</h4>\n' +
    '        </div>\n' +
    '\n' +
    '    </section>\n' +
    '    <section layout="row" layout-sm="column" layout-align="center center" layout-wrap="">\n' +
    '        <div class ="button-div">\n' +
    '            <a  href="#/day3">\n' +
    '                <img src="img/Day/day3.png" class="button-width">\n' +
    '\n' +
    '            </a>\n' +
    '            <h4 class="button-label" layout-align="center center">D3 Focus</h4>\n' +
    '        </div>\n' +
    '        <div class ="button-div">\n' +
    '            <a  href="#/day4">\n' +
    '                <img src="img/Day/day4.png" class="button-width">\n' +
    '\n' +
    '            </a>\n' +
    '            <h4 class="button-label" layout-align="center center">D4 Emotion</h4>\n' +
    '        </div>\n' +
    '        <div class ="button-div">\n' +
    '            <a  href="#/day5">\n' +
    '                <img src="img/Day/day5.png" class="button-width">\n' +
    '\n' +
    '            </a>\n' +
    '            <h4 class="button-label" layout-align="center center">D5 Insight</h4>\n' +
    '        </div>\n' +
    '\n' +
    '    </section>\n' +
    '    <section layout="row" layout-sm="column" layout-align="center center" layout-wrap="">\n' +
    '        <div class ="button-div">\n' +
    '            <a  href="#/day6">\n' +
    '                <img src="img/Day/day6.png" class="button-width">\n' +
    '\n' +
    '            </a>\n' +
    '            <h4 class="button-label" layout-align="center center">D6 Behavior</h4>\n' +
    '        </div>\n' +
    '        <div class ="button-div">\n' +
    '            <a  href="#/day7">\n' +
    '                <img src="img/Day/day7.png" class="button-width">\n' +
    '\n' +
    '            </a>\n' +
    '            <h4 class="button-label" layout-align="center center">D7 Creation</h4>\n' +
    '        </div>\n' +
    '        <div class ="button-div">\n' +
    '            <a  href="#/day8">\n' +
    '                <img src="img/Day/day8.png" class="button-width">\n' +
    '\n' +
    '            </a>\n' +
    '            <h4 class="button-label" layout-align="center center">D8 Adaptaition</h4>\n' +
    '        </div>\n' +
    '\n' +
    '    </section>\n' +
    '</div>');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/pages/Activity-CW/Activity-CW.page.html',
    '<activity-form-c-w></activity-form-c-w>');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/pages/activity-page-cw/activity-page-cw.page.html',
    '<activity-page-cw></activity-page-cw>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/pages/create-element-CW/create-element-CW.page.html',
    '<md-content class="Page-container">\n' +
    '    <h1>Créer élément</h1>\n' +
    '\n' +
    '    <create-element-c-w></create-element-c-w>\n' +
    '</md-content>');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/pages/create-group-CW/create-group-CW.page.html',
    '<create-group-c-w></create-group-c-w>');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/pages/create_post/create_post.page.html',
    '<h1>Create Post</h1>\n' +
    '\n' +
    '<create-post-form></create-post-form>  \n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/pages/day0-cw/day0-cw.page.html',
    '<day0-cw></day0-cw>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/pages/day1-cw/day1-cw.page.html',
    '<day1-cw></day1-cw>');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/pages/day2-cw/day2-cw.page.html',
    '<day2-cw></day2-cw>');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/pages/day3-cw/day3-cw.page.html',
    '<day3-cw></day3-cw>');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/pages/day4-cw/day4-cw.page.html',
    '<day4-cw></day4-cw>');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/pages/day5-cw/day5-cw.page.html',
    '<day5-cw></day5-cw>');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/pages/day6-cw/day6-cw.page.html',
    '<day6-cw></day6-cw>');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/pages/day7-cw/day7-cw.page.html',
    '<day7-cw></day7-cw>');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/pages/day8-cw/day8-cw.page.html',
    '<day8-cw></day8-cw>');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/pages/evaluate-form-CW/evaluate-form-CW.page.html',
    '<evluate-form-c-w></evluate-form-c-w>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/pages/footer/footer.page.html',
    '<md-content class="Page-Container Footer iOS-hack" layout-align="center center">\n' +
    '<md-icon md-svg-src="/img/icons/logo-grey.svg" class="Footer-logo"></md-icon>\n' +
    '<br/>\n' +
    '<br/>\n' +
    '<div class="Footer-text">\n' +
    '	An open source project by <a href="https://github.com/jadjoubran" class="Footer-link" target="_blank">Jad Joubran</a>.\n' +
    '	Design by <a href="http://nicolesaidy.com" class="Footer-link" target="_blank">Nicole Saidy</a>\n' +
    '</div>\n' +
    '<div class="Footer-text">\n' +
    '	&copy; 2016 Laravel Angular Material Starter\n' +
    '</div>\n' +
    '</md-content>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/pages/forgot-password/forgot-password.page.html',
    '<md-content class="Page-container">\n' +
    '    <div class="ForgotPassword-formContainer" layout="column" layout-align="center center">\n' +
    '\n' +
    '        <h1 class="md-headline">Forgot your password?</h1>\n' +
    '\n' +
    '        <forgot-password></forgot-password>\n' +
    '\n' +
    '    </div>\n' +
    '</md-content>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/pages/header/header.page.html',
    '<app-header></app-header>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/pages/landing/landing.page.html',
    '<div class="Page-Container Landing iOS-hack">\n' +
    '    <div layout="column" class="Landing-cover" layout-align="center center">\n' +
    '        <div class="md-headline Landing-subtitle">Build your next powerful web app</div>\n' +
    '        <h1 class="md-display-3 Landing-heading"><strong>laravel angular</strong> <span class="Landing-headingLight">material starter</span></h1>\n' +
    '        <md-button class="md-raised md-large Landing-getStarted" href="https://laravel-angular.readme.io/docs/install" target="_blank">Get Started</md-button>\n' +
    '    </div>\n' +
    '\n' +
    '    <!--<div class="Landing-laravelAngular">\n' +
    '        <div class="Landing-ampersand" hide show-gt-sm>&amp;</div>\n' +
    '        <div layout="column" layout-gt-sm="row">\n' +
    '            <div flex="50" class="Landing-laravel" layout-align="center center">\n' +
    '                <h2 class="md-display-2 Landing-laravelAngular-title">Laravel</h2>\n' +
    '                <div class="md-title Landing-laravelAngular-subtitle">Response macros integrated with your Angular app</div>\n' +
    '                <br/>\n' +
    '                <div class="DemoCode">\n' +
    '                    <span class="DemoCode-operator">&lt;?php</span><br/>\n' +
    '                    <br/>\n' +
    '                    <span class="DemoCode-highlight">class</span> <span class="DemoCode-secondary">PostsController</span><br/>\n' +
    '                    {<br/>\n' +
    '                    <br/>\n' +
    '                    &nbsp;&nbsp;&nbsp;&nbsp;public <span class="DemoCode-secondary">function</span> <span class="DemoCode-highlight">get</span>()<br/>\n' +
    '                    &nbsp;&nbsp;&nbsp;&nbsp;{<br/>\n' +
    '                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="DemoCode-secondary">$posts</span> = <span class="DemoCode-highlight">App</span>\\<span class="DemoCode-highlight">Post</span>::<span class="DemoCode-secondary">get</span>();<br/>\n' +
    '                    <br/>\n' +
    '                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="DemoCode-highlight">return</span> <span class="DemoCode-secondary">response</span>()<br/>\n' +
    '                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&gt;<span class="DemoCode-secondary">success</span>(compact(<span class="DemoCode-string">\'posts\'</span>));<br/>\n' +
    '                    &nbsp;&nbsp;&nbsp;&nbsp;}<br/>\n' +
    '                    }\n' +
    '                    <br/>\n' +
    '                    <br/>\n' +
    '                    <br/>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '            <div flex="50" class="Landing-angular" layout-align="center center">\n' +
    '                <h2 class="md-display-2 Landing-laravelAngular-title">Angular</h2>\n' +
    '                <div class="md-title Landing-laravelAngular-subtitle">Query your API without worrying about validations</div>\n' +
    '                <br/>\n' +
    '                <div class="DemoCode">\n' +
    '                    <span class="DemoCode-secondary">Class</span> <span class="DemoCode-highlight">PostsController</span> {<br/>\n' +
    '                    &nbsp;&nbsp;&nbsp;&nbsp;<span class="DemoCode-highlight">constructor</span>(API){<br/>\n' +
    '                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="DemoCode-string">\'ngInject\'</span>;<br/>\n' +
    '                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="DemoCode-highlight">this</span>.API = API;<br/>\n' +
    '                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="DemoCode-highlight">this</span>.posts = [];<br/>\n' +
    '                    &nbsp;&nbsp;&nbsp;&nbsp;}<br/>\n' +
    '                    <br/>\n' +
    '                    &nbsp;&nbsp;&nbsp;&nbsp;<span class="DemoCode-highlight">getPosts</span>(){<br/>\n' +
    '                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="DemoCode-highlight">this</span>.API.all(<span class="DemoCode-string">\'posts\'</span>).get(<span class="DemoCode-string">\'\'</span>)<br/>\n' +
    '                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.then((<span class="DemoCode-secondary">response</span>) => {<br/>\n' +
    '                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="DemoCode-highlight">this</span>.posts = <span class="DemoCode-highlight">response.data</span>;<br/>\n' +
    '                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;});<br/>\n' +
    '                    &nbsp;&nbsp;&nbsp;&nbsp;}<br/>\n' +
    '                    }<br/>\n' +
    '                    <br/>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>-->\n' +
    '\n' +
    '    <!--<div class="Landing-features" layout-align="center center">\n' +
    '        <h1 class="md-display-2 Landing-featuresMainTitle">Laravel Angular Material Starter</h1>\n' +
    '        <div class="md-title Landing-featuresMainDescription">\n' +
    '            The right features to get you started\n' +
    '        </div>\n' +
    '        <br/>\n' +
    '        <div>\n' +
    '            <div layout="column" layout-gt-sm="row" layout-align="space-around">\n' +
    '                <div flex="33">\n' +
    '                    <div class="Landing-featuresEntry Landing-featuresEntry--restful">\n' +
    '                        <md-icon md-svg-src="/img/icons/restful-api.svg" class="Landing-featuresEntry-icon"></md-icon>\n' +
    '                    </div>\n' +
    '                    <div class="md-headline Landing-featuresTitle">RESTful API</div>\n' +
    '                    <div class="md-subhead Landing-featuresDescription">Build consistent REST APIs and call them fluently using JavaScript, without having to worry about validation errors</div>\n' +
    '                </div>\n' +
    '                <div flex="33">\n' +
    '                    <div class="Landing-featuresEntry Landing-featuresEntry--jwt">\n' +
    '                        <md-icon md-svg-src="/img/icons/json-webtoken.svg" class="Landing-featuresEntry-icon"></md-icon>\n' +
    '                    </div>\n' +
    '                    <div class="md-headline Landing-featuresTitle">Json Web Token Authentication</div>\n' +
    '                    <div class="md-subhead Landing-featuresDescription">Get an out-of-the-box JWT Authentication in your app that allows you to authenticate users on the fly</div>\n' +
    '                </div>\n' +
    '                <div flex="33">\n' +
    '                    <div class="Landing-featuresEntry Landing-featuresEntry--generators">\n' +
    '                        <md-icon md-svg-src="/img/icons/angular-generators.svg" class="Landing-featuresEntry-icon"></md-icon>\n' +
    '                    </div>\n' +
    '                    <div class="md-headline Landing-featuresTitle">Angular Generators</div>\n' +
    '                    <div class="md-subhead Landing-featuresDescription">Generate angular features, dialogs, directives, services, filters & configs just like you\'re used to</div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <br/>\n' +
    '        <br/>\n' +
    '    </div>\n' +
    '</div>-->\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/pages/list-elements-CW/list-elements-CW.page.html',
    '<list-elements-c-w></list-elements-c-w>');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/pages/list-evluate-CW/list-evluate-CW.page.html',
    '<list-evluate-c-w></list-evluate-c-w>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/pages/login/login.page.html',
    '<md-content class="Page-container">\n' +
    '    <div class="Login-formContainer" layout="column" layout-align="center center">\n' +
    '\n' +
    '        <h1 class="md-headline">Log in to your account</h1>\n' +
    '\n' +
    '        <login-form></login-form>\n' +
    '\n' +
    '    </div>\n' +
    '</md-content>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/pages/nav-form-CW/nav-form-CW.page.html',
    '<nav-form-c-w></nav-form-c-w>');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/pages/question-CW/question-CW.page.html',
    '<question-c-w></question-c-w>');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/pages/register/register.page.html',
    '<md-content class="Page-container">\n' +
    '	<div flex="80" flex-offset="10">\n' +
    '		<div class="Register-formContainer" layout="column" layout-align="center center">\n' +
    '			<h1 class="md-headline">Create an account</h1>\n' +
    '\n' +
    '			<register-form></register-form>\n' +
    '\n' +
    '		</div>\n' +
    '	</div>\n' +
    '</md-content>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/pages/reset-password/reset-password.page.html',
    '<md-content class="Page-container">\n' +
    '    <div class="ResetPassword-formContainer" layout="column" layout-align="center center">\n' +
    '\n' +
    '        <h1 class="md-headline">Reset Password</h1>\n' +
    '\n' +
    '        <reset-password></reset-password>\n' +
    '\n' +
    '    </div>\n' +
    '</md-content>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/pages/start-page-cw/start-page-cw.page.html',
    '\n' +
    '<start-page-cw ></start-page-cw>\n' +
    '');
}]);
})();
