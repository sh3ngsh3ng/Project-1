# Project Planning (Project Title-WIP)

- Phase 1: Research on available data & technology
- Phase 2: UI/UX Planning
- Phase 3: Functionality (make sure it works as intended)
- Phase 4: Structuring & Styling
- Phase 5: Responsiveness
- Final Phase: Deploy!

## Phase 1: Research on available data & technology

APIs:
- Hawker Centres: https://data.gov.sg/dataset/hawker-centres
- Restaurants & Cafes: https://developer.foursquare.com/docs/build-with-foursquare/categories/
- Nightlife: https://developer.foursquare.com/docs/build-with-foursquare/categories/
- Hawker Centres Closure Dates: https://data.gov.sg/dataset/dates-of-hawker-centres-closure
- Weather Forecast: https://data.gov.sg/dataset/weather-forecast
- Routing: https://www.onemap.gov.sg/docs/#route\
- Michelin Restaurants: https://www.kaggle.com/jackywang529/michelin-restaurants
- Healthy Eateries (KML files): https://data.gov.sg/dataset/healthier-eateries
- Tourism: https://tih-dev.stb.gov.sg/getting-started
- Geolocation API
- TripGo API


## Phase 2: UI/UX Planning
- 5 planes of UI/UX

### 1) Strategy

#### Target Audience:

- Consumers
  - The General Public
  - Foodie (a person with a particular interest in food)
- Age + IT Literacy: Younger audience who are more tech savvy
- Pain Points:
  - Not sure what to eat, indecisive.
  - May be unfamiliar with the place. E.g. User's first time in the area.
  - Might have "cravings" for a certain type of food.
  - Might have diet restrictions. E.g. halal, vegetarian, vega, etc.
- Needs:
  - Information on food around user's location
    - Dining types: Restaurants, cafes, bars, etc
    - Dietary: Halal, vegetarian, etc
    - Certain Type of Food: Chicken rice, Laksa, etc
  - Recommendations of good food around user's location

#### The User Stories:

<!-- format: as a (what), I want (goal) so that (benefit) -->

- As a foodie, I want to **find out what are the nice food/interesting places to eat** so that I can try them out!
- As a non-foodie, I want **convenience when searching for food** so that I don't have to spend time researching and worrying about what to eat!

### 2) Scope

#### Functional

- Search food near me
- Recommendations for food near me
- Adjusting Distance for search
- Options/filters
  - restaurants, hawkers, nightlife, etc
  - food, drinks, etc
- Drop ping
- Routing

#### Non-functional
- Mobile responsive


### 3 & 4) Structure & Skeleton
- https://docs.google.com/presentation/d/1Q_DtTH2Zh-jjWc5D-Z_3CdDgQJ6-Hh-VSp72L-VMTmg/edit?usp=sharing


### 5) Surface
- On hold

## Phase 3: Functionality
### Geolocation:
- ~~Retrieving user's location + Fly to~~
- ~~Can consider making it auto instead of button clicking? I.e. window DOMcontentloaded~~
- ~~Ping Drop (if user blocks location)~~
  - ~~Dropping Ping to change Location Marker~~
  - ~~Making drop ping exclusive if location disabled~~
### Food search function + Recommendation function
**Returns user's search results**
- ~~Set-up Foursquare API to search for food + recommendation~~
- ~~Link user's input to search function~~
- ~~Add markers for results~~
- Add in details for search & recommendation results:
  - Name
  - Address
  - Distance(?)
- Mode Switch button to toggle between both function
### Filtering Function
**Filter function affects both recommendation and food search results**
- ~~Add a dropdown to filter by category~~
  - ~~Categories: cafe, restaurant, bar, etc~~
  - ~~Change the dropdown button to display current selection~~
  - ~~Link category selection to API call~~
  - ~~(issue) changing filter doesn't change already displayed markers~~
  - ~~(issue) Getting location repeatedly keeps placing markers~~
### Radius Slider Bar
**Slider bar affects both recommendation and food search results**
- ~~Display search results within specified radius (max walking dist = 500m)~~
- ~~Display recommended results within specified radius~~
- ~~Adding Distance Display when radius slide button changes (https://stackoverflow.com/questions/10004723/html5-input-type-range-show-range-value)~~
- ~~Added circle marker to display radius visually~~
- ~~(Issues) Displays markers even when nothing is typed in search bar~~
### Routing
**Each result should have a routing function**
- ~~Routing API to find route there~~
- ~~To add time for polyline~~
- To add link to google directions for more specific directions.
- Set a minimum time (close locations will give 0 minutes because of math.floor)
- (issue) routing does not work sometimes if the coordinates from 4square api doesn't meet requirements for routing api
### (on hold) Cafe Hopping
- Single Web Application
- Function to add to itinerary

## Phase 4: Structuring & Styling Webpage
### Part 1: Set-up webpage structure
- ~~Start Page (Single Web)~~
- ~~Map Page (SWA)~~
- ~~Contact Page~~
- (On Hold) Tutorial

### Part 2: Style Webpage + Animations
- Style Start-Page
  - start-page design
  - navbar
  - start button
- Style Map-Page
  - ~~Current Location Marker Icon~~
  - ~~Marker Icons~~
    - Location Marker
    - Normal Search Markers
    - Recommendation Markers
  - PopUps
    - Search Popups
    - Recommendation Popups
  - Radius Slider Bar
  - Mode Switch
  - Back button
  - Settings button
- Style Contact Page

## Phase 5: Responsiveness


## Phase 6: Debug
- Filter animation is chunky
- ~~Accidental placing of markers when clicking on map-control-panel~~
- ~~Changing settings for circle marker doesn't remove initial circle marker~~
- ~~Circle marker not showing at default~~
- ~~Location doesn't clear radius layer~~
- ~~Circle marker not switched off when uncheck settings~~
- ~~default radius not showing~~
- ~~unchecking choose location marker doesn't remove the placed marker~~
- need to disable click placement once route is established
- (when location disabled) checking and unchecking marker placement option results in leftover circle marker
- leftover markers when changing mode (both ways)
- back button doesn't remove previous markers and layers already placed

## Final Phase: Deploy!


