<h1 align="center">
<img width="80" height="80" src="https://img.icons8.com/dotty/80/collaborator-male.png" alt="employee"/></br></br>
Employee Management App
</h1>

<h2>Author:</h2><h3>Prince Kumar Sharma</h3></br></br>

Employee Management Root module is dependent on following child modules

- [emp-header](https://github.com/ipreencekmr/emp-header)
- [emp-footer](https://github.com/ipreencekmr/emp-footer)
- [emp-container](https://github.com/ipreencekmr/emp-container)
- [emp-home](https://github.com/ipreencekmr/emp-home)
- [emp-employee](https://github.com/ipreencekmr/emp-employee)
- [emp-address](https://github.com/ipreencekmr/emp-address)

## Backend REST Service Repo

- [Spring-Boot-Employee](https://github.com/ipreencekmr/Spring-Boot-Employee)

## Available Scripts 

- `npm run build` - builds only root module in production mode

- `npm run build:dev` - builds only root module in development mode

- `npm run start` - runs root module at http://localhost:3001/ for which all the child module should be in running condition

- `npm run start:all-dev` - runs root module along with its dependent child modules in development mode

- `npm run start:all` - builds root and child modules then serve them all in production mode

## Run through docker-compose 

**NOTE:** docker-compose should be installed in your system alogn with docker. 
***

- [Install Docker](https://docs.docker.com/desktop/install/mac-install/)
  
- [Install Docker-Compose Plugin](https://docs.docker.com/compose/install/linux/#install-the-plugin-manually)

`docker-compose up` 

<img width="946" alt="docker-started" src="https://github.com/ipreencekmr/emp-root/assets/3636918/724a227d-affd-4f24-b563-fcd97f8e746e">

You can open [http://localhost:3001/](http://localhost:3001/) to see the application in action

`docker-compose down`

<img width="944" alt="docker-stopped" src="https://github.com/ipreencekmr/emp-root/assets/3636918/f6be7aa4-6250-466f-ae4b-03947f79a924">

## User Interface

![1 landing-page](https://github.com/ipreencekmr/emp-root/assets/3636918/89fb544c-dd3d-4509-b344-488ec0c8b0ef)

![2 add-screen](https://github.com/ipreencekmr/emp-root/assets/3636918/e48f1da9-21ed-4360-8599-da1807e1a949)

![3 validation-screen](https://github.com/ipreencekmr/emp-root/assets/3636918/004ba2a1-e5c6-4ddc-ab78-bb5ba3653b49)

![4 confirmation-page](https://github.com/ipreencekmr/emp-root/assets/3636918/d8338992-c64e-439c-aba3-24f8eea22695)

## Tech Stack Used

- React
- JavaScript
- Bootstrap
- Micro Front End
- Jest
- React Testing Library
- ESLint
- Lighthouse
- A11y
- Docker 
- Docker Compose
- AWS ECS
- Github Actions

## Run 

`docker-compose up`
