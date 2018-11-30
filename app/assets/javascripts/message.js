$(document).on('turbolinks:load', function () {
    function buildHTML(message){
      var image = (message.image)? `<img class="lower-message__image" src="${message.image}">` : "";

      var html = `<div class= "main__message-content__box" data-id=${ message.id}>
                      <div class= "main__message-content__box__user-name" >${message.user_name}
                      </div>
                      <div class = "main__message-content__box__time" >${message.date}
                      </div>
                      <div class ="main__message-content__box__text" >${message.body}
                      </div>
                        ${image}
                    </div>`
      return html;
    }
    $('#new_message').on('submit', function(e){
        e.preventDefault();
        var formData = new FormData(this);
        var url = $(this).attr('action')

        $.ajax({
          url: url,
          type: "POST",
          data: formData,
          dataType: 'json',
          processData: false,
          contentType: false
        })
          .done(function(data){
            var html = buildHTML(data);
            $messages = $(".main__message-content");
            $messages.append(html);
            $('#new_message')[0].reset();
            $messages.animate({scrollTop: $messages[0].scrollHeight}, 'fast');
          })
           .fail(function(){
             alert('error');
           })
           .always(function(){
            $(".form__submit").prop("disabled", false);
            })
         });

  $(function() {
    var interval = setInterval(function() {
      if (location.href.match(/\/groups\/\d+\/messages/)){
        var messageId = $('.main__message-content__box').last().data('id');
          $.ajax({
            url: location.href,
            type: "GET",
            data: {id: messageId},
            dataType: 'json'
          })
          .done(function(data){
            data.forEach(function(message){
            var html = buildHTML(message);
            $messages = $(".main__message-content");
            $messages.append(html);
            $messages.animate({scrollTop: $messages[0].scrollHeight}, 'fast');
            })
          })
           .fail(function(){
             alert('自動更新error');
           })
      } else {
        clearInterval(interval);
      }} , 5000 );
    });
  });
