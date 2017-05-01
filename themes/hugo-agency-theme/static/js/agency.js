// Smooth scrolling via animate()
$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash && window.location.pathname == "/") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });
});

// Navigation change on scroll
$(document).ready(function(){
  var maxOffset = 300;
  $(window).scroll(function() {
    if ($(window).scrollTop() >= maxOffset) {
      $('.navbar-default').addClass('navbar-shrink');
    }
    else {
      $('.navbar-default').removeClass('navbar-shrink');
    }
  });
});

$(document).ready(function(){
  var maxOffset = 300;
  if ($(window).scrollTop() >= maxOffset) {
    $('.navbar-default').addClass('navbar-shrink');
  }
  else {
    $('.navbar-default').removeClass('navbar-shrink');
  }
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// // Async contact form
// $('form[id=contactForm]').submit(function(){
//   debugger;
//   $.post($(this).attr('action'), $(this).serialize(), function(res){
//     $('form[id=contactForm] #success').hide();
//     $('form[id=contactForm] #error').hide();
//     if (res.code == "200")
//       $('form[id=contactForm] #success').show();
//     }).fail(function(){
//     $('form[id=contactForm] #success').hide();
//     $('form[id=contactForm] #error').hide();
//     $('form[id=contactForm] #error').show();
//   });
//   return false;
// });
//
// // Contact form validation
// $.validate({
//   modules : 'html5, toggleDisabled'
// });

// Ajax contact
function contactForm () {
  var form = $('#contactForm')
  form.submit(function () {
    $this = $(this)
    $.post($(this).attr('action'),
      $this.serialize(),
      function () {
        $this[0].reset() // clear form

        $('#contact-message')
        .html('<div class="alert alert-success" role="alert"><button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">×</span><span class="sr-only">Close</span></button>Thank you for getting in touch. We will get back to you soon!</div>')
        .fadeIn()
      }
      , 'json')
    return false
  })
}
