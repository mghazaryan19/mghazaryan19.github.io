<?php include('../inc/header.php'); ?>
		<div id='photogalery' class="model_pages">
			<div class="content_size padding_top_30">
			<h2 class="font35">Моделирование</h2>
				<div class='model_cont'>
					<ul>
						<li><a href="../pages/modeling.php">Подробности</a></li>
						<li><a href="../pages/photo_galery.php"  class="active">Фотогалерея</a></li>
						<li><a href="../pages/send_photo.php">Отправить свое фото</a></li>
					</ul>
						<div class="photo">
							<?php for($i=1;$i<19;$i++){?>
								<div class="pics">
									<img src="../img/galery/<?php echo $i; ?>.jpg" >
								</div>
							<?php } ?>
							<div class='clear'></div>
							
							<!-- <div class='open'>
						 		<p class="font16">Еще фото</p><div class='icon_down black '></div>
							</div> -->
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

			</div>

<div class="green_border_footer">
			
	<?php include('../inc/footer.php'); ?>
</div>
