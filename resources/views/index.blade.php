<!doctype html>
<html ng-app="app" ng-strict-di>
<head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Nobel Prize Award</title>

    <meta name="theme-color" content="#0690B7">

    <link rel="manifest" href="manifest.json">
    <!--[if lte IE 10]>
    <script type="text/javascript">document.location.href = '/unsupported-browser'</script>
    <![endif]-->

    <style><?php require( public_path( "css/critical.css" ) ) ?></style>

</head>
<body>

    <app-shell>
        <div id="app-shell-header">
            <img src="img/icons/logo.svg" width="171" height="41">
        </div>
        <div id="app-shell-content">Chargement en cours ...</div>
    </app-shell>

    <app-view></app-view>


    <script>
    (function(){
        var link = document.createElement("link");
        link.href = "{!! elixir('css/final.css') !!}";
        link.type = "text/css";
        link.rel = "stylesheet";
        document.body.appendChild(link);
    })();
    </script>

    <script src="{!! elixir('js/final.js') !!}" async defer></script>
    {{--<script src="../bower_components/highcharts/modules/exporting.js"></script>--}}
    {{--<script src="../bower_components/highcharts/highcharts.js"></script>--}}
    {{--<script src="../bower_components/highcharts/highstock.js"></script>--}}
    {{--<script src="../bower_components/highcharts/modules/map.js"></script>--}}
    {{--<script src="../bower_components/highcharts/highmaps.js"></script>--}}
    <script>

        function movepage(){

            var height = document.getElementById('cover' ).offsetHeight + 65 ;
            scrollTo(document.body, height, 1000);
            //window.scrollTo(0 ,height);
        }


        function scrollTo(element, to, duration) {
            var start = element.scrollTop,
                    change = to - start,
                    increment = 20;

            var animateScroll = function(elapsedTime) {
                elapsedTime += increment;
                var position = easeInOut(elapsedTime, start, change, duration);
                element.scrollTop = position;
                if (elapsedTime < duration) {
                    setTimeout(function() {
                        animateScroll(elapsedTime);
                    }, increment);
                }
            };

            animateScroll(0);
        }

        function easeInOut(currentTime, start, change, duration) {
            currentTime /= duration / 2;
            if (currentTime < 1) {
                return change / 2 * currentTime * currentTime + start;
            }
            currentTime -= 1;
            return -change / 2 * (currentTime * (currentTime - 2) - 1) + start;
        }


    </script>

</body>
</html>
