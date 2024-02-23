----- Fixes for mobile version only -----
SECTION_IMAGE: add support for parallax effect (can be nice to have on non-content-critical images)
KEY_FIGURES -> doesnt scale on mobile nicely (pushes content in case_13 for example)
SNEAKPEEK? -> doesnt look nice on mobile
RESULT -> Add support for mobile (like in cover images)
RESULT -> Check if "sticky" is working as it should (CASE_10, CASE_7, CASE_5, CASE_4, CASE_3, CASE_2, CASE_1 not working but CASE_9 does)
COVER-DESKTOP -> CASE_2 is blurry
BLOCK_QUOTE -> CASE_1 is too close to the text above it.
TIMELINE -> ABOUT_ME doesnt look good (too much whitespace between year and content.)
Check the site on mobile and do whatever it takes to get it working.

----- TODO list (What's left before you're done) -----
Change "Logo" to be plain-text a la adrian

----- ONCE DONE -----
Add support for Google Analytics + Google taag manager.
Add bottom navigation in footer
Limit splash screen to show only once.
Better response after sending an email (isntead of generic "thanks")
Add emogi on "submit" button in contact form

CASE_07 -> Add pictures of the report.
SECTION_ELEMENTS.CASE_THUMBNAILS -> Mobile is not implemented.
Check -> left alignment on mobile and desktop
Consider using a more consitent color scheme 3 colors or so (pastels)
Generally speaking start considering how to make things more "monochromatic" and modern (gradients in the background, gradient headlines etc)

----- OLD FIXES (NOT SURE IF RELEVANT ANYMORE) -----
ADDITIONAL_CASES -> Fix design of cases to work with 3 column layout. Fix title misalignment
CaseThumbnail -> Fix better tag for COMING SOON cases.
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
