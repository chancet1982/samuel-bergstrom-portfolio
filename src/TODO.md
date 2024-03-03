----- TODO list (What's left before you're done) -----

1. Add featured testimonials under the featured cases.
2. Add customers slider under the testimonials and remove from the hero/cover.
3. Change order in about me to be show testimonials and logos first and then the "about me" card later.

- 2 tone text needs to be more emphasised or removed.
- In About me, the are with a picture of me "holding a lamp" we need to remove the padding bottom in that instance only (not sure how)

- Add a small piece about you(!) in the landing page after the
- Fix gradient in bottom of cover
- Thumbnails covers need some more polish (alignment, headlines, etc)
- Thumbnails not balanced due to no icon button to the right. see if it makes a difference.
- Test why cursor isnt responding in hover effects/form etc. (it's the z-index);
- Primary button text color should be white when hover.

CONTACT_FORM:

- Social media links need a tooltip (and hover effect)
- Remove the hover effect on the "submit" in the form.
- provide better styling for the success/error messages
- Contact me link -> make slide to contact form

SPLASH_SCREEN:

- Limit splash screen to show only once.
- CaseThumbnail -> re-add Appear inView animation, and hover.

CONTENT_FIXES FOR CASES:

- CASE_5 -> Fix colors
- All CASE -> Add TLDR section (potentially repurpose the overview component)
- Better mobile thumbnails (now that we updated the thumbnail the mobile one looks funny)

PARALLAX_FIXES:

- SECTION_IMAGE: add support for parallax effect (can be nice to have on non-content-critical images)
- SECTION_TITLE_AND_TEXT -> ScrollY VS ScrollYprogress seems like the wrong value to use (absolute page scroll instead of relative - only works because its the first element in the page)

----- Fixes for mobile version only -----
KEY_FIGURES -> doesnt scale on mobile nicely (pushes content in case_13 for example)
SNEAKPEEK? -> Create alternate design for mobile phones only
RESULT -> Check if "sticky" is working as it should (CASE_10, CASE_7, CASE_5, CASE_4, CASE_3, CASE_2, CASE_1 not working but CASE_9 does)
COLUMNS -> ABOUT_ME doesnt look good on mobile (somthing to do with the columns)
Check the site on mobile and do whatever it takes to get it working.

----- ONE DAY -----
Add support for Google Analytics + Google tag manager.
Add bottom navigation in footer
Better response after sending an email (instead of generic "thanks")
CASE_07 -> Add pictures of the report.
Consider using a more consitent color scheme 3 colors or so (pastels)
Generally speaking start considering how to make things more "monochromatic" and modern (gradients in the background, gradient headlines etc)
COVER_CAPTION: Add "back" button (In cases)
Use Contentful for content.
server side rendering using Next.js (?)
Add password protection to cases
cleanup limitMaxWidth & bgColor props to be used only where relevant

----- OLD FIXES (NOT SURE IF RELEVANT ANYMORE) -----
LANDING_PAGE -> Is light is not working (because section has a background color so it overrides the element color context)
MOBILE_MENU -> Implement staggered menulink animations.
SECTION_IMAGE: make selectable if you want it to scale down or preserve height

----- CONTENT CLEANUP: -----
SECTION_ELEMENTS.OVERVIEW -> Most likely not in use (other than in old, unfinished cases. Clean up old cases and remove. )
FINISH Cases 6 & 8 (currently unused)

Removed these but might be worth keeping in mind:
nanoclone
lottie-react
@splinetool/react-spline
@splinetool/runtime

<iframe width="1280" height="720" src="https://www.youtube.com/embed/UFk14H74w6E" title="WEBINAR: Samuel Bergstrom - Sentiment for better design decisions" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

Finish Firebase authentication based on this:
https://www.youtube.com/watch?v=x62aBvnRCKw&t=264s
