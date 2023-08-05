# emp-root

Employee Management Root module is dependent on following child modules

- [emp-header](https://github.com/ipreencekmr/emp-header)
- [emp-footer](https://github.com/ipreencekmr/emp-footer)
- [emp-container](https://github.com/ipreencekmr/emp-container)
- [emp-home](https://github.com/ipreencekmr/emp-home)
- [emp-employee](https://github.com/ipreencekmr/emp-employee)
- [emp-address](https://github.com/ipreencekmr/emp-address)


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
