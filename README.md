# Ipl-Data-Visualization
A web app to visualise Indian Premere League data across all seasons with kaggle dataset, https://www.kaggle.com/manasgarg/ipl.
You can find my implementation [here](https://goelrohan6.github.io/Ipl-Data-Visualization/#!/teams)

## Major libraries/frameworks used

 - `AngularJs`: It has 2way data binding which comes in handy, a good component based robust app can be constucted with the use of directives and services.
 - `BootStrap3`: Minimal framwork to give a nice skeleton to the app and also make it mobile responsive.  
 - `NVD3`: AngularJS directive for NVD3 re-usable charting library (based on D3), used it because it is made around D3js which gives you a lot 
  of power and also it was based on JSON API which made task's a bit easier.
 - `ChartJs`: It is lighweight library and was used to make some basic line, bar and polar graphs.
 - `GulpJs`: Used for automating repetitive tasks, the streaming build system
 - `upupJs`: Load website offline
## Bonus Points

## Optimise load time
I worked on improving the load time for a better user experience.

- All the javascript was aggregated into 2 or 3 files
    - All the data from SQL queries was stored in the app itself within services, there were no redundant HTTP request's.
	- After Executing all the data was available as JSON which can be later modified and used in 
- Used everything as directives, they were only loaded when called for.
 ![PWA Audit Google chrome](https://github.com/goelrohan6/Ipl-Data-Visualization/blob/master/docs/readmeImages/otherAudits.png)

## Make it mobile responsive
- Bootstrap was used and every element was put accross accordingly
- And both chart libraries were chosen such as they had a nice support for small devices

 ## Make it a progressive web-app
 User can easily add to homescreen and use it as a native app without knowing the difference, actually getting the fun of android app with a website.
 - Added a mainfest.json file
 - Metadata provided for Add to Home screen
 - Consisted of a start_url
 - Background_theme, theme_color
 - Icons of various sizes
 - Adding service workers, With the
 - Site is served over HTTPS (Github pages)
 - Pages are responsive on tablets & mobile devices (already possible with bs3)
 - All app URLs load while offline (will discuss this in next bonus point)
 ![PWA Audit Google chrome](https://github.com/goelrohan6/Ipl-Data-Visualization/blob/master/docs/readmeImages/pwaAudit.png)
 
 Basicly our app passed all of the audit tests performed by chrome.

## Make it offline usable.
User can access a part of the app even when he/she is offline.
 - With service workers installed and UpUpjs we can easily make the app offline usable.


  ![PWA Audit Google chrome](https://github.com/goelrohan6/Ipl-Data-Visualization/blob/master/docs/readmeImages/before-service.png)


  ![PWA Audit Google chrome](https://github.com/goelrohan6/Ipl-Data-Visualization/blob/master/docs/readmeImages/afterService.png)
  

These images show that the service worker loads after the app has finished loading.Also the gear icon shows which all scripts are used when app is offline.

## Installation

1) `sudo npm install`
2) `sudo bower install --allow-root` if in linux else `sudo bower install`
3) run gulp serve to start the app.

## Screenshots
![PWA Audit Google chrome](https://github.com/goelrohan6/Ipl-Data-Visualization/blob/master/docs/readmeImages/barPlor.png "Score distribution for teams")
	
	This graph shows total score distribution for all teams, lowest line represents the 
	minimum value, highest line represents the maximum value, lower quartile is the median of lower half, 
	upper quartile is the median of upper half and the middle one is the median of all.

![PWA Audit Google chrome](https://github.com/goelrohan6/Ipl-Data-Visualization/blob/master/docs/readmeImages/sunBurst.png "Total Hits for all Teams")
	
	This graph shows the total hits for all teams, the second level rings represent all the teams, next segregation is (Batsman Runs , Extra Runs), Batsman runs consist of Boundries(4,6) and Non Boundries (1,2,3,5);
	Extra runs are (wide, leg_bye, bye, no ball, penalty) runs.

![PWA Audit Google chrome](https://github.com/goelrohan6/Ipl-Data-Visualization/blob/master/docs/readmeImages/multiArea.png "Total Runs for all Teams for all seasons for 20 overs")
	
	The X axis represents 20 overs and the y axis represents runs scored, if you hover on the graph you can see total score per over for each team.


![PWA Audit Google chrome](https://github.com/goelrohan6/Ipl-Data-Visualization/blob/master/docs/readmeImages/polar.png "Maximum Man of the Matches")
	
	The angle is same, intensity is measured by the radius. The more the radius more the value.

![PWA Audit Google chrome](https://github.com/goelrohan6/Ipl-Data-Visualization/blob/master/docs/readmeImages/donut.png "Score Distribution for Team wise")

	The donut represents total score distibution as (0, 1, 2, 3, 4, 5, 6) runs and the angle/acr area represents the value.


![PWA Audit Google chrome](https://github.com/goelrohan6/Ipl-Data-Visualization/blob/master/docs/readmeImages/lineChart.png "Total Number of sixes and fours")
	
	The green line represents total number of fours and the blue line represents total number of sixes.

![PWA Audit Google chrome](https://github.com/goelrohan6/Ipl-Data-Visualization/blob/master/docs/readmeImages/totalRuns.png "Total Runs for each season")
	
	The Y axis represents the total runs scored by all teams in total and X axis shows the season.


![PWA Audit Google chrome](https://github.com/goelrohan6/Ipl-Data-Visualization/blob/master/docs/readmeImages/tossDecisions.png "Toss Decisions")
	
	This graph shows which how many teams chose to bat or ball after winning the toss.

![PWA Audit Google chrome](https://github.com/goelrohan6/Ipl-Data-Visualization/blob/master/docs/readmeImages/tossWinners.png "Toss Winners")
	
	X axis shows the teams and Y axis denotes the count of tosses won accross all seasons.

![PWA Audit Google chrome](https://github.com/goelrohan6/Ipl-Data-Visualization/blob/master/docs/readmeImages/favGround.png "Toss Winners")
	
	Maximum Matches are played in M Chinnaswamy stadium (58), followed by Eden Garden (54) and so on.
