# Eat What?
<div align="center">
<img src="12-phase4part2v2/images/laptop-view.PNG" style="width:500px;">
</div>

## Introduction
Do you have cravings for a particular food from time to time? Do you spend too much time deciding on what to eat that your 1 hour lunch/dinner break became a 30 minutes snack time instead? Or do you need recommendations on what is good around you?

**Eat What?** provides convenience of food finding within walkable distance. You can search for a particular food as well as get recommendations of what's good near you too!

So the next time your friend ask you "eat what?", refer them to us!

### Quickstart
- Application link:
    - (not yet deployed)
- Navigation of application:
    - https://docs.google.com/presentation/d/1Cm3rBH1L73uFeR4W0letMNpHElTwNgAZpGLnGPSro_w/edit?usp=sharing

# Planning of Project
The planning of project is divided into 6 phases:
- Phase 1: Research
- Phase 2: UI/UX Planning
- Phase 3: Functionality
- Phase 4: Structuring & Styling
- Phase 5: Responsiveness
- Phase 6: Debug

For more information, refer to the projectplanning.md file

# Technologies Used
- HTML & CSS
- Javascript
- Bootstrap (v 5.1)
- LeafletJS (map)
- JQuery 
    - elements manipulation (animations, etc)
    - for API calling (oneMap)
- axios
    - for API calling (fourSquare)
- Google Polyline Decoder to decode routing from oneMAP api


# The 5 Planes of UI/UX
## Plane 1: Strategy
### Target Audience:
- Consumers
  - The General Public
  - Foodie (a person with a particular interest in food)
- Age + IT Literacy: Younger audience who are more tech savvy
- Pain Points:
  - Not sure what to eat, indecisive.
  - May be unfamiliar with the place. E.g. User's first time in the area.
  - Might have "cravings" for a certain type of food.
- Needs:
  - Information on food around user's location
    - Dining types: Restaurants, cafes, bars, etc
    - Certain Type of Food: Chicken rice, Laksa, etc
  - Recommendations of good food around user's location

### The User Stories:
- As a non-foodie, I want **convenience when searching for food** so that I don't have to spend time researching and worrying about what to eat!
- As a foodie, I want to **find out what are the nice food/interesting places to eat** so that I can try them out!

## Plane 2: Scope (Functions & Features)
### Functional:
- Search for a particular food near me
- Recommendations of food near me
- Adjusting distance (walkable) for search
- Filter function
    - restaurants, bars, cafes
- Routing
    - show route
    - show estimated time
- Option to remove radius marker
- Option to select location
- Reposition Button
- Refer to the following link for navigation:
    - https://docs.google.com/presentation/d/1Cm3rBH1L73uFeR4W0letMNpHElTwNgAZpGLnGPSro_w/edit?usp=sharing

### Non-functional:
- Mobile responsive

## Plane 3 & 4: Structure & Skeleton
- All features are all within 3 clicks
- Webpage is designed as a Single Page Application
- Both structure and skeleton are documented in the slides below:
    - https://docs.google.com/presentation/d/1Q_DtTH2Zh-jjWc5D-Z_3CdDgQJ6-Hh-VSp72L-VMTmg/edit?usp=sharing

## Plane 5: Surface
### Colours:
- A somewhat darkish theme was used to give off a "classy" feels to the application.
    - Examples:
        - Greyish colours was chosen for many of the elements such as Navbar, navbar dropdown, etc
        - Grayscale filter was also used on the background image
- Clickable buttons such as the "START" button and buttons that yield results (search/recommend) are given a greenish colour to make it more pleasant and clickable

### Images:
- As a picture speaks a thousand words, a food related background image was used to fit the theme of the application.

### Fonts:
- Font Colour: White is used in the start-page (landing page) as to give a contrast to the darkish classy feels
- Font Sizes are adjusted based on screen sizes
- Typography

### Icons:
- Icons used are related to the function/features. All results yielding from the filter function have icons that matches the category. I.e. Cafe icon for cafe results, restaurant icons for restaurant results
- For the results from functions, coloured icons are used to make the application more pleasing. Icons chosen are to somewhat have a same theme/feels. 
- Other functions such as back button, settings, etc uses icons that are commonly known. E.g. gear icon for settings, back arrow for back button, thumbs up icon for recommendations.

# Mobile Responsiveness
The strategy for mobile responsiveness is to size elements with ratio units (e.g. %, vh/vw, etc). Mobile responsive elements from bootstrap was also used where applicable.

Due to the constraints of time and choice of strategy, mobile responsiveness does not cater for all range of device.

Below are the devices that can be supported:
- 375px - Medium Mobile (E.g. Iphones 6 to X)
- 768px - Tablets (E.g. IPad)
- 1024px - Laptop

Link to screen sizes view:
- https://docs.google.com/presentation/d/19_yJY0TIJ8dx-SuCxX0KJDnHkZBysldYS733h6TCWeU/edit?usp=sharing

**Note for other sizes:**
- For the sizes smaller than 375px, elements can be adjusted to avoid overlapping.
- For sizes larger than 1024px, elements do not overlap. But sizing of elements can be better adjusted.

# Test Cases






# Bugs
As some functions/features interacts with one another, testing is done after the implementation of every function/feature. 

For example, during the addition of Settings Menu, the two functions added (Radius Marker & Choose Location) interacted with many other features. E.g. previous markers placed were not cleared, doesn't work with location button, etc. The obvious bugs were patched before other functions are added.

For the bugs encountered during the whole project, refer to projectplanning.md.

Below are some of the unresolved bugs:
- Radius and api results from food search
- 
-




# Challenges Faced
### Challenge 1:
As more functions/features are added, the possible variations/scenarios increases. Particularly challenging functions/features are:
- Geolocation
    - Have to make sure all the functions accounts for both type of users (allow/disallow geolocation)
- Slider Bar
    - Affects all results accordingly (e.g. radius marker, food search results, recommendation results)
- Settings Menu
    - Radius Marker
        - Switching on and off
    - Choosing Location (Ping Dropping)
        - Keeping track of current location
        - Linking ping's location with API

### Challenge 2:
Making the application mobile responsive was one of the most challenging. The initial strategy (design with laptop sizing first using mobile responsive units, elements, etc) adopted was not the best. The lack of foresight, knowledge and experience lead to this mistake. 

**A mobile first strategy should have been adopted.**

Nevertheless, mobile responsiveness was achieved, albeit more tediously. A very expensive and valuable lesson!


# Possible Improvements:
- Ensure better mobile responsiveness for more screen sizes
- Addition of Cafe Hopping function
    - Another function that was conceptualize was the function to allow user to plan their cafe hopping journey using the app
- Addition of Tutorial Page (not yet started)
- Addition of Contact Us page (uncompleted)

# Credits & Acknowledgements
I would like to acknowledge the lead instructor Mr Paul, teaching assistant Sam and all my classmates for providing guidance and emotional support in this project.

I would also like to personally thank Google and Stackoverflow for their 24/7 help.

// tech
// flaticon


# Disclaimer
The project is for educational purposes only. Other than the idea/concept of the project, all media files and technologies used in this project belongs to their respective owners and I do not claim any right over them. 

