
	var trainingLinks = document.querySelectorAll("a[href*='templateid=TM44647706']");
	function hideTrainingLinks() {
		for (var i = 0; i < trainingLinks.length; i++) {
			var el = trainingLinks[i];
			el.style.display = "none";
		}
	}

	var guidedWalkthroughContents = document.querySelectorAll("[data-conref='GuidedWalkthrough']");
	function hideGuidedWalkthroughContents() {
		for (var i = 0; i < guidedWalkthroughContents.length; i++) {
			var el = guidedWalkthroughContents[i];
			el.style.display = "none";
		}
	}
