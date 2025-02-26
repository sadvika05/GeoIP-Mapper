# **GeoIP-Mapper** 🌍  
A simple web application that tracks and maps the location of an IP address using the **IPify API** and **Leaflet.js** for interactive maps.

---

## **🚀 Features**
- Fetches IP address details using **IPify API**  
- Displays location on an interactive map (**Leaflet.js + OpenStreetMap**)  
- Shows details like **IP address, city, timezone, and ISP**  
- Automatically detects the user's IP and maps it  

---

## **🛠 Technologies Used**
- **JavaScript (ES6+)**  
- **HTML & CSS**  
- **Leaflet.js** (for interactive maps)  
- **IPify API** (for IP lookup)  

---

## **🌐 REST API Used**
### **1️⃣ IPify API (Get User's IP)**
- **Endpoint:**  
  ```
  https://api64.ipify.org?format=json
  ```
- **Response Example:**
  ```json
  {
    "ip": "192.168.1.1"
  }
  ```

### **2️⃣ IPify Geolocation API (Get IP Details)**
- **Endpoint:**  
  ```
  https://geo.ipify.org/api/v2/country,city?apiKey=YOUR_API_KEY&ipAddress=IP_HERE
  ```
- **Response Example:**
  ```json
  {
    "ip": "192.168.1.1",
    "location": {
      "country": "US",
      "region": "California",
      "city": "San Francisco",
      "lat": 37.7749,
      "lng": -122.4194,
      "timezone": "-08:00"
    },
    "isp": "ISP Name"
  }
  ```

---

## **📦 Installation & Setup**
1. Clone the repository:  
   ```sh
   git clone https://github.com/sadvika05/GeoIP-Mapper.git
   ```
2. Navigate to the project folder:  
   ```sh
   cd GeoIP-Mapper
   ```
3. Open `index.html` in a browser. 🚀  

---

## **🎯 Usage**
- Enter an **IP address** to fetch and display its location.  
- The map updates dynamically to show the **IP's location**.  
- Your own IP is detected and displayed when the page loads.  

---

## **📷 Preview**
![image](https://github.com/user-attachments/assets/44c5a9ce-a4a3-47b1-92a4-de97df0a76fb)


---

### **📌 Note:**  
You'll need an **API key** from [IPify](https://geo.ipify.org/) to make requests. Replace `"YOUR_API_KEY"` in the code with your actual API key.

---
