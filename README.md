<<<<<<< HEAD
# WhatsApp OpenAI Integration

An automated system that integrates OpenAI's GPT-4o mini model with Twilio's WhatsApp API to generate and deliver personalized messages to users on a schedule.

## Features

- 🤖 Uses OpenAI's GPT-4o mini model for fast, efficient message generation
- 📱 WhatsApp integration via Twilio API
- ⏰ Scheduled message delivery using cron jobs
- 🎯 Personalized message generation
- 📊 External API integration for user data
- ⚡ Optimized for performance and cost

## Project Structure

```
.
├── config.js           # Configuration and environment variables
├── index.js           # Main application entry point
├── services/          # Core service modules
│   ├── externalAPI.js # External API integration
│   ├── openAI.js     # OpenAI GPT-4o mini integration
│   └── whatsapp.js   # Twilio WhatsApp integration
├── package.json       # Project dependencies
├── .env              # Environment variables (not in Git)
└── README.md         # Project documentation
```

## Prerequisites

- Node.js >= 14.x
- NPM >= 6.x
- OpenAI API key
- Twilio account with WhatsApp capabilities
- External API access (if applicable)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/whatsapp-openai-integration.git
   cd whatsapp-openai-integration
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create environment configuration:
   ```bash
   cp .env.example .env
   ```

4. Configure your environment variables in `.env`:
   ```
   OPENAI_API_KEY=your-openai-api-key
   TWILIO_ACCOUNT_SID=your-twilio-account-sid
   TWILIO_AUTH_TOKEN=your-twilio-auth-token
   ```

## Usage

1. Start the application:
   ```bash
   npm start
   ```

2. The application will:
   - Initialize services
   - Set up scheduled tasks
   - Begin processing messages according to the schedule

## Configuration

### OpenAI Settings
- Model: GPT-4o mini
- Max Tokens: 100
- Temperature: 0.7
- Top P: 1.0

### Message Schedule
Default schedule (configurable in config.js):
- 9:00 AM
- 2:00 PM
- 8:00 PM

## Development

### Running Tests
```bash
npm test
```

### Adding New Features
1. Create feature branch
2. Implement changes
3. Add tests
4. Submit pull request

## Architecture

### Service Modules

#### OpenAI Service
- Handles message generation
- Manages API interactions
- Optimizes token usage

#### WhatsApp Service
- Manages message delivery
- Handles Twilio integration
- Ensures delivery confirmation

#### External API Service
- Fetches user data
- Manages data synchronization
- Handles API errors

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the ISC License.

## Support

For support, please open an issue in the GitHub repository.
=======
# whatsapp-openai-integration
An automated system that integrates OpenAI GPT-4o mini model with Twilio WhatsApp API for personalized message delivery
>>>>>>> 758d3e84b94f61ef3621076320c74ac1dbab8e1a
