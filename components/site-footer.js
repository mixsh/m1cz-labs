/**
 * <site-footer> — reusable page footer Web Component.
 *
 * Renders the standard site footer with a dynamically set copyright year.
 * No attributes required.
 *
 * Example:
 *   <site-footer></site-footer>
 */
class SiteFooter extends HTMLElement {
  connectedCallback() {
    const year = new Date().getFullYear();

    this.innerHTML = `
      <footer class="container" role="contentinfo">
        <small>&copy; ${year} m1cz labs</small>
      </footer>
    `;
  }
}

customElements.define("site-footer", SiteFooter);
