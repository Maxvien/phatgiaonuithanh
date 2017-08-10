$(document).ready(function() {

	// Sitebar -> Popular Posts"
	$('.sidebar.section .widget.PopularPosts .item-thumbnail').each(function() {
        $(this).attr('style', 'background-image: url(' + $(this).find('img').attr('src') + ');');
        $(this).css('display', 'block');
    });

	// Post Thumbnail
	$('.main.section .blog-posts .date-posts .post-outer .post-thumbnail').each(function() {
        $(this).attr('style', 'background-image: url(' + $(this).find('img').attr('src') + ');');
        $(this).css('display', 'block');
    });

	// Post Header
	if (window.location.pathname.indexOf('/p/') == -1) {
		$('.main.section .blog-posts .date-posts .post-outer .post-header').show();
	}

	// Post Header -> Categories
	$('.main.section .blog-posts .date-posts .post-outer .post-header .categories').each(function() {
        if (!$(this).find('a').length) {
			$(this).append('<a href="javascript:;">Chuyên Mục Tổng Hợp</a>');
		}
    });

	// Post Footer
	if (window.location.pathname.indexOf('/p/') == -1) {
		$('.main.section .blog-posts .date-posts .post-outer .post-footer').show();
	}

	// Blog Pager
	$('.main.section .blog-pager a').each(function() {
        $(this).html($(this).html().replace("đăng", ""));
    });

	// Page Footer
	$('.page-footer .year').html(new Date().getFullYear());

});
