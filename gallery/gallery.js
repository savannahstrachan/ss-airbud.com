// /*!
// 	Slimbox v2.05 - The ultimate lightweight Lightbox clone for jQuery
// 	(c) 2007-2013 Christophe Beyls <http://www.digitalia.be>
// 	MIT-style license.
// // */
// // (function(w){var E=w(window),u,f,F=-1,n,x,D,v,y,L,r,m=!window.XMLHttpRequest,s=[],l=document.documentElement,k={},t=new Image(),J=new Image(),H,a,g,p,I,d,G,c,A,K;w(function(){w("body").append(w([H=w('<div id="lbOverlay" />').click(C)[0],a=w('<div id="lbCenter" />')[0],G=w('<div id="lbBottomContainer" />')[0]]).css("display","none"));g=w('<div id="lbImage" />').appendTo(a).append(p=w('<div style="position: relative;" />').append([I=w('<a id="lbPrevLink" href="#" />').click(B)[0],d=w('<a id="lbNextLink" href="#" />').click(e)[0]])[0])[0];c=w('<div id="lbBottom" />').appendTo(G).append([w('<a id="lbCloseLink" href="#" />').click(C)[0],A=w('<div id="lbCaption" />')[0],K=w('<div id="lbNumber" />')[0],w('<div style="clear: both;" />')[0]])[0]});w.slimbox=function(O,N,M){u=w.extend({loop:false,overlayOpacity:0.8,overlayFadeDuration:400,resizeDuration:400,resizeEasing:"swing",initialWidth:250,initialHeight:250,imageFadeDuration:400,captionAnimationDuration:400,counterText:"Image {x} of {y}",closeKeys:[27,88,67],previousKeys:[37,80],nextKeys:[39,78]},M);if(typeof O=="string"){O=[[O,N]];N=0}y=E.scrollTop()+(E.height()/2);L=u.initialWidth;r=u.initialHeight;w(a).css({top:Math.max(0,y-(r/2)),width:L,height:r,marginLeft:-L/2}).show();v=m||(H.currentStyle&&(H.currentStyle.position!="fixed"));if(v){H.style.position="absolute"}w(H).css("opacity",u.overlayOpacity).fadeIn(u.overlayFadeDuration);z();j(1);f=O;u.loop=u.loop&&(f.length>1);return b(N)};w.fn.slimbox=function(M,P,O){P=P||function(Q){return[Q.href,Q.title]};O=O||function(){return true};var N=this;return N.unbind("click").click(function(){var S=this,U=0,T,Q=0,R;T=w.grep(N,function(W,V){return O.call(S,W,V)});for(R=T.length;Q<R;++Q){if(T[Q]==S){U=Q}T[Q]=P(T[Q],Q)}return w.slimbox(T,U,M)})};function z(){var N=E.scrollLeft(),M=E.width();w([a,G]).css("left",N+(M/2));if(v){w(H).css({left:N,top:E.scrollTop(),width:M,height:E.height()})}}function j(M){if(M){w("object").add(m?"select":"embed").each(function(O,P){s[O]=[P,P.style.visibility];P.style.visibility="hidden"})}else{w.each(s,function(O,P){P[0].style.visibility=P[1]});s=[]}var N=M?"bind":"unbind";E[N]("scroll resize",z);w(document)[N]("keydown",o)}function o(O){var N=O.which,M=w.inArray;return(M(N,u.closeKeys)>=0)?C():(M(N,u.nextKeys)>=0)?e():(M(N,u.previousKeys)>=0)?B():null}function B(){return b(x)}function e(){return b(D)}function b(M){if(M>=0){F=M;n=f[F][0];x=(F||(u.loop?f.length:0))-1;D=((F+1)%f.length)||(u.loop?0:-1);q();a.className="lbLoading";k=new Image();k.onload=i;k.src=n}return false}function i(){a.className="";w(g).css({backgroundImage:"url("+n+")",visibility:"hidden",display:""});w(p).width(k.width);w([p,I,d]).height(k.height);w(A).html(f[F][1]||"");w(K).html((((f.length>1)&&u.counterText)||"").replace(/{x}/,F+1).replace(/{y}/,f.length));if(x>=0){t.src=f[x][0]}if(D>=0){J.src=f[D][0]}L=g.offsetWidth;r=g.offsetHeight;var M=Math.max(0,y-(r/2));if(a.offsetHeight!=r){w(a).animate({height:r,top:M},u.resizeDuration,u.resizeEasing)}if(a.offsetWidth!=L){w(a).animate({width:L,marginLeft:-L/2},u.resizeDuration,u.resizeEasing)}w(a).queue(function(){w(G).css({width:L,top:M+r,marginLeft:-L/2,visibility:"hidden",display:""});w(g).css({display:"none",visibility:"",opacity:""}).fadeIn(u.imageFadeDuration,h)})}function h(){if(x>=0){w(I).show()}if(D>=0){w(d).show()}w(c).css("marginTop",-c.offsetHeight).animate({marginTop:0},u.captionAnimationDuration);G.style.visibility=""}function q(){k.onload=null;k.src=t.src=J.src=n;w([a,g,c]).stop(true);w([I,d,g,G]).hide()}function C(){if(F>=0){q();F=x=D=-1;w(a).hide();w(H).stop().fadeOut(u.overlayFadeDuration,j)}return false}})(jQuery);

// // // AUTOLOAD CODE BLOCK (MAY BE CHANGED OR REMOVED)
// // if (!/android|iphone|ipod|series60|symbian|windows ce|blackberry/i.test(navigator.userAgent)) {
// // 	jQuery(function($) {
// // 		$("a[rel^='lightbox']").slimbox({/* Put custom options here */}, null, function(el) {
// // 			return (this == el) || ((this.rel.length > 8) && (this.rel == el.rel));
// // 		});
// // 	});
// // }

//         $(document).ready(function() {
//     $('.pgwSlider').pgwSlider();
// });

// ;(function($){
//     $.fn.pgwSlider = function(options) {

//         var defaults = {
//             mainClassName : 'pgwSlider',
//             listPosition : 'right',
//             selectionMode : 'click',
//             transitionEffect : 'fading',
//             autoSlide : true,
//             displayList : true,
//             displayControls : false,
//             touchControls : true,
//             verticalCentering : false,
//             adaptiveHeight : false,
//             maxHeight : null,
//             beforeSlide : null,
//             afterSlide : null,
//             adaptiveDuration : 200,
//             transitionDuration : 500,
//             intervalDuration : 3000
//         };

//         if (this.length == 0) {
//             return this;
//         } else if(this.length > 1) {
//             this.each(function() {
//                 $(this).pgwSlider(options);
//             });
//             return this;
//         }

