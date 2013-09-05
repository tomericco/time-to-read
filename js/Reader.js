var Reader = (function () {
    
    /*
     * Gets an DOM element and anaylzes it's textual reading content.
     * Returns the estimated time to read in seconds.
     */
    function calculateTimeToRead(element) {
        var content = jQuery(element).text(),
            sentences = content.split('. '),
            i,
            time = 0;
        
        for (i = 0; i < sentences.length; i++) {
            // Each sentence assumed to be read in 7 seconds. Basic calc.
            time += 7;
        }
        
        return time;
    }
    
    var self = {
        /*
         * Estimates time to read the text inside given DOM elements selector.
         * Returns time in minutes.
         */
        estimate: function estimate(selector) {
            var elements = jQuery(selector),
                i,
                totalTime = 0;
            
            for (i = 0; i < elements.length; i++) {
                var currentEl = elements[i],
                    time = calculateTimeToRead(currentEl);
                
                totalTime += time;
            }
            
            // Turn into minutes
            totalTime /= 60;
            
            return totalTime > 1 ? totalTime : Math.round(totalTime);
        }
    };
    
    return self;
})();