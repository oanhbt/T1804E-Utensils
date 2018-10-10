/*<div class="col-md-3">
			<div class="product-googles-info">
				<img src="images/dao_nau_bep.jpg" class="img-fluid" alt="">
				<span class="product-new-top1">NEW</span>
				<div class="row">
					<div class="col-sm-7 margin-product">
					<p class="product-name" class="name_pr">Vivo Knife</p>
					<p class="price_pr">$50</p>
					<span class="fa fa-star size-star"></span>
					<span class="fa fa-star size-star"></span>
					<span class="fa fa-star size-star"></span>
					<span class="fa fa-star size-star"></span>
					<span class="fa fa-star size-star"></span>									
					</div>
					<div class="col-sm-5">
						<a href="cart.html" class="fa fa-cart-plus"></a>
						<a class="btn btn-sm btn-quick link_pr" href="single.html">Quick View</a>
					</div>
				</div>								
			</div>
		</div>*/
var product = [{
			id:1,
			name: "Japanese knife for chef blade 20.3cm stainless steel pressed abs (black)",
			alias: 'dao_nau_bep_nhat',
			img:'images/dao_nau_bep.jpg',
			price: "50",
			details:'<h6><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Blade for chef blade 20.3cm stainless steel laminated abs</font></font></h6>\
						<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Japanese knife 20.3cm with blade made of durable stainless steel, shiny. </font><font style="vertical-align: inherit;">This material is safe, does not contain toxic chemicals when exposed to food. </font><font style="vertical-align: inherit;">The product is designed for use in cutting vegetables and food. </font><font style="vertical-align: inherit;">The blade is only 3mm thick, for thin and fine slices.</font><font style="vertical-align: inherit;">The surface of the blade is smooth and easy to handle, so easy to clean after use. </font><font style="vertical-align: inherit;">The ABS handle does not slip, so it is safe for the user. </font><font style="vertical-align: inherit;">Sturdy clamping, making it easy to operate in Japan</font></font></p>'
		},{
			id:2,
			name: "Kitchen knife Mitsuboshi Dao-10 170mm thick 2mm laminated Japanese wood",
			alias: 'dao_nau_bep_Kitchen_knife_Mitsuboshi',
			img:'images/Kitchen_knife_Mitsuboshi.jpg',
			price: "50",
			details:'<h6><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Kitchen knife Mitsuboshi Dao-10 170mm thick 2mm thick Japanese wood laminate is made of stainless steel 2mm thick, super durable, long blunt. Handles made of natural wood.</font></font></h6>'
					
 
		},{
			id:3,
			name:""
		}
	];
$(document).ready(function() {
	var path_name_url = window.location.href; // Desktop/test_json.html#sp1
  	var alias = path_name_url.substring(path_name_url.indexOf("#sp") + 1, path_name_url.length);
  	var alias = path_name_url.substring(path_name_url.indexOf("#dao_nau_bep") + 1, path_name_url.length);
  
  	if (path_name_url.indexOf("draft.html") > 0) {
  		$.each(product, function(index, val) {
		    $('#list_pr').append('<div class="col-md-3">'+
				'<div class="product-googles-info">'+
					'<img src="'+product[index].img+'" class="img-fluid" alt="">'+
					'<span class="product-new-top1">NEW</span>'+
					'<div class="row">'+
					'	<div class="col-sm-7 margin-product">'+
					'	<p class="product-name" class="name_pr">'+product[index].name+'</p>'+
					'	<p class="price_pr">$'+product[index].price+'</p>'+
					'	<span class="fa fa-star size-star"></span>'+
					'	<span class="fa fa-star size-star"></span>'+
					'	<span class="fa fa-star size-star"></span>'+
					'	<span class="fa fa-star size-star"></span>'+
					'	<span class="fa fa-star size-star"></span>	'+								
					'	</div>'+
					'	<div class="col-sm-5">'+
					'		<a href="cart.html" class="fa fa-cart-plus"></a>'+
					'		<a class="btn btn-sm btn-quick link_pr" href="single.html#'+product[index].alias+'">Quick View</a>'+
					'	</div>'+
					'</div>'+						
				'</div>'+
			'</div>');
		});
  	}
  	
  	console.log(path_name_url.indexOf("single.html"));
  	if (path_name_url.indexOf("single.html") > 0) {
  		$.each(product, function(index, val) {
  			console.log(product[index].alias);
  			console.log(alias);
  			if (product[index].alias === alias) {
		  		$('#id').html(product[index].id);
		  		$('#name').html(product[index].name);
		  		$('#alias').html(product[index].alias);
		  		$('#price').html( '$' + product[index].price);
		  		$('#details').html(product[index].details);
		  	}
  		});
  	}

});