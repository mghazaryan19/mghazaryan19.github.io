<!doctype html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width">
<title></title>
<base href="">
<link rel="stylesheet" href="../css/style.css" media="all">
<script src="../js/jquery-1.11.0.min.js"></script>
<script src="../js/main.js"></script>

</head>
<body class="content1200">
<div class="alert popup_2">
	<div class='dialog-overlay'></div>
   	<div id="s_mess">
    <div class="close aaa" id="close"></div>
    	<div class="clear"></div>
        <div class="inner">
            <div class="top_line"></div>
            <div class="content">
               <p>Подпишитесь</p>
               <p class="desc">и получайте информацию об акциях и обновления фотогалереи по электонной почте.</p>
                <div class="left_s">
                   <form action="" >
                       <input type="text" placeholder="example@postservice.ru">
                       <div class="button_text">
                       <div class="alert_button"><input type="submit" id="reg" value="Подписаться" name="reg"></div>
                       <div class="alert_button_text">text text text text text text text text text text text text text text text</div>
                  </div>  </form>
                </div>
                <div class="right_s"><img src="../img/icons/letter.jpg" alt="">
                </div>
                <div class="clear"></div>
            </div>
        </div>
    </div>
</div>
<div id='popup_pic' class="popup_pic popup_2">
	<div id="s_mess2">
	<div class='dialog-overlay'></div>
    <div class="close" id="close"></div>
    	<div class="clear"></div>
        <div class="inner">
        	<div class="content">
        		<div class="rotater_pic">
        			<div class="arrows">
       					<a class="arrow_pic prev"></a>
        				<a class="arrow_pic next"></a>
        			</div>
        			<div class="photos_div ">
						<ul>
						<?php for($r=1;$r<20;$r++){?>
							<li class=" font16">
								<img src="../img/galery/<?php echo $r; ?>.jpg">
							</li>
							<?php } ?>
						</ul>
        			</div>
        		</div>
        		<div class="pic_slide">
		        	<div class="social floatLeft">
						<p class="floatLeft">Поделиться фото в</p>
						<a href="" class="fb"></a>
						<a href="" class="tw"></a>
						<a href="" class="vk"></a>
						<a href="" class="od"></a>
						<a href="" class="gm"></a>
					</div>
					<div class="pic_link">
							<p class="floatLeft">Прямая ссылка на фотографию</p>
							<input type="text" value="http://qit.am/photos/11">
							<input type="submit" value='скачать'>
					</div>
					<div class="clear"></div>
				</div>
        	</div>
    	</div>
	</div>
</div>
<div id="page">
	<div id="header">
	<div class="content_size header_size">
			<div class="menu">
				<div class="menu_pic"></div>
					<ul id="nav">
						<li><a href="#about_me_div">Обо мне</a></li>
						<li><a href="#photogalery">Фотогалерея</a></li>
						<li><a href="#question_div">Вопросы и ответы</a></li>
						<li><a href="">Для иностранных пациентов</a></li>
						<li><a href="">Подробности об операции</a></li>
						<li><a href="../pages/modeling.php">Моделирование</a></li>
						<li><a href="">Используемые материалы</a></li>
						<li><a href="#more">Мифы и факты</a></li>
						<li><a href="#otz">Отзывы пациентов</a></li>
						<li><a href="#price_div">Цены на операцию</a></li>
						<li><a href="#map_div">Контакты, схема проезда</a></li>
					</ul>
			</div>
				<a href='#'>
					<div class="online_reg">
						<div class="reg_img"></div>	
						<p id='sign_in'>Онлайн-запись на бесплатную консультацию</p>
					</div>
				</a>
				<div class="languages">
					<ul>
					   <li class="lang-item lang-item-5 lang-item-ru current-lang"><a hreflang="ru">Русский</a></li>
					   <li class="lang-item lang-item-2 lang-item-hy"><a hreflang="hy">Հայերեն</a></li>
                    </ul>
					<div class="selected_language"></div>
				</div>
				<div class='clear'></div>
			</div>	
		</div>	
</div>

<div class="clear"></div>
<div class="content_size header_size">
		<div class="top">
			<a href="../pages/home.php"><div class="logo floatLeft">				
			</div></a>
			<div class="social floatLeft">
				<span >Подписывайтесь на меня</span>
				<a href="" class="fb"></a>
				<a href="" class="tw"></a>
				<a href="" class="vk"></a>
				<a href="" class="od"></a>
				<a href="" class="gm"></a>
				<a href="" class="in"></a>
				<a href="" class="yt"></a>
			</div>
			<div class="number">
				<div class="number_icon"></div>
				<div class="phone">
					+374 55 077 044
				</div>
				<div class="date">
					с 10 до 17 в рабочие дни
				</div>
			</div>
			<div class="address floatLeft">
				<div class="address_icon"></div>
                <div class="address_cont">
				    <a href="#map_div">Адрес</a>
                    <p>и схема проезда</p>
                      <div class="clear"></div>
                </div>
			</div>
            <div class="clear"></div>
		</div> <div class="clear"></div>
	</div>
    <!--/header -->
   
