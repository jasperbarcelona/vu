(function() {
  $('.compose-header').on('click', function(e){
    if (e.target == this){
      $('.compose-wrapper').toggleClass('minimized');
    }
  });
})();

(function() {
  $('.compose-header div').on('click', function(e){
    if (e.target == this){
      $('.compose-wrapper').toggleClass('minimized');
    }
  });
})();

(function() {
  $('#newMessageBtn').on('click', function(){
    $('.compose-wrapper').show();
    $(this).attr('disabled',true);
  });
})();

(function() {
  $('.close-compose').on('click', function(){
    $('.compose-wrapper').hide();
    $('#newMessageBtn').attr('disabled',false);
  });
})();

function textCounter(field,field2,maxlimit){
 var countfield = document.getElementById(field2);
  if( field.value.length > maxlimit ){
    field.value = field.value.substring( 0, maxlimit );
  return false;
  }
  else{
    countfield.value = "Remaining: " + (maxlimit - field.value.length);
  }
}

function show_outbound_messages(nav_item){
  $('.sidebar-nav li').removeClass('active');
  $(nav_item).addClass('active');
  $.post('/messaging/outbound/',
  {
    csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val(),
  },
  function(data){
    $('#mainContainer').css('overflow-y','scroll');
    $('#mainContainer').html(data);
  });
}

function show_inbound_messages(nav_item){
  $('.sidebar-nav li').removeClass('active');
  $(nav_item).addClass('active');
  $.post('/messaging/inbound/',
  {
    csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val(),
  },
  function(data){
    $('#mainContainer').css('overflow-y','scroll');
    $('#mainContainer').html(data);
  });
}

(function() {
  $('#inboundTable tbody tr td:not(\'.action-td\')').on('click', function(e){
      open_inbound_message($(this).parent().attr('id'));
  });
})();

(function() {
  $('#subNetForm').on('submit', function(e){
    e.preventDefault();

    alert($('#subNetMask').val());

    $('.form-container').html('<h3 class="nodes-loading">Gathering nodes...</h3>');
    $('#step2').addClass('active');
    $('#line1').addClass('active');

    $.get('/dashboard/nodes/',
    {
      csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val(),
      subnet: $('#subNetMask').val()
    },

    function(data){
      $('#mainContainer').css('overflow-y','scroll');
      $('#mainContainer').html(data);
    });
  });
})();

