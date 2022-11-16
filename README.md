# Balance API EduPay

This is the balance API for the EduPay project.

## How to run

To run the balance API, you need to have installed [Node.js](https://nodejs.org/en/).

Then, you need to install the dependencies:

```bash
npm install
```

Remenber to run the database and the **API GATEWAY** before running the API.

Finally, you can run the balance API:

```bash
npm run dev
```

## Port

The balance API will be running on port 3200.

You can create instances by changing the port number in the app.js file and running the API again. The assign port must be between 3200 and 3249.

## Peticiones

---

### **Consultar credito de tarjeta**
* **URL**

  _/credito-tarjeta-:numero_

* **Method:**
  `GET`
  
*  **URL Params**

   **Required:**
 
   `numero=[integer]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ credito : 50000 }`
  * **Code:** 200 <br />
    **Content:** `Consultas deshabilitadas`
 
* **Error Response:**
  * **Code:** 
    **Content:** `{ error : ... }`
---

---

### **Consultar saldo de cuenta**
* **URL**

  _/saldo-cuenta-:numero_

* **Method:**
  `GET`
  
*  **URL Params**

   **Required:**
 
   `numero=[integer]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ credito : 50000 }`
  * **Code:** 200 <br />
    **Content:** `Consultas deshabilitadas`
 
* **Error Response:**
  * **Code:** 
    **Content:** `{ error : ... }`
---
