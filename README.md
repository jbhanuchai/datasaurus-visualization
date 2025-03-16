# **README - Homework 2 Information Visualization**

## **Table of Contents**
1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Demo Video](#demo-video)
4. [Technologies Used](#technologies-used)
5. [Project Structure](#project-structure)
6. [Installation & Setup](#installation--setup)
7. [Usage Guide](#usage-guide)
8. [Contributors](#contributors)

---

## **Project Overview**
This project is an **interactive data visualization system** developed for **Homework 2**. It enables users to **explore the Datasaurus Dozen dataset** through **Brushing + Linking techniques**, offering real-time updates across multiple visualizations.

The system consists of:
- A **Main Scatterplot (Dino Plot)** for **brushing interaction**.
- A **Scatterplot Group** where selections **link across multiple datasets**.
- A **Dynamic Bar Chart** that updates based on **selected data points**.

The goal is to help users **analyze how datasets with identical statistics can have vastly different visual structures**.

---

## **Features**
- **Brushing Interaction:** Users can **select** data points by **clicking and dragging** over the **Dino Plot**.  
- **Linking Across Scatterplots:** Selected points are **highlighted across eight additional scatterplots**, allowing for easy comparison.  
- **Dynamic Bar Chart Updates:** The **Bar Chart updates in real-time**, reflecting **mean and standard deviation** for selected points.  
- **Selection Reset:** Clicking **outside the scatterplot resets** the selection, restoring all points to **black** and resetting the **Bar Chart**.  
- **Consistent Axis Scaling:** Ensures all scatterplots use **the same x and y range**, making comparisons across datasets accurate.  
- **Seamless Performance:** Built with **React.js and D3.js** for smooth **real-time updates**.

---

## **Demo Video**
[🎥 Click here to watch the demo](#) *(https://drive.google.com/file/d/1pSgQixIruPA4tzaB5JgVI7sLg3txXnok/view?usp=sharing)*

---

## **Technologies Used**
- **React.js** – UI framework for rendering interactive components.  
- **D3.js** – Used for creating **scatterplots, brushing, linking, and bar chart updates**.  
- **React Hooks (`useState`, `useEffect`)** – Manages state updates for dynamic interactions.  
- **JSON Data Handling** – Loads and processes the **Datasaurus Dozen dataset**.  
- **CSS** – Provides a **clean, responsive, and visually appealing** layout.  
- **Event Listeners (D3 & DOM)** – Handles **brushing interactions** and **selection clearing** when clicking outside the scatterplot.  

---

## **Project Structure**
```
HW2
├── public
│   ├── datasaurus.json        # Dataset file containing multiple scatterplots
│   ├── index.html             # HTML entry point for the React app
├── src
│   ├── components
│   │   ├── DinoPlot.js        # Main scatterplot (Dino Plot) with brushing interaction
│   │   ├── BarChart.js        # Displays mean & standard deviation of selected points
│   │   ├── ScatterplotGroup.js # Manages linked scatterplots
│   │   ├── Scatterplot.js      # Individual scatterplot rendering
│   ├── App.js                 # Main application logic integrating all components
│   ├── App.css                # Styling for layout and responsiveness
│   ├── index.js               # React entry point
│   ├── index.css              # Global styles
├── node_modules               # Installed dependencies (auto-generated)
├── .gitignore                 # Files and folders to ignore in version control
├── package.json               # Project metadata and dependencies
├── package-lock.json          # Lockfile to ensure package consistency
├── README.md                  # Project documentation
```

---

## **Installation & Setup**
### **Prerequisites**
Ensure you have **Node.js (v14 or higher)** and **npm** installed.

### **Steps to Run the Project**
1. **Clone the Repository**:
   ```sh
   git clone https://github.com/yourusername/homework2-visualization.git
   cd homework2-visualization
   ```
2. **Install Dependencies**:
    ```sh
    npm install
    ```
3. **Start the Development Server**:
    ```sh
    npm start
    ```
4. **Open in Browser**:
    Visit http://localhost:3000/ to view the application.

---

## **Usage Guide**
The interactive visualization system allows users to explore the **Datasaurus Dozen dataset** using **Brushing + Linking** techniques. Follow the steps below to use the system effectively:

### **1. Select Data Points (Brushing)**
- Click and **drag a selection box** over the **Dino Plot** to highlight specific points.
- Selected points will turn **red**, while unselected points remain black.

### **2. Observe Linked Scatterplots**
- The **same selected points** are **highlighted** in all **eight additional scatterplots**.
- This allows for **visual comparison** of the dataset's behavior across different distributions.

### **3. View Dynamic Bar Chart Updates**
- The **Bar Chart** updates automatically, recalculating **mean and standard deviation** for only the selected data points.
- If **no selection** is made, the bar chart displays **statistics for the entire dataset**.

### **4. Reset Selection**
- Click **outside the scatterplot** to **clear the selection**.
- The scatterplots will return to **black** (default state).
- The **Bar Chart resets** to display the **full dataset's statistics**.

### **5. Compare Different Distributions**
- Select data points in the **Dino Plot** and observe **how the same points appear** across different dataset variations.

---

## **Contributors**
- **Bhanu Chaitanya Jasti** - Developer
---

