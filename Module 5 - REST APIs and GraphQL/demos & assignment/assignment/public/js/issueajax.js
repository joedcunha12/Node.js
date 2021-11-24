$(document).ready(function(){
    $("#datatable").dataTable();
    $("#submitissue").click(function(){

        console.log("Click event triggered");

        $.ajax({
            type: "POST",
            url: "/issue/issueslist",
            data: $("#myform").serialize(),
            success: function(dataString){
                console.log(dataString);
            }
        });
        
    });

});