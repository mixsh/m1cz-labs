/**
 * <site-header> — reusable page header Web Component.
 *
 * Attributes:
 *   title  — the text shown in the <h1>
 *   back   — when present, renders a "← m1cz labs" nav link above the title.
 *
 * Examples:
 *   <site-header></site-header>
 *   <site-header title="trackmybets" back></site-header>
 */
class SiteHeader extends HTMLElement {
  connectedCallback() {
    const title = this.getAttribute("title") || document.title;
    const showBack = this.hasAttribute("back");

    const backNav = showBack
      ? `<nav class="header-back"><a href="/">m1cz labs</a></nav>`
      : "";

    this.innerHTML = `
      <header class="container" role="banner">
          ${backNav}
          <h1>${title}</h1>
      </header>
    `;
  }
}

customElements.define("site-header", SiteHeader);