//         var pgwSlider = this;
//         pgwSlider.plugin = this;
//         pgwSlider.data = [];
//         pgwSlider.config = {};
//         pgwSlider.currentSlide = 0;
//         pgwSlider.slideCount = 0;
//         pgwSlider.resizeEvent = null;
//         pgwSlider.intervalEvent = null;
//         pgwSlider.touchFirstPosition = null;
//         pgwSlider.transitionInProgress = false;
//         pgwSlider.window = $(window);

//         // Init
//         var init = function() {

//             // Merge user options with the default configuration
//             pgwSlider.config = $.extend({}, defaults, options);

//             // Setup
//             setup();

//             // Activate interval
//             if (pgwSlider.config.autoSlide) {
//                 activateInterval();
//             }

//             return true;
//         };

//         // Get element
//         var getElement = function(obj) {
//             var element = {};

//             // Get link
//             var elementLink = obj.find('a').attr('href');
//             if ((typeof elementLink != 'undefined') && (elementLink != '')) {
//                 element.link = elementLink;
//                 var elementLinkTarget = obj.find('a').attr('target');
//                 if ((typeof elementLinkTarget != 'undefined') && (elementLinkTarget != '')) {
//                     element.linkTarget = elementLinkTarget;
//                 }
//             }

//             // Get image 
//             var elementThumbnail = obj.find('img').attr('src');
//             if ((typeof elementThumbnail != 'undefined') && (elementThumbnail != '')) {
//                 element.thumbnail = elementThumbnail;
//             }

//             var elementImage = obj.find('img').attr('data-large-src');
//             if ((typeof elementImage != 'undefined') && (elementImage != '')) {
//                 element.image = elementImage;
//             }

//             // Get title 
//             var elementSpan = obj.find('span').text();
//             if ((typeof elementSpan != 'undefined') && (elementSpan != '') && (elementSpan != null)) {
//                 element.title = elementSpan;
//             } else {
//                 var elementTitle = obj.find('img').attr('alt');
//                 if ((typeof elementTitle != 'undefined') && (elementTitle != '')) {
//                     element.title = elementTitle;
//                 }
//             }

//             // Get description
//             var elementDescription = obj.find('img').attr('data-description');
//             if ((typeof elementDescription != 'undefined') && (elementDescription != '')) {
//                 element.description = elementDescription;
//             }

//             return element;
//         };

//         // Update the current height
//         var updateHeight = function(height, animate) {

//             // Check maxHeight
//             if (pgwSlider.config.maxHeight) {
//                 if (pgwSlider.plugin.width() > 480 && height > pgwSlider.config.maxHeight) {
//                     height = pgwSlider.config.maxHeight;
//                 } else if (pgwSlider.plugin.width() <= 480) {
//                     if (height + pgwSlider.plugin.find('.ps-list').height() > pgwSlider.config.maxHeight) {
//                         height = pgwSlider.config.maxHeight - pgwSlider.plugin.find('.ps-list').height();
//                     }
//                 }
//             }

//             // Prevents multiple calculations in a short time
//             clearTimeout(pgwSlider.resizeEvent);
//             pgwSlider.resizeEvent = setTimeout(function() {

//                 // Adjust right list
//                 var elementHeight = ((height - ((pgwSlider.slideCount - 1) * 6)) / pgwSlider.slideCount);
//                 var elementWidth = (100 / pgwSlider.slideCount);
//                 pgwSlider.plugin.find('.ps-list > li').css({ width: elementWidth + '%' });

//                 // Adjust main container
//                 if (typeof animate != 'undefined' && animate && pgwSlider.config.maxHeight == null) {

//                     if (typeof pgwSlider.plugin.find('.ps-current').animate == 'function') {
//                         pgwSlider.plugin.find('.ps-current').animate({
//                             height: height
//                         }, pgwSlider.config.adaptiveDuration, function() {
//                             pgwSlider.plugin.find('.ps-list > li').animate({ height: elementHeight }, pgwSlider.config.adaptiveDuration);
//                         });
//                     } else {
//                         pgwSlider.plugin.find('.ps-current').css('height', height);
//                         pgwSlider.plugin.find('.ps-list > li').css('height', elementHeight);
//                     }

//                 } else {
//                     pgwSlider.plugin.find('.ps-current').css('height', height);
//                     pgwSlider.plugin.find('.ps-list > li').css('height', elementHeight);
//                 }

//                 // Vertical alignement
//                 if (pgwSlider.config.verticalCentering) {

//                     // List elements
//                     pgwSlider.plugin.find('.ps-list > li').each(function(){
//                         if ((elementHeight > 50) && ($(this).find('img').height() > elementHeight)) {
//                             var imageMargin = Math.round(($(this).find('img').height() - elementHeight) / 2);
//                             $(this).find('img').css('margin-top', -imageMargin);

//                         } else if ($(this).find('img').height() < elementHeight) {
//                             var imageMargin = Math.round((elementHeight - $(this).find('img').height()) / 2);
//                             $(this).find('img').css('margin-top', imageMargin);

//                         } else {
//                             $(this).find('img').css('margin-top', '');
//                         }
//                     });

//                     // Current elements
//                     pgwSlider.plugin.find('.ps-current > ul > li').each(function(){
//                         var isVisible = ($(this).css('display') == 'none') ? false : true;

//                         if (! isVisible) {
//                             $(this).show();
//                         }

//                         if ($(this).show().find('img').height() > height) {
//                             var imageMargin = Math.round(($(this).find('img').height() - height) / 2);
//                             $(this).find('img').css('margin-top', -imageMargin);

//                         } else if ($(this).show().find('img').height() < height) {
//                             var imageMargin = Math.round((height - $(this).find('img').height()) / 2);
//                             $(this).find('img').css('margin-top', imageMargin);

//                         } else {
//                             $(this).find('img').css('margin-top', '');
//                         }

//                         if (! isVisible) {
//                             $(this).hide();
//                         }
//                     });
//                 }

//             }, 100);

//             return true;
//         };

//         // Set size class
//         var setSizeClass = function() {

//             if (pgwSlider.plugin.width() <= 480) {
//                 pgwSlider.plugin.addClass('narrow').removeClass('wide');
//             } else {
//                 pgwSlider.plugin.addClass('wide').removeClass('narrow');
//             }

//             return true;
//         };

//         // Setup
//         var setup = function() {

//             // Create container
//             pgwSlider.plugin.removeClass(pgwSlider.config.mainClassName).addClass('ps-list');
//             pgwSlider.plugin.wrap('<div class="' + pgwSlider.config.mainClassName + '"></div>');
//             pgwSlider.plugin = pgwSlider.plugin.parent();
//             pgwSlider.plugin.prepend('<div class="ps-current"><ul></ul><span class="ps-caption"></span></div>');
//             pgwSlider.slideCount = pgwSlider.plugin.find('.ps-list > li').length;

