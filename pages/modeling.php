<?php include('../inc/header.php'); ?>
<div class='modeling model_pages'>
		<div class='content_size padding_top_30'>
			<h2 class="font35">Моделирование</h2>
			<div class='model_cont'>
				<ul class="model_tab_name">
					<li><a >Подробности</a></li>
					<li><a >Фотогалерея</a></li>
					<li><a >Отправить свое фото</a></li>
				</ul>
				<div class="modeling_taber_box">
					<div class="model_tab model_tab"><?php include("../inc/modeling.php")?></div>
					<div class="model_tab hidden"><?php include("../inc/photo_galery.php")?></div>
					<div class="model_tab hidden"><?php include("../inc/send_photo.php")?></div>
				</div>
			<div class="mod social">
				<a href="" class="fb"></a>
				<a href="" class="tw"></a>
				<a href="" class="vk"></a>
				<a href="" class="od"></a>
				<a href="" class="gm"></a>
			</div>
			<div class="clear"></div>
			</div>
		</div>
</div>
<div class="green_border_footer">
<?php include('../inc/footer.php'); ?></div>