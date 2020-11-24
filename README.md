# SEI Project Three: The Beans


## TLDR
- **Project Duration** - 9 Days
- **App** - E-commerce Website
- **Technologies Used** - React, JavaScript, Node.js, React-router-dom, React-Bootstrap, Axios, Sass, Express, MongoDB, Mongoose, React-tostify 
- **Developer Tools** - VSCode, Eslint, Git, GitHub, NPM
- **Teammates** - 3 ([Natalie Hurst-Knight](https://github.com/nhurstknight/), [Shahab Khan](https://github.com/izzleshab) and myself)


____

## Brief

#### Full-Stack MERN application

- Create a Full-Stack application
- Utilise Express to serve API data to a MongoDB database
- Utilise data in the database on the back-end to create a full user experience on the front-end
- Complete product with multiple relationships on the backend and utilised in the front-end (CRUD functionality for atleast 2 models)
- Professional and "Final product" feel to the styling
- Deploy the final product online

### Features I developed on the project
1. Roaster Index Page (Front-end)
2. Roaster Show Page (Front-end)
3. Beans filter functionality on Beans Index page (Front-end)
4. All user profile functionality - account favourites, account edit details, account address edit, profile page (Front-end)
5. User Accounts - all of the above functionality but the back-end version - models & controllers. (Back-end)
6. Roasters models & controllers (Back-end)

____

## Frontpage
 (Screenshot Placeholder)
____

# Abstract: Post Project Thoughts and Project Overview

This project introduced a few new variables to developing a product in comparison to the first two projects on the course. This was the first full-stack application that we developed, so developing with Node.js, MongoDB, Express etc. was all a new learning experience. Furthermore, there were more individuals co-developing on the same codebase, so developing the skills of managing git, github, branches, development with three people was extremely valuable. 

## Splitting the workload: 
This project also helped me develop a understanding of more complicated project planning. Our team of three individuals all had to develop the idea of the product, what would be the MVP, how the work should be split up, who will focus on what features & a timeline of when the features should be finished.

Spending hours developing this as a team taught me about how developing software isn't just about writing code, but rather that proper organisation and planning is crucial to be able to gather clarity on the vision of the product and generate forsight about potential roadblockers, as well as decompartmentalising the workload off into sections and splitting it fairly between teammates.

We decided to mix up the jobs and roles so everybody got to experience developing different sections of the product (front-end and back-end). This split was roughly 50/50. In regards to time management, we did attempt to plan out how long it would take to develop each feature - this type of planning was a essential learning tool it the time it took to actually develop some features was alot logner than anticipated.

# Successes, Challenges and Bugs

One of the biggest successes, challenges and problems for me in this project was the filtration system on the Beans Index page. This section taught me alot about how to handle data recieved from the backend to produce a user experience where a customer can search through the products on the ecommerce website by specifed parameters. The parameters I focused on creating for this product were:

1. Filter by Price (Slider)
(ScreenshotPlaceholder)

2. Filter by Roast type 
(ScreenshotPlaceholder)

One of the issues I had with it during the development of the project was that I couldn't figure out a way of filtering both of these at the same time. E.g. Filtering "Medium Roast" and "Price Scale: £10".

Due to time constraints, I decided to keep them seperate.

1. Price filteration would be done on the frontend, with a .filter method. This would then setState of the data that had a price equivilant to the one requested by the price slider.

2. Roast filteration would be done through a checkbox with the value string of the roast inside it. This would then set the state of the data displayed.

Both of the filters worked indepentantly but whenever a user wanted to utilise the other filter - I had to reset the data back to its original and apply the new filter to it. This is not a user experience I would be impressed with in a professional product and its a shame I didn't find the time to develop it more. 

## Key Learnings 
1. Extensive planning and time management is successful to group & large corporate projects
2. Work should be divided fairly and equally depending on the skill level of participants in the group (e.g. in a work enviroment from junior to senior)
3. Some features may take longer to develop than planned - and that's okay. Just spend some time to rework the plan

## Future Features
1. Add additional features onto the checkout so the frontend could actually make a API transaction to paypal/visa
2. Two factor authentication on a user account.
3. Add an "Admin" user interface so that Roasters can add and remove their own products from the website as well as change pictures of the products and details.

____

# Code Examples

## Front-End Functionality I developed

### Beans Index Filters
![Beans Index Filters](/readmePictures/BeansPageFilter.png)

### Profile Page and Favourites 
![Profile Page and Favourites](/readmePictures/ProfilePage.png)

 ### User Checkout Address Edit
![User Checkout Address Edit](/readmePictures/AddressEdit.png)

 ### Roaster Index
![Roaster Index](/readmePictures/RoasterPage.png)
__________


 ## Back-End Functionality I developed

### User Account Controllers
![AccountAddressControl](/readmePictures/AccountAddressControl.png)

 ### User Account Favourite Controllers
![AccountFavsControl](/readmePictures/AccountFavsControl.png)

 ### Roaster Controllers
![AccountFavsControl](/readmePictures/AccountFavsControl.png)

 ### User Models
![UserModel](/readmePictures/UserModel.png)

  ### Roaster Models
![UserModel](/readmePictures/UserModel.png)
____

