< html >
    <
    body bgcolor = "#FFFFFF" >
    <
    br > < br > < br > < br >
    <
    div align = "center" >
    <
    div style = "width:300px; border: solid 1px #333333; "
align = "left" >
    <
    div style = "background-color:#333333; color:#FFFFFF; padding:3px;" > < b > Create < /b></div >

    <
    div style = "margin:30px" >

    <
    form action = "/data"
method = "post" >
    <
    label > Name & nbsp; & nbsp; & nbsp;: < /label><input type="text" name="name" class="box" / > < br / > < br / >
    <
    label > Email & nbsp; & nbsp; & nbsp;: < /label><input type="password" name="email" class="box" / > < br / > < br / >
    <
    label > Mobile & nbsp;: < /label><input type="text" name="mob" class="box" / > < br / > < br / >
    <
    label > City & nbsp; & nbsp; & nbsp; & nbsp; & nbsp;: < /label><input type="text" name="city" class="box" / > < br / > < br / >
    <
    label > Pincode: < /label><input type="text" name="pincode" class="box" / > < br / > < br / >
    <
    input type = "submit"
value = " create " / >
    <
    /form>

    <
    /div>

    <
    /div>

    <
    /div>


    <
    script >
    var req = {
        method: 'POST',
        url: 'http://localhost:3000/data',
        headers: {
            'Content-Type': 'Application/json'
        },
        data: {

            name: "ajay",
            email: "sri" //bind using ng-model
        }
    } //ngclick


var app = angular.module('myApp', []);
app.controller('ctrl', function ($scope, $http) {
    $http(req)
        .then(function (response) {
            $scope.names = response.data;
        });
}); <
/script> <
/body> <
/html>
