<?php get_header(); ?>
<main id="main-content" class="article-wrap">
<?php while ( have_posts() ) : the_post(); ?>
<article <?php post_class( 'article' ); ?>>
  <div class="article-kicker"><?php the_category( ' · ' ); ?></div>
  <h1><?php the_title(); ?></h1>
  <div class="article-meta"><span><?php echo esc_html( get_the_date() ); ?></span><span>PatriaSoul · Čuvari nasljeđa</span></div>
  <?php if ( has_post_thumbnail() ) : ?><figure class="article-featured"><?php the_post_thumbnail( 'full' ); ?><?php if ( get_the_post_thumbnail_caption() ) : ?><figcaption><?php echo esc_html( get_the_post_thumbnail_caption() ); ?></figcaption><?php endif; ?></figure><?php endif; ?>
  <div class="article-content"><?php the_content(); ?></div>
  <div class="article-source-note"><strong>Uredničko načelo</strong><p>Činjenice, tumačenja, svjedočanstva i predaju jasno razlikujemo. Izvore navodimo uz sadržaj, a neprovjerene tvrdnje ne predstavljamo kao činjenice.</p></div>
  <div class="article-endnote">PATRiasoul · Upoznaj Hrvatsku. Čuvaj baštinu. Prenesi priču.</div>
</article>
<?php endwhile; ?>
</main>
<?php get_footer(); ?>
