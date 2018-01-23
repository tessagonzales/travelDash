## Travel Dashboard:



Using the database below create a full application for it.

![Image](https://gyazo.com/77589958a591c1474aaf4836e7d39fe3.png)

## Complete the following user stories


__#1__

```
As a user
When I go to the root route '/'
Then I see a form to enter a new user
```

__#2__

```
As a user
When I enter information into the form and submit
I'm redirected to `/trips`
```

__#3__

```
As a user
When I visit '/trips'
Then I see "Welcome <User Name>" at the top of the page.
```

__#4__
```
As a user
When I visit '/trips'
Then I see a form to create a new trip.
The form should have a drop down list to select a flight
```


__#5__
```
As a user
When I submit the trip creation form
Then I see the trip added to the list of upcoming trips.
```



__#6__
```
As a airline
When I visit "/airline/new"
I see a form to create a new airline
```


__#7__
```
As a airline
When I visit '/airline/login'
Then I see a form asking which airline I belong to (this could simply be a drop down).
When I submit this form I should be directed to '/airline'.
```

__#8__
```
As a airline
When I visit "/airline"
Then I see a list of all upcoming flights (for the airline I'm logged in as).
```

__#9__
```
As a airline
When I visit "/airline"
Then I should see a form to create a new flight.
```

### Other goals:
 - Style it up! Make it look pretty.
