# burger-logger-homework

**What does this project do?**

This project uses Node.js, Express, Javascript, MySQL and Heroku to do the following:

* Serve up a fully functional website on Heroku at the URL: `https://infinite-scrubland-31370.herokuapp.com/`

* Users are able to enter a new burger name and, once `Add Burger` is selected, the burger is added to a MySQL database and then displayed on webpage.

* Once `Add Burger` is selected, the burger is also placed into a column on the webpage called `Undevoured Burgers`. Two buttons are also generated next to the burger:

    * `Devour` - This button initiates a `PUT` request to the MySQL table, which changes a field labeled `devoured` from `false` to `true`. The burger is then moved to the column on the webpage labeled `Devoured Burgers`.

    * `Delete` - This button initiates a `DELETE` request to the MySQL database and removes the burger from the table and from the website.

**Why is this project useful?**

* This project has taught me how to use Node.js, Express, and MySQL to create an MVC model on a deployed website.

* This project is also deployed on Heroku.

**How can users get started with this project?**

* The user can go to https://infinite-scrubland-31370.herokuapp.com/, enter a burger name in the field input, and select `Add Burger`.

This project was completed by Chris Mikstas on 11/2019.