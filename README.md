# Europa Legatum

A window into historic Europe allowing the visitor of the website to see into a different side of vacations and trips abroad. *Europa Legatum* helps their user find alternate locations than would normally be suggested on the front page of alternate websites offering locations and cities that boast a large amount of activities and historically based entertainment. Featuring interactive pages for both Western and Eastern Europe as a basis, a contact form for planning and organising bespoke personalised trips and an inviting home page letting every visitor know exactly what they can hope to achieve from the *Europa Legatum* site.

---

## UX

The *Europa Legatum* page is intended to create a sense of grandeur and possibility as soon as the landing page loads. Each page shows a large hero image to give the user a sense of the sort of locations they will be able to see should they follow through with their use of the site. The main focus of the site is on it's locations and as such the design choices and layout are chosen to create a stripped back site which allows visitors to focus on the presented content.

* As a new user I want to be inspired upon loading the site and see exactly what the site can offer me as opposed to competitors and what sets it apart from other travel sites, through ethos, individuality and webpage design.

* As a new user I want to be able to view feedback from previous patrons so that I can gauge the quality of the service provided and view information to help me judge that feedback such as where the reviewer vacationed.

* As a new user I want to be able to know exactly what information I will be presented with when I load a new page and be able to accurately and with agility know how to traverse the site with informative links and navigation.

* As a new user I want to be able to contact the *Europa Legatum* team should I have further questions or want to plan a special vacation away. This contact form should be easy to find and easy to use.

* As a new user I want to be able to view *Europa Legatum's* communication via their social channels so I can keep up to date with any new features, offers and deals that may be on offer. These Social Links should be present on each page and easy to locate, they should also successfully take me to a new page upon following the link.

* As a new user I want to be able to view a zoomable interactive map that will allow me to virtually explore the advertised destination.

## Features

#### Exisiting Features

1. Navigation bar - allows users to navigate between pages easily with identifiable descriptors and easy to understand structure. Is consistent across the entire platform. Current page is marked so that user's can naviagate seamlessly and efficiently. Brand logo takes user's back to home/landing page as is industry standard

2. Social Media bar - allows users to visit Social media content for Europa Legatum, from Pinterest to YouTube. Each link uses the well known icon clearly showing the linked site and takes the user to a new page for good UX. 

3. Contact page/form - allows users to contact *Europa Legatum* with ease providing all the neccessary information in defined boxes so that communication is simple. This form is linked to emailJS using their API which allows personal and quick responses with the business and their staff.

4. Toggleable content - using Javascript and Jquery this allows users to toggle between destinations while staying on the same page, this cuts down on loading times and back and forth between pages allowing users to compare and contrast potential resorts. Each toggle include specific images, information and integrated Google maps changing location depending on the currently selected destination.

5. Interactive testimonials/reviews - allows the user to view feedback from previous users and upon interacting with these reviews they will present further information such as destination and data of travel

#### Future Feature Ideas

1. Live chat functionality - this will allow users to engage with the *Europa Legatum* more efficiently for more specific and direct questions.

2. Southern Europe - branching out from Western and Eastern Europe will allow users to view and see information for resorts and destinations within the culture rich south of Euope from Rome to Athens and then less travelled islands of Corsica and Sardinia.

3. Historic page - this page will push forward the selling point of the brand which is a strong focus on history and providing culture rich vacations. This page will break down into different historic time periods from Ancient to Modern and will lean heavily on leading and associating historic event and periods to countries, cities and destinations. This will allow users to find their perfect vacation.

4. Special packages and tours - allows the user to harness *Euopa Legatums* specialist and expert knowledge to book special historic tours on specific dates during their holiday, these will be a mix of in person tours if a rep is present but also will be app based which will guide you with directions and give information when particular points are reached.

5. Interactive Google maps inc. markers - allows user's to browse map of Europe to find resorts via markers which when clicked brings up useful detailed information without loading new page. 

## Technologies Used

