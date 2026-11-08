<?php
get_header();
$category_links = array(
    array( 'name' => 'Domovina', 'slug' => 'domovina', 'description' => 'Povijest, ljudi, mjesta i događaji koji su oblikovali Hrvatsku.', 'number' => '01' ),
    array( 'name' => 'Vjera i obitelj', 'slug' => 'vjera-i-obitelj', 'description' => 'Duhovnost, obiteljske vrijednosti, blagdani i običaji.', 'number' => '02' ),
    array( 'name' => 'Kultura i znanje', 'slug' => 'kultura-i-znanje', 'description' => 'Jezik, umjetnost, književnost i kulturna baština.', 'number' => '03' ),
    array( 'name' => 'Mediji', 'slug' => 'mediji', 'description' => 'Fotografije, videozapisi i multimedijalne priče.', 'number' => '04' ),
);
$featured_query = new WP_Query( array( 'post_type' => 'post', 'posts_per_page' => 1, 'post_status' => 'publish', 'meta_key' => '_patriasoul_featured', 'meta_value' => '1' ) );
if ( ! $featured_query->have_posts() ) {
    $featured_query = new WP_Query( array( 'post_type' => 'post', 'posts_per_page' => 1, 'post_status' => 'publish' ) );
}
$featured_post = $featured_query->have_posts() ? $featured_query->posts[0] : null;
$today_query = new WP_Query( array( 'post_type' => 'post', 'posts_per_page' => 1, 'post_status' => 'publish', 'category_name' => 'na-danasnji-dan' ) );
?>
<main id="main-content">
<section class="hero">
  <div class="hero-image" aria-hidden="true"></div><div class="hero-shade" aria-hidden="true"></div><div class="hero-ornament" aria-hidden="true"></div>
  <div class="hero-content">
    <div class="eyebrow"><i></i> VJERA · OBITELJ · DOMOVINA</div>
    <h1>Hrvatska.<br><em>Povijest.</em><br>Znanje. Identitet.</h1>
    <p>Priče, mjesta i ljudi koji čuvaju ono što jesmo. Upoznaj nasljeđe koje povezuje generacije.</p>
    <div class="hero-actions"><a class="button button-light" href="#rubrike">Istraži Hrvatsku <span>↗</span></a><a class="hero-text-link" href="<?php echo esc_url( home_url( '/kategorija/hrvatska-pamti/' ) ); ?>">Hrvatska pamti <span>→</span></a></div>
  </div>
  <div class="hero-caption"><span>NASLJEĐE KOJE ŽIVI</span><span>UPOZNAJ HRVATSKU. ČUVAJ BAŠTINU. PRENESI PRIČU.</span></div>
  <div class="hero-seal" aria-hidden="true"><span>HR</span><i>✦</i><small>NASLJEĐE</small></div>
</section>

<section class="intro section-wrap">
  <div class="section-kicker">01 — NAŠA PRIČA</div>
  <div class="intro-grid"><h2>Tri temelja.<br><em>Jedno nasljeđe.</em></h2><div><p class="lead">Domovina nije samo prostor na karti. Ona je jezik, sjećanje, kultura i odgovornost koju prenosimo dalje.</p><p>PatriaSoul okuplja provjerene priče o hrvatskoj povijesti, baštini, ljudima i mjestima. Znanje stavljamo ispred dojma, a dostojanstvo ispred senzacije.</p></div></div>
</section>

<?php if ( $featured_post ) : ?>
<section class="featured-story section-wrap">
  <div class="section-heading"><div><div class="section-kicker">02 — IZABRANA PRIČA</div><h2>U središtu <em>pozornosti.</em></h2></div><span class="heading-note">UREĐIVAČKI IZBOR PATRiasoul</span></div>
  <article class="featured-story-card">
    <a class="featured-story-image" href="<?php echo esc_url( get_permalink( $featured_post ) ); ?>"><?php if ( has_post_thumbnail( $featured_post ) ) { echo get_the_post_thumbnail( $featured_post, 'patriasoul-hero' ); } else { ?><span class="image-placeholder-mark">✦</span><?php } ?></a>
    <div class="featured-story-copy"><div class="story-meta"><?php echo esc_html( get_the_date( '', $featured_post ) ); ?><?php if ( get_the_category_list( ' · ', '', $featured_post->ID ) ) { echo ' · ' . wp_kses_post( get_the_category_list( ' · ', '', $featured_post->ID ) ); } ?></div><h3><a href="<?php echo esc_url( get_permalink( $featured_post ) ); ?>"><?php echo esc_html( get_the_title( $featured_post ) ); ?></a></h3><p><?php echo esc_html( get_the_excerpt( $featured_post ) ); ?></p><a class="underlined-link" href="<?php echo esc_url( get_permalink( $featured_post ) ); ?>">Pročitaj priču <span>↗</span></a></div>
  </article>
</section>
<?php endif; wp_reset_postdata(); ?>

