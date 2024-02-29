----- TODO list (What's left before you're done) -----
LANDING_PAGE.COVER -> bgVideo fade on scroll -> Text should be sticky to top (pushing down half screen text) with fade on scroll.
LANDING_PAGE.CASES_PREVIEW -> implement better solution.
CaseThumbnailInCases -> implement that the image has lower opacity based on container size.
CASES -> Add TLDR section
CASES -> Gallery

CASE_5 -> Fix colors
LANDING_PAGE -> implement better cases
LANDING_PAGE -> Add a show more after the "featured" cases.
SECTION_TITLE_AND_TEXT + COVER -> ScrollY VS ScrollYprogress seems like the wrong value to use (absolute page scroll instead of relative - only works because its the first element in the page)

----- Fixes for mobile version only -----
SECTION_IMAGE: add support for parallax effect (can be nice to have on non-content-critical images)
KEY_FIGURES -> doesnt scale on mobile nicely (pushes content in case_13 for example)
SNEAKPEEK? -> Create alternate design for mobile phones only
RESULT -> Check if "sticky" is working as it should (CASE_10, CASE_7, CASE_5, CASE_4, CASE_3, CASE_2, CASE_1 not working but CASE_9 does)
COLUMNS -> ABOUT_ME doesnt look good on mobile (somthing to do with the columns)
Check the site on mobile and do whatever it takes to get it working.

----- ONCE DONE -----
Add support for Google Analytics + Google tag manager.
Add bottom navigation in footer
Limit splash screen to show only once.
Better response after sending an email (instead of generic "thanks")
Add emogi on "submit" button in contact form
CASE_07 -> Add pictures of the report.
Consider using a more consitent color scheme 3 colors or so (pastels)
Generally speaking start considering how to make things more "monochromatic" and modern (gradients in the background, gradient headlines etc)

----- OLD FIXES (NOT SURE IF RELEVANT ANYMORE) -----
CASE_THUMBNAIL -> Fix better tag for COMING SOON cases.
LANDING_PAGE -> Is light is not working (because section has a background color so it overrides the element color context)
MOBILE_MENU -> Implement staggered menulink animations.
SECTION_IMAGE: make selectable if you want it to scale down or preserve height

----- CONTENT CLEANUP: -----
SECTION_ELEMENTS.OVERVIEW -> Most likely not in use (other than in old, unfinished cases. Clean up old cases and remove. )
FINISH Cases 6 & 8 (currently unused)

One day...
Use Contentful for content.
server side rendering using Next.js (?)
Add password protection to cases
cleanup limitMaxWidth & bgColor props to be used only where relevant
COVER_CAPTION: Add "back" button (In cases)

https://actualidea.com/

Removeed these but might be worth keeping in mind:
nanoclone
lottie-react
@splinetool/react-spline
@splinetool/runtime

<iframe width="1280" height="720" src="https://www.youtube.com/embed/UFk14H74w6E" title="WEBINAR: Samuel Bergstrom - Sentiment for better design decisions" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

Finish Firebase authentication based on this:
https://www.youtube.com/watch?v=x62aBvnRCKw&t=264s
