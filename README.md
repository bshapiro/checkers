# checkers
This is a collection of 'checker' scripts to make life a little easier. May need updating -- please feel free to fork and improve!

Included:
- Amazon primenow (whole foods) slot checker, for use during panic-buying periods. (primenow.js)
- CVS vaccine appointment slot checker, for use during periods of low appointment availability. 
- Giant vaccine appointment slot checker, for use during periods of high demand and service overload.


To run any of the Javascript slot checkers, open the developer console in chrome (command+option+j) on the appropriate landing page and paste the script.  Note that you cannot run these scripts in a non-active tab or from a minimized window; to save on resources, your browser will stop executing the logic if it detects that the session is inactive. The window doesn't need to be in the foreground, though; you may cover it with other windows. 

These scripts will continuously refresh at the specified intervals (which you may adjust at will), and will play a loud continuous tone in the event that slots become available. 

To stop the notification sound (and the continuous refresh execution), refresh the page. 


# Note on updates 
Since these technologies are regularly evolving, some of these scripts may be out of date. Since they're primarily useful during periods of high demand, you can expect updates to these scripts when demand rises! As always, please feel free to fork and improve.