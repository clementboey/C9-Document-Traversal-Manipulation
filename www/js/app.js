function multiply(){
    var from, result;
    from = parseInt($("#txtFrom").val());
    $("#lstMultiplicationTable").empty();
    
    for (var i=1; i<=10; i++){
        result = from * i;
        
		$("#lstMultiplicationTable").append(
            '<button class="btn widget uib_w_8 d-margins btn-default" data-uib="twitter%20bootstrap/button" data-ver="1" onclick="validationMsgs(' 
            + result 
            + ', &quot;Information&quot;, &quot;OK&quot;)">' 
            + from 
            + " x " 
            + i + '</button>'
        );
    }
}