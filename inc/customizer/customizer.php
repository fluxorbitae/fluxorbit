<?php 
// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
* Set our Customizer default options
*/
if ( ! function_exists( 'awaiken_generate_defaults' ) ) {
	function awaiken_generate_defaults() {
		global $NEXTMIND_STORAGE;

		return apply_filters( 'awaiken_customizer_defaults', $NEXTMIND_STORAGE );
	}
}


/**
 * Customizer Setup and Custom Controls
 *
 */

/**
 * Adds the individual sections, settings, and controls to the theme customizer
 */
class awaiken_initialise_customizer_settings {
	// Get our default values
	private $defaults;

	public function __construct() {
		// Get our Customizer defaults
		$this->defaults = awaiken_generate_defaults();


		// Register sections
		add_action( 'customize_register', array( $this, 'awaiken_add_customizer_sections' ) );
		
		// Register general control
		add_action( 'customize_register', array( $this, 'awaiken_register_general_options_controls' ) );
		
		// Register project control
		add_action( 'customize_register', array( $this, 'awaiken_register_project_options_controls' ) );

		// Register blog control
		add_action( 'customize_register', array( $this, 'awaiken_register_blog_options_controls' ) );

		// Register 404 control
		add_action( 'customize_register', array( $this, 'awaiken_register_404_options_controls' ) );
		
		// Register footer control
		add_action( 'customize_register', array( $this, 'awaiken_register_footer_options_controls' ) );
		
	}


	/**
	 * Register the Customizer sections
	 */
	public function awaiken_add_customizer_sections( $wp_customize ) {
		
		// Add section general options
		$wp_customize->add_section( 'general_options' , array(
			'title'      => __( 'General Options', 'nextmind' ),
		) );
		
		// Add section project options
		$wp_customize->add_section( 'project_options' , array(
			'title'      => __( 'Project Options', 'nextmind' ),
		) );
		
		// Add section blog options
		$wp_customize->add_section( 'blog_options' , array(
			'title'      => __( 'Blog Options', 'nextmind' ),
		) );

		// Add section 404 options
		$wp_customize->add_section( '404_options' , array(
			'title'      => __( '404 Options', 'nextmind' ),
		) );
		
		// Add section footer options
		$wp_customize->add_section( 'footer_options' , array(
			'title'      => __( 'Footer Options', 'nextmind' ),
		) );
		
	}
	
	/**
	 * Register general option controls
	 */