* [HTML](https://html.spec.whatwg.org/#is-this-html5?) 
    * Used to write the fundamental content of the project

* [CSS](https://www.w3.org/TR/CSS2/)
    * Used to style the project

* [JavaScript](https://www.javascript.com/)
    * Used to add interactivity to site and incorporate APIs such as Google Maps and EmailJS

* [Bootstrap](https://getbootstrap.com/)
    * Used as a template and create a consistent structure for the projects constant features such as navigation bar and footer

* [JQuery](https://jquery.com/)
    * Used to allow functionality of dropdown menus in conjunction with Bootstrap framework 

## Testing

#### Navigation Links/bar
1. **Expected Results**

        - Each link should darker while user hovers over with cursor. 
        - The currently active page should be denoted with it's link being highlighted using a darker font-color property. - All links should open their associate html file successfully from all pages. 
        - Site logo should navigate user back to index.html page/landing page.
2. **Reasons for testing**

        - User performs extensive testing on this feature as this is the user's main port of call for navigating through the site.
        - If links are broken then user is unable to access full content.
        - If hover over/active transformations do not work this results in a less intuitive and more difficult site to use.
3. **Tests performed**

        - To test hover over/active transformations are working user hovers cursor over each navigation link on each html page. User also checks that the appropriate navigation link is using a distinct font-color property while that HTML page is active.
        - To test links are working correctly and are opening appropriate HTML the user visits each link from each HTML page, ensuring that each link opens appropriate file and can navigate the entire site via each page.
        - To test logo is directing users back to index.html the user clicks this logo from each page and ensures that they are redirected back to the landing page.
4. **Testing Results**

        - All navigation links transformed to darker font-color when hovered over as intended.
        - Each active link was displayed with the correct darker font when visited as intended.
        - Each link opened the appropriate page when clicked on from each html page as intended.
        - Clicking logo from each page resulted in the user being directed back to landing page as intended.

#### Footer/Social Links
1. **Expected results**

        - Each social icon/logo should darken from white to black when hovered over.
        - Each link should open the appropriate and associated social platform in a new tab.
2. **Reasons for testing**

        - User performs testing on this feature as social platforms and content will house increased amounts of information and updates regarding special offers etc. and will allow users to follow *Europa Legatum* to stay connected.
        - If hover over transformations are not working this promotes a less than ideal user experience and lacks feedback for the user.
        - If the social link does not open in a separate then the user is taken away from the *Europa Legatum* site and creates a clunky user experience.
3. **Tests performed**

        - To test hover over interactivty user hovers cursor over each icon/logo from each page.
        - To test that each link opens the appropriate social platform in a new tab the user click each logo/link and ensures that a new tab is opened and the homepage of the associatd social platform is loaded.
4. **Testing Results**

        - Each logo darkens to black from white when user hovers over with cursor as intended.
        - Each link when visited opens a new tab and loads the appropriate webpage as intended.

#### Contact form/Email integration
1. **Expected results**

        - Contact form should once sibmitted send an email to the host account holding body, name, and email content.
        - Information that was placed into the associated input fields should be presented in the sent email.
2. **Reasons for testing**

        - User performs testing on this feature as this is the best and most expedient way for the user to contact *Europa Legatum* directly.
        - If the contact form does not successfully send an email to the appropriate account then this results in a loss of communication and potentially a lost consumer.
        - If the sent email does not correctly display written content, name or email this can lead to miscommunication, confusion and a negative user experience.
        - If Contact form content does not refresh upon submission this can lead to a clunky user experience.
3. **Tests performed**

        - To test contact form and email the user fills in each field from name, email, subject and text area and then submits their enquiry. User then checks the linked email address for the sent email and console log to ensure email has fired.
        - To test that each input field fires correctly, the user cross checks info from input fields against the content of the email making sure they match up.
4. **Testing Results**

        - When filled in and submitted the contact form successfully sent an email to the appropriate recipient address as intended.
        - When submitted the email that was received contained the correct and corresponding data in the appropriate name, email, subject and text area fields as intended.

#### West/East Europe Button Interactivity
1. **Expected results**

        - When 'Bern' button is clicked the appropriate information should replace the currently displayed information in heading elements, paragraph elements and images.
        - When 'Annecy' button is clicked the appropriate information should replace the currently displayed information in heading elements, paragraph elements and images.
        - When 'Krakow' button is clicked the appropriate information should replace the currently displayed information in heading elements, paragraph elements and images.
        - When 'Tblisi' button is clicked the appropriate information should replace the currently displayed information in heading elements, paragraph elements and images.
2. **Reasons for testing**

        - User testing is required for this feature as content cannot be accessed or displayed if the associated button fails to load the appropriate information.
        - The lack of appropriate information results in a negative experience for the user and a potential loss of consumer for *Europa Legatum*.
3. **Tests performed**

        - To test the 'Bern' button works as intended the user visits the Western Europe page and clicks the 'Bern' button. The user then scrolls down the page ensuring that all heading and paragraph information displays correctly for Bern. User also checks that the images presented are of the relevant content.
        - To test the 'Annecy' button works as intended the user visits the Western Europe page and clicks the 'Bern' button. From the newly displayed content the user then clicks the 'Annecy' button ensuring that the heading and paragraph content along with the pages images return to showing the relevant 'Annecy' content.
        - To test the 'Krakow' button works as intended the user visits the Eastern Europe page and clicks the 'Krakow' button. The user then scrolls down the page ensuring that all heading and paragraph information displays correctly for Krakow. User also checks that the images presented are of the relevant content.
        - To test the 'Tblisi' button works as intended the user visits the Eastern Europe page and clicks the 'Bern' button. From the newly displayed content the user then clicks the 'Tblisi' button ensuring that the heading and paragraph content along with the pages images return to showing the relevant 'Tblisi' content.
4. **Testing Results**

        - When clicked the 'Bern' button replaces existing content with relevant Bern content and images as intended.
        - When clicked the 'Annecy' button replaces existing content with relevant Bern content and images as intended.
        - When clicked the 'Krakow' button replaces existing content with relevant Bern content and images as intended.
        - When clicked the 'Tblisi' button replaces existing content with relevant Bern content and images as intended.

#### Google Maps integration
1. **Expected results**

        - Upon loading Western Europe page the google map API should display and show the correct coordinates to zoom in on Annecy (lat:45.8992,lng:6.1294).
        - Upon clicking the 'Bern' button the google map API should display and show the correct coordinates to zoom in on Bern (lat:46.9480,lng:7.4474).
        - Upon clicking the 'Annecy' button the google map API should display and show the correct coordinates to zoom in on Annecy (lat:45.8992,lng:6.1294).
        - Upon loading Eastern Europe page the google map API should display and show the correct coordinates to zoom in on Tblisi (lat:41.7151,lng:44.8271).
        - Upon clicking the 'Krakow' button the google map API should display and show the correct coordinates to zoom in on Krakow (lat:50.0647,lng:19.9450).
        - Upon clicking the 'Tblisi' button the google map API should display and show the correct coordinates to zoom in on Tblisi (lat:41.7151,lng:44.8271).
2. **Reasons for testing**

        - User testing is required as Google maps integration is a vital piece of information to display when informing users of potential destinations and adds much desired interactivty.
        - If the google map integration fails to work or load this leads to a confusing and negative user experience.
3. **Tests performed**

        - To test that the Google maps API has loaded successfully the user visits the Western and Eastern Europe html pages and ensures that map has initiated and shows the correct coordinates at the intended zoom height and display type.
        - To test that the 'Bern' button successfully changes the map to show the correct location the user clicks the Bern button and makes sure the map displays the correct coordinations.
        - To test that the 'Annecy' button successfully changes the map to show the correct location the user clicks the 'Annecy' button and makes sure the map displays the correct coordinations.
        - To test that the 'Krakow' button successfully changes the map to show the correct location the user clicks the 'Krakow' button and makes sure the map displays the correct coordinations.
        - To test that the 'Tblisi' button successfully changes the map to show the correct location the user clicks the 'Tblisi' button and makes sure the map displays the correct coordinations.
4. **Testing Results**

        - When loaded both Western and Eastern Europe pages respectfully displayed the correct Google map location at the correct zoom level using the satellite display style as intended.
        - When clicked the 'Bern' button zoomed to the correct coordinations of lat:46.9480,lng:7.4474 as intended.
        - When clicked the 'Annecy' button zoomed to the correct coordinations of lat:45.8992,lng:6.1294 as intended.
        - When clicked the 'Krakow' button zoomed to the correct coordinations of lat:50.0647,lng:19.9450 as intended.
        - When clicked the 'Tblisi' button zoomed to the correct coordinations of lat:41.7151,lng:44.8271 as intended.

#### Hover/Mouseover Interactivty 
1. **Expected results**

        - When hovered over images on Western Europe and Eastern Europe pages should increase in scale without obscuring other images. 
        - When cursor leaves image the image should return to standard scale.
        - When mouse enters review speech box on landing page text content should be replaced with location of trip via a slideUp and slideDown function.
        - When mouse leaves review speech box the content should revert back to original content again with slideUp/SlideUp function.
2. **Reasons for testing**

        - User testing is required to ensure a level of interactivity across the site to push user engagement and provide extra content.
3. **Tests performed**

        - To test image hover is working correctly the user will visit the Western/Eastern Europe pages and hover the cursor over each image.
        - To test review mouseenter/mouseleave is working correctly the user will place cursor inside of the landing page speech bubble/speech box and hold there until function/animation completes. Once it has the user will then place cursor outside of the speech box/bubble to revert the content.
4. **Testing Results**

        - When hovering over images each image increased in scale by the appropriate amount, growing in size without obscuring the other images present. When cursor left the image field the images then reverted back to their original size as intended.
        - When mouse enters review field the slideUp animation is triggered and content replaced with the intended value. Upon leaving the field with the cursor the animation is again triggered and the content reverts back to original content as intended.

## Deployment
1. Throughout project development, use of 'git add' and 'git commit' functions within project terminal to save changes and document development process. Each commit message explains and shows changes since last version and provides information to user's viewing the repository.
2. Throughout development regular use of 'git push' function. This function pushes changed/new code to GitHub and ensures the code is safe and protected from potential loss or system/cloud error.
3. Once project completed visit the repository via GitHub @ *https://github.com/GreigBenton/Milestone-2-project*
4. From here visit Settings to find deployment steps.
5. Scroll down to GitHub pages section.
6. Ensure master branch is selected and *Save*.
7. Project is now visible and live @ *https://greigbenton.github.io/Milestone-2-project/.*

#### Local Cloning
1. After downloading GitHub Desktop user logs into to their GitHub profile
2. Selects the respository and branch they wish to clone
3. Denotes the local path 
4. Clicks 'Clone'

#### Differences deployed and development version
1. Upon initial deployment background/hero images were not loading.
2. Resolved via updating file paths for these images within the style.css file.
3. No further differences between deployed and development version.

## Credits

#### Content
- Annecy travel information was taken from [theculturetrip.com](https://theculturetrip.com/europe/france/articles/10-reasons-why-you-must-visit-annecy-france/)
- Bern travel information was taken from [holidaystoswitzerland.com](https://holidaystoswitzerland.com/things-to-do-in-bern/)
- Tblisi travel information was taken from [wanderlust.co.uk](https://www.wanderlust.co.uk/content/top-things-to-do-tbilisi-georgia/)
- Krakow travel information was taken from [discovercracow.com](https://discovercracow.com/things-to-do-in-krakow/)

#### Media
- All images were taken from [Pixabay](pixabay.com)

#### Inspiration
- No direct inspiration was taken but instead took inspiration from my knowledge of History studying this in College and University and also historic programming I have witnessd over the years.