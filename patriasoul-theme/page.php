<?php get_header(); ?>
<main id="main-content" class="article-wrap">
<?php while ( have_posts() ) : the_post(); ?>
<article <?php post_class( 'article' ); ?>><div class="article-kicker">PATRiasoul — ČUVARI NASLJEĐA</div><h1><?php the_title(); ?></h1><?php if ( has_post_thumbnail() ) : ?><figure class="article-featured"><?php the_post_thumbnail( 'full' ); ?></figure><?php endif; ?><div class="article-content"><?php the_content(); ?></div></article>
<?php endwhile; ?>
</main>
<?php get_footer(); ?>
