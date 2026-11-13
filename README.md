# Anthony Phiri — Personal Portfolio

A responsive personal portfolio for Anthony Phiri, a Computer Science student and software developer in Malawi. The site introduces Anthony, shares his education and career aspirations, highlights his projects, and showcases web and Python animation work.

## Pages

- **Home** (`index.html`) — Introduction, current learning interests, and personal photos.
- **About** (`about.html`) — Background, experience, education, skills, career goals, and contact details.
- **Projects** (`projects.html`) — Selected and additional projects, including a one-sentence problem each project addresses.
- **Animations** (`animations.html`) — Python-rendered videos and interactive CSS/JavaScript animation concepts.

## Built with

- HTML5
- CSS3
- Vanilla JavaScript

There is no framework, package manager, or build step. The design uses a cream, burgundy, and green palette, responsive layouts, and reduced-motion-aware animations.

## Run locally

Open `index.html` in a browser to view the site. For more reliable video playback and local asset loading, serve the project folder over HTTP. For example, if Python is installed, run this from the project directory:

```powershell
python -m http.server 8000
```

Then open <http://localhost:8000>.

The site loads DM Sans and Playfair Display from Google Fonts, so an internet connection is needed for those fonts. It falls back to system fonts if they are unavailable.

## Project structure

```text
.
├── about.html
├── animations.html
├── index.html
├── projects.html
├── README.md
├── animation videos/    # MP4 animation exports
├── css/
│   └── style.css         # Shared styles and responsive layouts
├── elements/             # Design and animation references
├── images/               # Portfolio photography and image assets
└── js/
    └── script.js         # Navigation, scroll reveals, and interactions
```

## Contact

- Email: [malawi.anthonyphiri@gmail.com](mailto:malawi.anthonyphiri@gmail.com)
- GitHub: [Anthony-Phiri-533-MW](https://github.com/Anthony-Phiri-533-MW)
- LinkedIn: [Anthony Phiri](https://www.linkedin.com/in/anthonyphiri533)

The contact form opens a prefilled email in the visitor's default mail application; it does not send messages to a server.