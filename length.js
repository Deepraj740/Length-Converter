var fet = document.getElementById("fet");
var inc = document.getElementById("inc");
fet.addEventListener("input", function () {
  var i = this.value;
  var f = i * 12;
  inc.value = f;
});
inc.addEventListener("input", function () {
  var f = this.value;
  var c = f / 12;
  fet.value = c;
});