<section class="today-band">
  <div class="today-inner section-wrap"><div class="today-date"><span><?php echo esc_html( wp_date( 'd' ) ); ?></span><small><?php echo esc_html( mb_strtoupper( wp_date( 'F' ), 'UTF-8' ) ); ?></small></div><div class="today-copy"><div class="section-kicker">03 — HRVATSKA KROZ VRIJEME</div><h2>Na današnji <em>dan.</em></h2><?php if ( $today_query->have_posts() ) : while ( $today_query->have_posts() ) : $today_query->the_post(); ?><h3><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3><p><?php echo esc_html( get_the_excerpt() ); ?></p><?php endwhile; else : ?><p>Svaki datum nosi dio naše povijesti. Ovdje ćemo objavljivati provjerene događaje i obljetnice vezane uz današnji dan.</p><?php endif; wp_reset_postdata(); ?></div><a class="today-link" href="<?php echo esc_url( get_category_link( get_category_by_slug( 'na-danasnji-dan' ) ?: 0 ) ); ?>">Povijesni zapisi <span>↗</span></a></div>
</section>

<section class="memory-section">
  <div class="memory-image" aria-hidden="true"></div><div class="memory-overlay"></div>
  <div class="memory-content section-wrap"><div class="section-kicker">04 — DOKUMENTIRANJE · DOSTOJANSTVO · ISTINA</div><h2>Hrvatska <em>pamti.</em></h2><p>Čuvanje sjećanja počinje odgovornim bilježenjem činjenica, poštovanjem žrtava i dostojanstvom svakog imena.</p><a class="button button-outline-light" href="<?php echo esc_url( home_url( '/kategorija/hrvatska-pamti/' ) ); ?>">Istraži Hrvatska pamti <span>↗</span></a></div>
</section>

<section class="topics section-wrap" id="rubrike">
  <div class="section-kicker">05 — ISTRAŽI I UPOZNAJ</div><div class="section-heading"><h2>Nasljeđe u <em>svakom koraku.</em></h2><span class="heading-note">ŠEST PODRUČJA · JEDNA PRIČA</span></div>
  <div class="topic-grid"><?php foreach ( $category_links as $topic ) : ?><a href="<?php echo esc_url( home_url( '/kategorija/' . $topic['slug'] . '/' ) ); ?>"><span class="topic-number"><?php echo esc_html( $topic['number'] ); ?></span><b><?php echo esc_html( $topic['name'] ); ?></b><small><?php echo esc_html( $topic['description'] ); ?></small><i aria-hidden="true">↗</i></a><?php endforeach; ?><a href="<?php echo esc_url( home_url( '/kategorija/hrvatska-pamti/' ) ); ?>"><span class="topic-number">05</span><b>Hrvatska pamti</b><small>Memorijalna mjesta, svjedočanstva i dokumentirana sjećanja.</small><i aria-hidden="true">↗</i></a><a href="<?php echo esc_url( home_url( '/kategorija/na-danasnji-dan/' ) ); ?>"><span class="topic-number">06</span><b>Na današnji dan</b><small>Datumi, obljetnice i važni događaji hrvatske povijesti.</small><i aria-hidden="true">↗</i></a></div>
</section>

<section class="quote-band"><div class="quote-mark">“</div><blockquote>Ne čuvamo prošlost zato da bismo u njoj živjeli, nego da bismo znali <em>kamo idemo.</em></blockquote><span>PATRiasoul · ČUVARI NASLJEĐA</span></section>

<section class="latest section-wrap">
  <div class="section-heading"><div><div class="section-kicker">06 — NOVO NA PORTALU</div><h2>Najnovije <em>priče.</em></h2></div><a class="underlined-link" href="<?php echo esc_url( home_url( '/arhiva/' ) ); ?>">Sve objave <span>↗</span></a></div>
  <div class="latest-grid"><?php $latest = new WP_Query( array( 'post_type' => 'post', 'posts_per_page' => 3, 'post_status' => 'publish', 'post__not_in' => $featured_post ? array( $featured_post->ID ) : array() ) ); if ( $latest->have_posts() ) : while ( $latest->have_posts() ) : $latest->the_post(); ?><article class="latest-card"><a class="latest-image" href="<?php the_permalink(); ?>"><?php if ( has_post_thumbnail() ) { the_post_thumbnail( 'patriasoul-card' ); } else { ?><span>✦</span><?php } ?></a><div class="story-meta"><?php echo esc_html( get_the_date() ); ?> · <?php the_category( ' / ' ); ?></div><h3><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3><p><?php echo esc_html( get_the_excerpt() ); ?></p><a class="underlined-link" href="<?php the_permalink(); ?>">Pročitaj <span>→</span></a></article><?php endwhile; wp_reset_postdata(); else : ?><p class="empty-state">Prve priče uskoro će biti objavljene. Sadržaj se jednostavno uređuje kroz WordPress administraciju.</p><?php endif; ?></div>
</section>

<section class="closing"><div><span class="section-kicker">PATRiasoul — ČUVARI NASLJEĐA</span><h2>Priča se nastavlja.<br><em>Prenesi je dalje.</em></h2><p>Upoznaj Hrvatsku. Čuvaj baštinu. Prenesi priču.</p></div><a class="button button-light" href="<?php echo esc_url( home_url( '/o-portalu/' ) ); ?>">Upoznaj PatriaSoul <span>↗</span></a></section>
</main>
<?php get_footer(); ?>
