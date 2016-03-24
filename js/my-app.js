var myApp = new Framework7({
	modalTitle: 'Framework7',
	animateNavBackIcon: true,
});
var $$ = Dom7;
// Add main view
var mainView = myApp.addView('.view-main', {
	// Enable Dynamic Navbar for this view

});
var storedData1 = myApp.formGetData('logged_userId');
mainView.router.loadPage('home_news.html');
		$$('#login').show();
		$$('#myprofilemenu').hide();
		$$('#logout').hide();
		$$('#home_news').hide();
function Checklogin(){

	if(storedData1['userId'] == ''){

		$$('#home_news').show();
		$$('#myprofilemenu').show();
		$$('#logout').show();
		// $$('#login').show();
		// $$('#myprofilemenu').hide();
		// $$('#logout').hide();
		// $$('#home_news').hide();
		mainView.router.loadPage('home_news.html');
	}else{

		$$('#home_news').show();
		$$('#myprofilemenu').show();
		$$('#logout').show();
		$$('#login').hide();
		mainView.router.loadPage('news.html');
	}
}

//localStorage.removeItem("email");
	// if(localStorage.getItem("email") === null)
	// console.log('hhh='+storedData1);
	// if(storedData1 === undefined)
	// {
	// // myApp.alert('No Web Storage support');
	//  $$('#signupmenu').show();
	//  $$('#myprofilemenu').hide();
	//  $$('#comment-panel').hide();
	//  $$('#home_news').show();
	//  $$('#latestnews').hide();
	// }else{
	//  $$('#signupmenu').hide();
	// $$('#myprofilemenu').show();
	// $$('#comment-panel').show();
	// $$('#home_news').hide();
	//  $$('#latestnews').show();
	// }

// function Checklogin(){

// }
// Checklogin();

function getnews() {
	// Compile and render
	var compiledTemplate = Template7.compile($$("#news-template").html());

	$$('.navbar').show();

	var start = $$('#news_limit_start').val();
	//var end = $$('#news_limit_end').val();

	if(start=="")
	{
		$$('#news_limit_start').val(4);
		//$$('#news_limit_end').val(10);

		start = $$('#news_limit_start').val();
		//end = $$('#news_limit_end').val();
		var limit = start;
	}else{

		start = parseInt(start)+parseInt(4);
		//alert(start);
		$$('#news_limit_start').val(start);
		//$$('#news_limit_end').val(end);
		//alert(start);
		limit = start;
	}
		// Get JSON Data from UrbanDictionary API 
		$$.getJSON ('http://www.bridgingandcommercial.co.uk/ws.php?type=news&userid='+storedData1['userId']+'&limit='+limit+'&format=json', function (json) {

		// Insert rendered template
			$$('#content-wrap').html(compiledTemplate(json));

		});
};



// Option 2. Using live 'pageInit' event handlers for each page
$$(document).on('pageInit', '.page[data-page="news"]', function (e) {
	// Following code will be executed for page with data-page attribute equal to "about"
	//myApp.alert('Here comes news page');
	// Loading flag
	getnews();
	var loading = false;

	// Attach 'infinite' event handler
	// Attach 'infinite' event handler
	$$('.infinite-scroll').on('infinite', function () {

		// Exit, if loading in progress
		if (loading) return;

		// Set loading flag
		loading = true;

		// Emulate 1s loading
		setTimeout(function (){
		// Reset loading flag
			loading = false;

			getnews();

		}, 1000);
	});
});

function gethomeNews(){
	// Compile and render
var compiledTemplate = Template7.compile($$("#homenews-template").html());

$$('.navbar').show();

var start = $$('#home_news_limit_start').val();
//var end = $$('#news_limit_end').val();

if(start==""){
 $$('#home_news_limit_start').val(10);
 //$$('#news_limit_end').val(10);

 start = $$('#home_news_limit_start').val();
 //end = $$('#news_limit_end').val();
var limit = start;
}else{
start = parseInt(start)+parseInt(10);
//alert(start);
 $$('#home_news_limit_start').val(start);
 //$$('#news_limit_end').val(end);
//alert(start);
 limit = start;

}
	// Get JSON Data from UrbanDictionary API 
	$$.getJSON ('http://www.bridgingandcommercial.co.uk/ws.php?type=homenews&limit='+limit+'&format=json', function (json) {

	// Insert rendered template
	$$('#content-wrap2').html(compiledTemplate(json));
	});
};

