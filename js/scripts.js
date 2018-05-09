var excitedJson = [
      "(((o(*ﾟ▽ﾟ*)o)))",
      "o((*^▽^*))o",
      "Ｏ(≧▽≦)Ｏ",
      "o(〃＾▽＾〃)o",
      "o(^▽^)o",
      "Ｏ(≧∇≦)Ｏ",
      "o(≧∇≦o)",
      "σ(≧ε≦ｏ)",
      "o(*^▽^*)o",
      "⌒°(❛ᴗ❛)°⌒",
      "o(^∀^*)o",
      "o(^◇^)o",
      "《《o(≧◇≦)o》》",
      "o(*≧□≦)o",
      "o(*>ω<*)o"
    ];

var clipboard = new ClipboardJS('.emo-btn');

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

$(document).ready(function() {
  var mainAccordion = $('#main-accordion');
  if (mainAccordion) {
    console.log( "ready!" );
    var testContent = createEmojiSectionDOM("Excited", [excitedJson]);
    mainAccordion.append(testContent);
  }
});