//             if (pgwSlider.slideCount == 0) {
//                 throw new Error('PgwSlider - No slider item has been found');
//                 return false;
//             }

//             // Add controls
//             if (pgwSlider.config.displayControls && pgwSlider.slideCount > 1) {
//                 pgwSlider.plugin.find('.ps-current').prepend('<span class="ps-prev"><span class="ps-prevIcon"></span></span>');
//                 pgwSlider.plugin.find('.ps-current').append('<span class="ps-next"><span class="ps-nextIcon"></span></span>');
//                 pgwSlider.plugin.find('.ps-current .ps-prev').click(function() {
//                     pgwSlider.previousSlide();
//                 });
//                 pgwSlider.plugin.find('.ps-current .ps-next').click(function() {
//                     pgwSlider.nextSlide();
//                 });
//             }

//             // Disable list
//             if (! pgwSlider.config.displayList) {
//                 pgwSlider.plugin.find('.ps-current').css('width', '100%');
//                 pgwSlider.plugin.find('.ps-list').hide();
//             }

//             // Get slider elements
//             var elementId = 1;
//             pgwSlider.plugin.find('.ps-list > li').each(function() {
//                 var element = getElement($(this));
//                 element.id = elementId;
//                 pgwSlider.data.push(element);

//                 $(this).addClass('elt_' + element.id);

//                 // Check element title
//                 if (element.title) {
//                     if ($(this).find('span').length == 1) {
//                         if ($(this).find('span').text() == '') {
//                             $(this).find('span').text(element.title);
//                         }
//                     } else {
//                         $(this).find('img').after('<span>' + element.title + '</span>');
//                     }
//                 }

//                 // Set element in the current list
//                 var currentElement = $('<li class="elt_' + elementId + '"></li>');

//                 if (element.image) {
//                     currentElement.html('<img src="' + element.image + '" alt="' + (element.title ? element.title : '') + '">');
//                 } else if (element.thumbnail) {
//                     currentElement.html('<img src="' + element.thumbnail + '" alt="' + (element.title ? element.title : '') + '">');
//                 }

//                 if (element.link) {
//                     currentElement.html('<a href="' + element.link + '"' + (element.linkTarget ? ' target="' + element.linkTarget + '"' : '') + '>' + currentElement.html() + '</a>');
//                 }

//                 pgwSlider.plugin.find('.ps-current > ul').append(currentElement);

//                 // Set selection mode
//                 if ((pgwSlider.config.selectionMode == 'mouseOver') && (pgwSlider.config.transitionEffect == 'fading')) {
//                     $(this).css('cursor', 'default').click(function(event) {
//                         event.preventDefault();
//                     }).bind('mouseenter', function(event) {
//                         displayElement(element.id);
//                     });
//                     $(this).find('a').css('cursor', 'default');
//                 } else {
//                     $(this).css('cursor', 'pointer').click(function(event) {
//                         event.preventDefault();
//                         displayElement(element.id);
//                     });
//                 }

//                 elementId++;
//             });

//             // Set list position
//             if (pgwSlider.config.listPosition == 'left') {
//                 pgwSlider.plugin.addClass('listOnTheLeft');
//             }

//             // Attach slide events
//             if (pgwSlider.config.autoSlide) {
//                 pgwSlider.plugin.on('mouseenter', function() {
//                     clearInterval(pgwSlider.intervalEvent);
//                     pgwSlider.intervalEvent = null;
//                 }).on('mouseleave', function() {
//                     activateInterval();
//                 });
//             }

//             // Display the first element
//             displayElement(1);

//             // Set the first height
//             pgwSlider.plugin.find('.ps-current > ul > li.elt_1 img').on('load', function() {
//                 setSizeClass();

//                 var maxHeight = pgwSlider.plugin.find('.ps-current > ul > li.elt_1 img').height();
//                 updateHeight(maxHeight);

//                 pgwSlider.window.resize(function() {
//                     // The new class must be set before the recalculation of the height.
//                     setSizeClass();

//                     var maxHeight = pgwSlider.plugin.find('.ps-current > ul > li.elt_' + pgwSlider.currentSlide + ' img').height();
//                     updateHeight(maxHeight, pgwSlider.config.adaptiveHeight);
//                 });
//             });

//             // Touch controls for current image
//             if (pgwSlider.config.touchControls && pgwSlider.slideCount > 1) {

//                 pgwSlider.plugin.find('.ps-current').on('touchstart', function(e) {
//                     try {
//                         if (e.originalEvent.touches[0].clientX && pgwSlider.touchFirstPosition == null) {
//                             pgwSlider.touchFirstPosition = e.originalEvent.touches[0].clientX;
//                         }
//                     } catch(e) {
//                         pgwSlider.touchFirstPosition = null;
//                     }
//                 });

//                 pgwSlider.plugin.find('.ps-current').on('touchmove', function(e) {
//                     try {
//                         if (e.originalEvent.touches[0].clientX && pgwSlider.touchFirstPosition != null) {
//                             if (e.originalEvent.touches[0].clientX > (pgwSlider.touchFirstPosition + 50)) {
//                                 pgwSlider.touchFirstPosition = null;
//                                 pgwSlider.previousSlide();
//                             } else if (e.originalEvent.touches[0].clientX < (pgwSlider.touchFirstPosition - 50)) {
//                                 pgwSlider.touchFirstPosition = null;
//                                 pgwSlider.nextSlide();
//                             }
//                         }
//                     } catch(e) {
//                         pgwSlider.touchFirstPosition = null;
//                     }
//                 });

//                 pgwSlider.plugin.find('.ps-current').on('touchend', function(e) {
//                     pgwSlider.touchFirstPosition = null;
//                 });
//             }

//             return true;
//         };

//         // Finish element
//         var finishElement = function(element) {

//             // Element caption
//             var elementText = '';
//             if (element.title) {
//                 elementText += '<b>' + element.title + '</b>';
//             }

//             if (element.description) {
//                 if (elementText != '') elementText += '<br>';
//                 elementText += element.description;
//             }

//             if (elementText != '') {
//                 if (element.link) {
//                     elementText = '<a href="' + element.link + '"' + (element.linkTarget ? ' target="' + element.linkTarget + '"' : '') + '>' + elementText + '</a>';
//                 }

//                 if (typeof pgwSlider.plugin.find('.ps-caption').fadeIn == 'function') {
//                     pgwSlider.plugin.find('.ps-caption').html(elementText);
//                     pgwSlider.plugin.find('.ps-caption').fadeIn(pgwSlider.config.transitionDuration / 2);
//                 } else {
//                     pgwSlider.plugin.find('.ps-caption').html(elementText);
//                     pgwSlider.plugin.find('.ps-caption').show();
//                 }
//             }