// Option 2. Using live 'pageInit' event handlers for each page
$$(document).on('pageInit', '.page[data-page="home_news"]', function (e) {
  // Following code will be executed for page with data-page attribute equal to "about"
  //myApp.alert('Here comes news page');
 // Loading flag
 gethomeNews();
var loading = false;
 
// Attach 'infinite' event handler
// Attach 'infinite' event handler
$$('.infinite-scroll').on('infinite', function () {
 
  // Exit, if loading in progress
  if (loading) return;
 
  // Set loading flag
  loading = true;
 
  // Emulate 1s loading
  setTimeout(function () {
    // Reset loading flag
    loading = false;

    gethomeNews();
    
  }, 1000);
});


});

function getfeatures() {
// Compile and render
var compiledTemplate = Template7.compile($$("#features-template").html());

	var start = $$('#feature_news_limit_start').val();

	if(start==""){
	 $$('#feature_news_limit_start').val(10);
	 //$$('#news_limit_end').val(10);

	 start = $$('#feature_news_limit_start').val();
	 //end = $$('#news_limit_end').val();
	var limit = start;
	}else{
	start = parseInt(start)+parseInt(10);
	//alert(start);
	 $$('#feature_news_limit_start').val(start);
	 //$$('#news_limit_end').val(end);
	//alert(start);
	limit = start;

	}

	// Get JSON Data from UrbanDictionary API 
	$$.getJSON ('http://www.bridgingandcommercial.co.uk/ws.php?type=features&limit='+limit+'&format=json', function (json) {

	// Insert rendered template
	document.getElementById('features-content').innerHTML = compiledTemplate(json);
	
	});
};
// Option 2. Using live 'pageInit' event handlers for each page
$$(document).on('pageInit', '.page[data-page="features"]', function (e) {
  // Following code will be executed for page with data-page attribute equal to "about"
  //myApp.alert('Here comes news page');
 // myApp.alert(localStorage.name);

  getfeatures();
  var loading = false;
 
// Attach 'infinite' event handler
// Attach 'infinite' event handler
$$('.infinite-scroll').on('infinite', function () {
 
  // Exit, if loading in progress
  if (loading) return;
 
  // Set loading flag
  loading = true;
 
  // Emulate 1s loading
  setTimeout(function () {
    // Reset loading flag
    loading = false;
 
    getfeatures();
    
  }, 1000);
});
});


function getblogs() {
// Compile and render
var compiledTemplate = Template7.compile($$("#blogs-template").html());

	// Get JSON Data from UrbanDictionary API 
	$$.getJSON ('http://www.bridgingandcommercial.co.uk/ws.php?type=blogs&format=json', function (json) {

	// Insert rendered template
	document.getElementById('blogs-content').innerHTML = compiledTemplate(json);
	});
};
// Option 2. Using live 'pageInit' event handlers for each page
$$(document).on('pageInit', '.page[data-page="blogs"]', function (e) {
  // Following code will be executed for page with data-page attribute equal to "about"
  //myApp.alert('Here comes news page');
  getblogs();
})


// Execute to list UrbanDictionary Definitions

