# Angular

I have learned, so far are as follows...

- Create Custom Component 
- Create Comeponent using command 
- Data Binding
    - String Interpolation 
        => Syntax: {{ varibale name  }}
    - Property Interpolation
        => Syntax: [property like innerText] = ""
    - Event Bindings
        => Syntax: (event like click) = "<function name>"
    - Two Way Bindings 
        => Syntax: [(ngmodel)] = "What we want to do"
- Directive (* represents the structural directive)
    -  *ngIf = "<Method, variable anything>"
    -  *ngIf = "<Method; else <name>>"
    -  ngStyle => syntax [ngStyle] = "{propertyName : "<method or the value>"}"
    -  ngClass => ngClass = "{}";
    -  *ngFor => *ngFor = "let server of serverArray"
    -  *ngFor => *ngFor = "let server of serverArray; let i =index;"


How to use
----------

Run "npm install" inside this project folder to install all dependencies.

Make sure you use the latest version of the CLI (upgrade guide below)

Run "ng serve" to see the app in action (try "npm start" in case "ng serve" fails).

Feel free to compare it with your project code to spot any errors you might have.


How to upgrade the CLI
-----------------------

Run the below commands - only use "sudo" on Mac/ Linux.

sudo npm uninstall -g angular-cli @angular/cli
npm cache clean --force
sudo npm install -g @angular/cli