//             // Slider controls
//             if (pgwSlider.config.displayControls) {
//                 if (typeof pgwSlider.plugin.find('.ps-current > .ps-prev').fadeIn == 'function') {
//                     pgwSlider.plugin.find('.ps-current > .ps-prev, .ps-current > .ps-next').fadeIn(pgwSlider.config.transitionDuration / 2);
//                 } else {
//                     pgwSlider.plugin.find('.ps-current > .ps-prev, .ps-current > .ps-next').show();
//                 }
//             }

//             // After slide
//             if (typeof pgwSlider.config.afterSlide == 'function') {
//                 pgwSlider.config.afterSlide(element.id);
//             }

//             // Set the container height
//             if (pgwSlider.config.adaptiveHeight) {
//                 var maxHeight = pgwSlider.plugin.find('.ps-current .elt_' + element.id + ' img').height();
//                 updateHeight(maxHeight, true);
//             }

//             return true;
//         }

//         // Fade an element
//         var fadeElement = function(element) {
//             var elementContainer = pgwSlider.plugin.find('.ps-current > ul');

//             // Update list items
//             pgwSlider.plugin.find('.ps-list > li').css('opacity', '0.6');
//             pgwSlider.plugin.find('.ps-list > li.elt_' + element.id).css('opacity', '1');

//             elementContainer.find('li').not('.elt_' + pgwSlider.currentSlide).not('.elt_' + element.id).each(function(){
//                 if (typeof $(this).stop == 'function') {
//                     $(this).stop();
//                 }
//                 $(this).css('position', '').css('z-index', 1).hide();
//             });

//             // Current element
//             if (pgwSlider.currentSlide > 0) {
//                 var currentElement = elementContainer.find('.elt_' + pgwSlider.currentSlide);

//                 if (typeof currentElement.animate != 'function') {
//                     currentElement.animate = function(css, duration, callback) {
//                         currentElement.css(css);
//                         if (callback) {
//                             callback();
//                         }
//                     };
//                 }

//                 if (typeof currentElement.stop == 'function') {
//                     currentElement.stop();
//                 }

//                 currentElement.css('position', 'absolute').animate({
//                     opacity : 0,
//                 }, pgwSlider.config.transitionDuration, function() {
//                     currentElement.css('position', '').css('z-index', 1).hide();
//                 });
//             }

//             // Update current id
//             pgwSlider.currentSlide = element.id;

//             // Next element
//             var nextElement = elementContainer.find('.elt_' + element.id);

//             if (typeof nextElement.animate != 'function') {
//                 nextElement.animate = function(css, duration, callback) {
//                     nextElement.css(css);
//                     if (callback) {
//                         callback();
//                     }
//                 };
//             }

//             if (typeof nextElement.stop == 'function') {
//                 nextElement.stop();
//             }

//             nextElement.css('position', 'absolute').show().animate({
//                 opacity : 1,
//             }, pgwSlider.config.transitionDuration, function() {
//                 nextElement.css('position', '').css('z-index', 2).show();
//                 finishElement(element);
//             });

//             return true;
//         }

//         // Slide an element
//         var slideElement = function(element, direction) {
//             var elementContainer = pgwSlider.plugin.find('.ps-current > ul');

//             if (typeof direction == 'undefined') {
//                 direction = 'left';
//             }

//             if (pgwSlider.currentSlide == 0) {
//                 elementContainer.find('.elt_1').css({
//                     position : '',
//                     left : '',
//                     opacity : 1,
//                     'z-index' : 2
//                 }).show();
//                 pgwSlider.plugin.find('.ps-list > li.elt_1').css('opacity', '1');
//                 finishElement(element);

//             } else {

//                 if (pgwSlider.transitionInProgress) {
//                     return false;
//                 }

//                 pgwSlider.transitionInProgress = true;

//                 // Get direction details
//                 var elementWidth = elementContainer.width();

//                 if (direction == 'left') {
//                     var elementDest = -elementWidth;
//                     var nextOrigin = elementWidth;
//                 } else {
//                     var elementDest = elementWidth;
//                     var nextOrigin = -elementWidth;
//                 }

//                 var currentElement = elementContainer.find('.elt_' + pgwSlider.currentSlide);

//                 if (typeof currentElement.animate != 'function') {
//                     currentElement.animate = function(css, duration, callback) {
//                         currentElement.css(css);
//                         if (callback) {
//                             callback();
//                         }
//                     };
//                 }

//                 currentElement.css('position', 'absolute').animate({
//                     left : elementDest,
//                 }, pgwSlider.config.transitionDuration, function() {
//                     currentElement.css('position', '').css('z-index', 1).css('left', '').css('opacity', 0).hide();
//                 });

//                 // Next element
//                 var nextElement = elementContainer.find('.elt_' + element.id);

//                 if (typeof nextElement.animate != 'function') {
//                     nextElement.animate = function(css, duration, callback) {
//                         nextElement.css(css);
//                         if (callback) {
//                             callback();
//                         }
//                     };
//                 }

//                 nextElement.css('position', 'absolute').css('left', nextOrigin).css('opacity', 1).show().animate({
//                     left : 0,
//                 }, pgwSlider.config.transitionDuration, function() {
//                     nextElement.css('position', '').css('left', '').css('z-index', 2).show();
//                     pgwSlider.transitionInProgress = false;

//                     // Display new element
//                     pgwSlider.plugin.find('.ps-list > li').css('opacity', '0.6');
//                     pgwSlider.plugin.find('.ps-list > li.elt_' + element.id).css('opacity', '1');

//                     finishElement(element);
//                 });
//             }

//             // Update current id
//             pgwSlider.currentSlide = element.id;

//             return true;
//         }

//         // Display the current element
//         var displayElement = function(elementId, apiController, direction) {

//             if (elementId == pgwSlider.currentSlide) {
//                 return false;
//             }

//             var element = pgwSlider.data[elementId - 1];

//             if (typeof element == 'undefined') {
//                 throw new Error('PgwSlider - The element ' + elementId + ' is undefined');
//                 return false;
//             }

//             if (typeof direction == 'undefined') {
//                 direction = 'left';
//             }

//             // Before slide
//             if (typeof pgwSlider.config.beforeSlide == 'function') {
//                 pgwSlider.config.beforeSlide(elementId);
//             }

//             if (typeof pgwSlider.plugin.find('.ps-caption').fadeOut == 'function') {
//                 pgwSlider.plugin.find('.ps-caption, .ps-prev, .ps-next').fadeOut(pgwSlider.config.transitionDuration / 2);
//             } else {
//                 pgwSlider.plugin.find('.ps-caption, .ps-prev, .ps-next').hide();
//             }

