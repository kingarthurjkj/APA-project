class ListElementsCWController{
    constructor(API, ToastService){
        'ngInject';

        this.API = API;
        this.ToastService = ToastService;
        this.elements = [];
        this.chartConfig={};
    }

    $onInit(){
        this.getElements();

        this.lineChartLabels = ['Januarys', 'February', 'March', 'April', 'May', 'June', 'July']
        this.lineChartSeries = ['Series A', 'Series B']
        this.lineChartData = [
            [65, 59, 80, 81, 56, 55, 40],
            [28, 48, 40, 19, 86, 27, 90]
        ]

        this.areaChartLabels = ['Jan', 'Feb', 'mar']
        this.areaChartSeries = ['Series A', 'Series B']
        this.areaChartData = [
            [25, 30,12],
            [20, 20,12]
        ]
        this.areaChartColours = [
            {
                fillColor: '#D2D6DE',
                strokeColor: '#D2D6DE',
                pointColor: 'rgba(148,159,177,1)',
                pointStrokeColor: '#fff',
                pointHighlightFill: '#fff',
                pointHighlightStroke: 'rgba(148,159,177,0.8)'
            },
            {
                fillColor: '#4B94C0',
                strokeColor: '#4B94C0',
                pointColor: '#2980b9',
                pointStrokeColor: '#fff',
                pointHighlightFill: '#fff',
                pointHighlightStroke: 'rgba(77,83,96,1)'
            }
        ]

        this.onClick = function () {}

        this.barChartLabels = ['Januarys', 'February', 'March']
        this.barChartSeries = ['Series A', 'Series B']
        this.barChartData = [
            [65, 59, 80, 81, 56, 55, 40],
            [28, 48, 40, 19, 86, 27, 90]
        ]
        this.barChartColours = [
            {
                fillColor: '#D2D6DE',
                strokeColor: '#D2D6DE',
                pointColor: 'rgba(148,159,177,1)',
                pointStrokeColor: '#fff',
                pointHighlightFill: '#fff',
                pointHighlightStroke: 'rgba(148,159,177,0.8)'
            },
            {
                fillColor: '#00A65A',
                strokeColor: '#00A65A',
                pointColor: '#2980b9',
                pointStrokeColor: '#fff',
                pointHighlightFill: '#fff',
                pointHighlightStroke: 'rgba(77,83,96,1)'
            }
        ]

        this.pieLabels = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales']
        this.pieData = [300, 500, 100]
    }

    getElements(){
        this.API.all('list-elements').get('')
            .then((response) => {
            this.elements = response.data;
    });
    }
}

export const ListElementsCWComponent = {
    templateUrl: './views/app/components/list-elements-CW/list-elements-CW.component.html',
    controller: ListElementsCWController,
    controllerAs: 'vm',
    bindings: {}
}