$$(document).on('pageInit', function (e) {

	var page = e.detail.page;
	// Code for About page
	if (page.name === 'news-details') {

		var x = page.query.id;
		var compiledTemplate = Template7.compile($$("#news-details-template").html());
			// Get JSON Data from UrbanDictionary API 
			$$.getJSON ('http://www.bridgingandcommercial.co.uk/ws.php?type=selectarticle&format=json&condition= id='+x, function (json) {

				// Insert rendered template
				document.getElementById('content-details').innerHTML = compiledTemplate(json);

				$$(".desc img").each(function () {
						var x= $$(this).attr("src");
						var y='http://www.bridgingandcommercial.co.uk'+x;
						console.log(y);
						$$(this).attr("src", y)// changing src
						.attr('data-delaySrc', $$(this).attr("src")); ;// you can use 'data-' for having a valid attribute
					});
				$$(".desc a").each(function () {
						var x= $$(this).class("src");
						var y='http://www.bridgingandcommercial.co.uk'+x;
						console.log(y);
						$$(this).attr("src", y)// changing src
						.attr('data-delaySrc', $$(this).attr("src")); ;// you can use 'data-' for having a valid attribute
					});
				if(localStorage.getItem("email") === null)
				{
				// myApp.alert('No Web Storage support');
					$$('#commentpanel').hide();
				}else{
					$$('#commentpanel').show();
				}

				var srcDesc = "http://www.bridgingandcommercial.co.uk/ws.php?type=selectarticle&format=json&condition= id="+x;

				$$('#Socilalsharing').append('<div class="item-content"><div class="item-media"></div><div class="item-inner" style="text-align: center;"><div class="item-title label" style="width: 20%;" onclick="window.plugins.socialsharing.share(null, null,null, \''+srcDesc+'\')"><i class="fa fa-share-alt-square" style="font-size: 45px;"></i><p><b>share</b></p></div></div></div>');

			});
	}
});

// Execute to list UrbanDictionary Definitions

$$(document).on('pageInit', function (e){

var page = e.detail.page;
// Code for About page
	if (page.name === 'news-details') {

		var x = page.query.id;
		var compiledTemplate = Template7.compile($$("#news-details-template1").html());
			// Get JSON Data from UrbanDictionary API 
			$$.getJSON ('http://www.bridgingandcommercial.co.uk/ws.php?type=relatednews&format=json&keywords=loan,bridging&limit='+x, function (json) {

				// Insert rendered template
				document.getElementById('content-details').innerHTML = compiledTemplate(json);

				$$(".desc img").each(function () {
						var x= $$(this).attr("src");
						var y='http://www.bridgingandcommercial.co.uk'+x;
						console.log(y);
						$$(this).attr("src", y)// changing src
						.attr('data-delaySrc', $$(this).attr("src")); ;// you can use 'data-' for having a valid attribute
				});
				if(localStorage.getItem("email") === null)
				{
					// myApp.alert('No Web Storage support');
					$$('#commentpanel').hide();
				}else{
					$$('#commentpanel').show();
				}
			});
	}
});



// Execute to list UrbanDictionary Definitions

$$(document).on('pageInit', function (e) {

	var page = e.detail.page;
	// Code for About page
	if (page.name === 'news-comment') {
		var x = page.query.id;
		$$('#article-id').val(x);
	}
});

// Execute to list UrbanDictionary Definitions

$$(document).on('pageInit', function (e) {

var page = e.detail.page;
	// Code for About page
	if (page.name === 'lender-details') {
	var x = page.query.id;
	var compiledTemplate = Template7.compile($$("#lender-details-template").html());
		// Get JSON Data from UrbanDictionary API 
			$$.getJSON ('http://www.bridgingandcommercial.co.uk/ws.php?type=select&format=json&table=lenders&columns=id,name,expertise,fundingLines,fsaRegulated,maxLtv,minLoan,maxLoan,term,geoArea,logo,website&condition=active=1 and id='+x, function (json) {

		// Insert rendered template
		document.getElementById('content-details').innerHTML = compiledTemplate(json);
		
	});

	}

});

// Execute to list UrbanDictionary Definitions

$$(document).on('pageInit', function (e) {

var page = e.detail.page;
// Code for About page
if (page.name === 'blogger-details') {
var x = page.query.id;
var compiledTemplate = Template7.compile($$("#blogger-details-template").html());
	// Get JSON Data from UrbanDictionary API 
	$$.getJSON ('http://www.bridgingandcommercial.co.uk/ws.php?type=bloggerarticles&format=json&condition=blogger_id='+x, function (json) {

	// Insert rendered template
	document.getElementById('blogger-details').innerHTML = compiledTemplate(json);
	 $$(".desc img").each(function () {
 			var x= $$(this).attr("src");
 			var y='http://www.bridgingandcommercial.co.uk'+x;
            $$(this).attr("src", y)       // changing src
            .attr('data-delaySrc', $$(this).attr("src")); ;      // you can use 'data-' for having a valid attribute
        });

});

}

});

