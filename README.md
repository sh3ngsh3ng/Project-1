# Eat What?
awfeawef
Do you spend too much time deciding on what to eat that your 1 hour lunch/dinner break became 30 minutes snack time? Or do you need help finding 

Eat What? helps you locate your food cravings that are within walking distance (500m). The application is also capable of recommending you places to eat.


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
- Google Polyline Decoding 



# UI/UX (5 Planes)
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

#### The User Stories:
- As a non-foodie, I want **convenience when searching for food** so that I don't have to spend time researching and worrying about what to eat!
- As a foodie, I want to **find out what are the nice food/interesting places to eat** so that I can try them out!

## Plane 2: Scope
### Functional:
- Search for a particular food near me
- Recommendations of food near me
- Adjusting distance (walkable) for search
- Filter function
    - restaurants, bars, cafes
- Option to select location
- Routing
    - show route
    - show estimated time
### Non-functional:
- Mobile, tablet responsive

## Plane 3 & 4: Structure & Skeleton
- All features are all within 3 clicks
- Webpage is designed as a Single Page Application
- Both structure and skeleton are documented in the slides below:
    - https://docs.google.com/presentation/d/1Q_DtTH2Zh-jjWc5D-Z_3CdDgQJ6-Hh-VSp72L-VMTmg/edit?usp=sharing

## Plane 5: Surface
### Colours:


### Images:

### Fonts:

### Icons:



# Mobile Responsiveness
The strategy for mobile responsiveness is to size elements with ratio units (e.g. %, vh/vw, etc). Mobile responsive elements from bootstrap was also used where applicable.

Due to the constraints of time and poor choice of strategy, mobile responsiveness does not cater for all range of device.

Below are the devices that can be supported:
- 375px - Medium Mobile (E.g. Iphones 6 to X)
- 768px - Tablets (E.g. IPad)
- 1024px - Laptop

### Note for other sizes:
- For the sizes smaller than 375px, elements can be adjusted to avoid overlapping.
- For sizes larger than 1025px, elements do not overlap. But sizing of elements can be better adjusted.

# Test Cases






# Bugs
As some functions/features interacts with one another, testing is done after the implementation of every function/feature. 

For example, during the addition of Settings Menu, the two functions added (Radius Marker & Choose Location) interacted with many other features. E.g. previous markers placed were not cleared, doesn't work with location button, etc. The obvious bugs were patched before other functions are added.

Below are some of the bugs that are unresolved:


# 




