$(document).ready(function(){

  $('form').on('submit', function(){
      console.log('kicken');
      var item = $('form input');
      var comment = {item: item.val()};

      $.ajax({
        type: 'POST',
        url: '/comment',
        data: comment,
        success: function(data){
          //do something with the data via front-end framework
          location.reload();
        }
      });

      return false;

  });

  $('li').on('click', function(){
      var item = $(this).text().replace(/ /g, "-");
      $.ajax({
        type: 'DELETE',
        url: '/todo/' + item,
        success: function(data){
          //do something with the data via front-end framework
          location.reload();
        }
      });
  });

});