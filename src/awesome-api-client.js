// src/index.ts
// Immediately check for API key when module is imported
const apiKey = process.env.AWESOME_API_KEY;
if (!apiKey) {
  throw new Error(
    'AWESOME_API_KEY environment variable must be set.\n' +
    'Please set it before importing this library:\n' +
    '  export AWESOME_API_KEY=your-api-key\n' +
    'or add it to your .env file:\n' +
    '  AWESOME_API_KEY=your-api-key'
  );
}

export class AwesomeApiClient {

  constructor() {
    // We can safely assign apiKey here since the module-level check ensures it exists
    this.apiKey = process.env.AWESOME_API_KEY;
  }

  async getData(resourceId) {
    const response = await fetch(`https://api.example.com/data/${resourceId}`, {
      headers: {
        'Authorization': `Bearer ${this.apiKey}`,
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`API request failed: ${response.statusText}`);
    }

    return response.json();
  }

  async createResource(data) {
    const response = await fetch('https://api.example.com/data', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${this.apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      throw new Error(`API request failed: ${response.statusText}`);
    }

    return response.json();
  }
}
