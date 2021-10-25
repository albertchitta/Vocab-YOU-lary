# Vocab-YOU-lary  [![Netlify Status](https://api.netlify.com/api/v1/badges/6abe16dc-e322-4e5c-9608-e0b1f9df9495/deploy-status)](https://app.netlify.com/sites/awc-vocab-you-lary/deploys)
<!-- update the netlify badge above with your own badge that you can find at netlify under settings/general#status-badges -->

An application that allows users to Create, Read, Update, and Delete (CRUD) vocabulary cards, authenticate with Google, and filter.

[View App](https://awc-vocab-you-lary.netlify.app)

## Get Started <!-- OPTIONAL, but doesn't hurt -->
```
$ git clone git@github.com:albertchitta/Vocab-YOU-lary.git
$ cd Vocab-YOU-lary
```
## About the User <!-- This is a scaled down user persona -->
- This site is for users who want to create vocabulary cards that can be edited and filtered to meet their needs.

## Features <!-- List your app features using bullets! Do NOT use a paragraph. No one will read that! -->
- Login and Logout of the application
- CREATE a vocabulary entry
- READ entries
- UPDATE entries
- DELETE entries
- Filter by language/tech

## Video Walkthrough of Vocab-YOU-lary <!-- A loom link is sufficient -->
https://www.loom.com/share/6a192ddbd51d4b2ca6433a3c9a430467

## Relevant Links <!-- Link to all the things that are required outside of the ones that have their own section -->
- [Check out the deployed site](https://awc-vocab-you-lary.netlify.app)
- [Wireframes](https://docs.google.com/presentation/d/1n0copTpsUgVgfl76Ksdov2ZPOiLvGTFxmLuiEpDAE5E/edit#slide=id.p)
- [ERD](https://dbdiagram.io/d/6137f80e825b5b0146f79e9b)
- [Project Board](https://github.com/albertchitta/Vocab-YOU-lary/projects/1)

## Code Snippet <!-- OPTIONAL, but doesn't hurt -->
This function uses a promise to filter the vocabulary cards by category.
```
// GET FILTERED VOCAB
const getFilteredVocab = (userId, category) => new Promise((resolve, reject) => {
  getVocab(userId)
    .then((filteredVocabArray) => {
      const filteredVocab = filteredVocabArray.filter((vocab) => vocab.category === category);
      resolve(filteredVocab);
    }).catch(reject);
});
```

## Project Screenshots <!-- These can be inside of your project. Look at the repos from class and see how the images are included in the readme -->
![Home](https://user-images.githubusercontent.com/83558122/138629954-30d661ae-3840-428a-a879-d1c8f959e049.PNG)
![New_Vocab](https://user-images.githubusercontent.com/83558122/138629971-401e955b-f40f-42fe-8bd9-77608b0e5145.PNG)

## Contributors
- [Albert Chittaphong](https://github.com/albertchitta)