// Execute to list UrbanDictionary Definitions

$$(document).on('pageInit', function (e) {

var page = e.detail.page;
// Code for About page
if (page.name === 'blog-details') {
var x = page.query.id;
var compiledTemplate = Template7.compile($$("#blog-details-template").html());
	// Get JSON Data from UrbanDictionary API 
		$$.getJSON ('http://www.bridgingandcommercial.co.uk/ws.php?type=select&format=json&table=blogs&columns=id,title,insert_date,content&condition=active=1 and id='+x, function (json) {


	// Insert rendered template
	document.getElementById('blog-details').innerHTML = compiledTemplate(json);
});

}

});

function getpoll() {
// Compile and render
var compiledTemplate = Template7.compile($$("#poll-template").html());

	// Get JSON Data from UrbanDictionary API 
	$$.getJSON ('http://www.bridgingandcommercial.co.uk/ws.php?type=poll&format=json', function (json) {

	// Insert rendered template
	document.getElementById('poll-content').innerHTML = compiledTemplate(json);
	//alert ($$('#pollquestion').val());
  	$$('#pollquestionplacement').html($$('#pollquestion').val());
  	$$('#pollID').val( json['posts']['0']['poll_question_id'] );
	});
};
// Option 2. Using live 'pageInit' event handlers for each page
$$(document).on('pageInit', '.page[data-page="poll"]', function (e) {
  // Following code will be executed for page with data-page attribute equal to "about"
  //myApp.alert('Here comes news page');
  getpoll();
  
})
$$('.page[data-page=“poll”] li').on('change','input[type=radio]',function(e){
  console.log(this.checked, this.value);
})
$$('.indicators').on('click','input[type=radio]',function (e) {

var li = $$(this).val();

console.log(li);

})
function ValidateForm()
{
	var opts = $$('input[name="opt"]');
	var found = false;
	for(var i=0;i<opts.length;i++){
		if(opts[i].checked == true)
		{
		var y='#opt'+i;
		var x=$$(y).val();
		found=true;
		//alert(x);
		makeVote(x);
		}
	}
	if(found ==false)
	myApp.alert("Select your vote!",'Attention');
}
function stripslashes(str) {
  //       discuss at: http://phpjs.org/functions/stripslashes/
  //      original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  //      improved by: Ates Goral (http://magnetiq.com)
  //      improved by: marrtins
  //      improved by: rezna
  //         fixed by: Mick@el
  //      bugfixed by: Onno Marsman
  //      bugfixed by: Brett Zamir (http://brett-zamir.me)
  //         input by: Rick Waldron
  //         input by: Brant Messenger (http://www.brantmessenger.com/)
  // reimplemented by: Brett Zamir (http://brett-zamir.me)
  //        example 1: stripslashes('Kevin\'s code');
  //        returns 1: "Kevin's code"
  //        example 2: stripslashes('Kevin\\\'s code');
  //        returns 2: "Kevin\'s code"

  return (str + '')
    .replace(/\\(.?)/g, function(s, n1) {
      switch (n1) {
        case '\\':
          return '\\';
        case '0':
          return '\u0000';
        case '':
          return '';
        default:
          return n1;
      }
    });
}

function makeVote(x) {
// Get JSON Data from UrbanDictionary API 
	var url = "http://www.bridgingandcommercial.co.uk/ws.php?type=insert&format=json&table=poll_results&columns=poll_question_id,poll_answer_id&values="+$$('#pollquestionId').val()+","+x;
	$$.getJSON (url, function (json) {
	myApp.alert("Thank you for participating in our Poll. Your vote has been successfully cast.",'Success');
	Results();
	mainView.router.loadPage('pollresults.html');
	//alert(x);
	
	});
};

// Execute to list UrbanDictionary Definitions

