# N Arun Kumar | Portfolio

Professional portfolio website for N Arun Kumar, Penetration Tester and Security Researcher.
Designed with a futuristic, cyberpunk-inspired aesthetic.

## 🚀 Live Demo

[https://narunkumar.dev](https://narunkumar.dev)

## 🛠️ Technologies Used

- HTML5 (Semantic & Accessible)
- CSS3 (Custom variables, glassmorphism, animations)
- Vanilla JavaScript (ES2025)
- [GSAP](https://greensock.com/gsap/) - Advanced animations and ScrollTrigger
- [Lenis](https://lenis.studiofreight.com/) - Smooth scrolling
- [SplitType](https://github.com/lukePeavey/SplitType) - Text reveal animations

## 📁 Project Structure

```text
/
│── index.html
│── style.css
│── script.js
│── 404.html
│── robots.txt
│── sitemap.xml
│── manifest.webmanifest
│── favicon.svg
│── og-image.svg
│── README.md
│── .github/workflows/deploy.yml
```

## ⚙️ Deployment

This project is configured to automatically deploy to GitHub Pages using GitHub Actions.
Any push to the `main` branch will trigger a deployment.

### How to Enable GitHub Pages

1. Go to your repository **Settings** on GitHub.
2. In the left sidebar, click on **Pages**.
3. Under **Build and deployment**, set the **Source** to **GitHub Actions**.
4. The `.github/workflows/deploy.yml` workflow included in this repo will automatically build and deploy the site whenever you push to `main`.

### Custom Domain Configuration (narunkumar.dev)

This project contains a `CNAME` file configured for `narunkumar.dev`.

1. Go to your repository **Settings** > **Pages**.
2. Under **Custom domain**, enter `narunkumar.dev` and click **Save**.
3. In your DNS provider (e.g., Cloudflare, Namecheap, GoDaddy):
   - Add an **A record** pointing to GitHub's IP addresses (e.g., `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`).
   - Add a **CNAME record** for `www` pointing to `arun060801.github.io`.
4. Once DNS propagates, check **Enforce HTTPS** in the GitHub Pages settings.

### Local Development

Since this project uses vanilla HTML/CSS/JS with CDNs, you can simply open `index.html` in your browser, or use any local static server.

```bash
# Using Node.js (serve)
npx serve .
```

## 📄 License

All rights reserved by N Arun Kumar.
