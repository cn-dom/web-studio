<?php get_header(); ?>
<main id="main-content" class="archive section-wrap">
  <div class="section-kicker">PATRiasoul — ČUVARI NASLJEĐA</div>
  <h1><?php the_archive_title(); ?></h1>
  <?php if ( get_the_archive_description() ) : ?><div class="archive-description"><?php the_archive_description(); ?></div><?php endif; ?>
  <?php if ( have_posts() ) : ?><div class="latest-grid"><?php while ( have_posts() ) : the_post(); ?>
    <article class="latest-card"><a class="latest-image" href="<?php the_permalink(); ?>"><?php if ( has_post_thumbnail() ) { the_post_thumbnail( 'patriasoul-card' ); } else { ?><span>✦</span><?php } ?></a><div class="story-meta"><?php echo esc_html( get_the_date() ); ?> · <?php the_category( ' / ' ); ?></div><h3><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3><p><?php echo esc_html( get_the_excerpt() ); ?></p><a class="underlined-link" href="<?php the_permalink(); ?>">Pročitaj <span>→</span></a></article>
  <?php endwhile; ?></div><?php the_posts_pagination(); else : ?><p>U ovoj rubrici trenutačno nema objavljenih članaka.</p><?php endif; ?>
</main>
<?php get_footer(); ?>
