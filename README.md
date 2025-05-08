# 💳 Example Customer Card API

A single endpoint that returns either a **single** or **list** of customer cards for use with Plain.

---

## 🚀 Endpoints

- **List all cards**
  
  ```
  GET /api/cards
  ```
  → Returns a list of pre-built static customer cards.

- **Get a single card by type**
  
  ```
  GET /api/cards?type=usage
  ```
  → Returns the specified customer card.

---

## 🚀 Customer Cards

### Basic

<img width="447" alt="Screenshot 2025-05-08 at 10 49 50" src="https://github.com/user-attachments/assets/ea2120d5-a697-448f-8799-56d25e40ec74" />

### Usage

<img width="446" alt="Screenshot 2025-05-08 at 10 47 50" src="https://github.com/user-attachments/assets/f7b6d117-203c-4024-be3a-b74e22518b21" />


---

## 💻 How to Run Locally

```bash
git clone https://github.com/fredwix/serverless-cards.git
npm install
npm run start
```

---

## 📚 Useful Resources

- [⚡ Node.js Serverless Function Template](https://vercel.com/templates/other/nodejs-serverless-function-express)
- [🛠️ Plain UI Components Playground](https://app.plain.com/developer/ui-components-playground)
- [📖 Customer Card API Docs](https://www.plain.com/docs/api-reference/customer-cards)

---

## 🔧 Improvement Considerations

- 🔐 Add **endpoint auth guard** (e.g., authorization token in request headers from Plain)
- 💾 Store **customer card templates in a database**
- ⚡ Implement **caching strategy** for faster API responses
- ✅ Add **unit tests** for handlers and components
- 🔄 Support **multi-card type queries** (currently only supports one type)
- 🛡️ Introduce **API versioning** for future-proofing

---