//             // Choose the transition effect
//             if (pgwSlider.config.transitionEffect == 'sliding') {
//                 slideElement(element, direction);
//             } else {
//                 fadeElement(element);
//             }

//             // Reset interval to avoid a half interval after an API control
//             if (typeof apiController != 'undefined' && pgwSlider.config.autoSlide) {
//                 activateInterval();
//             }

//             return true;
//         };

//         // Activate interval
//         var activateInterval = function() {
//             clearInterval(pgwSlider.intervalEvent);

//             if (pgwSlider.slideCount > 1 && pgwSlider.config.autoSlide) {
//                 pgwSlider.intervalEvent = setInterval(function() {
//                     if (pgwSlider.currentSlide + 1 <= pgwSlider.slideCount) {
//                         var nextItem = pgwSlider.currentSlide + 1;
//                     } else {
//                         var nextItem = 1;
//                     }
//                     displayElement(nextItem);
//                 }, pgwSlider.config.intervalDuration);
//             }

//             return true;
//         };

//         // Start auto slide
//         pgwSlider.startSlide = function() {
//             pgwSlider.config.autoSlide = true;
//             activateInterval();
//             return true;
//         };

//         // Stop auto slide
//         pgwSlider.stopSlide = function() {
//             pgwSlider.config.autoSlide = false;
//             clearInterval(pgwSlider.intervalEvent);
//             return true;
//         };

//         // Get current slide
//         pgwSlider.getCurrentSlide = function() {
//             return pgwSlider.currentSlide;
//         };

//         // Get slide count
//         pgwSlider.getSlideCount = function() {
//             return pgwSlider.slideCount;
//         };

//         // Display slide
//         pgwSlider.displaySlide = function(itemId) {
//             displayElement(itemId, true);
//             return true;
//         };

//         // Next slide
//         pgwSlider.nextSlide = function() {
//             if (pgwSlider.currentSlide + 1 <= pgwSlider.slideCount) {
//                 var nextItem = pgwSlider.currentSlide + 1;
//             } else {
//                 var nextItem = 1;
//             }
//             displayElement(nextItem, true, 'left');
//             return true;
//         };

//         // Previous slide
//         pgwSlider.previousSlide = function() {
//             if (pgwSlider.currentSlide - 1 >= 1) {
//                 var previousItem = pgwSlider.currentSlide - 1;
//             } else {
//                 var previousItem = pgwSlider.slideCount;
//             }
//             displayElement(previousItem, true, 'right');
//             return true;
//         };

//         // Destroy slider
//         pgwSlider.destroy = function(soft) {
//             clearInterval(pgwSlider.intervalEvent);

//             if (typeof soft != 'undefined') {
//                 pgwSlider.plugin.find('.ps-list > li').each(function() {
//                     $(this).attr('style', null).removeClass().css('cursor', '').unbind('click').unbind('mouseenter');
//                     $(this).find('a').css('cursor', '');
//                     $(this).find('img').attr('style', null);
//                 });

//                 pgwSlider.plugin.find('.ps-list').addClass(pgwSlider.config.mainClassName).removeClass('ps-list');
//                 pgwSlider.plugin.find('.ps-current').unwrap().remove();
//                 pgwSlider.hide();

//             } else {
//                 pgwSlider.parent().remove();
//             }

//             pgwSlider.plugin = null;
//             pgwSlider.data = [];
//             pgwSlider.config = {};
//             pgwSlider.currentSlide = 0;
//             pgwSlider.slideCount = 0;
//             pgwSlider.resizeEvent = null;
//             pgwSlider.intervalEvent = null;
//             pgwSlider.touchFirstPosition = null;
//             pgwSlider.transitionInProgress = false;
//             pgwSlider.window = null;

//             return true;
//         };

//         // Reload slider
//         pgwSlider.reload = function(newOptions) {
//             pgwSlider.destroy(true);

//             pgwSlider = this;
//             pgwSlider.plugin = this;
//             pgwSlider.window = $(window);
//             pgwSlider.plugin.show();

//             // Merge new options with the default configuration
//             pgwSlider.config = $.extend({}, defaults, newOptions);

//             // Setup
//             setup();

//             // Activate interval
//             if (pgwSlider.config.autoSlide) {
//                 activateInterval();
//             }

//             return true;
//         };

//         // Slider initialization
//         init();

//         return this;
//     }
// })(window.Zepto || window.jQuery);


/*
 * jQuery FlexSlider v2.1
 * Copyright 2012 WooThemes
 * Contributing Author: Tyler Smith
 */
