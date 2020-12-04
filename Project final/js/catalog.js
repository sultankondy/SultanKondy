$(document).ready(function(){
    $("#filter").keyup(function(){
        var filter = $(this).val(), count = 0;
 
        $(".catalog-items_inner .item-catalog").each(function(){
            if ($(this).text().search(new RegExp(filter, "i")) < 0) {
                $(this).fadeOut();
            } else {
                $(this).show();
                count++;
            }
        });

        var numberItems = count;
        $("#filter-count").text(count + " items");
    });
});