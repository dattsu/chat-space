$(function() {
  function buildHTML(message){
    if ( message.image ) {
      var html = `<div class= "main__message-content__box" >
                    <div class= "main__message-content__box__user-name" >${message.user_name}
                    </div>
                    <div class = "main__message-content__box__time" >${message.created_at})
                    </div>
                    <div class ="main__message-content__box__text" >${message.body}
                    </div>
                      <asset_path src=${message.image_url} >
                  </div>`
    } else {
      var html = `<div class= "main__message-content__box" >
                    <div class= "main__message-content__box__user-name" >${message.user_name}
                    </div>
                    <div class = "main__message-content__box__time" >${message.created_at})
                    </div>
                    <div class ="main__message-content__box__text" >${message.body}
                    </div>
                  </div>`
      return html;
    };
  }


  $('.form__message_send').on('submit', function(e){
      e.preventDefault();
      // var $form = $(this)
      var formData = new FormData(this);
      var url = $(this).attr('action')
      $.ajax({
        url: "./messages",
        type: "POST",
        data: formData,
        dataType: 'json',
        processData: false,
        contentType: false
      })
        .done(function(data){
          var html = buildHTML(data);
          console.log(data)
          $messages = $(".main__message-content");
          $messages.append(html);
          $('form')[0].reset();
          $('.form__message_send').val('');
          $messages.animate({
            scrollTop: $messages[0].scrollHeight}, 'fast'
           );
        })
         .fail(function(){
           alert('error');
         });
         return false;
         });
});