	public function awaiken_register_general_options_controls( $wp_customize ) {  
		
		$section	=	'general_options';
		
		// Preloader
		$wp_customize->add_setting( 'show_preloader',
			array(
				'default' => $this->defaults['show_preloader'],
				'transport' => 'refresh',
				'sanitize_callback' => 'skyrocket_switch_sanitization'
			)
		);
		
		$wp_customize->add_control( new Skyrocket_Toggle_Switch_Custom_control( $wp_customize, 'show_preloader',
			array(
				'label' => __( 'Preloader', 'nextmind' ),
				'description' => esc_html__( 'Display preloader while the page is loading.', 'nextmind' ),
				'section' => $section
			)
		) );
		
		// Magic Cursor
		$wp_customize->add_setting( 'magic_cursor',
			array(
				'default' => $this->defaults['magic_cursor'],
				'transport' => 'refresh',
				'sanitize_callback' => 'skyrocket_switch_sanitization'
			)
		);
		$wp_customize->add_control( new Skyrocket_Toggle_Switch_Custom_control( $wp_customize, 'magic_cursor',
			array(
				'label' => __( 'Magic Cursor', 'nextmind' ),
				'description' => esc_html__( 'Show Magic Cursor.', 'nextmind' ),
				'section' => $section
			)
		) );

		// Custom fancy scrollbar
		$wp_customize->add_setting( 'custom_fancy_scrollbar',
			array(
				'default' => $this->defaults['custom_fancy_scrollbar'],
				'transport' => 'refresh',
				'sanitize_callback' => 'skyrocket_switch_sanitization'
			)
		);
		$wp_customize->add_control( new Skyrocket_Toggle_Switch_Custom_control( $wp_customize, 'custom_fancy_scrollbar',
			array(
				'label' => __( 'Custom Fancy Scrollbar', 'nextmind' ),
				'description' => esc_html__( 'Custom fancy scrollbar Disable/Enable.', 'nextmind' ),
				'section' => $section
			)
		) );
		
		// Smooth scrolling
		$wp_customize->add_setting( 'smooth_scrolling',
			array(
				'default' => $this->defaults['smooth_scrolling'],
				'transport' => 'refresh',
				'sanitize_callback' => 'skyrocket_switch_sanitization'
			)
		);
		$wp_customize->add_control( new Skyrocket_Toggle_Switch_Custom_control( $wp_customize, 'smooth_scrolling',
			array(
				'label' => __( 'Smooth Scrolling', 'nextmind' ),
				'description' => esc_html__( 'Smooth Scrolling Disable/Enable', 'nextmind' ),
				'section' => $section
			)
		) );
		
		// heading icon 
		$wp_customize->add_setting( 'show_small_heading_icon',
			array(
				'default' => $this->defaults['show_small_heading_icon'],
				'transport' => 'refresh',
				'sanitize_callback' => 'skyrocket_switch_sanitization'
			)
		);
		
		$wp_customize->add_control( new Skyrocket_Toggle_Switch_Custom_control( $wp_customize, 'show_small_heading_icon',
			array(
				'label' => __( 'Display Small Icon', 'nextmind' ),
				'description' => esc_html__( 'Display small icon before small heading.', 'nextmind' ),
				'section' => $section
			)
		) );
		
		// heading icon
		$wp_customize->add_setting( 'small_heading_icon',
			array(
				'default' => $this->defaults['small_heading_icon'],
				'transport' => 'refresh',
				'sanitize_callback' => 'absint'
			)
		);
		
		$wp_customize->add_control( new WP_Customize_Media_Control( $wp_customize, 'small_heading_icon',
			array(
				'label' => __( 'Small heading icon', 'nextmind' ),
				'description' => esc_html__( 'If you want to change the current icon, select it here.', 'nextmind' ),
				'section' => $section,
				'mime_type' => 'image',
				'button_labels' => array(
					'select' => __( 'Select File', 'nextmind' ),
					'change' => __( 'Change File', 'nextmind' ),
					'default' => __( 'Default', 'nextmind' ),
					'remove' => __( 'Remove', 'nextmind' ),
					'placeholder' => __( 'No file selected', 'nextmind' ),
					'frame_title' => __( 'Select File', 'nextmind' ),
					'frame_button' => __( 'Choose File', 'nextmind' ),
				)
			)
		) );
		
		// Preloader icon
		$wp_customize->add_setting( 'preloader_icon',
			array(
				'default' => $this->defaults['preloader_icon'],
				'transport' => 'refresh',
				'sanitize_callback' => 'absint'
			)
		);
		
		$wp_customize->add_control( new WP_Customize_Media_Control( $wp_customize, 'preloader_icon',
			array(
				'label' => __( 'Preloader icon', 'nextmind' ),
				'description' => esc_html__( 'If you want to change the current loading icon, select it here.', 'nextmind' ),
				'section' => $section,
				'mime_type' => 'image',
				'button_labels' => array(
					'select' => __( 'Select File', 'nextmind' ),
					'change' => __( 'Change File', 'nextmind' ),
					'default' => __( 'Default', 'nextmind' ),
					'remove' => __( 'Remove', 'nextmind' ),
					'placeholder' => __( 'No file selected', 'nextmind' ),
					'frame_title' => __( 'Select File', 'nextmind' ),
					'frame_button' => __( 'Choose File', 'nextmind' ),
				)
			)
		) );
		
		// Header background image
		$wp_customize->add_setting( 'header_background_image',
			array(
				'default' => '',
				'transport' => 'refresh',
				'sanitize_callback' => 'absint'
			)
		);
		
		$wp_customize->add_control( new WP_Customize_Media_Control( $wp_customize, 'header_background_image',
			array(
				'label' => __( 'Header Background Image', 'nextmind' ),
				'description' => esc_html__( 'Header background image is intended for pages that are not created using Elementor.', 'nextmind' ),
				'section' => $section,
				'mime_type' => 'image',
				'button_labels' => array(
					'select' => __( 'Select File', 'nextmind' ),
					'change' => __( 'Change File', 'nextmind' ),
					'default' => __( 'Default', 'nextmind' ),
					'remove' => __( 'Remove', 'nextmind' ),
					'placeholder' => __( 'No file selected', 'nextmind' ),
					'frame_title' => __( 'Select File', 'nextmind' ),
					'frame_button' => __( 'Choose File', 'nextmind' ),
				)
			)
		) );

	}
	
	
	/**
	 * Register project option controls
	 */
	
