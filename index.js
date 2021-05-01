function getrealtimepriceRS() {
    var code = document.getElementById(coinCode);
    var price = document.getElementById(realtimeprice);
    var url = "http://127.0.0.1:5000/showprice";
    $.get(url, {
        coincode: code
    }, function (data, status) {
        console.log(data.rtprice);
        price.innerHTML = "<h2>" + data.rtprice.toString() + " </h2>";
        console.log(status);
    });
}
