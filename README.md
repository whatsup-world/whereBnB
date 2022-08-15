# WhereBnB

This is the clone of Airbnb

WhereBnB, is a company that operates an online marketplace for lodging, primarily homestays for vacation rentals, and tourism activities. Based in Irvine, California, the platform is accessible via website and mobile app. WhereBnB does not own any of the listed properties; instead, it profits by receiving commission from each booking. The company was founded in 2022 by Xiangyou Wang inspired by Airbnb.



#### Live site: https://wherebnb1.herokuapp.com/

## Technologies: 
* JavaScript 
* HTML 
* CSS 
* Flask 
* Python 
* React 
* Redux
* Postgres
* Heroku

## Preview: 
#### Home Page
<img width="1439" alt="截屏2022-08-14 下午11 53 10" src="https://user-images.githubusercontent.com/94341993/184589720-b377a7bd-555a-44c6-96e9-5846cf696f7c.png">

#### Listings Page
<img width="1148" alt="截屏2022-08-14 下午11 57 31" src="https://user-images.githubusercontent.com/94341993/184590205-d95ba4a4-a232-4495-aee3-e5de6a8f9c6e.png">

#### Login Page
<img width="514" alt="截屏2022-08-14 下午11 59 13" src="https://user-images.githubusercontent.com/94341993/184590442-4e2b3946-3a75-4b69-bb78-5a71f4d5a82c.png">

#### Signup Page
<img width="458" alt="截屏2022-08-15 上午12 00 35" src="https://user-images.githubusercontent.com/94341993/184590560-834127b0-d08b-4d88-ba6a-f385392921d0.png">

#### Single Listing Page -- Listing owner view
<img width="891" alt="截屏2022-08-15 上午12 01 58" src="https://user-images.githubusercontent.com/94341993/184590736-b4c01063-57d5-4be0-a4e6-d38ae6f8a883.png">

#### Single Listing Page -- Non listing owner view
<img width="764" alt="截屏2022-08-15 上午12 03 29" src="https://user-images.githubusercontent.com/94341993/184590896-6a4c0580-66a7-4cb8-9599-501f3ae0dae1.png">

#### New Listing Page
<img width="457" alt="截屏2022-08-15 上午12 05 14" src="https://user-images.githubusercontent.com/94341993/184591111-f3859610-942c-4307-ab34-ede7cb27f061.png">

#### Booking Page
<img width="660" alt="截屏2022-08-15 上午12 06 12" src="https://user-images.githubusercontent.com/94341993/184591216-9cc7b117-6d04-4af7-b26a-4f8476be7722.png">

#### Booking Detail Page
<img width="461" alt="截屏2022-08-15 上午12 07 17" src="https://user-images.githubusercontent.com/94341993/184591385-67449042-48ad-498e-8a3e-723a8810d3f7.png">


## Run this in your computer: 
1. Clone this repository (main branch)

      ```bash
      git clone https://github.com/whatsup-world/whereBnB
      ```

2. Install dependencies

      ```bash
      pipenv install --dev -r dev-requirements.txt && pipenv install -r requirements.txt
      ```
      
3. Install packages
      ```
      npm install react-date-range
      npm install date-fns --save
      npm install moment --save

      ```


4. Create a **.env** file 
```
   FLASK_APP=app
   FLASK_ENV=development
   SECRET_KEY=
   DATABASE_URL=
```

5. Setup your PostgreSQL user, password and database and make sure it matches your **.env** file

```
   CREATE USER <USERNAME> WITH PASSWORD 'password';
   CREATE DATABASE <DATABASENAME> WITH ONWER <USERNAME>;
```

6. Get into your pipenv, migrate your database, seed your database, and run your flask app

   ```bash
   pipenv shell
   ```

   ```bash
   flask db upgrade
   ```

   ```bash
   flask seed all
   ```

   ```bash
   flask run
   ```

7. Get into react-app folder, run frontend react app
   ```
   npm start
   ```

