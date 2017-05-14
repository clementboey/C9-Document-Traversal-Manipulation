function multiply(){
    var from, result;
    from = parseInt($("#txtFrom").val());
    $("#lstMultiplicationTable").empty();
    
    for (var i=1; i<=10; i++){
	   result = from * i;
    
        $("#lstMultiplicationTable").append(
            '<a class="list-group-item allow-badge" data-uib="twitter%20bootstrap/list_item" data-ver="1">'+
            '<h4 class="list-group-item-heading">'+ from + ' x ' + i + '</h4>'+
            '<p class="list-group-item-text">' + result + '</p>'+
            '</a>'
        );
    }
}