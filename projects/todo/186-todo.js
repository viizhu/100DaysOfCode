//Toggle add new to do input when clicking the +
$("#addNew").on("click", function() {
  $("#input").slideToggle();
});

//When mouse enters LI, add delete button
$("ul").on("mouseenter", "li", function(){
  $(this).find(".delButton").toggle("slide", 1000);
  $(this).find(".delButton").attr("style", "display: block");
});

//When mouse leaves the LI, remove the delete button
$("ul").on("mouseleave", "li", function(){
  $(this).find(".delButton").slideToggle();
  $(this).find(".delButton").attr("style", "display: none");
});

//When pressing enter in the to do box, add it as a new LI
$("input").keypress(function(event) {
  if(event.which === 13) {
   $("ul").append("<li><span class=\"delButton\" style=\"display: none\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i></span>"
   + "<span class=\"todo\">" + $("input").val() + "</span></li>");
    $("input").val("");
  }
});

//When clicking on the trash can, remove that LI
$("ul").on("click", "li .delButton", function(){
  $(this).parent().toggle("slide", 1000);
  $(this).parent().remove();
});

//Click on the to do item will cross it out
$("ul").on("click", "li .todo", function() {
  $(this).toggleClass("done");
});
