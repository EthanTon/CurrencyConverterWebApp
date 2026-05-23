# Currverter - Simple React Currency Converter

Currverter is a straightforward React currency converter app that allows users to quickly convert between different currencies. The app retrieves exchange rate data from Firebase.

## Features

- Currency conversion: Convert between various currencies.
- Updated exchange rates: Reads the latest available exchange rate data from Firebase.
- User-friendly interface: A clean interface for quick conversions.

## How to Run

1. Clone the repository:

```bash
git clone <repository-url>
cd Currency-Converter
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the project root with your Firebase config:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

4. Start the development server:

```bash
npm run dev
```

5. Open the local URL shown in the terminal, usually:

```text
http://localhost:5173
```

## Build and Preview

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Contribute

If you'd like to contribute to Currverter, feel free to open issues, submit pull requests, or provide feedback.
