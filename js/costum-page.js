function adjustSize(o) {
    o.style.setProperty("line-height", "20px", "important");
    o.rows=5;
    if (o.value.length > 30) {
        o.style.setProperty("overflow-y", "scroll", "important");
    }
}

function removeSize(o) {
    if (o.value.length < 1) {
        o.style.setProperty("line-height", "10px", "important");
        o.rows="0";
    }
    else {
        o.style.setProperty("line-height", "18px", "important");
    }

    if (o.rows == 5) {
        o.style.setProperty("overflow-y", "hidden", "important");
    }
}

function directToSection(id) {
    $('html,body').animate({scrollTop: $("#"+id).offset().top},'slow');
}

$(document).ready(function() {
    $("select").change(function() {
        $(this).find("option:selected").each(function() {
            var optionValue = $(this).attr("vaLue");
            if(optionValue) {
                $(".portofolio-box").not("." + optionValue).hide();
                $("." + optionValue).show();
            }
            else {
                $(".portofolio-box").hide();
            }
        });
    }).change();
});