$$(document).on('pageInit', function (e) {

var page = e.detail.page;
// Code for About page
if (page.name === 'lender-index') {
var compiledTemplate = Template7.compile($$("#lender-index-template").html());
	// Get JSON Data from UrbanDictionary API 
$$.getJSON ('http://www.bridgingandcommercial.co.uk/ws.php?type=lenders&format=json', function (json) {


	// Insert rendered template
	document.getElementById('lender-index-content').innerHTML = compiledTemplate(json);
});

}

});
$$(document).on('pageInit', function (e) {

var page = e.detail.page;
// Code for About page
if (page.name === 'bridge-doctor') {
var compiledTemplate = Template7.compile($$("#bridge-doctor-template").html());
	// Get JSON Data from UrbanDictionary API 
$$.getJSON ('http://www.bridgingandcommercial.co.uk/ws.php?type=bridge-doctor&format=json', function (json) {


	// Insert rendered template
	document.getElementById('bridge-doctor-content').innerHTML = compiledTemplate(json);
});

}

});

$$(document).on('pageInit', function (e) {

var page = e.detail.page;
// Code for About page
if (page.name === 'doctors') {
var compiledTemplate = Template7.compile($$("#doctors-template").html());
	// Get JSON Data from UrbanDictionary API 
$$.getJSON ('http://www.bridgingandcommercial.co.uk/ws.php?type=doctors&format=json', function (json) {


	// Insert rendered template
	document.getElementById('doctors-content').innerHTML = compiledTemplate(json);
});

}

});

$$(document).on('pageInit', function (e) {

var page = e.detail.page;
// Code for About page
if (page.name === 'commercial-clinic') {
var compiledTemplate = Template7.compile($$("#commercial-clinic-template").html());
	// Get JSON Data from UrbanDictionary API 
$$.getJSON ('http://www.bridgingandcommercial.co.uk/ws.php?type=commercial-clinic&format=json', function (json) {


	// Insert rendered template
	document.getElementById('commercial-clinic-content').innerHTML = compiledTemplate(json);
});

}

});

$$(document).on('pageInit', function (e) {
var page = e.detail.page;
// Code for About page
if (page.name === 'personal-profile') {
//var compiledTemplate = Template7.compile($$("#bridge-doctor-template").html());
	// Get JSON Data from UrbanDictionary API 
	
$$.getJSON ('http://www.bridgingandcommercial.co.uk/ws.php?type=select&format=json&table=appcustomers&columns=id,email,bridgingfinance,developmentfinance,commercialfinance,propertynews,alternativefinance,bankingnews,blogs&condition=active=1 and id=1', function (json) {
 //myApp.alert(json['posts'][0].propertynews);
  if(json['posts'][0].bridgingfinance=='false'){$$('#si-bridging-finance').prop('checked',false);}else{$$('#si-bridging-finance').prop('checked',true);}
  if(json['posts'][0].developmentfinance=='false'){$$('#si-development-finance').prop('checked',false);}else{$$('#si-development-finance').prop('checked',true);}
  if(json['posts'][0].commercialfinance=='false'){$$('#si-commercial-finance').prop('checked',false);}else{$$('#si-commercial-finance').prop('checked',true);}
  if(json['posts'][0].propertynews=='false'){$$('#si-property-news').prop('checked',false);}else{$$('#si-property-news').prop('checked',true);}
  if(json['posts'][0].alternativefinance=='false'){$$('#si-alternative-finance').prop('checked',false);}else{$$('#si-alternative-finance').prop('checked',true);}
  if(json['posts'][0].bankingnews=='false'){$$('#si-banking-news').prop('checked',false);}else{$$('#si-banking-news').prop('checked',true);}
  if(json['posts'][0].blogs=='false'){$$('#si-blogs').prop('checked',false);}else{$$('#si-blogs').prop('checked',true);}

 	// Insert rendered template
	//document.getElementById('bridge-doctor-content').innerHTML = compiledTemplate(json);
});
}

});

