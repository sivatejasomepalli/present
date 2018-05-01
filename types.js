var app = angular.module("app",[]);
app.controller('MainCtrl',function ($scope,$http) {
    $http.get("https://data.kcmo.org/resource/cyqf-nban.json?category=Water&type=Leak&$select=zip_code,count(case_id)&$group=zip_code").then(function (value) {
        $scope.kcvalue = value.data;
        console.log($scope.kcvalue);
        $scope.zipcode64030 = parseInt($scope.kcvalue[0].count_case_id);
        $scope.zipcode64101 = parseInt($scope.kcvalue[1].count_case_id);
        $scope.zipcode64102 = parseInt($scope.kcvalue[2].count_case_id);
        $scope.zipcode64105 = parseInt($scope.kcvalue[3].count_case_id);
        $scope.zipcode64106 = parseInt($scope.kcvalue[4].count_case_id);
        $scope.zipcode64108 = parseInt($scope.kcvalue[5].count_case_id);
        $scope.zipcode64109 = parseInt($scope.kcvalue[6].count_case_id);
        $scope.zipcode64110 = parseInt($scope.kcvalue[7].count_case_id);
        $scope.zipcode64111 = parseInt($scope.kcvalue[8].count_case_id);
        $scope.zipcode64112 = parseInt($scope.kcvalue[9].count_case_id);
        $scope.zipcode64113 = parseInt($scope.kcvalue[10].count_case_id);
        $scope.zipcode64114 = parseInt($scope.kcvalue[11].count_case_id);
        $scope.zipcode64116 = parseInt($scope.kcvalue[12].count_case_id);
        $scope.zipcode64117 = parseInt($scope.kcvalue[13].count_case_id);
        $scope.zipcode64118 = parseInt($scope.kcvalue[14].count_case_id);
        $scope.zipcode64119 = parseInt($scope.kcvalue[15].count_case_id);
        $scope.zipcode64120 = parseInt($scope.kcvalue[16].count_case_id);
        $scope.zipcode64123 = parseInt($scope.kcvalue[17].count_case_id);
        $scope.zipcode64124 = parseInt($scope.kcvalue[18].count_case_id);
        $scope.zipcode64125 = parseInt($scope.kcvalue[19].count_case_id);
        $scope.zipcode64126 = parseInt($scope.kcvalue[20].count_case_id);
        $scope.zipcode64127 = parseInt($scope.kcvalue[21].count_case_id);
        $scope.zipcode64128 = parseInt($scope.kcvalue[22].count_case_id);
        $scope.zipcode64129 = parseInt($scope.kcvalue[23].count_case_id);
        $scope.zipcode64130 = parseInt($scope.kcvalue[24].count_case_id);
        $scope.zipcode64131 = parseInt($scope.kcvalue[25].count_case_id);
        $scope.zipcode64132 = parseInt($scope.kcvalue[26].count_case_id);
        $scope.zipcode64133 = parseInt($scope.kcvalue[27].count_case_id);
        $scope.zipcode64134 = parseInt($scope.kcvalue[28].count_case_id);
        $scope.zipcode64136 = parseInt($scope.kcvalue[29].count_case_id);
        $scope.zipcode64137 = parseInt($scope.kcvalue[30].count_case_id);
        $scope.zipcode64138 = parseInt($scope.kcvalue[31].count_case_id);
        $scope.zipcode64139 = parseInt($scope.kcvalue[32].count_case_id);
        $scope.zipcode64145 = parseInt($scope.kcvalue[33].count_case_id);
        $scope.zipcode64146 = parseInt($scope.kcvalue[34].count_case_id);
        $scope.zipcode64147 = parseInt($scope.kcvalue[35].count_case_id);
        $scope.zipcode64149 = parseInt($scope.kcvalue[36].count_case_id);
        $scope.zipcode64151 = parseInt($scope.kcvalue[37].count_case_id);
        $scope.zipcode64152 = parseInt($scope.kcvalue[38].count_case_id);
        $scope.zipcode64153 = parseInt($scope.kcvalue[39].count_case_id);
        $scope.zipcode64154 = parseInt($scope.kcvalue[40].count_case_id);
        $scope.zipcode64155 = parseInt($scope.kcvalue[41].count_case_id);
        $scope.zipcode64156 = parseInt($scope.kcvalue[42].count_case_id);
        $scope.zipcode64157 = parseInt($scope.kcvalue[43].count_case_id);
        $scope.zipcode64158 = parseInt($scope.kcvalue[44].count_case_id);
        $scope.zipcode64160 = parseInt($scope.kcvalue[45].count_case_id);
        $scope.zipcode64161 = parseInt($scope.kcvalue[46].count_case_id);
        $scope.zipcode64163 = parseInt($scope.kcvalue[47].count_case_id);
        $scope.zipcode64164 = parseInt($scope.kcvalue[48].count_case_id);
        $scope.zipcode64165 = parseInt($scope.kcvalue[49].count_case_id);
        drawChart();

    });

    google.charts.load('current', {'packages': ['line']});
    google.charts.setOnLoadCallback(drawChart);



    $http.get("https://data.kcmo.org/resource/cyqf-nban.json?category=Water&type=No%20Water%20/%20Pressure&$select=zip_code,count(case_id)&$group=zip_code").then(function (value) {
        $scope.kcvalue = value.data;
        console.log($scope.kcvalue);
        $scope.zipcode641011 = parseInt($scope.kcvalue[0].count_case_id);
        $scope.zipcode641021 = parseInt($scope.kcvalue[1].count_case_id);
        $scope.zipcode641051= parseInt($scope.kcvalue[2].count_case_id);
        $scope.zipcode641061= parseInt($scope.kcvalue[3].count_case_id);
        $scope.zipcode641081 = parseInt($scope.kcvalue[4].count_case_id);
        $scope.zipcode641091 = parseInt($scope.kcvalue[5].count_case_id);
        $scope.zipcode641101 = parseInt($scope.kcvalue[6].count_case_id);
        $scope.zipcode641111 = parseInt($scope.kcvalue[7].count_case_id);
        $scope.zipcode641121 = parseInt($scope.kcvalue[8].count_case_id);
        $scope.zipcode641131 = parseInt($scope.kcvalue[9].count_case_id);
        $scope.zipcode641141 = parseInt($scope.kcvalue[10].count_case_id);
        $scope.zipcode641161 = parseInt($scope.kcvalue[11].count_case_id);
        $scope.zipcode641171 = parseInt($scope.kcvalue[12].count_case_id);
        $scope.zipcode641181 = parseInt($scope.kcvalue[13].count_case_id);
        $scope.zipcode641191 = parseInt($scope.kcvalue[14].count_case_id);
        $scope.zipcode641201 = parseInt($scope.kcvalue[15].count_case_id);
        $scope.zipcode641231 = parseInt($scope.kcvalue[16].count_case_id);
        $scope.zipcode641241 = parseInt($scope.kcvalue[17].count_case_id);
        $scope.zipcode641251 = parseInt($scope.kcvalue[18].count_case_id);
        $scope.zipcode641261 = parseInt($scope.kcvalue[19].count_case_id);
        $scope.zipcode641271 = parseInt($scope.kcvalue[20].count_case_id);
        $scope.zipcode641281 = parseInt($scope.kcvalue[21].count_case_id);
        $scope.zipcode641291 = parseInt($scope.kcvalue[22].count_case_id);
        $scope.zipcode641301 = parseInt($scope.kcvalue[23].count_case_id);
        $scope.zipcode641311 = parseInt($scope.kcvalue[24].count_case_id);
        $scope.zipcode641321 = parseInt($scope.kcvalue[25].count_case_id);
        $scope.zipcode641331 = parseInt($scope.kcvalue[26].count_case_id);
        $scope.zipcode641341 = parseInt($scope.kcvalue[27].count_case_id);
        $scope.zipcode641361 = parseInt($scope.kcvalue[28].count_case_id);
        $scope.zipcode641371 = parseInt($scope.kcvalue[29].count_case_id);
        $scope.zipcode641381 = parseInt($scope.kcvalue[30].count_case_id);
        $scope.zipcode641391 = parseInt($scope.kcvalue[31].count_case_id);
        $scope.zipcode641451 = parseInt($scope.kcvalue[32].count_case_id);
        $scope.zipcode641461 = parseInt($scope.kcvalue[33].count_case_id);
        $scope.zipcode641471 = parseInt($scope.kcvalue[34].count_case_id);
        $scope.zipcode641491 = parseInt($scope.kcvalue[35].count_case_id);
        $scope.zipcode641511 = parseInt($scope.kcvalue[36].count_case_id);
        $scope.zipcode641521 = parseInt($scope.kcvalue[37].count_case_id);
        $scope.zipcode641531 = parseInt($scope.kcvalue[38].count_case_id);
        $scope.zipcode641541 = parseInt($scope.kcvalue[39].count_case_id);
        $scope.zipcode641551 = parseInt($scope.kcvalue[40].count_case_id);
        $scope.zipcode641561 = parseInt($scope.kcvalue[41].count_case_id);
        $scope.zipcode641571 = parseInt($scope.kcvalue[42].count_case_id);
        $scope.zipcode641581 = parseInt($scope.kcvalue[43].count_case_id);
        $scope.zipcode641601 = parseInt($scope.kcvalue[44].count_case_id);
        $scope.zipcode641611 = parseInt($scope.kcvalue[45].count_case_id);
        $scope.zipcode641631 = parseInt($scope.kcvalue[46].count_case_id)
        drawChart();

    });

    google.charts.load('current', {'packages': ['line']});
    google.charts.setOnLoadCallback(drawChart);


    $http.get("https://data.kcmo.org/resource/cyqf-nban.json?category=Water&type=Pipeline%20Referral&$select=zip_code,count(case_id)&$group=zip_code").then(function (value) {
        $scope.kcvalue = value.data;
        console.log($scope.kcvalue);
        $scope.zipcode641012 = parseInt($scope.kcvalue[0].count_case_id);
        $scope.zipcode641022 = parseInt($scope.kcvalue[1].count_case_id);
        $scope.zipcode641052 = parseInt($scope.kcvalue[2].count_case_id);
        $scope.zipcode641062 = parseInt($scope.kcvalue[3].count_case_id);
        $scope.zipcode641082 = parseInt($scope.kcvalue[4].count_case_id);
        $scope.zipcode641092 = parseInt($scope.kcvalue[5].count_case_id);
        $scope.zipcode641102 = parseInt($scope.kcvalue[6].count_case_id);
        $scope.zipcode641112 = parseInt($scope.kcvalue[7].count_case_id);
        $scope.zipcode641122 = parseInt($scope.kcvalue[8].count_case_id);
        $scope.zipcode641132 = parseInt($scope.kcvalue[9].count_case_id);
        $scope.zipcode641142 = parseInt($scope.kcvalue[10].count_case_id);
        $scope.zipcode641162 = parseInt($scope.kcvalue[11].count_case_id);
        $scope.zipcode641172 = parseInt($scope.kcvalue[12].count_case_id);
        $scope.zipcode641182 = parseInt($scope.kcvalue[13].count_case_id);
        $scope.zipcode641192 = parseInt($scope.kcvalue[14].count_case_id);
        $scope.zipcode641202 = parseInt($scope.kcvalue[15].count_case_id);
        $scope.zipcode641232 = parseInt($scope.kcvalue[16].count_case_id);
        $scope.zipcode641242 = parseInt($scope.kcvalue[17].count_case_id);
        $scope.zipcode641252 = parseInt($scope.kcvalue[18].count_case_id);
        $scope.zipcode641262 = parseInt($scope.kcvalue[19].count_case_id);
        $scope.zipcode641272 = parseInt($scope.kcvalue[20].count_case_id);
        $scope.zipcode641282 = parseInt($scope.kcvalue[21].count_case_id);
        $scope.zipcode641292 = parseInt($scope.kcvalue[22].count_case_id);
        $scope.zipcode641302 = parseInt($scope.kcvalue[23].count_case_id);
        $scope.zipcode641312 = parseInt($scope.kcvalue[24].count_case_id);
        $scope.zipcode641322 = parseInt($scope.kcvalue[25].count_case_id);
        $scope.zipcode641332 = parseInt($scope.kcvalue[26].count_case_id);
        $scope.zipcode641342 = parseInt($scope.kcvalue[27].count_case_id);
        $scope.zipcode641362 = parseInt($scope.kcvalue[28].count_case_id);
        $scope.zipcode641372 = parseInt($scope.kcvalue[29].count_case_id);
        $scope.zipcode641382 = parseInt($scope.kcvalue[30].count_case_id);
        $scope.zipcode641392 = parseInt($scope.kcvalue[31].count_case_id);
        $scope.zipcode641452 = parseInt($scope.kcvalue[32].count_case_id);
        $scope.zipcode641462 = parseInt($scope.kcvalue[33].count_case_id);
        $scope.zipcode641472 = parseInt($scope.kcvalue[34].count_case_id);
        $scope.zipcode641492 = parseInt($scope.kcvalue[35].count_case_id);
        $scope.zipcode641512 = parseInt($scope.kcvalue[36].count_case_id);
        $scope.zipcode641522 = parseInt($scope.kcvalue[37].count_case_id);
        $scope.zipcode641532 = parseInt($scope.kcvalue[38].count_case_id);
        $scope.zipcode641542 = parseInt($scope.kcvalue[39].count_case_id);
        $scope.zipcode641552 = parseInt($scope.kcvalue[40].count_case_id);
        $scope.zipcode641562 = parseInt($scope.kcvalue[41].count_case_id);
        $scope.zipcode641572 = parseInt($scope.kcvalue[42].count_case_id);
        $scope.zipcode641582 = parseInt($scope.kcvalue[43].count_case_id);
        $scope.zipcode641612 = parseInt($scope.kcvalue[44].count_case_id);
        $scope.zipcode641632 = parseInt($scope.kcvalue[45].count_case_id);
        $scope.zipcode641642 = parseInt($scope.kcvalue[46].count_case_id)
        drawChart();

    });

    google.charts.load('current', {'packages': ['line']});
    google.charts.setOnLoadCallback(drawChart);


    $http.get("https://data.kcmo.org/resource/cyqf-nban.json?category=Water&type=Quality&$select=zip_code,count(case_id)&$group=zip_code").then(function (value) {
        $scope.kcvalue = value.data;
        console.log($scope.kcvalue);
        $scope.zipcode641013 = parseInt($scope.kcvalue[0].count_case_id);
        $scope.zipcode641053 = parseInt($scope.kcvalue[1].count_case_id);
        $scope.zipcode641063 = parseInt($scope.kcvalue[2].count_case_id);
        $scope.zipcode641083 = parseInt($scope.kcvalue[3].count_case_id);
        $scope.zipcode641093 = parseInt($scope.kcvalue[4].count_case_id);
        $scope.zipcode641103 = parseInt($scope.kcvalue[5].count_case_id);
        $scope.zipcode641113 = parseInt($scope.kcvalue[6].count_case_id);
        $scope.zipcode641123 = parseInt($scope.kcvalue[7].count_case_id);
        $scope.zipcode641133 = parseInt($scope.kcvalue[8].count_case_id);
        $scope.zipcode641143 = parseInt($scope.kcvalue[9].count_case_id);
        $scope.zipcode641163= parseInt($scope.kcvalue[10].count_case_id);
        $scope.zipcode641173 = parseInt($scope.kcvalue[11].count_case_id);
        $scope.zipcode641183 = parseInt($scope.kcvalue[12].count_case_id);
        $scope.zipcode641193 = parseInt($scope.kcvalue[13].count_case_id);
        $scope.zipcode641203 = parseInt($scope.kcvalue[14].count_case_id);
        $scope.zipcode641233= parseInt($scope.kcvalue[15].count_case_id);
        $scope.zipcode641243 = parseInt($scope.kcvalue[16].count_case_id);
        $scope.zipcode641253 = parseInt($scope.kcvalue[17].count_case_id);
        $scope.zipcode641263 = parseInt($scope.kcvalue[18].count_case_id);
        $scope.zipcode641273 = parseInt($scope.kcvalue[19].count_case_id);
        $scope.zipcode641283 = parseInt($scope.kcvalue[20].count_case_id);
        $scope.zipcode641293 = parseInt($scope.kcvalue[21].count_case_id);
        $scope.zipcode641303 = parseInt($scope.kcvalue[22].count_case_id);
        $scope.zipcode641313 = parseInt($scope.kcvalue[23].count_case_id);
        $scope.zipcode641323 = parseInt($scope.kcvalue[24].count_case_id);
        $scope.zipcode641333 = parseInt($scope.kcvalue[25].count_case_id);
        $scope.zipcode641343 = parseInt($scope.kcvalue[26].count_case_id);
        $scope.zipcode641363 = parseInt($scope.kcvalue[27].count_case_id);
        $scope.zipcode641373 = parseInt($scope.kcvalue[28].count_case_id);
        $scope.zipcode641383 = parseInt($scope.kcvalue[29].count_case_id);
        $scope.zipcode641393 = parseInt($scope.kcvalue[30].count_case_id);
        $scope.zipcode641453 = parseInt($scope.kcvalue[31].count_case_id);
        $scope.zipcode641463 = parseInt($scope.kcvalue[32].count_case_id);
        $scope.zipcode641473 = parseInt($scope.kcvalue[33].count_case_id);
        $scope.zipcode641493 = parseInt($scope.kcvalue[34].count_case_id);
        $scope.zipcode641513 = parseInt($scope.kcvalue[35].count_case_id);
        $scope.zipcode641523 = parseInt($scope.kcvalue[36].count_case_id);
        $scope.zipcode641533 = parseInt($scope.kcvalue[37].count_case_id);
        $scope.zipcode641543 = parseInt($scope.kcvalue[38].count_case_id);
        $scope.zipcode641553 = parseInt($scope.kcvalue[39].count_case_id);
        $scope.zipcode641563 = parseInt($scope.kcvalue[40].count_case_id);
        $scope.zipcode641573 = parseInt($scope.kcvalue[41].count_case_id);
        $scope.zipcode641583 = parseInt($scope.kcvalue[42].count_case_id);
        $scope.zipcode641613 = parseInt($scope.kcvalue[43].count_case_id);
        $scope.zipcode641633 = parseInt($scope.kcvalue[44].count_case_id)
        drawChartx();

    });

    google.charts.load('current', {'packages': ['line']});
    google.charts.setOnLoadCallback(drawChart);


    $http.get("https://data.kcmo.org/resource/cyqf-nban.json?category=Water&type=Pipeline%20Referral&$select=zip_code,count(case_id)&$group=zip_code").then(function (value) {
        $scope.kcvalue = value.data;
        console.log($scope.kcvalue);
        $scope.zipcode641014 = parseInt($scope.kcvalue[0].count_case_id);
        $scope.zipcode641024 = parseInt($scope.kcvalue[1].count_case_id);
        $scope.zipcode641054 = parseInt($scope.kcvalue[2].count_case_id);
        $scope.zipcode641064 = parseInt($scope.kcvalue[3].count_case_id);
        $scope.zipcode641084 = parseInt($scope.kcvalue[4].count_case_id);
        $scope.zipcode641094 = parseInt($scope.kcvalue[5].count_case_id);
        $scope.zipcode641104 = parseInt($scope.kcvalue[6].count_case_id);
        $scope.zipcode641114 = parseInt($scope.kcvalue[7].count_case_id);
        $scope.zipcode641124 = parseInt($scope.kcvalue[8].count_case_id);
        $scope.zipcode641134 = parseInt($scope.kcvalue[9].count_case_id);
        $scope.zipcode641144 = parseInt($scope.kcvalue[10].count_case_id);
        $scope.zipcode641164 = parseInt($scope.kcvalue[11].count_case_id);
        $scope.zipcode641174 = parseInt($scope.kcvalue[12].count_case_id);
        $scope.zipcode641184 = parseInt($scope.kcvalue[13].count_case_id);
        $scope.zipcode641194 = parseInt($scope.kcvalue[14].count_case_id);
        $scope.zipcode641204 = parseInt($scope.kcvalue[15].count_case_id);
        $scope.zipcode641234 = parseInt($scope.kcvalue[16].count_case_id);
        $scope.zipcode641244 = parseInt($scope.kcvalue[17].count_case_id);
        $scope.zipcode641254 = parseInt($scope.kcvalue[18].count_case_id);
        $scope.zipcode641264 = parseInt($scope.kcvalue[19].count_case_id);
        $scope.zipcode641274 = parseInt($scope.kcvalue[20].count_case_id);
        $scope.zipcode641284 = parseInt($scope.kcvalue[21].count_case_id);
        $scope.zipcode641294 = parseInt($scope.kcvalue[22].count_case_id);
        $scope.zipcode641304 = parseInt($scope.kcvalue[23].count_case_id);
        $scope.zipcode641314 = parseInt($scope.kcvalue[24].count_case_id);
        $scope.zipcode641324 = parseInt($scope.kcvalue[25].count_case_id);
        $scope.zipcode641334 = parseInt($scope.kcvalue[26].count_case_id);
        $scope.zipcode641344= parseInt($scope.kcvalue[27].count_case_id);
        $scope.zipcode641364 = parseInt($scope.kcvalue[28].count_case_id);
        $scope.zipcode641374 = parseInt($scope.kcvalue[29].count_case_id);
        $scope.zipcode641384 = parseInt($scope.kcvalue[30].count_case_id);
        $scope.zipcode641394 = parseInt($scope.kcvalue[31].count_case_id);
        $scope.zipcode641454 = parseInt($scope.kcvalue[32].count_case_id);
        $scope.zipcode641464 = parseInt($scope.kcvalue[33].count_case_id);
        $scope.zipcode641514 = parseInt($scope.kcvalue[34].count_case_id);
        $scope.zipcode641524 = parseInt($scope.kcvalue[35].count_case_id);
        $scope.zipcode641534 = parseInt($scope.kcvalue[36].count_case_id);
        $scope.zipcode641544 = parseInt($scope.kcvalue[37].count_case_id);
        $scope.zipcode641554 = parseInt($scope.kcvalue[38].count_case_id);
        $scope.zipcode641564 = parseInt($scope.kcvalue[39].count_case_id);
        $scope.zipcode641574 = parseInt($scope.kcvalue[40].count_case_id);
        $scope.zipcode641584 = parseInt($scope.kcvalue[41].count_case_id);
        $scope.zipcode641604 = parseInt($scope.kcvalue[42].count_case_id);
        $scope.zipcode641614 = parseInt($scope.kcvalue[43].count_case_id)
        drawChartx();

    });

    google.charts.load('current', {'packages': ['line']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChartx() {
        var data = google.visualization.arrayToDataTable();
            data.addcolumn('number','zipcode');
            data.addcolumn('number', 'Leak');
            data.addColumn('number', 'No Water / pressure');
            data.addColumn('number', 'Pipeline');
            data.addColumn('number', 'Quality');
            data.addColumn('number', 'services');

            data.addRows([

            ['64030', $scope.zipcode64030,0,0,0,0],
            ['64101',0,$scope.zipcode641011,$scope.zipcode641012,$scope.zipcode641013,$scope.zipcode641014]
            ['64102', $scope.zipcode64102,$scope.zipcode641021,$scope.zipcode641022,0,$scope.zipcode641024],
            ['64105', $scope.zipcode64105,$scope.zipcode641051,$scope.zipcode641052,$scope.zipcode641053,$scope.zipcode641054],
            ['64106', $scope.zipcode64106,$scope.zipcode641061,$scope.zipcode641062,$scope.zipcode641063,$scope.zipcode641064],
            ['64108', $scope.zipcode64108,$scope.zipcode641081,$scope.zipcode641082,$scope.zipcode641083,$scope.zipcode641084],
            ['64109', $scope.zipcode64109,$scope.zipcode641091,$scope.zipcode641092,$scope.zipcode641093,$scope.zipcode641094],
            ['64110', $scope.zipcode64110,$scope.zipcode641101,$scope.zipcode641102,$scope.zipcode641103,$scope.zipcode641104],
            ['64111', $scope.zipcode64111,$scope.zipcode641111,$scope.zipcode641112,$scope.zipcode641113,$scope.zipcode641114]
            ['64112', $scope.zipcode64112,$scope.zipcode641121,$scope.zipcode641122,$scope.zipcode641123,$scope.zipcode641124],
            ['64113', $scope.zipcode64113,$scope.zipcode641131,$scope.zipcode641132,$scope.zipcode641133,$scope.zipcode641134],
            ['64114', $scope.zipcode64114,$scope.zipcode641141,$scope.zipcode641142,$scope.zipcode641143,$scope.zipcode641144],
            ['64116', $scope.zipcode64116,$scope.zipcode641161,$scope.zipcode641162,$scope.zipcode641163,$scope.zipcode641164],
            ['64117', $scope.zipcode64117,$scope.zipcode641171,$scope.zipcode641172,$scope.zipcode641173,$scope.zipcode641174],
            ['64118', $scope.zipcode64118,$scope.zipcode641181,$scope.zipcode641182,$scope.zipcode641183,$scope.zipcode641184],
            ['64119', $scope.zipcode64119,$scope.zipcode641191,$scope.zipcode641192,$scope.zipcode641193,$scope.zipcode641194],
            ['64120', $scope.zipcode64120,$scope.zipcode641201,$scope.zipcode641202,$scope.zipcode641203,$scope.zipcode641204],
            ['64123', $scope.zipcode64123,$scope.zipcode641231,$scope.zipcode641232,$scope.zipcode641233,$scope.zipcode641234],
            ['64124', $scope.zipcode64124,$scope.zipcode641241,$scope.zipcode641242,$scope.zipcode641243,$scope.zipcode641244],
            ['64125', $scope.zipcode64125,$scope.zipcode641251,$scope.zipcode641252,0,$scope.zipcode641254],
            ['64126', $scope.zipcode64126,$scope.zipcode641261,$scope.zipcode641262,$scope.zipcode641263,$scope.zipcode641264],
            ['64127', $scope.zipcode64127,$scope.zipcode641271,$scope.zipcode641272,$scope.zipcode641273,$scope.zipcode641274],
            ['64128', $scope.zipcode64128,$scope.zipcode641281,$scope.zipcode641282,$scope.zipcode641283,$scope.zipcode641284],
            ['64129', $scope.zipcode64129,$scope.zipcode641291,$scope.zipcode641292,$scope.zipcode641293,$scope.zipcode641294],
            ['64130', $scope.zipcode64130,$scope.zipcode641301,$scope.zipcode641302,$scope.zipcode641303,$scope.zipcode641304],
            ['64131', $scope.zipcode64131,$scope.zipcode641311,$scope.zipcode641312,$scope.zipcode641313,$scope.zipcode641314],
            ['64132', $scope.zipcode64132,$scope.zipcode641321,$scope.zipcode641322,$scope.zipcode641323,$scope.zipcode641324],
            ['64133', $scope.zipcode64133,$scope.zipcode641331,$scope.zipcode641332,$scope.zipcode641333,$scope.zipcode641334],
            ['64134', $scope.zipcode64134,$scope.zipcode641341,$scope.zipcode641342,$scope.zipcode641343,$scope.zipcode641344],
            ['64136', $scope.zipcode64136,$scope.zipcode641361,$scope.zipcode641362,$scope.zipcode641363,$scope.zipcode641364],
            ['64137', $scope.zipcode64137,$scope.zipcode641371,$scope.zipcode641372,$scope.zipcode641373,$scope.zipcode641374],
            ['64138', $scope.zipcode64138,$scope.zipcode641381,$scope.zipcode641382,$scope.zipcode641383,$scope.zipcode641384],
            ['64139', $scope.zipcode64139,$scope.zipcode641391,$scope.zipcode641392,$scope.zipcode641393,$scope.zipcode641394],
            ['64145', $scope.zipcode64145,$scope.zipcode641451,$scope.zipcode641452,$scope.zipcode641453,$scope.zipcode641454],
            ['64146', $scope.zipcode64146,$scope.zipcode641461,$scope.zipcode641462,$scope.zipcode641463,$scope.zipcode641464],
            ['64147', $scope.zipcode64147,$scope.zipcode641471,$scope.zipcode641472,0,0],
            ['64149', $scope.zipcode64149,$scope.zipcode641491,$scope.zipcode641492,0,0],
            ['64151', $scope.zipcode64151,$scope.zipcode641511,$scope.zipcode641512,$scope.zipcode641513,$scope.zipcode641514],
            ['64152', $scope.zipcode64152,$scope.zipcode641521,$scope.zipcode641522,$scope.zipcode641523,$scope.zipcode641524],
            ['64153', $scope.zipcode64153,$scope.zipcode641531,$scope.zipcode641532,$scope.zipcode641533,$scope.zipcode641534],
            ['64154', $scope.zipcode64154,$scope.zipcode641541,$scope.zipcode641542,$scope.zipcode641543,$scope.zipcode641544],
            ['64155', $scope.zipcode64155,$scope.zipcode641551,$scope.zipcode641552,$scope.zipcode641553,$scope.zipcode641554],
            ['64156', $scope.zipcode64156,$scope.zipcode641561,$scope.zipcode641562,$scope.zipcode641563,$scope.zipcode641564],
            ['64157', $scope.zipcode64157,$scope.zipcode641571,$scope.zipcode641572,$scope.zipcode641573,$scope.zipcode641574],
            ['64158', $scope.zipcode64158,$scope.zipcode641581,$scope.zipcode641582,$scope.zipcode641583,$scope.zipcode641584],
            ['64160', $scope.zipcode64160,$scope.zipcode641601,0,0,$scope.zipcode641604],
            ['64161', $scope.zipcode64161,$scope.zipcode641611,$scope.zipcode641612,$scope.zipcode641613,$scope.zipcode641614],
            ['64163', $scope.zipcode64163,$scope.zipcode641631,$scope.zipcode641632,$scope.zipcode641633,0],
            ['64164', $scope.zipcode64164,0,$scope.zipcode641642,0,0],
            ['64165', $scope.zipcode64165,0,0,0,0]
        ]);

            var options = {
            width:900,
            height:500,
            axes: {
                x:{
                    0: {side: 'top'}
                }
            }
            };

        var chart = new google.visualization.Line(document.getElementById('line_top_x'));

        chart.draw(data, google.charts.Line.convertOptions(options));
    }

});