	public function awaiken_register_project_options_controls( $wp_customize ) { 
			
		$section	=	'project_options';

		// Project page title 
		$wp_customize->add_setting( 'project_page_title', array(
			'capability' => 'edit_theme_options',
			'sanitize_callback' => 'sanitize_text_field',
		) );

		$wp_customize->add_control( 'project_page_title', array(
			'type' => 'text',
			'section' => $section,
			'label'       => esc_html__( 'Project Page Archive Title', 'nextmind' ),
		) );
		
		
		// Header background image
		$wp_customize->add_setting( 'project_page_header_background_image',
			array(
				'default' => '',
				'transport' => 'refresh',
				'sanitize_callback' => 'absint'
			)
		);
		
		$wp_customize->add_control( new WP_Customize_Media_Control( $wp_customize, 'project_page_header_background_image',
			array(
				'label' => __( 'Header Background Image', 'nextmind' ),
				'description' => esc_html__( 'Header background image for project archive and single pages that are not created using Elementor.', 'nextmind' ),
				'section' => $section,
				'mime_type' => 'image',
				'button_labels' => array(
					'select' => __( 'Select File', 'nextmind' ),
					'change' => __( 'Change File', 'nextmind' ),
					'default' => __( 'Default', 'nextmind' ),
					'remove' => __( 'Remove', 'nextmind' ),
					'placeholder' => __( 'No file selected', 'nextmind' ),
					'frame_title' => __( 'Select File', 'nextmind' ),
					'frame_button' => __( 'Choose File', 'nextmind' ),
				)
			)
		) );
		
		// Archive list page layout
		$wp_customize->add_setting( 'project_list_style', array(
		  'default' => $this->defaults['project_list_style'],
		   'sanitize_callback' => 'sanitize_text_field',
		) );
		
		$wp_customize->add_control( 'project_list_style', array(
			  'label'          => __( 'Project List Style', 'nextmind' ),
			  'section' => $section,
			  'settings' => 'project_list_style',
			  'type' => 'radio',
			  'choices' => array(
				'1'   => __( 'Style 1', 'nextmind' ),
				'2'  => __( 'Style 2', 'nextmind' ),
				'3'  => __( 'Style 3', 'nextmind' )
			  ),
		) );
		
		// Archive page layout
		$wp_customize->add_setting( 'project_archive_page_layout', array(
		  'default' => $this->defaults['project_archive_page_layout'],
		   'sanitize_callback' => 'sanitize_text_field',
		) );
		
		$wp_customize->add_control( 'project_archive_page_layout', array(
			  'label'          => __( 'Project Archive Page Layout', 'nextmind' ),
			  'section' => $section,
			  'settings' => 'project_archive_page_layout',
			  'type' => 'radio',
			  'choices' => array(
				'full-width'   => __( 'Full Width', 'nextmind' ),
				'with-sidebar'  => __( 'With Sidebar', 'nextmind' )
			  ),
		) );
		
		// Archive page single page layout
		$wp_customize->add_setting( 'project_single_page_layout', array(
		  'default' => $this->defaults['project_single_page_layout'],
		   'sanitize_callback' => 'sanitize_text_field',
		) );
		
		$wp_customize->add_control( 'project_single_page_layout', array(
			  'label'          => __( 'Project Single Layout', 'nextmind' ),
			  'description' => esc_html__( 'Works with the Default Template only.', 'nextmind' ),
			  'section' => $section,
			  'settings' => 'project_single_page_layout',
			  'type' => 'radio',
			  'choices' => array(
				'full-width'   => __( 'Full Width', 'nextmind' ),
				'with-sidebar'  => __( 'With Sidebar', 'nextmind' )
			  ),
		) );
		
	}
	
	
	/**
	 * Register blog option controls
	 */
	
