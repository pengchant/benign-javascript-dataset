
			$(document).ready(function() {
				var divDisabledArticleTools = $(document).find('#DisabledArticleTools');

				occe.articleTools = (function createArticleToolsModule() {
					function displayTools() {
						$.ajax(
							{
								url: '/en-us/article/articletools/40676ad0-c831-45ac-a023-5be633be798d?version=69\u0026storageType=Live\u0026isHoverEnabled=True\u0026assetOwnerAlias=smohan%40microsoft.com%3Bmaxcontentfeedback%40microsoft.com\u0026mailToUri=mailto%3Asmohan%40microsoft.com%3Bmaxcontentfeedback%40microsoft.com%3Fsubject%3DFeedback%2520on%2520%2522Get%2520help%2520with%2520Outlook.com%2522%2520%255b40676ad0-c831-45ac-a023-5be633be798d%255d',
								context: document.body
							}
						).done(function(res) {
							$(divDisabledArticleTools).replaceWith(res);

							var articleToolsDisplayMode = $(document).find('#supArticleTool');
							if (articleToolsDisplayMode) {
								var $articleContentRoot = $(document).find('#supArticleContent');
								if ($articleContentRoot.hasClass("col-5-5")) {
									$articleContentRoot.removeClass("col-5-5").addClass("col-4-5");
								}
								else if ($articleContentRoot.hasClass("col-3-4")) {
									$articleContentRoot.removeClass("col-3-4").addClass("col-3-5");
								}

								var $lefNaveViewRoot = $(document).find('#supLeftNav');
								if ($lefNaveViewRoot.hasClass("col-1-4")) {
									$lefNaveViewRoot.removeClass("col-1-4").addClass("col-1-5");
								}

								var $multiMediaLeftNavRoot = $(document).find('#supMultimediaLeftNav');
								if ($multiMediaLeftNavRoot.hasClass("col-1-4")) {
									$multiMediaLeftNavRoot.removeClass("col-1-4").addClass("col-1-5");
								}

								var $articleContentFooterPadding = $(document).find('#articleContentFooterPadding');
								if ($articleContentFooterPadding.hasClass("col-1-4")) {
									$articleContentFooterPadding.removeClass("col-1-4").addClass("col-1-5");
								}

								var $articleContentFooter = $(document).find('#ocArticleContentFooter');
								if ($articleContentFooter.hasClass("col-5-5")) {
									$articleContentFooter.removeClass("col-5-5").addClass("col-4-5");
								}
								else if ($articleContentFooter.hasClass("col-3-4")) {
									$articleContentFooter.removeClass("col-3-4").addClass("col-3-5");
								}
							}
						});
					}

					return{
						displayTools: displayTools
					}
				})();
			});
		