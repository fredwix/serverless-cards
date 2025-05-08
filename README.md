# 💳 Example Customer Card API

The API should return a list of cards that match the requested keys, with each card containing the components you want to display.

---

## 🚀 Endpoints

- **List cards**
  
  ```
  POST https://plain-cards.vercel.app/api/cards
  ```
  **Payload**
  ```
  {
    "cardKeys": ["usage"]
  }
  ```

  → Returns a list of pre-built static customer cards specified in cardKeys.

---

## 🖼️ Customer Cards

### Basic

<img width="447" alt="Screenshot 2025-05-08 at 10 49 50" src="https://github.com/user-attachments/assets/ea2120d5-a697-448f-8799-56d25e40ec74" />

### Usage

<img width="443" alt="Screenshot 2025-05-08 at 11 24 52" src="https://github.com/user-attachments/assets/10b81846-8905-4b14-9fc0-9bfccb59e1af" />

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
- 🔎 Better Request/Response schema validation using zod safeParse
- 💾 Store **customer card templates in a database**
- ⚡ Implement **caching strategy** for faster API responses
- ✅ Add **unit tests** for handlers and components
- 🛡️ Introduce **API versioning** for major changes to the custom cards

---


