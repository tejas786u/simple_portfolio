# Simple HTML Portfolio

A sleek, responsive, and highly customizable one-page portfolio website.

## Folder Structure

The project follows a clean, organized folder structure:

```text
simple_portfolio/
├── index.html          # Main HTML entry point
├── config.json         # ⚙️ Configuration file for portfolio details
├── README.md           # Project documentation
├── css/
│   └── style.css       # Main stylesheet with CSS variables
├── js/
│   └── main.js         # Core JavaScript logic and dynamic rendering
└── sections/           # Handlebars HTML templates (about, projects, etc.)
```

## How to Customize

This portfolio is designed to be easily modified without having to dive deep into the source code.

### 1. Update `config.json` (Main Data Source)
For most of the major changes to your details, consider modifying the `config.json` file. It acts as the brain of your portfolio and controls:
- Personal details (name, role, bio, social links)
- Work experience & Education
- Projects & Certifications
- Skills configuration
- Resume links

### 2. Update CSS Variables (Theme & Colors)
To change the overall look, feel, colors, and fonts, open `css/style.css` and tweak the variables located in the `:root` block at the top of the file.

### 3. Edit Section Templates (Layout)
If you want to restructure how individual sections are displayed, you can edit the HTML templates inside the `sections/` folder. They use Handlebars syntax (e.g., `{{about.name}}`) to pull data dynamically from `config.json`.
