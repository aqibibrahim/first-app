function appReady() {
    alert("verified");
    var API = "http://portanaturasi.com/wp-admin/admin-ajax.php?action=export_customer_sorting&format=json&delivery_date=13/11/2014";
    check(API);
}

function check(API) {
    alert("entered");
    var http_request = new XMLHttpRequest();
    alert(http_request);
    http_request.open("GET", API, false);
    http_request.send(null);
    var my_JSON_object = http_request.responseText;
    alert(my_JSON_object);
    var data = JSON.parse(my_JSON_object);
    var itemList = json.Status.itemlist;
for(var i=0;i<itemList.length;i++)
{
    alert('Image:'+itemList[i].image
     +'\nID:'+itemList[i].id
        +'\nName:'+itemList[i].Name);
}
    alert("id");
}
document.addEventListener("deviceready", appReady, false);