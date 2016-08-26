class ActivityPageCwController{
    constructor(API){
        'ngInject';
        this.API =API;


    }

}

export const ActivityPageCwComponent = {
    templateUrl: './views/app/components/activity-page-cw/activity-page-cw.component.html',
    controller: ActivityPageCwController,
    controllerAs: 'vm',
    bindings: {}
}