function signin1() {
// Get JSON Data from UrbanDictionary API 
	var url = "http://www.bridgingandcommercial.co.uk/ws.php?type=insert&format=json&table=appcustomers&columns=name,email,password,notification,newsletter&values='"+$$('#si-name').val()+"','"+$$('#si-email').val()+"','"+$$('#si-password').val()+"','"+$$('#si-notification').prop('checked')+"','"+$$('#si-newsletter').prop('checked')+"'";
	$$.getJSON (url, function (json) {
		if(typeof(Storage) !== "undefined") {
			// Code for localStorage/sessionStorage.
			//myApp.alert('storage support');
			localStorage.email=$$('#si-email').val();    
		} else {
			// Sorry! No Web Storage support..
			myApp.alert('No Web Storage support','Attention');
		}  
		//myApp.alert(localStorage.email);
		$$('#signupmenu').hide();
		$$('#myprofilemenu').show();
		$$('#comment-panel').show();
		
	});
	var url1 = "http://www.bridgingandcommercial.co.uk/ws.php?type=emailverification&format=json&email="+$$('#si-email').val()+"&name="+$$('#si-name').val();
	$$.getJSON (url1, function (json) {
		myApp.alert("Verfication Link has been send to your E-Mail ",'Thank you for Sign In');
		mainView.router.loadPage('login.html');
	});
}

function loginsubmit()
{
	var email = $$('#user_email').val();
	var password = $$('#user_password').val();
	var errorCount = 0;

	$$('#email_error').html('');

	if( email.trim() == '' ){
		$$('#email_error').html('Enter Username');
		errorCount++;
	}else{
		$$('#email_error').html('');
	}
	if( password.trim() == '' ){
		$$('#password_error').html('Enter Password');
		errorCount++;
	}else{
		$$('#password_error').html('');
	}
	if( errorCount > 0 ){
		return false;
	}
	var url = "http://www.bridgingandcommercial.co.uk/ws.php?type=login&format=json&table=appcustomers&condition=email='"+email+"'&password='"+password+"'&active=1";
	$$.getJSON (url, function (json) {

		if( json['posts']['0']['id'] ){
			var storedData = myApp.formStoreData('logged_userId', {
								'userId': json['posts']['0']['id'] 
								});


			storedData1 = myApp.formGetData('logged_userId');
			storedData1['userId']
			myApp.alert("Login Sucessfully",'Success');
			$$('#home_news').show();
			$$('#myprofilemenu').show();
			$$('#logout').show();
			$$('#login').hide();
			mainView.router.loadPage('news.html');
		}else{
			$$('#email_error').html('Enter Valid Details');
			return false;
		}
	});
	
}

function myprofilesubmit() {
// Get JSON Data from UrbanDictionary API 
	var url = "http://www.bridgingandcommercial.co.uk/ws.php?type=update&format=json&table=appcustomers&columns=bridgingfinance='"+$$('#si-bridging-finance').prop('checked')+"',developmentfinance='"+$$('#si-development-finance').prop('checked')+"',commercialfinance='"+$$('#si-commercial-finance').prop('checked')+"',propertynews='"+$$('#si-property-news').prop('checked')+"',alternativefinance='"+$$('#si-alternative-finance').prop('checked')+"',bankingnews='"+$$('#si-banking-news').prop('checked')+"',blogs='"+$$('#si-blogs').prop('checked')+"'&condition=email='"+localStorage.email+"'";
	$$.getJSON (url, function (json) {

//myApp.alert(localStorage.email);

	myApp.alert("Your profile has been updated",'Success');
    mainView.router.loadPage('myprofile.html')
		
	});
};

function submitbdform() {
// Get JSON Data from UrbanDictionary API 
	var url = "http://www.bridgingandcommercial.co.uk/ws.php?type=insert&format=json&table=bridge_doctors&columns=name,email,phone,question&values='"+$$('#bd-name').val()+"','"+$$('#bd-email').val()+"','"+$$('#bd-phone').val()+"','"+$$('#bd-question').val()+"'";
	$$.getJSON (url, function (json) {
	myApp.alert("Thank you for your question. One of the panel will be in touch shortly and your question and answer will be published on the app within a week.",'Success');
    mainView.router.loadPage('bridge-doctor.html')
	//alert(x);
	
	});
};

