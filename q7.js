<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" type="text/javascript"></script>
var fun = $.get("www.example.com/api/get/1", function(data){
    console.log(data);
});