/* eslint-disable max-len */
// Because classes are not hoisted you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;
    // create a reference to the ".expandButton" class.
    this.expandButton = domElement.querySelector('.expandButton');
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    // this.expandButton.textContent = 'expand';
    this.articleLabel();
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener('click', this.expandArticle.bind(this));
  }

  articleLabel() {
    const noButtonLabelYet = !this.expandButton.textContent;
    const labelIsClose = this.expandButton.textContent === 'Close';

    if (noButtonLabelYet || labelIsClose) {
      this.expandButton.textContent = 'Open';
    } else {
      this.expandButton.textContent = 'Close';
    }
  }

  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    // this.domElement.classList.toggle('article-open');
    if (this.domElement.style.height === '400px') {
      TweenMax.to(this.domElement, 0.5, { height: 50, ease: Power3.easeOut });
    } else {
      TweenMax.to(this.domElement, 1, { height: 400, ease: Power1.easeOut });
    }
  }
}

/* START HERE:

- Select all classes named ".article" and assign that value to the articles variable.


- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the Article class.

*/

const articles = document.querySelectorAll('.article');
articles.forEach(article => new Article(article));

// // Stretch - Constructor

// const articleDataObject = {}; // The parent object where all of the article data submissions get added to.

// // Constructor to create object from given data through something like an input page with specified input fields.
// class ArticleData {
//   constructor(title, date, content, img) {
//     this.title = title;
//     this.date = date;
//     this.content = content;
//     this.img = img;
//   }
// }

// // Constructor to take data (a child object) from the articleDataObject and create the necessary elements to form an article from it.
// class ArticleGenerator {
//   constructor(article, data) {
//     this.article = article;
//     this.data = data;
//     this.createHeading();
//     this.createDate();
//     this.createContent();
//     this.appendImg();
//   }

//   createHeading() {
//     const title = document.createElement('h2');
//     title.textContent = this.data.title;
//     this.article.append(title);
//   }

//   createDate() {
//     const date = document.createElement('p');
//     date.classList.add('date');
//     date.textContent = this.data.date;
//     this.article.append(date);
//   }

//   createContent() {
//     const paragraph = document.createElement('p');
//     paragraph.classList.add('content');
//     paragraph.textContent = this.data.content;
//     this.article.append(paragraph);
//   }

//   appendImg() {
//     const img = document.createElement('img');
//     img.classList.add('article-img');
//     img.setAttribute('src', this.data.img);
//     this.article.append(img);
//   }
// }

// articles.forEach((article, index) => {
//   new ArticleGenerator(article, articleDataObject[index]);
//   new Article(article);
// });
