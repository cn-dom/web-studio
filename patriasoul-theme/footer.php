<footer class="site-footer">
  <div class="footer-main">
    <a class="brand brand-footer" href="<?php echo esc_url( home_url( '/' ) ); ?>">
      <?php if ( has_custom_logo() ) : the_custom_logo(); else : ?>
        <img class="brand-default-logo" src="https://raw.githubusercontent.com/cn-dom/cuvari-nasljeda/main/public/assets/images/1000000982.png" alt="PatriaSoul – Čuvari nasljeđa" width="56" height="56" loading="lazy">
      <?php endif; ?>
    </a>
    <p class="footer-motto">Hrvatska · povijest · znanje · identitet</p>
    <nav class="footer-nav" aria-label="<?php esc_attr_e( 'Poveznice u podnožju', 'patriasoul' ); ?>">
      <a href="<?php echo esc_url( home_url( '/o-portalu/' ) ); ?>">O portalu</a>
      <a href="<?php echo esc_url( home_url( '/urednicka-nacela/' ) ); ?>">Urednička načela</a>
      <a href="<?php echo esc_url( home_url( '/kontakt/' ) ); ?>">Kontakt</a>
    </nav>
  </div>
  <div class="footer-bottom"><small>© <?php echo esc_html( date_i18n( 'Y' ) ); ?> PatriaSoul — <?php esc_html_e( 'Upoznaj Hrvatsku. Čuvaj baštinu. Prenesi priču.', 'patriasoul' ); ?></small><span>VJERA · OBITELJ · DOMOVINA</span></div>
</footer>
<?php wp_footer(); ?>
</body>
</html>
