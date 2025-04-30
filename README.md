# Hearthstone Deck Builder

<details>
<summary><h2><strong>Table of Contents</strong></h2></summary>

- [About the Project](#about-the-project)
- [Built With](#built-with)
- [Contributors](#contributors)
- [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation Steps](#installation-steps)
- [Usage](#usage)
- [Upcoming Features](#upcoming-features)
- [Acknowledgments](#acknowledgments)

</details>


## About The Project

**Hearthstone Deck Builder** is a web application designed to help you build the ultimate deck for the popular game Hearthstone by Blizzard. The application's database includes all cards, obtained from the **official API** provided by Blizzard, to ensure accurate information.

![Screenshot 2025-04-29 at 12 12 51](https://github.com/user-attachments/assets/b15c58be-3c57-4015-be8e-7124cf124952)

### Features

- **Filter** the cards based on **class**, **rarity**, **type**, **mana cost**.
- **Drag and drop** the cards you wish to add to your **Deck** from the **infinite scroll menu** to the **Deck Builder** on the left.
- **Statistics** display of your **Deck** on the bottom, such as **Total Mana Cost**, amount of **Dust** needed for crafting, and distribution of rarity.
- **Lazy Loading** of cards in an infinitely scrollable box.
- **Authentication and user management**: create your own account for secure access to the database only available to *authenticated users*.

![Screenshot 2025-04-29 at 12 13 43](https://github.com/user-attachments/assets/1dc98361-837e-4a36-aa07-e5cb31118fa6)

The entire application is containerized using **Docker Compose**, enabling seamless **deployment** and **scalability**.

## Built With

- **Backend:**  
  [![Express.js](https://img.shields.io/badge/express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)

- **Frontend:**  
  [![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)  
  [![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)  

- **Database:**  
  [![MongoDB](https://img.shields.io/badge/-MongoDB-13aa52?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)

- **Containerization:**  
  [![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)  
  [![NGINX](https://img.shields.io/badge/NGINX-009639?style=for-the-badge&logo=nginx&logoColor=white)](https://www.nginx.com/)

## Contributors

| Name         | GitHub Profile                                |
|--------------|-----------------------------------------------|
| Ádám Ratkai  | [Adamratkai](https://github.com/Adamratkai)   |
| Gergő Nagy   | [GergoNagy94](https://github.com/GergoNagy94) |
| Dávid Rudnai | [rudnaid](https://github.com/rudnaid)         |

## Getting Started

### Prerequisites

**Due to MongoDB limitations, Docker is needed to run the application with a local MongoDB container**

- **Docker Desktop**
  ➡️ [https://www.docker.com/products/docker-desktop/](https://www.docker.com/products/docker-desktop/)

- **Node.js 20+**
  ➡️ [https://nodejs.org/en/download/](https://nodejs.org/en/download/)

### Installation Steps

To get a local copy up and running, follow these steps:

1. Open a **terminal** and navigate to the directory where you would like to save the repository.

2. **Clone the repository** to your machine by executing the command below in your **terminal**, then proceed with one of the installation options below.
   ```bash
   git clone https://github.com/rudnaid/deckbuilder.git
   ```

To simplify setup, an example `.env` file with the necessary **environment variables** is provided.

---

#### Set Up of Docker containers

1. **Ensure Docker is Running**
    - Start **Docker Desktop** or the **Docker daemon** on your system.

2. **Navigate to the project's directory**
    - Open your **terminal** and navigate to the **root** directory of the project.

3. **Build and run the containers with the automated script**
    - Execute the command:
      ```bash
      docker compose up -d
      ```

4. **Access the Application**
    - Open your browser and visit:  
      [http://localhost:4000](http://localhost:4000)

5. **Stopping the application**
    - To stop running the containers and remove associated data, execute this command:
      ```bash
        docker compose down -v
      ```

---

## Usage

### Building your deck

1. **Register** a new user or **log in** if you already have an account.

2. **Choose your preferred class**
    - The cards for the class *(plus the neutral cards available for all classes)* will load.
    - To refine the results, **apply filters** from the **select menus** or click the **Mana Crystal** images.

3. **Build the deck**
    - **Drag and drop** the cards you want to add to your deck to the **Deck Builder**.
    - When you are ready, press **Save Deck** to have your new Deck saved to the database.

---

## Upcoming Features

- Page for managing saved decks
- Improved class selection screen
- Fully responsive design
- Performance improvements
- Error handling overhaul

## Acknowledgments

- [Blizzard Game Data API-s](https://develop.battle.net/documentation/hearthstone/game-data-apis) for data on the cards
- [Best-README-Template](https://github.com/othneildrew/Best-README-Template) for inspiration
- [Shields.io](https://shields.io/) for the badges
