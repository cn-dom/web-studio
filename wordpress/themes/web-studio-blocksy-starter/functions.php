<?php
/**
 * Web Studio Blocksy Starter child theme setup.
 * @package Web_Studio_Blocksy_Starter
 */
if ( ! defined( 'ABSPATH' ) ) { exit; }
add_action( 'wp_enqueue_scripts', static function () {
    wp_enqueue_style( 'web-studio-blocksy-parent', get_template_directory_uri() . '/style.css', array(), wp_get_theme( get_template() )->get( 'Version' ) );
    wp_enqueue_style( 'web-studio-blocksy-starter', get_stylesheet_uri(), array( 'web-studio-blocksy-parent' ), wp_get_theme()->get( 'Version' ) );
}, 20 );
add_action( 'init', static function () {
    register_block_pattern_category( 'web-studio', array( 'label' => __( 'Web Studio', 'web-studio-blocksy-starter' ) ) );
} );