	public function awaiken_register_blog_options_controls( $wp_customize ) { 
			
		$section	=	'blog_options';

		// Blog page title 
		$wp_customize->add_setting( 'blog_page_title', array(
			'capability' => 'edit_theme_options',
			'sanitize_callback' => 'sanitize_text_field',
		) );

		$wp_customize->add_control( 'blog_page_title', array(
			'type' => 'text',
			'section' => $section,
			'label'       => esc_html__( 'Blog Page Title', 'nextmind' ),
		) );
		
		//Header Background Image
		$wp_customize->add_setting( 'blog_page_header_background_image',
			array(
				'default' => '',
				'transport' => 'refresh',
				'sanitize_callback' => 'absint'
			)
		);
		
		$wp_customize->add_control( new WP_Customize_Media_Control( $wp_customize, 'blog_page_header_background_image',
			array(
				'label' => __( 'Header Background Image', 'nextmind' ),
				'description' => esc_html__( 'Header background image for blog archive and single page.', 'nextmind' ),
				'section' => $section,
				'mime_type' => 'image',
				'button_labels' => array(
					'select' => __( 'Select File', 'nextmind' ),
					'change' => __( 'Change File', 'nextmind' ),
					'default' => __( 'Default', 'nextmind' ),
					'remove' => __( 'Remove', 'nextmind' ),
					'placeholder' => __( 'No file selected', 'nextmind' ),
					'frame_title' => __( 'Select File', 'nextmind' ),
					'frame_button' => __( 'Choose File', 'nextmind' ),
				)
			)
		) );
		
		// Archive list page layout
		$wp_customize->add_setting( 'blog_list_style', array(
		  'default' => $this->defaults['blog_list_style'],
		   'sanitize_callback' => 'sanitize_text_field',
		) );
		
		$wp_customize->add_control( 'blog_list_style', array(
			  'label'          => __( 'Blog List Style', 'nextmind' ),
			  'section' => $section,
			  'settings' => 'blog_list_style',
			  'type' => 'radio',
			  'choices' => array(
				'1'   => __( 'Style 1', 'nextmind' ),
				'2'  => __( 'Style 2', 'nextmind' ),
				'3'  => __( 'Style 3', 'nextmind' )
			  ),
		) );
		
		// Archive page layout
		$wp_customize->add_setting( 'archive_page_layout', array(
		  'default' => $this->defaults['archive_page_layout'],
		   'sanitize_callback' => 'sanitize_text_field',
		) );
		
		$wp_customize->add_control( 'archive_page_layout', array(
			  'label'          => __( 'Archive Page Layout', 'nextmind' ),
			  'section' => $section,
			  'settings' => 'archive_page_layout',
			  'type' => 'radio',
			  'choices' => array(
				'full-width'   => __( 'Full Width', 'nextmind' ),
				'with-sidebar'  => __( 'With Sidebar', 'nextmind' )
			  ),
		) );
		
		// Archive page single page layout
		$wp_customize->add_setting( 'blog_single_page_layout', array(
		  'default' => $this->defaults['blog_single_page_layout'],
		   'sanitize_callback' => 'sanitize_text_field',
		) );
		
		$wp_customize->add_control( 'blog_single_page_layout', array(
			  'label'          => __( 'Blog Single Layout', 'nextmind' ),
			  'description' => esc_html__( 'Works with the Default Template only.', 'nextmind' ),
			  'section' => $section,
			  'settings' => 'blog_single_page_layout',
			  'type' => 'radio',
			  'choices' => array(
				'full-width'   => __( 'Full Width', 'nextmind' ),
				'with-sidebar'  => __( 'With Sidebar', 'nextmind' )
			  ),
		) );
		
		// Social Sharing
		$wp_customize->add_setting( 'social_sharing',
			array(
				'default' => $this->defaults['social_sharing'],
				'transport' => 'refresh',
				'sanitize_callback' => 'skyrocket_text_sanitization'
			)
		);
		$wp_customize->add_control( new Skyrocket_Pill_Checkbox_Custom_Control( $wp_customize, 'social_sharing',
			array(
				'label' => __( 'Social Sharing', 'nextmind' ),
				'description' => esc_html__( 'Choose the social network you want to display in the social share box.', 'nextmind' ),
				'section' => $section,
				'input_attrs' => array(
					'sortable' => true,
					'fullwidth' => true,
				),
				'choices' => array(
					'facebook' => esc_attr__( 'Facebook', 'nextmind' ),
					'twitter' => esc_attr__( 'Twitter', 'nextmind' ),
					'whatsapp' => esc_attr__( 'Whatsapp', 'nextmind' ),
					'linkedin' => esc_attr__( 'LinkedIn', 'nextmind' ),
					'reddit' => esc_attr__( 'Reddit', 'nextmind' ),
					'tumblr' => esc_attr__( 'Tumblr', 'nextmind' ),
					'pinterest' => esc_attr__( 'Pinterest', 'nextmind' ),
					'vk' => esc_attr__( 'vk', 'nextmind' ),
					'email' => esc_attr__( 'Email', 'nextmind' ),
					'telegram' => esc_attr__( 'Telegram', 'nextmind' ),
				)
			)
		) );

	}

	/**
	 * Register 404 controls
	 */
	
