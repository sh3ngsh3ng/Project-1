# Project Planning (Project Title-WIP)
- Phase 1: Research on available data
- Phase 2: Experiment with Technology to use
- Phase 3: UX Planning
- Phase 4: Functionality (make sure it works as intended)
- Phase 5: UI Planning
- Phase 6: Design Web Application
- Phase 7: Responsiveness
- Final Phase: Deploy!

## Phase 1: Research on available data
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

## Phase 2: Experiment with Tech to use
- Leaflet



## Phase 3: UX Planning
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
- Drop ping

#### Non-functional
### 3) Structure
### 4) Skeleton
### 5) Surface


## Phase 4: Functionality


### Current Location:
- ~~Retrieving user's location + Fly to~~
- ~~Can consider making it auto instead of button clicking? I.e. window DOMcontentloaded~~

### Food search
- ~~Set-up Foursquare API to search for food~~
- ~~Link user's input to search function~~
- ~~Add in range of distance for food search function~~
- Add in details for search results:
    - Name
    - Address
    - Distance(?)
- ~~(Issues) Getting location repeatedly keeps placing markers~~

### Radius Slider Bar
- Display results within specified radius (max walking dist = 500m)
- Adding Distance Display when radius slide button changes (https://stackoverflow.com/questions/10004723/html5-input-type-range-show-range-value)
- (Issues) Displays markers even when nothing is typed in search bar

### Ping Drop 
- Dropping Ping instead
- Changing Location Markers 

### Cafe Hopping
- Single Web Application
- Function to add to itinerary

### Food recommendation
- Recommendations for food (4square API?)

### Filtering Function
- Restaurants, cafe, hawkers, etc

### Routing
- (Least Priority) Routing API to find route there




## Phase 5: UI Planning
## Phase 6: Design Web Application
## Phase 7: Responsiveness
## Final Phase: Deploy!