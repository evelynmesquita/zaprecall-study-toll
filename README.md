# ZapRecall
In our fast-paced world, learning and remembering information can be challenging. ZapRecall harnesses the power of Active Recall to boost learning and knowledge retention.

<p align='center'>
  <img src="https://github.com/evelynmesquita/projeto9-zaprecall/blob/main/src/assets/zaprecall.gif"/>
</p>

## About
ZapRecall is a study tool designed to enhance content retention through active recall. Users can effortlessly select their preferred card set, respond to the chosen cards, and receive instant feedback on their accuracy. ZapRecall empowers users to monitor their learning progress and provides a percentage score to gauge their knowledge retention.

## Technologies
The following tools and frameworks were used in the construction of the project:

<p>
  <img style='margin: 5px;' src='https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB'>
  <img style='margin: 5px;' src='https://img.shields.io/badge/styled-components%20-%2320232a.svg?&style=for-the-badge&color=b8679e&logo=styled-components&logoColor=%3a3a3a'>
  <img style='margin: 5px;' src='https://img.shields.io/badge/react-icons%20-%2320232a.svg?&style=for-the-badge&color=f28dc7&logo=react-icons&logoColor=%2361DAFB'>
  <img style='margin: 5px;' src='https://img.shields.io/badge/axios-671ddf?&style=for-the-badge&logo=axios&logoColor=white'>
</p>

## How to add your own questions
1. Edit the file decks.js (src/utils/decks.js)
2. Before the variable declaration "decks", create an object with the title on its porperty
```js
      const myQuestions = {
          recall: {
              cards: []
            }
       }
```
3. Each card must follow the example:
```js
      {
        question: "O que é JSX?",
        answer: "Uma extensão da linguagem JavaScript",
      }
```
4. Spread the object at the end of the variable decks
```js
    const decks = {
        recall:{...}, 
        naruto:{...}, 
        ...myQuestions
        }
```

## How to use
1. Clone this repository
2. Install dependencies
```bash
npm i
```
3. Run the front-end with
```bash
npm start
```
4. You can optionally build the project running
```bash
npm run build
```
5. Finally access http://localhost:3000 on your favorite browser (unless it is Internet Explorer)
