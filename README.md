time-to-read
============

time-to-read is a librarly that allows you as a blogger or a site owner to show your readers an estimation of 
how much time it will take them to read a piece of text.

The library is really simple to use.
All you need to do is call the function estimate, giving it a CSS selector.
Example:
<code>read.estimate('.article-content, #news');</code>

The library will observe the content in the selected elements and return an estimated time for reading it.

NEXT VERSIONS will include configurations for different levels of readers. 
For example, if a user with browser locale of He/IL (Hebrew) opens a page in English, it will take him more time to read the content than a native English speaker.
