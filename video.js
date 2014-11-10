var gallery = [];
$(".video").each(function (i) {
    gallery[i] = {
        href: $(this).attr("xlink:href"),
        title: $(this).attr("title")
    };
    $(this).on("click", function () {
        $.fancybox(gallery, {
            index: i,
            helpers: {
                title: {
                    type: 'inside',
                    position: 'top',
                }
            },
            openSpeed: 'slow',
            closeSpeed: 'slow',
            autoDimensions: true
        });
        return false;
    }); // on
}); // each
