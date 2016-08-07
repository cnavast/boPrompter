/** cnavast did this **/
var boPrompter = (function(params){
	this.id = Math.round(Math.random()*1000);
	var defaultParams = {
		'width': 'auto',
		'height': 'auto',
		'animation': true,
		'opacity': .25,
		'title': 'boPrompter Example',
		'subtitle': 'This is a boPrompter!',
		'content': 'How do you turn this on?',
		'closeText': 'close'
	};
	this.params = defaultParams;
	for (var key in params) {
		if (params.hasOwnProperty(key)
			&& this.params.hasOwnProperty(key)) {
			this.params[key] = params[key];
		}
	}

	var screen = document.createElement('div');
	screen.setAttribute('class', 'bop_screen');
	screen.style.background = 'rgba(0,0,0,'+this.params.opacity+')';
	screen.setAttribute('id', 'bop_screen_'+this.id);

	var card = document.createElement('div');
	card.setAttribute('class', 'bop_card');
	card.style.width = this.params.width;
	card.style.height = this.params.height;
	card.setAttribute('id', 'bop_card_'+this.id);
	if (this.params.animation) {
		card.setAttribute('class', 'bop_card bop_card_anim');
	}

	var header = document.createElement('header');
	header.setAttribute('class', 'bop_card--container bop_card--header');
	header.setAttribute('id', 'bop_card_header_'+this.id);

	var title = document.createElement('h1');
	var titleText = document.createTextNode(this.params.title);
	title.setAttribute('id', 'bop_card_header_title_'+this.id);

	var container = document.createElement('div');
	container.setAttribute('class', 'bop_card--container');
	container.setAttribute('id', 'bop_card_container_'+this.id);

	var subtitle = document.createElement('div');
	var subtitleText = document.createTextNode(this.params.subtitle);
	subtitle.setAttribute('id', 'bop_card_subtitle_'+this.id);

	var content = document.createElement('div');
	content.setAttribute('id', 'bop_card_content_'+this.id);

	var closeBtn = document.createElement('button');
	closeBtn.setAttribute('class','bop_close_btn');
	closeBtn.setAttribute('id', 'bop_card_close_'+this.id);
	var closeBtnText = document.createTextNode(this.params.closeText);

	title.appendChild(titleText);
	header.appendChild(title);
	card.appendChild(header);
	subtitle.appendChild(subtitleText);
	container.appendChild(subtitle);
	container.appendChild(document.createElement('hr'));
	content.innerHTML = this.params.content;
	container.appendChild(content);
	card.appendChild(container);
	closeBtn.appendChild(closeBtnText);
	card.appendChild(closeBtn);
	screen.appendChild(card);
	this.html = screen;

	this.show = (function() {
		document.body.appendChild(this.html);
		closeBtn.addEventListener("click", this.close.bind(this));
		return true;
	});

	this.close = (function() {
		document.body.removeChild(this.html);
		return true;
	});

	this.editContent = (function(newContent){
		content.innerHTML = newContent;
		return true;
	});

	this.editTitle = (function(newTitle){
		titleText.nodeValue = newTitle;
		return true;
	});
});

