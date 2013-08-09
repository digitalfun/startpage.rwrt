/**
	Startpage Reworked
	==================

	by Christian Brassat,
	reusing code by Jukka Svahn
*/

/**
	Released under MIT License
	
	Copyright (c) 2010 Jukka Svahn, Christian Brassat
	<http://rahforum.biz>
	<http://crshd.cc>

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:
	
	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.
	
	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE.
*/

/*md# settings : object
Set the behaviour of the startpage.

To enable an option, set the value to "true".
To disable an option, comment the line with "//" or set the value to "false".
*/
var settings = {
	newwindow: false /*md- newwindow | open links in new tab/window */
	,focus: false /*md- focus | Focus on searchbox when opening */
	,clock: true /*md- clock | Show/enable clock */
	
	/*md## Enable/disable various search engines */
	,google: true /*md- google | "quicksearch": Google */
	,googleimages: true /*md- googleimages | "quicksearch": Google image search*/
	,yahoo: false /*md- yahoo | "quicksearch": Yahoo Search*/
	,wikipedia: false /*md- wikipedia | "quicksearch": Wikipedia*/
	,dictcc: false
	,leo: false
	,flickr: false
	,deviantart: false
};

