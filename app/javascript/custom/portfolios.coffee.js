// alert("Hey there");
  ////////// Convert coffee to js
  // https://awsm-tools.com/code/coffee2js

// ready = undefined
// set_positions = undefined
// 
// set_positions = ->
//   $('.card').each (i) -> 
//     $(this).attr 'data-pos', i + 1
//     return
//   return
// 
// ready = -> 
//   set_positions()
//   $('.sortable').sortable()
//   $('.sortable').sortable().bind 'sortupdate', (e, ui) -> 
//     update_order = []
//     set_positions()
//     $('.card').each (i) ->
//       update_order.push
//         id: $(this).data('id')
//         position: i + 1
//       return
//     /////////  Comunication with rails  /////////
//     $.ajax
//       type: 'PUT'
//       url: '/portfolios/sort'
//       data: order: update_order
//     return
// 
//   return
// 
// $(document).ready ready


///////////////////////////////////////
//////////////////////////////////////
///////////////////////////////////////
//////////////////////////////////////
// (function() {
//   var ready;
// 
//   ready = void 0;
// 
//   ready = function() {
//     $('.sortable').sortable();
//   };
// 
//   $(document).ready(ready);
// 
// }).call(this);

///////////////////////////////////////
//////////////////////////////////////
///////////////////////////////////////
//////////////////////////////////////




(function() {
  var ready, set_positions;

  ready = void 0;

  set_positions = void 0;

  set_positions = function() {
    $('.card').each(function(i) {
      $(this).attr('data-pos', i + 1);
    });
  };

  ready = function() {
    set_positions();
    $('.sortable').sortable();
    $('.sortable').sortable().bind('sortupdate', function(e, ui) {
      var update_order;
      update_order = [];
      set_positions();
      $('.card').each(function(i) {
        update_order.push({
          id: $(this).data('id'),
          position: i + 1
        });
      });
      $.ajax({
        type: 'PUT',
        url: '/portfolios/sort',
        data: {
          order: update_order
        }
      });
    });
  };

  $(document).ready(ready);

  

}).call(this);