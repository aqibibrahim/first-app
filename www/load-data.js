/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function loaddata(){
jQuery(document).ready(function(){
                var url = 'http://portanaturasi.com/wp-admin/admin-ajax.php';
                var data = {
                    'action':'getCustomerList',
                    'somethingimportant':'whatissoimportant',
                    'format':'json'            
                };

                jQuery.ajax({
                    url: url,
                    data: data,
                    type:'GET',
                    dataType:'json',

                }).done(function(json){
                    jQuery(json).each(function(index,customer){
                        var tr_html = '<tr onclick="myFunction(this)">';
                                    
                        if(index==0){
                            jQuery(customer).each(function(index,column){
                                tr_html += '<th>' + column + '</th>';
                            });                            
                        }else{
                            jQuery(customer).each(function(index,column){
                                tr_html += '<td>' + column + '</td>';
                                });
                        }
                        
                        jQuery('#data').append(tr_html+'</tr >');
                       
                    })
                });              
            });    
        }
        function myFunction(x) {
    alert("Row index is: " + x.rowIndex);
}
function getTableData(table) {
    var data = [];
    table.find('tr').each(function (rowIndex, r) {
        var cols = [];
        $(this).find('th,td').each(function (colIndex, c) {
            cols.push(c.textContent);
        });
        data.push(cols);
    });
    return data;
}