	 public function awaiken_register_404_options_controls( $wp_customize ) { 
			
		$section	=	'404_options';
		
		// 404 Image
		$wp_customize->add_setting( 'not_found_image',
			array(
				'default' => '',
				'transport' => 'refresh',
				'sanitize_callback' => 'absint'
			)
		);
		
		$wp_customize->add_control( new WP_Customize_Media_Control( $wp_customize, 'not_found_image',
			array(
				'label' => __( '404 Image', 'nextmind' ),
				'section' => $section,
				'mime_type' => 'image',
				'button_labels' => array(
					'select' => __( 'Select File', 'nextmind' ),
					'change' => __( 'Change File', 'nextmind' ),
					'default' => __( 'Default', 'nextmind' ),
					'remove' => __( 'Remove', 'nextmind' ),
					'placeholder' => __( 'No file selected', 'nextmind' ),
					'frame_title' => __( 'Select File', 'nextmind' ),
					'frame_button' => __( 'Choose File', 'nextmind' ),
				)
			)
		) );
		
		// 404 Heading
		$wp_customize->add_setting( 'not_found_heading',
			array(
				'default' => $this->defaults['not_found_heading'],
				'transport' => 'refresh',
				'sanitize_callback' => 'wp_kses_post'
			)
		);
		$wp_customize->add_control( 'not_found_heading',
			array(
				'label' => esc_html__( '404 Heading', 'nextmind' ),
				'section' => $section,
				'type' => 'text',

			)
		);
		
		// 404 text
		$wp_customize->add_setting( 'not_found_text',
			array(
				'default' => $this->defaults['not_found_text'],
				'transport' => 'refresh',
				'sanitize_callback' => 'wp_kses_post'
			)
		);
		$wp_customize->add_control( 'not_found_text',
			array(
				'label' => esc_html__( '404 Text', 'nextmind' ),
				'section' => $section,
				'type' => 'textarea',
			)
		);
	}
	
	/**
	 * Register footer controls
	 */
	
	public function awaiken_register_footer_options_controls( $wp_customize ) { 
		
		$section	=	'footer_options';
		
		//Footer logo
		$wp_customize->add_setting( 'footer_logo',
			array(
				'default' => '',
				'transport' => 'refresh',
				'sanitize_callback' => 'absint'
			)
		);
		
		$wp_customize->add_control( new WP_Customize_Media_Control( $wp_customize, 'footer_logo',
			array(
				'label' => __( 'Footer Logo', 'nextmind' ),
				'section' => $section,
				'mime_type' => 'image',
				'button_labels' => array(
					'select' => __( 'Select File', 'nextmind' ),
					'change' => __( 'Change File', 'nextmind' ),
					'default' => __( 'Default', 'nextmind' ),
					'remove' => __( 'Remove', 'nextmind' ),
					'placeholder' => __( 'No file selected', 'nextmind' ),
					'frame_title' => __( 'Select File', 'nextmind' ),
					'frame_button' => __( 'Choose File', 'nextmind' ),
				)
			)
		) );
		
		// Copyright text
		$wp_customize->add_setting( 'footer_copyright_text',
			array(
				'default' => $this->defaults['footer_copyright_text'],
				'transport' => 'refresh',
				'sanitize_callback' => 'wp_kses_post'
			)
		);
		$wp_customize->add_control( 'footer_copyright_text',
			array(
				'label' => __( 'Copyright Text', 'nextmind' ),
				'section' => $section,
				'type' => 'textarea',
			)
		);
		
		// Social media URLs
		$wp_customize->add_setting( 'social_urls',
			array(
				'default' => $this->defaults['social_urls'],
				'transport' => 'refresh',
				'sanitize_callback' => 'skyrocket_url_sanitization'
			)
		);
		$wp_customize->add_control( new Skyrocket_Sortable_Repeater_Custom_Control( $wp_customize, 'social_urls',
			array(
				'label' => __( 'Social URLs', 'nextmind' ),
				'description' => esc_html__( 'Enter the social profile URLs.', 'nextmind' ),
				'section' => $section,
				'button_labels' => array(
					'add' => __( 'Add Row', 'nextmind' ),
				)
			)
		) );
		
	}
	
}

/**
 * Load all our Customizer Custom Controls
 */
require_once NEXTMIND_THEME_DIR . '/inc/customizer/custom-controls.php';

/**
 * Initialise our Customizer settings
 */
$awaiken_settings = new awaiken_initialise_customizer_settings();
