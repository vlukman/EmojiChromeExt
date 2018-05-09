var clipboard = new ClipboardJS('.emo-btn', {
  text: function(trigger) {
    return trigger.innerText;
  }
});

$('.toggle').click(function(e) {
	e.preventDefault();

  var $this = $(this);

  if ($this.next().hasClass('show')) {
      $this.next().removeClass('show');
      $this.next().slideUp(350);
  } else {
      $this.parent().parent().find('li .inner').removeClass('show');
      $this.parent().parent().find('li .inner').slideUp(350);
      $this.next().toggleClass('show');
      $this.next().slideToggle(350);
  }
});

$('.emo-btn').click(function(e) {
 	var btn = $(this);
	var text = btn.text();
	btn.fadeOut(200, function(){
		btn.text('Copied!').fadeIn(200);
		setTimeout(function(){ 
      btn.text(text);
    }, 500);
  });
});