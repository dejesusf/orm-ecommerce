# ORM E-Commerce Database

## Description
With MySQL and Sequelize, this database application can be used to manage inventory and purchases for e-commerce websites. Since there isn't any front-end code, apps like Insomnia would need to be used to view this locally. A video walkthrough of this application is availabe under [Usage](#usage).

I was able to get through most of this assignment pretty smoothly. I ran into most of my bugs towards the end when I tested my routes in Insomnia. I tried to let sequelize do its thing but ended up defining the primary keys for each table. After that, the routes seemed to have worked.

## Table of Contents
- [License](#license)
- [Installation](#installation)
- [Usage](#usage)
- [Questions](#questions)

## License
![License Badge](https://img.shields.io/static/v1?label=license&message=None&color=blue)

## Installation
Upon copying this repo, please install express, mysql2, sequelize, and dotenv.
1. In the .env.EXAMPLE file, please update the password for MySQL, then remove the .EXAMPLE from the filename.
2. Run 'mysql -uroot -p', enter your password to login to MySQL.
3. Run 'source db/schema.sql' to create the database.
4. Type 'exit' to exit MySQL.
5. Run 'npm run seed' to seed the database. Optionally, you may update the seed data to reflect your inventory.
6. Run 'node server.js' to begin.
    
## Usage
Here is a video demonstration on how to use this application after it has been properly installed.

## Questions
If there any questions, feel free to [email me](mailto:dejesusf@uw.edu). Don't be shy and visit my [GitHub Profile](https://github.com/dejesusf) to see other projects I'm working on.