function submitcommentform() {
// Get JSON Data from UrbanDictionary API 
	var url = "http://www.bridgingandcommercial.co.uk/ws.php?type=insert&format=json&table=comments&columns=name,email,telephone,comment,page_id,type&values='"+$$('#comment-name').val()+"','"+$$('#comment-email').val()+"','"+$$('#comment-phone').val()+"','"+$$('#comment-question').val()+"','"+$$('#article-id').val()+"','article'";
	$$.getJSON (url, function (json) {
	myApp.alert("Thank you for submitting your comment which has been successfully sent to the site administrators. All comments are subject to potential moderation and libellous and abusive comments are not allowed.",'Success');
    mainView.router.loadPage('news.html')
	//alert(x);
	
	});
};


function submitcmform() {
// Get JSON Data from UrbanDictionary API 
	var url = "http://www.bridgingandcommercial.co.uk/ws.php?type=insert&format=json&table=commercial_clinic&columns=name,email,phone,question&values='"+$$('#cm-name').val()+"','"+$$('#cm-email').val()+"','"+$$('#cm-phone').val()+"','"+$$('#cm-question').val()+"'";
	$$.getJSON (url, function (json) {
	myApp.alert("Thank you for your enquiry which has been successfully sent. A member of our team will be contact with you shortly.",'success');
    mainView.router.loadPage('commercial-clinic.html')
	//alert(x);
	
	});
};
$$(document).on('pageInit', function (e) {

var page = e.detail.page;
// Code for About page
if (page.name === 'contactus') {
var compiledTemplate = Template7.compile($$("#contactus-template").html());
	// Get JSON Data from UrbanDictionary API 
$$.getJSON ('http://www.bridgingandcommercial.co.uk/ws.php?type=contactus&format=json', function (json) {


	// Insert rendered template
	document.getElementById('contactus-content').innerHTML = compiledTemplate(json);
	
 $$(".static-content img").each(function () {
 			var x= $$(this).attr("src");
 			var y='http://www.bridgingandcommercial.co.uk/'+x;
            $$(this).attr("src", y)       // changing src
            .attr('data-delaySrc', $$(this).attr("src")); ;      // you can use 'data-' for having a valid attribute
        });


	});

}

});
//$$('.input.switch-settings').prop('checked', true);
function datesplit(str)
{
var res = str.split(" ");
var d=res.split("-");
var x=d[2]+" "+d[1]+" "+d[0];

return x;
}
var mainView = myApp.addView('.view-main', {
    dynamicNavbar: true
});
// setTimeout(function(){mainView.router.loadPage('home_news.html')},1000);

function searchResults(){

	var popupHTML = '<div class="popup popup1">'+
	                       ' <p style=" position: absolute;right: 0;top: -17px;"><a href="#" class="close-popup" style="color:black;"><i class="fa fa-times-circle fa-2x"></i></a></p>'+

					'<div class="list-block">'+
					
                    '<ul style="background-color:#FFFFFF">'+
                      '<li>'+
                      '<div class="item-content">'+
                    '<div class="item-inner">'+
                    '<div class="item-input">'+
                    ' <input type="text" name="search_value" id="search_value" style="text-align:center" placeholder="Type ..." />'+
                    '</div>'+
                    '</div>'+
                    '</div>'+
                    '</li>'+
                    '</div>'+
                    ' <p><a href="search.html" class="button close-popup" id="button_search" onclick="getSearchResults();">Search</a></p>'+
                   
                    '</div>'
  myApp.popup(popupHTML);
}

function getSearchResults(){

	var Search_value = document.getElementById('search_value').value;
	// var url="http://www.bridgingandcommercial.co.uk/ws.php?type=search&format=json&condition=keyword="+value;

	var compiledTemplate = Template7.compile($$("#news-template").html());

	// Get JSON Data from UrbanDictionary API 
	$$.getJSON ("http://www.bridgingandcommercial.co.uk/ws.php?type=search&format=json&condition=keyword="+Search_value, function (json) {

	// Insert rendered template
	document.getElementById('content-wrap1').innerHTML = compiledTemplate(json);
	});
}


