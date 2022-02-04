// (function() {
//   jQuery(document).on('turbolinks:load', function() {
//     var comments;
//     comments = $('#comments');
//     if (comments.length > 0) {
//       App.global_chat = App.cable.subscriptions.create({
//         channel: "BlogsChannel",
//         blog_id: comments.data('blog-id')
//       }, {
//         connected: function() {},
//         disconnected: function() {},
//         received: function(data) {
//           return comments.append(data['comment']);
//         },
//         send_comment: function(comment, blog_id) {
//           return this.perform('send_comment', {
//             comment: comment,
//             blog_id: blog_id
//           });
//         }
//       });
//     }
//     return $('#new_comment').submit(function(e) {
//       var $this, textarea;
//       $this = $(this);
//       textarea = $this.find('#comment_content');
//       if ($.trim(textarea.val()).length > 1) {
//         App.global_chat.send_comment(textarea.val(), comments.data('blog-id'));
//         textarea.val('');
//       }
//       e.preventDefault();
//       return false;
//     });
//   });
//   
//   // alert("I am an alert box!");
// }).call(this);


import consumer from "./consumer"

const App = {
  global_chat: undefined
}

$(document).on('turbolinks:load', function () {

  let comments = $('#comments');

  if (comments.length > 0) {
    App.global_chat = consumer.subscriptions.create({channel: "BlogChannel", blog_id: comments.data('blog-id')}, {
      connected() {
        // Called when the subscription is ready for use on the server
      },
    
      disconnected() {
        // Called when the subscription has been terminated by the server
      },
    
      received(data) {
        // Called when there's incoming data on the websocket for this channel
        comments.append(data['comment']);
      },
    
      send_comment(comment, blog_id) {
        console.log(blog_id);
        this.perform('send_comment', {comment: comment, blog_id: blog_id});
      }  
    
    });
  };

  $('#new_comment').submit((e) => {
    let $this = $(this)
    let textarea = $this.find('#comment_content')
    if ($.trim(textarea.val()).length > 1){
        App.global_chat.send_comment(textarea.val(), comments.data('blog-id'));
        textarea.val('');
    };
    e.preventDefault()
    return false;
  });   
});







