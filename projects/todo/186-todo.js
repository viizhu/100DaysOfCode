$("#addNew").on("click", function() {
  $("#input").slideToggle();
});

$("li").on("mouseenter", function(){
  $(this).find(".delButton").toggle("slide", 1000);
  $(this).find(".delButton").attr("style", "display: block");
});

$("li").on("mouseleave", function(){
  $(this).find(".delButton").toggle("slide", 1000);
  $(this).find(".delButton").attr("style", "display: none");
});
