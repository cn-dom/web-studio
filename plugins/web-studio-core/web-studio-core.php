<?php
/**
 * Plugin Name: Web Studio Core
 * Description: Temeljne uloge i korisnički portal za Web Studio. Koristi WordPressovu izvornu autentifikaciju.
 * Version: 0.1.0
 * Requires at least: 6.5
 * Requires PHP: 7.4
 * License: GPL-2.0-or-later
 * Text Domain: web-studio-core
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

define( 'WEB_STUDIO_CORE_VERSION', '0.1.0' );

function web_studio_core_add_client_role() {
	add_role(
		'ws_client',
		__( 'Web Studio klijent', 'web-studio-core' ),
		array(
			'read'                  => true,
			'ws_access_client_portal' => true,
		)
	);

	$admin = get_role( 'administrator' );
	if ( $admin ) {
		$admin->add_cap( 'ws_manage_client_portal' );
	}
}
register_activation_hook( __FILE__, 'web_studio_core_add_client_role' );

function web_studio_core_register_shortcodes() {
	add_shortcode( 'web_studio_login', 'web_studio_core_login_shortcode' );
	add_shortcode( 'web_studio_account', 'web_studio_core_account_shortcode' );
}
add_action( 'init', 'web_studio_core_register_shortcodes' );

/**
 * Render the native WordPress login form. Passwords and sessions remain
 * entirely under WordPress core control.
 */
function web_studio_core_login_shortcode() {
	if ( is_user_logged_in() ) {
		return '<p>' . esc_html__( 'Već ste prijavljeni.', 'web-studio-core' ) . ' <a href="' . esc_url( wp_logout_url( get_permalink() ) ) . '">' . esc_html__( 'Odjava', 'web-studio-core' ) . '</a></p>';
	}

	ob_start();

	wp_login_form(
		array(
			'echo'           => true,
			'remember'       => true,
			'redirect'       => get_permalink(),
			'form_id'        => 'web-studio-login-form',
			'label_username' => __( 'Korisničko ime ili e-mail', 'web-studio-core' ),
			'label_password' => __( 'Lozinka', 'web-studio-core' ),
			'label_remember' => __( 'Zapamti me', 'web-studio-core' ),
			'label_log_in'   => __( 'Prijava', 'web-studio-core' ),
		)
	);

	echo '<p class="web-studio-lost-password"><a href="' . esc_url( wp_lostpassword_url( get_permalink() ) ) . '">' . esc_html__( 'Zaboravljena lozinka?', 'web-studio-core' ) . '</a></p>';

	return ob_get_clean();
}

/**
 * Minimal account view. Editing credentials remains in WordPress core.
 */
function web_studio_core_account_shortcode() {
	if ( ! is_user_logged_in() ) {
		return '<div class="web-studio-account-login">' . do_shortcode( '[web_studio_login]' ) . '</div>';
	}

	$user = wp_get_current_user();

	if ( ! $user->exists() || ! user_can( $user, 'ws_access_client_portal' ) && ! user_can( $user, 'manage_options' ) ) {
		return '<p>' . esc_html__( 'Nemate dopuštenje za pristup ovom portalu.', 'web-studio-core' ) . '</p>';
	}

	$output  = '<section class="web-studio-account">';
	$output .= '<h2>' . esc_html__( 'Moj račun', 'web-studio-core' ) . '</h2>';
	$output .= '<p>' . sprintf(
		/* translators: %s: display name */
		esc_html__( 'Prijavljeni ste kao %s.', 'web-studio-core' ),
		esc_html( $user->display_name )
	) . '</p>';
	$output .= '<p><a href="' . esc_url( admin_url( 'profile.php' ) ) . '">' . esc_html__( 'Uredi profil i lozinku', 'web-studio-core' ) . '</a></p>';
	$output .= '<p><a href="' . esc_url( wp_logout_url( home_url( '/' ) ) ) . '">' . esc_html__( 'Odjava', 'web-studio-core' ) . '</a></p>';
	$output .= '</section>';

	return $output;
}
