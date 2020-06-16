
				$(function() {
					var msPageAreaValue = "Header";
					var msSignInInteractionValue = "11";
					var wcsSignInTextValue = "Sign in";

					function SetConsent() {
						var cookieConsentBannerNeeded = false;
						if (cookieConsentBannerNeeded) {
							var mscc = window.mscc;
							if (mscc && !mscc.hasConsent()) {
								mscc.setConsent();
							}
						}
					}

					var shellOptions = function() {
						return {
							currentMenuItemId: 'shell-main-tab',
							meControlOptions: {
								rpData: {
									msaInfo: {
										signInUrl: "https://login.live.com/login.srf?wa=wsignin1.0\u0026rpsnv=13\u0026ct=1592287978\u0026rver=7.3.6963.0\u0026wp=MBI_SSL\u0026wreply=https:%2F%2Fsupport.microsoft.com%2Fauthredir%3Furl%3Dhttps%253a%252f%252fsupport.microsoft.com%253a443%252fen-us%253fui%253den-US%2526rs%253den-US%2526ad%253dUS%26hurl%3DWL6JXOPsLVxfuBexTFT%252baPVRWcQILUNjUNADr5P0r0U%253d.DC4x1V8Zb9zN8rdwxvPxrLWLvhBDSa%252fEl5CvlbxHr94%253d%26ipt%3D0%26sn%3Dalternate%26si%3D1%26wctx%3D5dc9edc9-e561-45c3-90f2-1f55e60cd546\u0026lc=1033\u0026id=288908\u0026aadredir=1",
										signOutUrl: "https://login.live.com/logout.srf?ct=1592287979\u0026rver=7.3.6963.0\u0026lc=1033\u0026id=288908\u0026ru=https:%2F%2Fsupport.microsoft.com%2Fauthredir%3Furl%3Dhttps%253a%252f%252fsupport.microsoft.com%253a443%252fen-us%253fui%253den-US%2526rs%253den-US%2526ad%253dUS%26hurl%3DWL6JXOPsLVxfuBexTFT%252baPVRWcQILUNjUNADr5P0r0U%253d.DC4x1V8Zb9zN8rdwxvPxrLWLvhBDSa%252fEl5CvlbxHr94%253d%26ipt%3D0%26sn%3Dalternate%26so%3D1"
									},
									aadInfo: {
										signInUrl: "https://login.microsoftonline.com/common/oauth2/authorize?response_mode=form_post\u0026response_type=id_token+code\u0026scope=openid\u0026nonce=b66d56e0-391f-4e72-9197-bf684a438bd2.637278838334945443\u0026state=https:%2f%2fsupport.microsoft.com%2fen-us%3fui%3den-US%26rs%3den-US%26ad%3dUS\u0026client_id=4b233688-031c-404b-9a80-a4f3f2351f90\u0026redirect_uri=https:%2f%2fsupport.microsoft.com%2fauth%2fsignin",
										signOutUrl: ""
									},
									preferredIdp: window.msCommonShell.SupportedAuthIdp.MSA
								},
								userData: {
								},
								events: {
									onEventLog: function (eventId) {
										if (eventId.toLowerCase() === "signin") {
											SetConsent();
											if (typeof window.awa === 'object') {
												var tags = {
													behavior: window.awa.behavior.SIGNIN,
													actionType: 'CL',
													content: {contentName: 'Sign in button', areaName:'Me control header'}
												}
												awa.ct.captureContentPageAction(tags);
											}
										} else if (eventId.toLowerCase() === "dropdownopen") {
											SetConsent();
										}
									}
								}
							},
							events: {
								onSearch: function (searchForm) {
									occe.AutoSuggestSearchEvent(searchForm, msPageAreaValue, 'false');
								}
							},
							as: {
								callback: function () {}
							}
						};
					};

					// If msCommonShell already exists, load it
					if (window.msCommonShell) {
						window.msCommonShell.load(shellOptions());
					}

					// If msCommonShell doesn't yet exist...
					else {

						// Load the me control once msCommonShell is ready
						window.onShellReadyToLoad = function () {
							window.onShellReadyToLoad = null;
							window.msCommonShell.load(shellOptions());
						};
					}

					// Append returnURL query param to change language control on footer
					// Add returnURL to click instead of updating the URL to hide the encoded return url on hover over change language control
					(function () {
						var returnUrlForChangeLanguageHref = window.location.href;
						var $idOfChangeLanguageonFooter = $('#locale-picker-link');
						var hrefOfChangeLanguageOnFooter = $idOfChangeLanguageonFooter.attr('href');

						if (hrefOfChangeLanguageOnFooter) {
							$idOfChangeLanguageonFooter.on('click keypress', function (e) {
								e.preventDefault();
								if (occe.eventHelpers.eventIsClick(e) || occe.eventHelpers.eventIsEnterKeypress(e)) {
									var newChangeLanguageOnFooterUrl = occe.updateQueryStringParameter('returnURL', encodeURIComponent(returnUrlForChangeLanguageHref), hrefOfChangeLanguageOnFooter);
									window.location.href = newChangeLanguageOnFooterUrl;
								}
							});
						}
					})();
				});
			