<?php
/**
 * PatriaSoul editorial WordPress theme.
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
    add_theme_support( 'custom-logo', array( 'height' => 180, 'width' => 420, 'flex-height' => true, 'flex-width' => true ) );
    add_theme_support( 'custom-header', array( 'width' => 1920, 'height' => 1080, 'flex-height' => true, 'flex-width' => true, 'header-text' => false ) );
    add_theme_support( 'html5', array( 'search-form', 'comment-form', 'comment-list', 'gallery', 'caption', 'style', 'script' ) );
    add_image_size( 'patriasoul-card', 760, 520, true );
    add_image_size( 'patriasoul-hero', 1920, 1080, true );
    register_nav_menus( array(
        'primary' => __( 'Glavni izbornik', 'patriasoul' ),
        'footer'  => __( 'Podnožje', 'patriasoul' ),
    ) );
}
add_action( 'after_setup_theme', 'patriasoul_setup' );

/** Keep the portal navigable before an administrator assigns a custom menu. */
function patriasoul_menu_fallback() {
    $items = array(
        'Domovina' => '/kategorija/domovina/',
        'Hrvatska pamti' => '/kategorija/hrvatska-pamti/',
        'Vjera i obitelj' => '/kategorija/vjera-i-obitelj/',
        'Kultura i znanje' => '/kategorija/kultura-i-znanje/',
        'Mediji' => '/kategorija/mediji/',
    );
    echo '<ul class="menu-fallback">';
    foreach ( $items as $label => $path ) {
        printf( '<li><a href="%1$s">%2$s</a></li>', esc_url( home_url( $path ) ), esc_html( $label ) );
    }
    echo '</ul>';
}

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

/** Add small editorial controls to standard WordPress posts. */
function patriasoul_add_editorial_meta_box() {
    add_meta_box(
        'patriasoul_editorial_details',
        __( 'PatriaSoul — uredničke oznake', 'patriasoul' ),
        'patriasoul_render_editorial_meta_box',
        'post',
        'side',
        'high'
    );
}
add_action( 'add_meta_boxes', 'patriasoul_add_editorial_meta_box' );

function patriasoul_render_editorial_meta_box( $post ) {
    wp_nonce_field( 'patriasoul_save_editorial_details', 'patriasoul_editorial_nonce' );
    $featured = get_post_meta( $post->ID, '_patriasoul_featured', true );
    $day_month = get_post_meta( $post->ID, '_patriasoul_day_month', true );
    ?>
    <p><label><input type="checkbox" name="patriasoul_featured" value="1" <?php checked( $featured, '1' ); ?>> <?php esc_html_e( 'Istaknuta priča na naslovnici', 'patriasoul' ); ?></label></p>
    <hr>
    <p><label for="patriasoul_day_month"><strong><?php esc_html_e( 'Na današnji dan (MM-DD)', 'patriasoul' ); ?></strong></label></p>
    <p><input type="text" id="patriasoul_day_month" name="patriasoul_day_month" value="<?php echo esc_attr( $day_month ); ?>" placeholder="npr. 11-18" pattern="(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])" class="widefat"></p>
    <p class="description"><?php esc_html_e( 'Unesi mjesec i dan. Objavu dodaj i u kategoriju „Na današnji dan”.', 'patriasoul' ); ?></p>
    <?php
}

function patriasoul_save_editorial_details( $post_id ) {
    if ( ! isset( $_POST['patriasoul_editorial_nonce'] ) || ! wp_verify_nonce( sanitize_text_field( wp_unslash( $_POST['patriasoul_editorial_nonce'] ) ), 'patriasoul_save_editorial_details' ) ) {
        return;
    }
    if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) { return; }
    if ( ! current_user_can( 'edit_post', $post_id ) ) { return; }
    if ( isset( $_POST['patriasoul_featured'] ) && '1' === $_POST['patriasoul_featured'] ) {
        update_post_meta( $post_id, '_patriasoul_featured', '1' );
    } else {
        delete_post_meta( $post_id, '_patriasoul_featured' );
    }
    $day_month = isset( $_POST['patriasoul_day_month'] ) ? sanitize_text_field( wp_unslash( $_POST['patriasoul_day_month'] ) ) : '';
    if ( preg_match( '/^(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/', $day_month ) ) {
        update_post_meta( $post_id, '_patriasoul_day_month', $day_month );
    } else {
        delete_post_meta( $post_id, '_patriasoul_day_month' );
    }
}
add_action( 'save_post_post', 'patriasoul_save_editorial_details' );

function patriasoul_excerpt_length( $length ) { return 26; }
add_filter( 'excerpt_length', 'patriasoul_excerpt_length' );

function patriasoul_excerpt_more( $more ) { return '…'; }
add_filter( 'excerpt_more', 'patriasoul_excerpt_more' );

function patriasoul_body_classes( $classes ) {
    $classes[] = 'patriasoul-site';
    if ( is_front_page() ) { $classes[] = 'patriasoul-home'; }
    return $classes;
}
add_filter( 'body_class', 'patriasoul_body_classes' );
