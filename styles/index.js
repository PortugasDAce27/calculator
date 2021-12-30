// here the value of clicked button is added to input textbox with have id as display
$(".num").click(function() {
  $("#display").val($("#display").val() + $(this).val());

});
// this anonymous function clears the value of textbox input with id display
$(".clear").click(function() {
  $("#display").val("");
});

// this function deletes the last entry from the textbox input with id display
$(".del").click(function() {
  $("#display").val($("#display").val().slice(0, -1));
})
// this functions adds the sums done intothe history pane
$(".his").click(function() {
  $("#history").val($("#history").val() + $(this).val());

})

// this fucntions uses eval method which can evaluate the arithmetic equations which are in string format
$(".equal").click(function() {
  $("#display").val(eval($("#display").val()));
  $("#history").val($("#history").val() + eval($("#display").val()) + ",");
})
