<!doctype html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1">
<?php wp_head(); ?>
</head>
<body <?php body_class( 'patriasoul-site' ); ?>>
<?php wp_body_open(); ?>
<a class="skip-link" href="#main-content"><?php esc_html_e( 'Preskoči na sadržaj', 'patriasoul' ); ?></a>
<div class="topline"><span>HRVATSKA · POVIJEST · ZNANJE · IDENTITET</span><span>UPOZNAJ HRVATSKU. ČUVAJ BAŠTINU. PRENESI PRIČU.</span></div>
<header class="site-header">
  <a class="brand" href="<?php echo esc_url( home_url( '/' ) ); ?>" aria-label="<?php esc_attr_e( 'PatriaSoul – naslovnica', 'patriasoul' ); ?>">
    <?php if ( has_custom_logo() ) : ?><span class="brand-image"><?php the_custom_logo(); ?></span><?php else : ?>
      <span class="brand-mark" aria-hidden="true"><span class="brand-mark-inner">P</span><i>✦</i></span>
      <span class="brand-wordmark"><b>PATRIA<span>SOUL</span></b><small>ČUVARI NASLJEĐA</small></span>
    <?php endif; ?>
  </a>
  <button class="menu-toggle" type="button" aria-label="<?php esc_attr_e( 'Otvori izbornik', 'patriasoul' ); ?>" aria-expanded="false" aria-controls="primary-navigation"><span></span><span></span><span></span></button>
  <nav class="main-nav" id="primary-navigation" aria-label="<?php esc_attr_e( 'Glavni izbornik', 'patriasoul' ); ?>">
    <?php wp_nav_menu( array( 'theme_location' => 'primary', 'container' => false, 'fallback_cb' => 'patriasoul_menu_fallback', 'items_wrap' => '<ul>%3$s</ul>' ) ); ?>
  </nav>
  <a class="header-cta" href="<?php echo esc_url( home_url( '/kategorija/domovina/' ) ); ?>"><?php esc_html_e( 'Istraži priče', 'patriasoul' ); ?><span aria-hidden="true">↗</span></a>
</header>
