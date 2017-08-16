# What type of application is this?

I am currently going for a SPA, something that would work fine for mobile devices first, and secondly for desktops or laptops.

I am also keeping it simple, some components could definetly be worked on if the app were to scale from its original objective.

Hopefully this is OK in terms of actually satisfying the requirements of the challenge. 

# Why React?

I am aspiring to use React as one of my main stack tools, as such, I saw fit to use it for this challenge.

# Why React/Webpack if you're not an absolute PRO at it???

Because if I was using pure javascript or jQuery I would not be learning much. Even if this is a job-opportunity challenge I still want to get something out of it other than just the test.

I had some problems with Webpack creating tons of duplicate code and couldn't figure out why. Apparently the latest version of webpack does something differently than what it did before... if I didn't use it right now, I'd never know about this problem until maybe I had to work for a client with an urgent deadline and then what?? So I'm glad I didn't just stick to old ways.

# Code organization and comments

I decided not to break every component into its own file because its confusing to have so many files open.

So this is how I organized myself:

- I keep my uncompiled files in a raw_resources folder. This way I feel like I'm more organized.
- When a file is processed, merged or minified, de-sassed, or something else, I save it to a lib folder. This way the files are outside of my workspace and outside of the release-ready code.
- My components are in the components folder, a main file represents the larger components or components that have a single-use or are only used within the main file. The common file represents smaller components that get used often. I may break down the main file into a couple components because its becoming too large right now, but its still manageable. I feel like too many exports and imports are a headache, so I like to have a balance.
- The data folder contains things that get changed more often. Menus, pages and content data are all structured here.
- I like to comment my code extensively because if forces me to think about the code structure. I comment while I code but I always visit the code one last time to fine-tune the comments and maybe clean up some code.

# How can the app be run?

It should be possible to simply open the index.html file within a browser, at least as a first approach to the objective.

You can also run it using node if you'd like: node server.js, then access localhost:8080, but the app makes no use of a node server at this point.

# Package JSON dependencies

You may notice I have some dependencies that I'm not using.

That is because I may have used those dependencies before during development. I didn't remove them because they are great to have if the project scales in the future.

# Bugs, caveats, problems

There is a small issue that happens when the user opens the main menu when they are viewing in a small screen.

If you open the menu then resize the screen to a larger resolution, the menu "closes", this is because the menu is only visible in small resolutions.

Then, when the user lowers the resolution again, the menu pops back in! This is because we never actually closed the menu, we simply resized the window.

I decided to keep this "feature" for two reasons:
- Time consuming to fix without somewhat major overhaul, and because of the nature of the problem, I feel like that time would be wasted.
- Users don't usually resize the screen all willy-nilly, so no big deal, I think?

Another issue is the side list gets huge if you load more videos. The way to change this is through a type of inner scroll or pagination. I thought about it but didn't want to spend too much time trying to fix it and since it wasn't a requirement... Maybe a later addition.

And finally...! 
- I have not tested the app in Internet Explorer or Edge, I also did not test it on an actual mobile device... I figured Chrome and Firefox ought to be enough with the emulation tools they provide.

# Thanks

Thanks FixeAds for this opportunity. 

And sorry for all the text!

- Pedro Ferreira