
											jsLoader({
												name: 'shm',
												callback: function() {
													// 猜你喜欢js
													var guessUrl = '//n.sinaimg.cn/homepage/js/recommender.js';
										/*
													var sguid = SHM.util.cookie.getCookie('SINAGLOBAL');
													if(typeof sguid == 'string'){
														lastNum = sguid.charAt(sguid.length - 1, 1);
														if(lastNum == '8' || lastNum == '1' || lastNum == '4'){
															guessUrl = 'http://www.sina.com.cn/js/index/96/home.recommender.2014.min.js';
														}
													}
										*/

													jsLoader({
														url : guessUrl,
														callback : function () {
															var Store = window.___CrossDomainStorage___;
															Store.ready(function(st){
																//renderLinks(30, 'ud.fd.www.blogStorage0', 'bloglist0', 'blogNewItem', false, st);
																//renderLinks(50, 'ud.fd.www.blogStorage1', 'bloglist1', 'blogNewItem', false, st);
																//renderLinks(50, 'ud.fd.www.blogStorage2', 'blogPic0', 'blogNewPic', true, st);
															});
														}
													});
												}
											});
										