;(function(d){d.flexslider=function(i,k){var a=d(i),c=d.extend({},d.flexslider.defaults,k),e=c.namespace,p="ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch,t=p?"touchend":"click",l="vertical"===c.direction,m=c.reverse,h=0<c.itemWidth,r="fade"===c.animation,s=""!==c.asNavFor,f={};d.data(i,"flexslider",a);f={init:function(){a.animating=!1;a.currentSlide=c.startAt;a.animatingTo=a.currentSlide;a.atEnd=0===a.currentSlide||a.currentSlide===a.last;a.containerSelector=c.selector.substr(0,
 c.selector.search(" "));a.slides=d(c.selector,a);a.container=d(a.containerSelector,a);a.count=a.slides.length;a.syncExists=0<d(c.sync).length;"slide"===c.animation&&(c.animation="swing");a.prop=l?"top":"marginLeft";a.args={};a.manualPause=!1;var b=a,g;if(g=!c.video)if(g=!r)if(g=c.useCSS)a:{g=document.createElement("div");var n=["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"],e;for(e in n)if(void 0!==g.style[n[e]]){a.pfx=n[e].replace("Perspective","").toLowerCase();
 a.prop="-"+a.pfx+"-transform";g=!0;break a}g=!1}b.transitions=g;""!==c.controlsContainer&&(a.controlsContainer=0<d(c.controlsContainer).length&&d(c.controlsContainer));""!==c.manualControls&&(a.manualControls=0<d(c.manualControls).length&&d(c.manualControls));c.randomize&&(a.slides.sort(function(){return Math.round(Math.random())-0.5}),a.container.empty().append(a.slides));a.doMath();s&&f.asNav.setup();a.setup("init");c.controlNav&&f.controlNav.setup();c.directionNav&&f.directionNav.setup();c.keyboard&&
 (1===d(a.containerSelector).length||c.multipleKeyboard)&&d(document).bind("keyup",function(b){b=b.keyCode;if(!a.animating&&(39===b||37===b))b=39===b?a.getTarget("next"):37===b?a.getTarget("prev"):!1,a.flexAnimate(b,c.pauseOnAction)});c.mousewheel&&a.bind("mousewheel",function(b,g){b.preventDefault();var d=0>g?a.getTarget("next"):a.getTarget("prev");a.flexAnimate(d,c.pauseOnAction)});c.pausePlay&&f.pausePlay.setup();c.slideshow&&(c.pauseOnHover&&a.hover(function(){!a.manualPlay&&!a.manualPause&&a.pause()},
 function(){!a.manualPause&&!a.manualPlay&&a.play()}),0<c.initDelay?setTimeout(a.play,c.initDelay):a.play());p&&c.touch&&f.touch();(!r||r&&c.smoothHeight)&&d(window).bind("resize focus",f.resize);setTimeout(function(){c.start(a)},200)},asNav:{setup:function(){a.asNav=!0;a.animatingTo=Math.floor(a.currentSlide/a.move);a.currentItem=a.currentSlide;a.slides.removeClass(e+"active-slide").eq(a.currentItem).addClass(e+"active-slide");a.slides.click(function(b){b.preventDefault();var b=d(this),g=b.index();
 !d(c.asNavFor).data("flexslider").animating&&!b.hasClass("active")&&(a.direction=a.currentItem<g?"next":"prev",a.flexAnimate(g,c.pauseOnAction,!1,!0,!0))})}},controlNav:{setup:function(){a.manualControls?f.controlNav.setupManual():f.controlNav.setupPaging()},setupPaging:function(){var b=1,g;a.controlNavScaffold=d('<ol class="'+e+"control-nav "+e+("thumbnails"===c.controlNav?"control-thumbs":"control-paging")+'"></ol>');if(1<a.pagingCount)for(var n=0;n<a.pagingCount;n++)g="thumbnails"===c.controlNav?
 '<img src="'+a.slides.eq(n).attr("data-thumb")+'"/>':"<a>"+b+"</a>",a.controlNavScaffold.append("<li>"+g+"</li>"),b++;a.controlsContainer?d(a.controlsContainer).append(a.controlNavScaffold):a.append(a.controlNavScaffold);f.controlNav.set();f.controlNav.active();a.controlNavScaffold.delegate("a, img",t,function(b){b.preventDefault();var b=d(this),g=a.controlNav.index(b);b.hasClass(e+"active")||(a.direction=g>a.currentSlide?"next":"prev",a.flexAnimate(g,c.pauseOnAction))});p&&a.controlNavScaffold.delegate("a",
 "click touchstart",function(a){a.preventDefault()})},setupManual:function(){a.controlNav=a.manualControls;f.controlNav.active();a.controlNav.live(t,function(b){b.preventDefault();var b=d(this),g=a.controlNav.index(b);b.hasClass(e+"active")||(g>a.currentSlide?a.direction="next":a.direction="prev",a.flexAnimate(g,c.pauseOnAction))});p&&a.controlNav.live("click touchstart",function(a){a.preventDefault()})},set:function(){a.controlNav=d("."+e+"control-nav li "+("thumbnails"===c.controlNav?"img":"a"),
 a.controlsContainer?a.controlsContainer:a)},active:function(){a.controlNav.removeClass(e+"active").eq(a.animatingTo).addClass(e+"active")},update:function(b,c){1<a.pagingCount&&"add"===b?a.controlNavScaffold.append(d("<li><a>"+a.count+"</a></li>")):1===a.pagingCount?a.controlNavScaffold.find("li").remove():a.controlNav.eq(c).closest("li").remove();f.controlNav.set();1<a.pagingCount&&a.pagingCount!==a.controlNav.length?a.update(c,b):f.controlNav.active()}},directionNav:{setup:function(){var b=d('<ul class="'+
 e+'direction-nav"><li><a class="'+e+'prev" href="#">'+c.prevText+'</a></li><li><a class="'+e+'next" href="#">'+c.nextText+"</a></li></ul>");a.controlsContainer?(d(a.controlsContainer).append(b),a.directionNav=d("."+e+"direction-nav li a",a.controlsContainer)):(a.append(b),a.directionNav=d("."+e+"direction-nav li a",a));f.directionNav.update();a.directionNav.bind(t,function(b){b.preventDefault();b=d(this).hasClass(e+"next")?a.getTarget("next"):a.getTarget("prev");a.flexAnimate(b,c.pauseOnAction)});
 p&&a.directionNav.bind("click touchstart",function(a){a.preventDefault()})},update:function(){var b=e+"disabled";1===a.pagingCount?a.directionNav.addClass(b):c.animationLoop?a.directionNav.removeClass(b):0===a.animatingTo?a.directionNav.removeClass(b).filter("."+e+"prev").addClass(b):a.animatingTo===a.last?a.directionNav.removeClass(b).filter("."+e+"next").addClass(b):a.directionNav.removeClass(b)}},pausePlay:{setup:function(){var b=d('<div class="'+e+'pauseplay"><a></a></div>');a.controlsContainer?
 (a.controlsContainer.append(b),a.pausePlay=d("."+e+"pauseplay a",a.controlsContainer)):(a.append(b),a.pausePlay=d("."+e+"pauseplay a",a));f.pausePlay.update(c.slideshow?e+"pause":e+"play");a.pausePlay.bind(t,function(b){b.preventDefault();d(this).hasClass(e+"pause")?(a.manualPause=!0,a.manualPlay=!1,a.pause()):(a.manualPause=!1,a.manualPlay=!0,a.play())});p&&a.pausePlay.bind("click touchstart",function(a){a.preventDefault()})},update:function(b){"play"===b?a.pausePlay.removeClass(e+"pause").addClass(e+
 "play").text(c.playText):a.pausePlay.removeClass(e+"play").addClass(e+"pause").text(c.pauseText)}},touch:function(){function b(b){j=l?d-b.touches[0].pageY:d-b.touches[0].pageX;p=l?Math.abs(j)<Math.abs(b.touches[0].pageX-e):Math.abs(j)<Math.abs(b.touches[0].pageY-e);if(!p||500<Number(new Date)-k)b.preventDefault(),!r&&a.transitions&&(c.animationLoop||(j/=0===a.currentSlide&&0>j||a.currentSlide===a.last&&0<j?Math.abs(j)/q+2:1),a.setProps(f+j,"setTouch"))}function g(){i.removeEventListener("touchmove",
 b,!1);if(a.animatingTo===a.currentSlide&&!p&&null!==j){var h=m?-j:j,l=0<h?a.getTarget("next"):a.getTarget("prev");a.canAdvance(l)&&(550>Number(new Date)-k&&50<Math.abs(h)||Math.abs(h)>q/2)?a.flexAnimate(l,c.pauseOnAction):r||a.flexAnimate(a.currentSlide,c.pauseOnAction,!0)}i.removeEventListener("touchend",g,!1);f=j=e=d=null}var d,e,f,q,j,k,p=!1;i.addEventListener("touchstart",function(j){a.animating?j.preventDefault():1===j.touches.length&&(a.pause(),q=l?a.h:a.w,k=Number(new Date),f=h&&m&&a.animatingTo===
 a.last?0:h&&m?a.limit-(a.itemW+c.itemMargin)*a.move*a.animatingTo:h&&a.currentSlide===a.last?a.limit:h?(a.itemW+c.itemMargin)*a.move*a.currentSlide:m?(a.last-a.currentSlide+a.cloneOffset)*q:(a.currentSlide+a.cloneOffset)*q,d=l?j.touches[0].pageY:j.touches[0].pageX,e=l?j.touches[0].pageX:j.touches[0].pageY,i.addEventListener("touchmove",b,!1),i.addEventListener("touchend",g,!1))},!1)},resize:function(){!a.animating&&a.is(":visible")&&(h||a.doMath(),r?f.smoothHeight():h?(a.slides.width(a.computedW),
 a.update(a.pagingCount),a.setProps()):l?(a.viewport.height(a.h),a.setProps(a.h,"setTotal")):(c.smoothHeight&&f.smoothHeight(),a.newSlides.width(a.computedW),a.setProps(a.computedW,"setTotal")))},smoothHeight:function(b){if(!l||r){var c=r?a:a.viewport;b?c.animate({height:a.slides.eq(a.animatingTo).height()},b):c.height(a.slides.eq(a.animatingTo).height())}},sync:function(b){var g=d(c.sync).data("flexslider"),e=a.animatingTo;switch(b){case "animate":g.flexAnimate(e,c.pauseOnAction,!1,!0);break;case "play":!g.playing&&
 !g.asNav&&g.play();break;case "pause":g.pause()}}};a.flexAnimate=function(b,g,n,i,k){s&&1===a.pagingCount&&(a.direction=a.currentItem<b?"next":"prev");if(!a.animating&&(a.canAdvance(b,k)||n)&&a.is(":visible")){if(s&&i)if(n=d(c.asNavFor).data("flexslider"),a.atEnd=0===b||b===a.count-1,n.flexAnimate(b,!0,!1,!0,k),a.direction=a.currentItem<b?"next":"prev",n.direction=a.direction,Math.ceil((b+1)/a.visible)-1!==a.currentSlide&&0!==b)a.currentItem=b,a.slides.removeClass(e+"active-slide").eq(b).addClass(e+
 "active-slide"),b=Math.floor(b/a.visible);else return a.currentItem=b,a.slides.removeClass(e+"active-slide").eq(b).addClass(e+"active-slide"),!1;a.animating=!0;a.animatingTo=b;c.before(a);g&&a.pause();a.syncExists&&!k&&f.sync("animate");c.controlNav&&f.controlNav.active();h||a.slides.removeClass(e+"active-slide").eq(b).addClass(e+"active-slide");a.atEnd=0===b||b===a.last;c.directionNav&&f.directionNav.update();b===a.last&&(c.end(a),c.animationLoop||a.pause());if(r)p?(a.slides.eq(a.currentSlide).css({opacity:0,
 zIndex:1}),a.slides.eq(b).css({opacity:1,zIndex:2}),a.animating=!1,a.currentSlide=a.animatingTo):(a.slides.eq(a.currentSlide).fadeOut(c.animationSpeed,c.easing),a.slides.eq(b).fadeIn(c.animationSpeed,c.easing,a.wrapup));else{var q=l?a.slides.filter(":first").height():a.computedW;h?(b=c.itemWidth>a.w?2*c.itemMargin:c.itemMargin,b=(a.itemW+b)*a.move*a.animatingTo,b=b>a.limit&&1!==a.visible?a.limit:b):b=0===a.currentSlide&&b===a.count-1&&c.animationLoop&&"next"!==a.direction?m?(a.count+a.cloneOffset)*
 q:0:a.currentSlide===a.last&&0===b&&c.animationLoop&&"prev"!==a.direction?m?0:(a.count+1)*q:m?(a.count-1-b+a.cloneOffset)*q:(b+a.cloneOffset)*q;a.setProps(b,"",c.animationSpeed);if(a.transitions){if(!c.animationLoop||!a.atEnd)a.animating=!1,a.currentSlide=a.animatingTo;a.container.unbind("webkitTransitionEnd transitionend");a.container.bind("webkitTransitionEnd transitionend",function(){a.wrapup(q)})}else a.container.animate(a.args,c.animationSpeed,c.easing,function(){a.wrapup(q)})}c.smoothHeight&&
 f.smoothHeight(c.animationSpeed)}};a.wrapup=function(b){!r&&!h&&(0===a.currentSlide&&a.animatingTo===a.last&&c.animationLoop?a.setProps(b,"jumpEnd"):a.currentSlide===a.last&&(0===a.animatingTo&&c.animationLoop)&&a.setProps(b,"jumpStart"));a.animating=!1;a.currentSlide=a.animatingTo;c.after(a)};a.animateSlides=function(){a.animating||a.flexAnimate(a.getTarget("next"))};a.pause=function(){clearInterval(a.animatedSlides);a.playing=!1;c.pausePlay&&f.pausePlay.update("play");a.syncExists&&f.sync("pause")};
 a.play=function(){a.animatedSlides=setInterval(a.animateSlides,c.slideshowSpeed);a.playing=!0;c.pausePlay&&f.pausePlay.update("pause");a.syncExists&&f.sync("play")};a.canAdvance=function(b,g){var d=s?a.pagingCount-1:a.last;return g?!0:s&&a.currentItem===a.count-1&&0===b&&"prev"===a.direction?!0:s&&0===a.currentItem&&b===a.pagingCount-1&&"next"!==a.direction?!1:b===a.currentSlide&&!s?!1:c.animationLoop?!0:a.atEnd&&0===a.currentSlide&&b===d&&"next"!==a.direction?!1:a.atEnd&&a.currentSlide===d&&0===
 b&&"next"===a.direction?!1:!0};a.getTarget=function(b){a.direction=b;return"next"===b?a.currentSlide===a.last?0:a.currentSlide+1:0===a.currentSlide?a.last:a.currentSlide-1};a.setProps=function(b,g,d){var e,f=b?b:(a.itemW+c.itemMargin)*a.move*a.animatingTo;e=-1*function(){if(h)return"setTouch"===g?b:m&&a.animatingTo===a.last?0:m?a.limit-(a.itemW+c.itemMargin)*a.move*a.animatingTo:a.animatingTo===a.last?a.limit:f;switch(g){case "setTotal":return m?(a.count-1-a.currentSlide+a.cloneOffset)*b:(a.currentSlide+
 a.cloneOffset)*b;case "setTouch":return b;case "jumpEnd":return m?b:a.count*b;case "jumpStart":return m?a.count*b:b;default:return b}}()+"px";a.transitions&&(e=l?"translate3d(0,"+e+",0)":"translate3d("+e+",0,0)",d=void 0!==d?d/1E3+"s":"0s",a.container.css("-"+a.pfx+"-transition-duration",d));a.args[a.prop]=e;(a.transitions||void 0===d)&&a.container.css(a.args)};a.setup=function(b){if(r)a.slides.css({width:"100%","float":"left",marginRight:"-100%",position:"relative"}),"init"===b&&(p?a.slides.css({opacity:0,
 display:"block",webkitTransition:"opacity "+c.animationSpeed/1E3+"s ease",zIndex:1}).eq(a.currentSlide).css({opacity:1,zIndex:2}):a.slides.eq(a.currentSlide).fadeIn(c.animationSpeed,c.easing)),c.smoothHeight&&f.smoothHeight();else{var g,n;"init"===b&&(a.viewport=d('<div class="'+e+'viewport"></div>').css({overflow:"hidden",position:"relative"}).appendTo(a).append(a.container),a.cloneCount=0,a.cloneOffset=0,m&&(n=d.makeArray(a.slides).reverse(),a.slides=d(n),a.container.empty().append(a.slides)));
 c.animationLoop&&!h&&(a.cloneCount=2,a.cloneOffset=1,"init"!==b&&a.container.find(".clone").remove(),a.container.append(a.slides.first().clone().addClass("clone")).prepend(a.slides.last().clone().addClass("clone")));a.newSlides=d(c.selector,a);g=m?a.count-1-a.currentSlide+a.cloneOffset:a.currentSlide+a.cloneOffset;l&&!h?(a.container.height(200*(a.count+a.cloneCount)+"%").css("position","absolute").width("100%"),setTimeout(function(){a.newSlides.css({display:"block"});a.doMath();a.viewport.height(a.h);
 a.setProps(g*a.h,"init")},"init"===b?100:0)):(a.container.width(200*(a.count+a.cloneCount)+"%"),a.setProps(g*a.computedW,"init"),setTimeout(function(){a.doMath();a.newSlides.css({width:a.computedW,"float":"left",display:"block"});c.smoothHeight&&f.smoothHeight()},"init"===b?100:0))}h||a.slides.removeClass(e+"active-slide").eq(a.currentSlide).addClass(e+"active-slide")};a.doMath=function(){var b=a.slides.first(),d=c.itemMargin,e=c.minItems,f=c.maxItems;a.w=a.width();a.h=b.height();a.boxPadding=b.outerWidth()-
 b.width();h?(a.itemT=c.itemWidth+d,a.minW=e?e*a.itemT:a.w,a.maxW=f?f*a.itemT:a.w,a.itemW=a.minW>a.w?(a.w-d*e)/e:a.maxW<a.w?(a.w-d*f)/f:c.itemWidth>a.w?a.w:c.itemWidth,a.visible=Math.floor(a.w/(a.itemW+d)),a.move=0<c.move&&c.move<a.visible?c.move:a.visible,a.pagingCount=Math.ceil((a.count-a.visible)/a.move+1),a.last=a.pagingCount-1,a.limit=1===a.pagingCount?0:c.itemWidth>a.w?(a.itemW+2*d)*a.count-a.w-d:(a.itemW+d)*a.count-a.w-d):(a.itemW=a.w,a.pagingCount=a.count,a.last=a.count-1);a.computedW=a.itemW-
 a.boxPadding};a.update=function(b,d){a.doMath();h||(b<a.currentSlide?a.currentSlide+=1:b<=a.currentSlide&&0!==b&&(a.currentSlide-=1),a.animatingTo=a.currentSlide);if(c.controlNav&&!a.manualControls)if("add"===d&&!h||a.pagingCount>a.controlNav.length)f.controlNav.update("add");else if("remove"===d&&!h||a.pagingCount<a.controlNav.length)h&&a.currentSlide>a.last&&(a.currentSlide-=1,a.animatingTo-=1),f.controlNav.update("remove",a.last);c.directionNav&&f.directionNav.update()};a.addSlide=function(b,e){var f=
 d(b);a.count+=1;a.last=a.count-1;l&&m?void 0!==e?a.slides.eq(a.count-e).after(f):a.container.prepend(f):void 0!==e?a.slides.eq(e).before(f):a.container.append(f);a.update(e,"add");a.slides=d(c.selector+":not(.clone)",a);a.setup();c.added(a)};a.removeSlide=function(b){var e=isNaN(b)?a.slides.index(d(b)):b;a.count-=1;a.last=a.count-1;isNaN(b)?d(b,a.slides).remove():l&&m?a.slides.eq(a.last).remove():a.slides.eq(b).remove();a.doMath();a.update(e,"remove");a.slides=d(c.selector+":not(.clone)",a);a.setup();
 c.removed(a)};f.init()};d.flexslider.defaults={namespace:"flex-",selector:".slides > li",animation:"fade",easing:"swing",direction:"horizontal",reverse:!1,animationLoop:!0,smoothHeight:!1,startAt:0,slideshow:!0,slideshowSpeed:7E3,animationSpeed:600,initDelay:0,randomize:!1,pauseOnAction:!0,pauseOnHover:!1,useCSS:!0,touch:!0,video:!1,controlNav:!0,directionNav:!0,prevText:"Previous",nextText:"Next",keyboard:!0,multipleKeyboard:!1,mousewheel:!1,pausePlay:!1,pauseText:"Pause",playText:"Play",controlsContainer:"",
 manualControls:"",sync:"",asNavFor:"",itemWidth:0,itemMargin:0,minItems:0,maxItems:0,move:0,start:function(){},before:function(){},after:function(){},end:function(){},added:function(){},removed:function(){}};d.fn.flexslider=function(i){void 0===i&&(i={});if("object"===typeof i)return this.each(function(){var a=d(this),c=a.find(i.selector?i.selector:".slides > li");1===c.length?(c.fadeIn(400),i.start&&i.start(a)):void 0===a.data("flexslider")&&new d.flexslider(this,i)});var k=d(this).data("flexslider");
 switch(i){case "play":k.play();break;case "pause":k.pause();break;case "next":k.flexAnimate(k.getTarget("next"),!0);break;case "prev":case "previous":k.flexAnimate(k.getTarget("prev"),!0);break;default:"number"===typeof i&&k.flexAnimate(i,!0)}}})(jQuery);