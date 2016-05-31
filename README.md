# ThankForMe

Unlike other auto-thanking scripts, this one actually works. Most scripts found elsewhere use the FB api to download the posts written on your timeline. But off late, FB has started grouping all birthday posts together, rendering those tools useless. I wrote this to overcome that.

There are two parts to auto-thank everyone:

1. Getting the ids of the birthday posts on your timeline - handled by scraper.js
2. Writing a 'thank you' comment - handled by thankforme.py. 

## Part 1 : Collect the Post IDs
To get this to work, you need to go to your timeline. All the birthday posts would be grouped together, but there'd be a link saying:

"160 friends __posted__ on your Timeline for your birthday"

Click the link here, and on going to the page, open the browser console. Paste the code in `scraper.js` into the console. After a few seconds (depending upon the number of posts on your timeline), there'll be a comma separated list of post-ids in the console. Copy that.

## Part 2 : Do the actual thanking
Now run the `thankforme.py` script, and enter:

1. access-token (you can get this from [here](https://developers.facebook.com/tools/explorer) - but make sure you have enough permissions to read posts and write comments on them)
2. The comma-separated list of post-ids as the program asks.

## Part 3 : Chill
Sit and relax as the script thanks everyone on your behalf.

Modify the thankforme.py script if you wanna make changes to the thank-you messages that get commented.

For how long will this work? Can't say, because the scraping is based on  rather fragile rules. If the facebook changes the way post-ids are stored in the DOM, or it changes the classnames of the required items, this will fail to work. But it should be easy to modify the scraping script. The python script will work as it is without changes. 
