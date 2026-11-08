<!doctype html>
<html <?php language_attributes(); ?>>
<head><meta charset="<?php bloginfo( 'charset' ); ?>"><meta name="viewport" content="width=device-width, initial-scale=1"><?php wp_head(); ?></head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<div class="topline"><span><?php esc_html_e( 'HRVATSKA · POVIJEST · ZNANJE · IDENTITET', 'patriasoul' ); ?></span><span><?php esc_html_e( 'ČUVAJMO PRIČE KOJE NAS OBLIKUJU', 'patriasoul' ); ?></span></div>
<header class="site-header">
<a class="brand" href="<?php echo esc_url( home_url( '/' ) ); ?>"><span class="brand-mark">P<span>✦</span></span><span><b>PATRIA<span>SOUL</span></b><small>ČUVARI NASLJEĐA</small></span></a>
<button class="menu-toggle" aria-label="<?php esc_attr_e( 'Otvori izbornik', 'patriasoul' ); ?>" aria-expanded="false">☰</button>
<nav class="main-nav" aria-label="<?php esc_attr_e( 'Glavni izbornik', 'patriasoul' ); ?>"><?php wp_nav_menu( array( 'theme_location' => 'primary', 'container' => false, 'fallback_cb' => false, 'items_wrap' => '%3$s' ) ); ?></nav>
<a class="header-cta" href="<?php echo esc_url( home_url( '/kategorija/domovina/' ) ); ?>"><?php esc_html_e( 'Istraži priče', 'patriasoul' ); ?> <span>↗</span></a>
</header>
