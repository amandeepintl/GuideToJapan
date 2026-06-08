# GuideToJapan — Traveler's Etiquette & Relocation Portal

An elite, ultra-modern, zero-dependency portal featuring comprehensive directories for traveling, relocating, and settling down in Japan. Crafted with a premium editorial design style, subtle micro-animations, and fluid transitions.

## 🗺️ Curated Handbooks

1. **Home Hub (`index.html`)**: The entry portal connecting all Japan resource directories.
2. **Residency & Visas (`JapanVisas.html`)**: An interactive guide to all 29+ official statuses of residence in Japan, detailing qualifications, work rights, and point-based Fast-Tracks to Permanent Residency (PR).
3. **Travel Etiquette & Rules (`JapanTravelRules.html`)**: A detailed catalog of social rules, local laws, and unspoken customs covering dining, transit, temples, and everyday behavior.
4. **After Landing (`AfterLanding.html`)**: A step-by-step roadmap for moving, covering ward office registration, health insurance, bank accounts, SIM cards, renting, utilities, and emergency procedures.
5. **Interactive Roadmap (`Roadmap.html`)**: An interactive, persistent checklist guiding you chronologically from initial visa planning all the way through your first two weeks in Japan.
6. **Master Japan Guide (`JapanGuide.html`)**: An all-in-one compiled master encyclopedia covering 21 detailed sections including cost comparisons, driving licensing, pet imports, and Indian expat networks.

## 🌟 Key Features

* **Zero-Lag Architecture**: Fully optimized to run at a buttery-smooth 60fps. Zero heavy frameworks, zero layout thrashing, and zero dependencies.
* **Premium FLIP Transitions**: Uses the hardware-accelerated **FLIP (First, Last, Invert, Play)** animation technique. Cards fly seamlessly from their exact grid position to the center of the viewport and flip to reveal details.
* **Double-Bezel Sticky Search**: Real-time fuzzy search box housed inside a glassmorphic double-bezel container.
* **Kinetic Pill Filters**: Smooth, drag-to-scroll filter controls to dynamically query categories.
* **Shared Navigation System**: A sticky navigation header linking all directories together for a cohesive multi-page experience.

## 🛠️ Tech Stack

* **Structure**: Semantic HTML5
* **Styling**: Modern Vanilla CSS (noise overlay, custom Bezier curves, editorial layouts)
* **Logic**: Vanilla ES6 JavaScript (fully frontend, zero dependencies)

## 🚀 How to Run Locally

Since this is a lightweight, frontend-only project, no compilation or local installation is required.

1. Clone the repository:
   ```bash
   git clone https://github.com/amandeepintl/GuideToJapan.git
   ```
2. Open `index.html` directly in your web browser of choice:
   * **Windows**: Double-click `index.html` or run `Start-Process index.html` in PowerShell.
   * **macOS/Linux**: Run `open index.html` in your terminal.

## 📁 Repository Structure

```
GuideToJapan/
├── js/
│   ├── rules-data.js        # Travel rules database
│   ├── visas-data.js        # Visa directory database
│   └── living-data.js       # Relocation & living database
├── index.html               # Homepage portal hub
├── JapanVisas.html          # Visa and residency page
├── JapanTravelRules.html    # Travel etiquette and rules page
├── AfterLanding.html        # After landing relocation guide page
├── Roadmap.html             # Interactive journey roadmap page
├── JapanGuide.html          # Comprehensive master guide page
└── README.md
```

