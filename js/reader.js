var Reader = (function () {
    
    function calculateTimeToRead(element) {
        
    }
    
    var self = {
        estimate: function estimate(selector) {
            var elements = jQuery(selector),
                i,
                estimation = {};
            
            for (i = 0; i < elements.length; i++) {
                var currentEl = elements[i],
                    time = calculateTimeToRead(currentEl);
                
                estimation[currentEl] = time;
            }
        }
    };
    
    return self;
})();