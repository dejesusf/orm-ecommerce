# ORM E-Commerce Database

## Description
With MySQL and Sequelize, this database application can be used to manage inventory and purchases for e-commerce websites. Since there isn't any front-end code, apps like Insomnia would need to be used to view this locally. A video walkthrough of this application is availabe under [Usage](#usage).

There is an issue with the 'create' and 'update' product routes. When done, Insomnia gives me a 400 Bad Request error but still creates and updates the product entered. This might be due to the category and category_id reading as null. This will be debugged in the future but for now, everything works as expected.

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
Since the file size is larger than GitHub's max capacity, here is a [video demonstration](https://drive.google.com/file/d/1LefxpPBqFj2-qXPRwxffLJ94cI_t86Rj/view?usp=sharing) on how to use this application after it has been properly installed.

## Questions
If there any questions, feel free to [email me](mailto:dejesusf@uw.edu). Don't be shy and visit my [GitHub Profile](https://github.com/dejesusf) to see other projects I'm working on.