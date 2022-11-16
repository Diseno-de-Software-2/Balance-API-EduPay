# Balance API EduPay

Esta es la API de balance para el proyecto EduPay.

## Cómo se ejecuta

Para ejecutar la API de balance, necesitas tener instalado [Node.js](https://nodejs.org/en/).

A continuación, es necesario instalar las dependencias:

```bash
npm install
```

Recuerde ejecutar la base de datos y la **API GATEWAY** antes de ejecutar la API.

Por último, puede ejecutar la API de saldo:

```bash
npm run dev
```

## Puerto

La API de equilibrio se ejecutará en el puerto 3200.

Puedes crear instancias cambiando el número de puerto en el archivo app.js y ejecutando de nuevo la API. El puerto asignado debe estar entre 3200 y 3249.

## Peticiones

---

### **Consultar credito de tarjeta**
* **URL**

  _/credito-tarjeta-:numero_

* **Método:**
  `GET`
  
*  **URL Params**

   **Required:**
 
   `numero=[integer]`

* **Respuesta al éxito:**

  * **Code:** 200 <br />
    **Content:** `{ credito : 50000 }`
  * **Code:** 200 <br />
    **Content:** `Consultas deshabilitadas`
 
* **Respuesta al error:**
  * **Code:** 
    **Content:** `{ error : ... }`
---

---

### **Consultar saldo de cuenta**
* **URL**

  _/saldo-cuenta-:numero_

* **Método:**
  `GET`
  
*  **Parámetros de la URL**

   **Requerido:**
 
   `numero=[integer]`

* **Respuesta al éxito:**

  * **Code:** 200 <br />
    **Content:** `{ credito : 50000 }`
  * **Code:** 200 <br />
    **Content:** `Consultas deshabilitadas`
 
* **Respuesta al error:**
  * **Code:** 
    **Content:** `{ error : ... }`
---
