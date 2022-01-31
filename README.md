# NG-ADMIN

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.

## Development server

Run `docker-compose up` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Create a feature module with routing
Next, you’ll need a feature module with a component to route to. To make one, enter the following command in the terminal, where `customers` is the name of the feature module. The path for loading the `customers` feature modules is also `customers` because it is specified with the `--route` option.

More information of [Lazy Loading Feature Modules](https://angular.io/guide/lazy-loading-ngmodules).

```
ng generate module customers --route customers --module app.module
```

## Code scaffolding

Run `npx ng generate component component-name` to generate a new component. You can also use `npx ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

# Docker Description
Please check node version after building
    
Run `docker build -t dockerdev .` and `docker run -p 4200:4200 dockerdev`.

if can't run docker `docker ps -a` for check port all `docker rm -f < Container_ID>` for clear container.

if need stop `docker stop <Container_ID>`. U

se this to delete everything:`docker system prune -a --volumes`

## Box-Icons
https://boxicons.com/usage

