jQuery(document).ready(function()
{
	// ! Burger Menu
	jQuery('.navigation-toggler button.button').on('click', function()
	{
		console.log(1232);
		jQuery(this).toggleClass('open');
		jQuery('body').toggleClass('nav-open');
	});

	// ! Nav on scroll
	const newNav = () =>
	{
		let navigation = document.querySelector('.elementor-location-header');
		window.addEventListener('scroll', () =>
		{
			if(document.body.scrollTop > 150 || document.documentElement.scrollTop > 150)
			{
				navigation.classList.add('navbar-transition');
			}
			else
			{
				navigation.classList.remove('navbar-transition');
			}
		});

	}

	newNav();

});


