# Hot Takes

It is live in the following link! https://le-hot-takes.herokuapp.com/

## About

Hot Takes is a simple social media website that allows the creating, sharing, 
and reacting of opinions. It features CRUD functionality for different "takes"
and displays them all in a clear fashion on single page web application.
It also implements an authentication and authorization system using a user's
Twitter account (and is session based).

## Setup

1. Go to the config folder in the server directory and reference the 
configLayout.env to create your own config.env file with the proper
variables filled in
2. Build the React application using `npm run build` in the root
directory. (It will be built into the client folder)
3. Run the server using `npm start` or `npm run dev` for
development purposes (uses nodemon)

## Technology Stack

This web app uses the MERN stack:

- M: MongoDB
- E: ExpressJS
- R: ReactJS
- N: Node.js

Additionally, I used Bootstrap for styling and Fontawesome for icons.
For Authentication/Authorization I used PassportJS and the Twitter Strategy

## What I learned and future plans

This was my first website that I built using the MERN stack and without a clear
underlying video/tutorial that lays out a planned site. It was fun to make, and
I learned A LOT about Website security and user data. Making an authentication and
authorization system was a lot harder than I expected but it taught me a lot about
how browsers and request actually work. I really learned a lot about everything
about Web Development in this project.

That being said, I'm done with this XD. I didn't really plan how the site would
work in the beginning and didn't really know "best practices" when creating this
site. I made this site from a random idea I had and the little knowledge I gained
from a few YouTube videos. The site is very unsound architecturally and not
scalable in the slightest. I will be moving on with the many lessons I learned
from this experience. o/

## References/Helpful Websites

- [Stack Overflow](https://stackoverflow.com/)
- [ReactJS Documentation](https://reactjs.org/docs)
- [Mongoose Documentation](https://mongoosejs.com/)
- [Bootstrap Documentation](https://getbootstrap.com/docs)
- [React Router Documentation](https://reacttraining.com/react-router/web)
