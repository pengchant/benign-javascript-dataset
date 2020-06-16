
	    var js_index2017_wrap = document.getElementById("js_index2017_wrap");
        var winWidth = window.innerWidth || document.documentElement.clientWidth;
		if (!("classList" in document.documentElement)) {
		    Object.defineProperty(HTMLElement.prototype, 'classList', {
		        get: function() {
		            var self = this;
		            function update(fn) {
		                return function(value) {
		                    var classes = self.className.split(/\s+/g),
		                        index = classes.indexOf(value);
		 
		                    fn(classes, index, value);
		                    self.className = classes.join(" ");
		                }
		            }
		 
		            return {
		                add: update(function(classes, index, value) {
		                    if (!~index) classes.push(value);
		                }),
		 
		                remove: update(function(classes, index) {
		                    if (~index) classes.splice(index, 1);
		                }),
		 
		                toggle: update(function(classes, index, value) {
		                    if (~index)
		                        classes.splice(index, 1);
		                    else
		                        classes.push(value);
		                }),
		 
		                contains: function(value) {
		                    return !!~self.className.split(/\s+/g).indexOf(value);
		                },
		 
		                item: function(i) {
		                    return self.className.split(/\s+/g)[i] || null;
		                }
		            };
		        }
		    });
		}
	    if(winWidth < 1420 || /\?narrow/.test(location.search)) {
	      js_index2017_wrap.classList.add("index2017_960_wrap");
	    }
	