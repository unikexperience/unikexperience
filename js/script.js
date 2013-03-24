jQuery(function($){
	/*-Close-the hero-unit-*/
	$('#close-hero').on('click',function(e){
		e.preventDefault();
		$('.hero-unit').css('display','none');
	});

	/*-app-card-hover-effect-*/

	$('.app-card').hover(function(){
		$(this).find(".view-more").toggle();
		$(this).find(".app-card-bottom").toggle();
	});

	// show-on-page-login-form
	$(".join-cloudswave-onpage button").on("click",function() {
		$(".join-cloudswave-onpage p").hide();
		$(".join-cloudswave-onpage input").show();
	})

	/*-Filter-Tags-*/

	function renderTags(tagList){
		var el = "";
		$('#tags-display').html('');
		$.each(tagList,function(){
			el += "<div class=\"tag-choice\" data-filtertag="+this+">\n";
			el += this + "\n";
			el += "<a class=\"close-tag\">x</a>\n";
			// el += "<input type=\"hidden\" style=\"display:none;\" value=\""+value+"\" name=\"item[tags][]\">\n";
			el += "</div>\n";
		});
		$('#tags-display').html(el);
	}

	function updateTags(){
		var allTags =[];
		$('#price-filter :checked').each(function(){
			allTags.push($(this).val());
		});
		$('#language-filter :checked').each(function(){
			allTags.push($(this).val());
		});
		$('#devices-filter :checked').each(function(){
			allTags.push($(this).val());
		});
		renderTags(allTags);
	};

	function updateFilterInputs(){
		var renderedTags = getRenderedTags();
		$("#filter-btns input").val(renderedTags);
	};

	function getRenderedTags(){
		var renderedTags = [];
		$.each($('.tag-choice'),function(){
			renderedTags.push($(this).data('filtertag'));
		});
		return renderedTags;
	};

	$(document).on("click",'.tag-choice .close-tag',function(e){
		e.preventDefault();
		$(e.target).parent().remove();
		updateFilterInputs();
	});

	$('#filter-btns input').click(updateTags);

	// Toggling Modals
	$('.toggle-modals').on('click',function(e){
		e.preventDefault();
		$('#join-cloudswave').modal('toggle');
		$('#login-cloudswave').modal('toggle');
	});

	//click the follow button
	$('.profile-details .btn-semi-large').on('click',function(e){
		$(this).css(
			{
			'background': '#60cbe6',
			'border': 'none'}
			).html('Following <i class="icon-ok icon-white"></i>');
	});
	//click check all uncheck all
	$("#select-all-subs").on('click',function(e){
		e.preventDefault();
		 $(this).parents('form:eq(0)').find(':checkbox').attr('checked', true);
		 $(this).parents('form:eq(0)').find('a').addClass('checked');
	});
	$("#deselect-all-subs").on('click',function(e){
		e.preventDefault();
		 $(this).parents('form:eq(0)').find(':checkbox').attr('checked', false);
		 $(this).parents('form:eq(0)').find('a').removeClass('checked');
	});

	//Enabling editable elements
	$("#edit-my-profile").on("click",function  () {
		$.fn.editable.defaults.mode = 'inline';
		$('#username').editable({
		    type: 'text',
		    pk: 1,
		    url: 'recived.php',
		    title: 'Enter username'
		});
		$('#userjob').editable({
		    type: 'textarea',
		    pk: 2,
		    url: '/post',
		    title: 'Enter username'
		});
		$('#user-description').editable({
		    type: 'textarea',
		    pk: 3,
		    url: '/post',
		    title: 'Enter username'
		});
		$('#user-location').editable({
		    type: 'text',
		    pk: 4,
		    url: '/post',
		    title: 'Enter username'
		});
		$('#user-website').editable({
		    type: 'text',
		    pk: 5,
		    url: '/post',
		    title: 'Enter username'
		});
	});
	
	
});
/*-Styling-the-Select-box-*/

/*
* Convert every select-list into an html list
*/

jQuery(function($){
        $('select').each(function(i, e){
                if (!($(e).data('convert') == 'no')) {
                        $(e).hide().wrap('<div class="btn-group" id="select-group-' + i + '" />');
                        var select = $('#select-group-' + i);
                        var current = ($(e).val()) ? $(e).val(): '&nbsp;';
                        select.html('<input type="hidden" value="' + $(e).val() + '" name="' + $(e).attr('name') + '" id="' + $(e).attr('id') + '" class="' + $(e).attr('class') + '" /><a class="btn select-value-btn" href="javascript:;">' + current + '</a><a class="btn dropdown-toggle" data-toggle="dropdown" href="javascript:;"><span class="caret"></span></a><ul class="dropdown-menu"></ul>');
                        $(e).find('option').each(function(o,q) {
                                select.find('.dropdown-menu').append('<li><a href="javascript:;" data-value="' + $(q).attr('value') + '">' + $(q).text() + '</a></li>');
                                if ($(q).attr('selected')) select.find('.dropdown-menu li:eq(' + o + ')').click();
                        });
                        select.find('.dropdown-menu a').click(function() {
                                select.find('input[type=hidden]').val($(this).data('value')).change();
                                select.find('.btn:eq(0)').text($(this).text());
                        });
                }
        });
		
		$('#select-group-0 input').bind('change', function(){ alert('Selected value: '+this.value) } );
		$('input.pretty-check').prettyCheckable();
});
/*-SEARCH-COMPLETE-*/

var typeaheadColors = ["red", "blue", "green", "yellow", "brown", "black"];
$('#search').typeahead({source: typeaheadColors});

