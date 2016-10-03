/* Cookie Consent */
window.cookieconsent_options = {"message":"Durch den Besuch dieser Webseite erklären Sie sich damit einverstanden, dass Cookies auf Ihrem Endgerät gespeichert werden dürfen.","dismiss":"Alles klar!","learnMore":"Mehr Informationen","link":"https://blog.marvin-menzerath.de/datenschutzerklaerung/","theme":"/theme/css/cookieconsent.min.css"};

/* Navigation */
$("#toggleNav").click(function() {
	$("#sidebar-internal").toggle(200);
	$("#toggleNavIcon").toggleClass("fa-angle-down fa-angle-up");
});

/* Piwik */
var _paq = _paq || [];
_paq.push(["setDomains", ["*.blog.marvin-menzerath.de"]]);
_paq.push(['trackPageView']);
_paq.push(['enableLinkTracking']);
(function() {
	var u="//piwik.marvin-menzerath.de/";
	_paq.push(['setTrackerUrl', u+'piwik.php']);
	_paq.push(['setSiteId', '1']);
	var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
	g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'piwik.js'; s.parentNode.insertBefore(g,s);
})();

/* Seite fertig geladen */
$(document).ready(function() {
	Prism.highlightAll();
	$(".post-content").fitVids();
	(adsbygoogle = window.adsbygoogle || []).push({});
});
