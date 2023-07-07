# Flavors Project Docs

Welcome to the documentation for the Flavors Project 🎉🎉.



## Table of Contents

- [Acknowledgements](#Acknowledgements)

- [Synopsis](#Synopsis)
- [Analysis](#Analysis)
- [Design](#Design)
- [User's Guide](#User's Guide)
- [Developer's Guide](#Developer's Guide)



### Acknowledgements

---

The following individuals have our sincere gratitude for their guidance throughout the duration of our Semester 1 Project.

- Mr. Adebowale Mabadeje 
- Mr. CY.

We're also grateful for our team for their contributions and commitment to making this project a reality. Members of the team include:

- Mmanam Christine
- Igwe Victor David

We're also grateful to God and the Aptech Instructors for the opportunity to test our skills through this project. Mr. Adebowale supervised and counseled us throughout the course of our project, offering guidance whenever we encountered problems.



### Synopsis

---

This is a project for a seasoning company called Flavors. It's a Single Page Application built using AngularJs. 

Flavors is an exceptional seasoning brand within reach for everyone. It's aim is to redefine the culinary experience by offering a collection of modern, sophisticated, and affordable seasonings that elevate every dish. We meticulously source the finest ingredients, prioritizing sustainability, ethical practices, and flavor potency. 

Our expert artisans craft each blend with passion and precision, ensuring a symphony of flavors that excite the palate. From customizable options to convenient blends, our seasonings are designed to inspire creativity and transform ordinary meals into extraordinary culinary delights. 

Join us on a flavor journey as we invite you to discover the art of seasoning with Flavors.



### Analysis

---

We created a website with 5 routes. This website contains the Home page, About page, Products page, Gallery page, as well as the Sitemap. All these pages are dynamically displayed on a single view using AngularJs Router. 

This project was structured in this manner to allow for easy navigation and for a better user experience. Having various pages that focus on a specific aspect of the company was better suited to the imagined scope of the project.

The project uses the MVC method for better organization and to ensure separation of concerns. The Javascript, Html and Css files have been put into their separate folders as well.

With the web application, our spices are made easily accessible to individuals globally, which is validated by the positive reviews and testimonials from satisfied customers who have experienced the difference our spices make in their cooking. Their feedbacks are a testament to our brand's commitment to delivering top-notch products.



### Design

---

#### Flowchart

---

![Flavors Flowchart](Images\flavors-flowchart.png)



#### Screenshots

---

##### The Index.html File

![Index](Images\index-code.png)



##### The Home Page

![Home Page](Images\home.png)

It's responsive as well.

![Home Mobile](Images\flavors-mobile.png)



##### The About Page

![About Page](Images\about.png)



##### The Gallery Page

![Gallery Page](Images\gallery.png)



##### The Products Page

![Products](Images\products.png)



Each product has a popup modal that holds more information about it.

![Products Page](Images\product.png)



##### The Sitemap

![Sitemap](Images\sitemap.png)







### User's Guide

---

To aid user's in navigating the website, links have been provided both at the header and the footer section of each page. This eases the flow of the website and makes it more accessible.

#### The Header

The header contains the links to the important pages of the web app. It is fully responsive as well. Each link changes color on hover and also when it is clicked on. The header also indicated the active page based on the user's location.

![Header Desktop](Images\flavors-header-desktop.png)

![Header Tablet](Images\flavors-header-tablet.png)

![Header Mobile](Images\flavors-header-mobile.png)



#### The Footer

This contains the links to all parts of the web app. Most of the links are put here to prevent the header from being too cluttered.

![Footer Desktop](Images\footer-desktop.png)

It also holds the geolocation that displays the user's Country, City and State.

![Geolocation](Images\geolocation.png)



#### The Home Page

The home page contains an overview of the brand, an image slider to showcase the brands products, a section that showcases the best-selling products on the website, a section that showcases some testimonials from the brand's users, a section that showcases the new arrivals to the brand, as well as a section that provides users the option to join the brand's newsletter for updates.

#### The Products Page

The products page contains all the products offered by the flavors brand. Users can choose to learn more about each item or directly add items to their cart. If they choose to learn more, they get to see more details about the chosen item, as well as an option to drop a review for the item.

#### The About Page

This page contains useful information about the flavors brand. It highlights the mission and vision of the brand and showcases information on how users can contact the brand for help or more inquiry.

#### The Gallery Page

This pages simply showcases images related to the flavors brand. One section is dedicated to product images and the other showcases the flavors products in real world use.

#### The Sitemap

The link to this page is located at the footer of each page.

It showcases all the useful links to different sections of the web applications. Due to way that AngularJs Router works, the links might be buggy.



### Developer's Guide

---

To help developer's in understanding the source code, best coding practices were employed in the development of the website. All documents contain comments to explain what the code is for. 

The folder for the source code of this project has been kept organized to ensure that files can be easily found.

![Folder Structure](Images\more-folder-structure.png)



For easier styling and implementation of useful Javascript components, the Bootstrap library was used. The link to the Bootstrap CDN is included in the head and body tags of the index.html file. 

![Bootstrap Css](Images\bootstrap-css.png)

![Bootstrap Js](Images\bootstrap-js.png)

The Bootstrap library was used in the creation of the sliders on the web application.

![Home Slider](Images\home-slider.jpg)



Other libraries used include jQuery, which was used for a simple background change animation. The code is located in the bg-change.js file. 

![jQuey Library](Images\jQuery.png)

![bg-change File](Images\bg-change.png)



For the CSS aspect, SCSS was used in the development stage of the webiste. The .scss files were then convert to .css using the Live Sass Compiler extension by Glenn Marks on VS-Code.

![Live Sass Compiler](Images\live-sass-compiler.png)
