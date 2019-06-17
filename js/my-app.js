// Initialize your app
var myApp = new Framework7({
	root:'#app',
	theme: 'md', //ios, md, auto
    modalTitle: 'Framework7', 	//title for modals
	panel: {
    	swipe: 'left',
  	},
	cache:false,
	pushState:false,
	swipeBackPage:true,
	material: true,
	routes: [
		{
		path: '/home/',
    	url: 'index.html',
    	name: 'home',
  		},
		
		{
		path: '/list/',
    	url: 'list.html',
    	name: 'list',
  		},
		
		{
		path: '/cards/',
    	url: 'cards.html',
    	name: 'cards',
  		},
		{
		path: '/medicinageneral/',
    	url: 'medicinageneral.html',
    	name: 'medicinageneral',
  		},
		{
		path: '/aboutus/',
    	url: 'aboutus.html',
    	name: 'aboutus',
  		},
		{
		path: '/homepage/',
    	url: 'homepage.html',
    	name: 'homepage',
  		},
		{
		path: '/nutricion/',
    	url: 'nutricion.html',
    	name: 'nutricion',
  		},
		{
		path: '/oncologia/',
    	url: 'oncologia.html',
    	name: 'oncologia',
  		},
		
		{
		path: '/signin/',
    	url: 'signin.html',
    	name: 'signin',
  		},
		
		{
		path: '/infomariolopez/',
    	url: 'infomariolopez.html',
    	name: 'infomariolopez',
  		},
		
		{
		path: '/register/',
    	url: 'register.html',
    	name: 'register',
  		}
		
		
		
	]
});

// Export selectors engine
var $$ = Dom7;





 

