$(document).ready(function(){
    $("#FormControlSelect3").on("change", function(){
        var cabtype = $("#FormControlSelect3").val();
        if (cabtype == "CedMicro") {
            $("#luggage").prop("disabled", true);
            $("#luggage").val(null);
        } else {
            $("#luggage").prop("disabled", false);
        }
    });
    $("#submit_form").submit( function(event){
        var currentloc= $("#FormControlSelect1").val();
        var droploc= $("#FormControlSelect2").val();
        var cabtype = $("#FormControlSelect3").val();
        var luggage = $("#luggage").val();
        if( currentloc == droploc) {
            alert("PickUp and Destination must be different");
        } else if (currentloc == "Current Location" || droploc == "Drop for ride estimate" || cabtype == "Dropdown to select cab type") {
            alert("Please Select the Valid Inputs");
        } else {
            $.ajax({
                method: 'POST',
                url: 'ajax.php',
                dataType: 'text',
                data: {
                    currentloc: currentloc,
                    droploc: droploc,
                    cabtype: cabtype,
                    luggage: luggage
                },
                success: function(response) {
                    $('#res').css('display', 'block');
                    $('#result').html(response);
                }
            })
        }
        event.preventDefault();
    });
});