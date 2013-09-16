var Reader = (function () {
    var sentenceTime = (function getTimeAccordingLocale() {
        var language = window.navigator.userLanguage || window.navigator.language;
        
        if (language === 'en-US') {
            return 5;
        } else {
            return 8;
        }
    })();
    
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
            // Each sentence assumed to be read in constant time. Basic calc.
            time += sentenceTime;
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
            
            return totalTime < 1 ? totalTime : Math.round(totalTime);
        }
    };
    
    return self;
})();