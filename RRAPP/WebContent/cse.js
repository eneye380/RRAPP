(function(opts_)
{
	window.__gcse=window.__gcse||{};
	window.__gcse.ct=(new Date).getTime();
	window.__gcse.sacb=function(){};
	window.__gcse.scb=function()
	{
		var a=window.__gcse;
		a.plainStyle&&delete opts_.rawCss;
		google.search.cse.element.init(opts_)&&("explicit"!=a.parsetags?"complete"==document.readyState||"interactive"==document.readyState?(google.search.cse.element.go(),a.callback&&a.callback()):google.setOnLoadCallback(function()
		{
			google.search.cse.element.go();
			a.callback&&a.callback();
		},!0):a.callback&&a.callback());
	};
	var b=document.createElement("script");
	var c=opts_.protocol+"://"+opts_.uds+"/jsapi?autoload=";
	var d=encodeURIComponent,e='{"name":"search","version":"1.0","callback":"__gcse.scb"';
	var f=window.__gcse;
	if(!f||!f.plainStyle)
	{
		var g=opts_.protocol+(opts_.uiOptions&&opts_.uiOptions.enableMobileLayout?"://www.google.com/cse/style/look/mobile/":"://www.google.com/cse/style/look/"),h;
		h=opts_.theme.toLowerCase().replace("v2_","v2/");
		e+=',"style":"'+(g+h+".css")+'"';
	}
	opts_.language&&(e+=',"language":"'+opts_.language+'"');
	e+="}";
	b.src=c+d('{"modules":['+e+',{"name":"ads","version":"3","packages":["search"],"callback":"__gcse.sacb"}]}')+"";
	b.type="text/javascript";
	document.getElementsByTagName("head")[0].appendChild(b);
})(
		{"theme":"V2_DEFAULT","protocol":"http","uds":"www.google.com"}
  );