# book-store

A web application that lists software engineer books in which users can search by title, description, or author

## Folder Structure

`/.github` folder contains the workflow to deploy the Next.js app to MongoDB Realm hosting

`/realm` folder contains the exported realm app

`/web` folder contains the Next.js app

## Getting started

First, run the development server:

```bash
yarn --cwd web dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## App Routes

- `/` list books for everyone
- `/auth` admin authentication
- `/admin` view all books
- `/admin/add-book` easy way to add new books

## Demo

https://book-store-eewbr.mongodbstitch.com/