<?php
/**
* @package   The_Grid
* @author    Themeone <themeone.master@gmail.com>
* @copyright 2015 Themeone
*
* Skin Name: Flip 3D
* Skin Slug: tg-flip-3d
* Date: 06/15/18 - 02:05:11PM
*
*/

// Exit if accessed directly
if (!defined('ABSPATH')) {
	exit;
}

// Init The Grid Elements instance
$tg_el = The_Grid_Elements();

// Prepare main data for futur conditions
$image  = $tg_el->get_attachment_url();
$format = $tg_el->get_item_format();

$output = null;

	// Media wrapper start
	$output .= $tg_el->get_media_wrapper_start();

	// Media content (image, gallery, audio, video)
	$output .= $tg_el->get_media();

		// Media content holder start
		$output .= $tg_el->get_media_content_start();

		// Overlay
		$output .= $tg_el->get_overlay();

		// Center wrapper start
		$output .= $tg_el->get_center_wrapper_start();
			$output .= $tg_el->get_the_title(array('link' => false, 'action' => array('type' => 'link', 'link_target' => '_self', 'link_url' => 'post_url', 'custom_url' => '', 'meta_data_url' => '')), 'tg-element-1');
			$output .= $tg_el->get_media_button(array('icons' => array('image' => '<i class="tg-icon-zoom"></i>', 'audio' => '<i class="tg-icon-play"></i>', 'video' => '<i class="tg-icon-play"></i>', 'pause' => ''), 'action' => array('type' => 'lightbox')), 'tg-element-3');
			$output .= $tg_el->get_icon_element(array('icon' => 'tg-icon-mail-forward', 'action' => array('type' => 'link', 'link_target' => '_self', 'link_url' => 'post_url', 'custom_url' => '', 'meta_data_url' => '')), 'tg-element-2');
		$output .= $tg_el->get_center_wrapper_end();
		// Center wrapper end

		// Media content holder end
		$output .= $tg_el->get_media_content_end();

	$output .= $tg_el->get_media_wrapper_end();
	// Media wrapper end


return $output;