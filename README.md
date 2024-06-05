## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Report
- How many hours did i spend on this project: 3.5 hours total
    + 1 hour of researching ideas online
    + 0.5 hour for creating local resources
    + 1 hour of implementing UI, add functionality
    + 1 hour of fixing UI bugs, finalizing source code
- What would i improve if i had more time:
    + Try implementing dynamic navigation buttons on the mouse, change the direction based on what area the mouse is currently in.
    + Unit test
    + Show left/right scroll button only when the scrollbar is visible
    + Animation on changing the images to create a "moving" feeling when interacting with the image
    + Clear the requirement "if you turn around you are facing the other direction", i'm not quite sure what this means so assuming the action required is reversing the images to create an illusion of going back to the trail (since the POV is looking back). The button can still be rendered normally, but based on the button was pressed, i can look up the index of the Hitzone in the current Hitzone array and reverse the list to get the "opposite" value and get the correct direction. Otherwise the requirement is still unclear to me