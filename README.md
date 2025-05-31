# Personal Portfolio

A modern, interactive terminal-style portfolio website built with React, Vite, and Tailwind CSS.

![Terminal Portfolio Preview](https://img.shields.io/badge/Status-Live-brightgreen)
![React](https://img.shields.io/badge/React-19.1.0-blue)
![Vite](https://img.shields.io/badge/Vite-6.3.5-purple)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.17-cyan)

## Available Commands

| Command | Description |
|---------|-------------|
| `help` | Display all available commands |
| `about` | Show personal information and bio |
| `projects` | List portfolio projects with links |
| `skills` | Display technical skills and expertise |
| `contact` | Show contact information and social links |
| `clear` | Clear the terminal screen |
| `history` | Show command history |

## Tech Stack

- **Frontend Framework**: React 19.1.0
- **Build Tool**: Vite 6.3.5
- **Styling**: Tailwind CSS 3.4.17
- **Animations**: Framer Motion 12.15.0
- **Icons**: Lucide React 0.511.0
- **Language**: JavaScript (ES6+)
- **Deployment**: GitHub Pages

## Project Structure

```
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Terminal/
│   │   │   ├── Terminal.jsx          # Main terminal component
│   │   │   ├── CommandLine.jsx       # Command input handling
│   │   │   ├── CommandOutput.jsx     # Command result display
│   │   │   ├── Cursor.jsx           # Animated cursor
│   │   │   └── TerminalHeader.jsx   # Window controls
│   │   └── Sections/
│   │       ├── AboutSection.jsx     # About information
│   │       ├── ProjectsSection.jsx  # Projects showcase
│   │       ├── SkillsSection.jsx    # Skills display
│   │       ├── ContactSection.jsx   # Contact details
│   │       └── HelpSection.jsx      # Help documentation
│   ├── data/
│   │   ├── about.js                 # Personal information
│   │   ├── projects.js              # Portfolio projects
│   │   └── skills.js                # Technical skills
│   ├── hooks/
│   │   └── useTypingEffect.js       # Typing animation hook
│   ├── utils/
│   │   ├── commands.jsx             # Command processing
│   │   └── terminalHistory.js       # History management
│   ├── types/
│   │   └── types.js                 # JSDoc type definitions
│   ├── App.jsx                      # Main app component
│   ├── main.jsx                     # React entry point
│   └── index.css                    # Global styles
├── .github/
│   └── workflows/
│       └── deploy.yml               # GitHub Actions deployment
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## Customization

### Personal Information

Edit the files in the `src/data/` directory to customize your portfolio content:

- **`about.js`**: Update personal information, bio, and social links
- **`projects.js`**: Add your projects with descriptions, technologies, and links
- **`skills.js`**: List your technical skills and proficiency levels

### Styling

The terminal uses a custom color scheme defined in `tailwind.config.js`. You can modify:

- **Colors**: Terminal color palette in the `theme.extend.colors.terminal` section
- **Fonts**: Typography settings in the `fontFamily` section
- **Animations**: Custom animations and transitions

### Adding New Commands

1. Define the command logic in `src/utils/commands.jsx`
2. Create a corresponding section component in `src/components/Sections/`
3. Update the help documentation in `HelpSection.jsx`

## Deployment

### Automatic Deployment (Recommended)

This project is configured for automatic deployment to GitHub Pages using GitHub Actions:

1. **Enable GitHub Pages** in your repository settings
2. **Set source** to "GitHub Actions"
3. **Push to main branch** - deployment happens automatically

### Manual Deployment

```bash
npm run deploy
```

This builds the project and deploys it using the `gh-pages` package.