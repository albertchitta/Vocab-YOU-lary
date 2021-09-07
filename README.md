# vocab-YOU-lary

In this student assessment, you will be creating an application that allows users to CRUD vocabulary cards, authenticate with Google, and filter.

## Learning Objectives
- Single Responsibility Principle (each component/function should have one job)
- Import/Export modules
- DOM manipulation with Vanilla JS
- DOM querying with Vanilla JS
- Representing data as HTML
- Usage of semantic HTML5 tags
- Asynchronous Programming
- Promises 

## REMINDER
This is NOT A TEST. We are not looking for 100% completion, although if you can make it work completely, then wahoo!

What we are looking for is effort, critical thinking about the concepts, creative thinking to bind the concepts together for a solution, and collaboration with your teammates and instruction team.

If you only get 50% of it complete, but display the above Core Skills and can demonstrate understanding of the fundamental code concepts, then you are learning and growing - which is what we care about.

## Tools To Use:
- Postman for API testing
- Firebase for database, rules, and authentication
- Webpack template (Located in your cohort repo)
- dbdiagram.io for creating your ERD
- Figma, google slides, or paper for flow charting your application
- Axios for requests

Make sure your Developer Tools are open at all times while working on this project. Use the messages provided in the Console to determine what code needs to be fixed or implemented, and use breakpoints in the Sources tab to step through your code as you debug.

## Get Started
Use the checkboxes next to each item to keep track of what you have completed.
- [ ] Setup your firebase project and create the `.env` file with your keys. (Reference the Firebase videos in CodeTracker if you need help getting started)
- [ ] Plan your project. Take no more than an hour to plan (ERD, Flow Chart, Postman)
- [ ] Use the webpack template to create the project on your github account
- [ ] Make sure you are in your `workspace/foundations/exercises` directory
- [ ] `git clone YOUR_GITHUB_REPO_LINK`
- [ ] `cd` into the directory
- [ ] Run `npm install` to install your dependencies
- [ ] Type `code .` to open the project in VS Code
- [ ] `npm start` to start your server
- [ ] START CODING!

# MVP Requirements
[MVP Wireframe](https://www.figma.com/file/IW4jF3GnzCFLYbEXlgFNIZ/MVP)
- [ ] An ERD of your data
- [ ] Use Firebase for DB and authentication
- [ ] Technical Flow chart (timebox this)
- [ ] The app has a navigation bar
  - [ ] A logo
  - [ ] Logout button
  - [ ] Create Entry
  - [ ] Any other options you would like to add

**The most basic requirement for this project is that a user can:**
- [ ] Login and Logout of the application
- [ ] CREATE a vocabulary entry:
  - [ ] Title
  - [ ] Definition
  - [ ] Language/Tech
  - [ ] Time submitted - Not on form. Handle in your JS
  - [ ] user ID - Not on form. Pull from User object.
- [ ] READ entries
- [ ] UPDATE entries
- [ ] DELETE entries
- [ ] Filter by language/tech
- [ ] Style your application using your own creativity!

## Stretch 1
[Stretch 1 Wireframe](https://www.figma.com/file/UC3Gi8HFRkZY8OIMOAUgL4/Stretch-1)
- [ ] Allow users to order entries alphabetically, newest, oldest

## Stretch 2
[Stretch 2 Wireframe](https://www.figma.com/file/UC3Gi8HFRkZY8OIMOAUgL4/Stretch-2)
- [ ] Users can search vocabulary entries
- [ ] Users can only see the vocabulary entries that they created
- [ ] Users can add Language/Tech to the database and refrerence it on their vocabulary entries
- [ ] Users can only see the Languages/Tech categories that they created

## Stretch 3
[Stretch 3 Wireframe](https://www.figma.com/file/KgbkfaoRd5F8Q4qZ3G2Bg2/Stretch-3)
- [ ] Users can mark an entry as public or private
- [ ] If an entry is public, anyone can view it. If it is private, only the user who created it can see it
- [ ] If an entry is public, any user can copy the entry to their own set of entries and then CRUD on the new/copied entry
