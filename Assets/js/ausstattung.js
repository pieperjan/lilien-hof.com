// ! Ausstattung
function switchactive()
{
	setTimeout(function()
	{
		// ! Küche
		let active = jQuery('.elementor-active').attr('id');
		jQuery('.image-activee').removeClass('image-activee');
		if(active !== 'undefined')
		{
			let lastfour = parseInt(active.slice(-4));
			if(lastfour === 2091)
			{
				jQuery('.image-one').addClass('image-activee');
			}
			else if(lastfour === 2092)
			{
				jQuery('.image-two').addClass('image-activee');
			}
			else if(lastfour === 2093)
			{
				jQuery('.image-three').addClass('image-activee');
			}
			else if(lastfour === 2094)
			{
				jQuery('.image-four').addClass('image-activee');
			}
			else if(lastfour === 2095)
			{
				jQuery('.image-five').addClass('image-activee');
			}
			else
			{
				jQuery('.image-six').addClass('image-activee');
			}
		}
	}, 100);
}
jQuery('.elementor-tab-title').on('click', function()
{
	switchactive();
});
