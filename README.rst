Book Discovery INSIDE the eBook

When is a reader most receptive to reading suggestions? Right when they’ve finished a book of course! That’s why printed books have information about other books by the same author, the first chapter of the next book in the series and similar material at the end as part of the back matter.

Back matter has existed pretty much as long as books have. This includes the appendix, glossary, index, and bibliography. Back matter for digital books needs to be optimized to serve the needs of the digital reader. An informal survey by @suw at  http://chocolateandvodka.com/2013/04/10/what-do-readers-want-from-frontmatter-and-endmatter/ indicates the most popular endmatter desires were other books by the same author and some information about the author. 

Digital back matter for ebooks is not constrained by having to proceed the publication; unlike print, digital back matter can be kept up to date with the release of new content. For instance, if an author publishes a sequel, that title could be included in previously published ebooks.

It’s easy to insert a page listing an author’s other books at the end of an ebook, but how do you keep that list up-to-date? What if you’ve developed a great recommendation system to do “if you liked Pride and Prejudice, you’ll like X”? (or maybe “if you hated...”!) 

The answer is to make use of the javascript capability of emerging ebook environments. Our project explores means of connecting to APIs from within an EPUB for the purpose of suggesting the user’s next read.

An existence proof is the “widget” capability of the iBooks author platform. It allows the insertion of html snippets into extended EPUB. Unfortunately, the javascript capability of ebook reading platforms, like the future, is unevenly distributed.

For this demo, we tested three reading EPUB environments, Readium, Readmill, and iBooks. We modified the Project Gutenberg EPUB version of Pride and Prejudice to include hooks and data to other books by Jane Austen.

Readium, which has been built as an EPUB3 reference environment, is the most capable for our purposes. It supports both javascript and connections to external web resources. In 
Readium, our EPUB displays the set of books by Jane Austen returned by the ReadMill API.

Apple iBooks has full javascript capability, but doesn’t allow connections to external resources (except perhaps via iBooks Author hooks- this deserves further investigation.) In iBooks, our EPUB displays a result page that we generated and embedded based on Jane Austen works published in 1813, when Pride and Prejudice released. We imagine that such embedded resources could be inserted at download time in a future production bookstore or library environment.

The Readmill environment does not support javascript at all at this time, so ironically, we’re not able to display the Readmill API results, or the iframe embedded resource.

Offline reading in Readium displays the resource embedded in the EPUB, similar to the iBooks version.


DEMO:
Lets imagine that ebooks existed during Jane Austen's life. The eBook end matter of Pride and Prejudice is an embedded list of all her works up through Pride and Prejudices's publication in 1813.  At the time, this was a short list. Without the ability to dynamically fetch updated end matter, the reader would only discover Jane Austen’s one previous novel.  

Fast forward to today; a reader clicks open her ebook of Pride and Prejudice. With dynamically updated end matter, the Pride and Prejudice ebook purchased in 1813 is updated with the works published later. This is because, in addition to embedding static data within the epub, javascript is embedded to determine if the e-reader is capable of connecting to external resources to get the latest updates and display works published after Pride and Prejudice (in this case). 

The demonstration example displays updating the author's works. Follow-on iterations could do much more, including other titles in series or connecting to a sophisticated recommendation system.