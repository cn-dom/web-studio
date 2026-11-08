<?php
/**
 * PatriaSoul theme setup.
 *
 * @package PatriaSoul
 */
if ( ! defined( 'ABSPATH' ) ) { exit; }

function patriasoul_setup() {
    load_theme_textdomain( 'patriasoul', get_template_directory() . '/languages' );
    add_theme_support( 'title-tag' );
    add_theme_support( 'post-thumbnails' );
    add_theme_support( 'responsive-embeds' );
    add_theme_support( 'align-wide' );
    add_theme_support( 'custom-logo', array( 'height' => 96, 'width' => 280, 'flex-height' => true, 'flex-width' => true ) );
    add_theme_support( 'html5', array( 'search-form', 'comment-form', 'comment-list', 'gallery', 'caption', 'style', 'script' ) );
    register_nav_menus( array(
        'primary' => __( 'Glavni izbornik', 'patriasoul' ),
        'footer'  => __( 'Podnožje', 'patriasoul' ),
    ) );
}
add_action( 'after_setup_theme', 'patriasoul_setup' );

function patriasoul_assets() {
    $version = wp_get_theme()->get( 'Version' );
    wp_enqueue_style( 'patriasoul-fonts', 'https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:wght@500;600;700;800&display=swap', array(), null );
    wp_enqueue_style( 'patriasoul-style', get_stylesheet_uri(), array(), $version );
    wp_enqueue_style( 'patriasoul-site', get_template_directory_uri() . '/assets/css/site.css', array( 'patriasoul-style' ), $version );
    wp_enqueue_script( 'gsap', 'https://cdn.jsdelivr.net/npm/gsap@3.14.2/dist/gsap.min.js', array(), '3.14.2', true );
    wp_enqueue_script( 'gsap-scrolltrigger', 'https://cdn.jsdelivr.net/npm/gsap@3.14.2/dist/ScrollTrigger.min.js', array( 'gsap' ), '3.14.2', true );
    wp_enqueue_script( 'patriasoul-site', get_template_directory_uri() . '/assets/js/site.js', array( 'gsap', 'gsap-scrolltrigger' ), $version, true );
}
add_action( 'wp_enqueue_scripts', 'patriasoul_assets' );

function patriasoul_excerpt_length( $length ) { return 24; }
add_filter( 'excerpt_length', 'patriasoul_excerpt_length' );

function patriasoul_body_classes( $classes ) {
    $classes[] = 'patriasoul-site';
    return $classes;
}
add_filter( 'body_class', 'patriasoul_body_classes' );
