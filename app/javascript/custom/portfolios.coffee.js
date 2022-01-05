// alert("Hey there");
// ready = undefined
// 
// ready = -> 
//   $('.sortable').sortable()
//   return
// 
// $(document).ready ready



(function() {
  var ready;

  ready = void 0;

  ready = function() {
    $('.sortable').sortable();
  };

  $(document).ready(ready);

}).call(this);

