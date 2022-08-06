jQuery(document).ready(function($) {
    var socket = io("http://laocaitv.vn:6969");
    var url = $('input[name="totalViewLink"]').val();
    var _token = $('input[name="tovalViewToken"]').val();

    socket.on("server-return-connect", function(data) {
        $('.total-online').html(data);
        $.ajax({
            type: "POST",
            url: url,
            data: {
                _token: _token
            }
        })
        .done(function(resp) {
            // $('.player-content-wrapper').html("");
            // $('.player-content-wrapper').append(resp.data);
        });
    });

    socket.on("server-return-disconnect", function(data) {
        $('.total-online').html(data);
    });
})


