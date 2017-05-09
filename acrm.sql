-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Хост: localhost
-- Время создания: Май 09 2017 г., 21:29
-- Версия сервера: 5.7.16
-- Версия PHP: 5.6.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `acrm`
--

-- --------------------------------------------------------

--
-- Структура таблицы `brands`
--

CREATE TABLE `brands` (
  `id` int(12) NOT NULL,
  `name` varchar(256) DEFAULT NULL,
  `descr` mediumtext,
  `time` int(12) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `categorys`
--

CREATE TABLE `categorys` (
  `id` int(12) NOT NULL,
  `parent_id` int(12) DEFAULT '0',
  `title` varchar(256) DEFAULT NULL,
  `alt` varchar(128) DEFAULT NULL,
  `meta_title` varchar(256) DEFAULT NULL,
  `pic` varchar(256) DEFAULT NULL,
  `link` varchar(256) DEFAULT NULL,
  `server_id` int(12) DEFAULT NULL,
  `text` mediumtext,
  `meta_decription` varchar(512) DEFAULT NULL,
  `position` int(12) DEFAULT '0',
  `template` varchar(128) DEFAULT NULL,
  `state` int(12) DEFAULT '1',
  `pear_page` int(12) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `clients`
--

CREATE TABLE `clients` (
  `id` int(12) NOT NULL,
  `title` varchar(128) DEFAULT NULL,
  `name` varchar(128) NOT NULL,
  `descr` varchar(512) DEFAULT NULL,
  `email` varchar(128) DEFAULT NULL,
  `phone` varchar(128) DEFAULT NULL,
  `adress` varchar(512) DEFAULT NULL,
  `keywords` varchar(512) DEFAULT NULL,
  `owner_id` int(12) DEFAULT NULL,
  `state` int(12) NOT NULL DEFAULT '1',
  `created` int(12) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `comments`
--

CREATE TABLE `comments` (
  `id` int(12) NOT NULL,
  `parent_id` int(12) NOT NULL DEFAULT '0',
  `server_id` int(12) DEFAULT NULL,
  `row_id` int(12) DEFAULT NULL,
  `action` varchar(64) DEFAULT NULL,
  `name` varchar(128) DEFAULT NULL,
  `email` varchar(128) DEFAULT NULL,
  `text` text,
  `state` int(12) DEFAULT '0',
  `date` int(12) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `dropdowns`
--

CREATE TABLE `dropdowns` (
  `id` int(11) NOT NULL,
  `name` varchar(64) DEFAULT NULL,
  `descr` varchar(128) DEFAULT NULL,
  `type` varchar(64) DEFAULT NULL,
  `created` int(12) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `images`
--

CREATE TABLE `images` (
  `id` int(12) NOT NULL,
  `route` varchar(128) DEFAULT NULL,
  `route_id` int(12) DEFAULT NULL,
  `category_id` int(12) DEFAULT NULL,
  `page_id` int(12) DEFAULT NULL,
  `server_id` int(12) DEFAULT NULL,
  `position` int(12) NOT NULL DEFAULT '0',
  `alt` varchar(128) DEFAULT NULL,
  `size` varchar(128) DEFAULT NULL,
  `type` varchar(128) DEFAULT NULL,
  `original` varchar(512) DEFAULT NULL,
  `mini` varchar(512) DEFAULT NULL,
  `date` int(12) DEFAULT NULL,
  `owner_id` int(12) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `links`
--

CREATE TABLE `links` (
  `id` int(12) NOT NULL,
  `action` varchar(128) DEFAULT NULL,
  `row_id` int(12) DEFAULT NULL,
  `user_id` int(12) DEFAULT NULL,
  `comment` mediumtext,
  `adding_date` int(12) DEFAULT NULL,
  `update_date` int(12) DEFAULT NULL,
  `type` varchar(12) DEFAULT NULL,
  `other_id` int(12) DEFAULT NULL,
  `param_str_1` varchar(128) DEFAULT NULL,
  `param_str_2` varchar(128) DEFAULT NULL,
  `param_str_3` varchar(128) DEFAULT NULL,
  `param_int_1` int(12) DEFAULT NULL,
  `param_int_2` int(12) DEFAULT NULL,
  `param_int_3` int(12) DEFAULT NULL,
  `created` int(12) DEFAULT NULL,
  `product_id` int(12) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `logs`
--

CREATE TABLE `logs` (
  `id` int(12) NOT NULL,
  `ip` varchar(128) DEFAULT NULL,
  `server_id` int(12) DEFAULT NULL,
  `referer` varchar(256) DEFAULT NULL,
  `user_agent` varchar(256) DEFAULT NULL,
  `page` varchar(256) DEFAULT NULL,
  `time` int(12) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `logs`
--

INSERT INTO `logs` (`id`, `ip`, `server_id`, `referer`, `user_agent`, `page`, `time`) VALUES
(1, '127.0.0.1', 1, NULL, 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:53.0) Gecko/20100101 Firefox/53.0', '/', 1494364504),
(2, '127.0.0.1', 1, NULL, 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:53.0) Gecko/20100101 Firefox/53.0', '/', 1494364995),
(3, '127.0.0.1', 1, NULL, 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:53.0) Gecko/20100101 Firefox/53.0', '/', 1494365027);

-- --------------------------------------------------------

--
-- Структура таблицы `menu`
--

CREATE TABLE `menu` (
  `id` int(12) NOT NULL,
  `server_id` int(12) DEFAULT NULL,
  `title` varchar(128) DEFAULT NULL,
  `parent_id` int(11) DEFAULT NULL,
  `state` int(12) DEFAULT NULL,
  `position` int(12) NOT NULL DEFAULT '0',
  `jsondata` mediumtext
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `orders`
--

CREATE TABLE `orders` (
  `id` int(12) NOT NULL,
  `owner_id` int(12) DEFAULT NULL,
  `title` varchar(256) DEFAULT NULL,
  `descr` varchar(512) DEFAULT NULL,
  `created` int(64) DEFAULT NULL,
  `deadline` int(64) DEFAULT NULL,
  `price` varchar(24) DEFAULT NULL,
  `tax` varchar(24) DEFAULT NULL,
  `client_id` int(12) DEFAULT NULL,
  `to_user_id` int(12) DEFAULT NULL,
  `state` int(12) NOT NULL DEFAULT '0',
  `goods_id` int(12) DEFAULT NULL,
  `weight` int(12) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `pages`
--

CREATE TABLE `pages` (
  `id` int(12) NOT NULL,
  `server_id` int(12) DEFAULT NULL,
  `category_id` int(12) DEFAULT NULL,
  `product_id` int(12) DEFAULT NULL,
  `template` varchar(128) DEFAULT NULL,
  `views` int(12) NOT NULL DEFAULT '0',
  `title` varchar(512) DEFAULT NULL,
  `alt` varchar(128) DEFAULT NULL,
  `meta_title` varchar(512) DEFAULT NULL,
  `meta_description` varchar(512) DEFAULT NULL,
  `meta_keywords` varchar(512) DEFAULT NULL,
  `other_meta` mediumtext,
  `short_story` mediumtext,
  `full_story` mediumtext,
  `add_date` int(12) DEFAULT NULL,
  `edit_date` int(12) DEFAULT NULL,
  `owner_id` int(12) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `products`
--

CREATE TABLE `products` (
  `id` int(12) NOT NULL,
  `provider_id` int(12) DEFAULT NULL,
  `parent_id` varchar(12) DEFAULT NULL,
  `views` int(12) NOT NULL DEFAULT '0',
  `buying` int(12) NOT NULL DEFAULT '0',
  `brand_id` int(12) DEFAULT NULL,
  `weight` varchar(64) DEFAULT NULL,
  `price` int(64) DEFAULT NULL,
  `skidka` int(11) DEFAULT NULL,
  `name` varchar(512) DEFAULT NULL,
  `descr` mediumtext,
  `stack` int(12) NOT NULL DEFAULT '1',
  `state` int(12) NOT NULL DEFAULT '1',
  `owner_id` int(12) DEFAULT NULL,
  `date` int(12) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `providers`
--

CREATE TABLE `providers` (
  `id` int(12) NOT NULL,
  `title` varchar(128) DEFAULT NULL,
  `name` varchar(128) NOT NULL,
  `descr` varchar(512) DEFAULT NULL,
  `email` varchar(128) DEFAULT NULL,
  `phone` varchar(128) DEFAULT NULL,
  `adress` varchar(64) DEFAULT NULL,
  `keywords` varchar(512) DEFAULT NULL,
  `owner_id` int(12) DEFAULT NULL,
  `state` int(12) NOT NULL DEFAULT '1',
  `created` int(12) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `row_categorys`
--

CREATE TABLE `row_categorys` (
  `id` int(12) NOT NULL,
  `action` varchar(64) DEFAULT NULL,
  `category_id` int(12) DEFAULT NULL,
  `server_id` int(12) DEFAULT NULL,
  `other_id` int(12) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `server`
--

CREATE TABLE `server` (
  `id` int(12) NOT NULL,
  `ok_send` varchar(128) NOT NULL DEFAULT 'ok_send',
  `host` varchar(128) DEFAULT NULL,
  `name` varchar(128) NOT NULL,
  `layout` varchar(128) DEFAULT NULL,
  `date_add` int(12) DEFAULT NULL,
  `state` int(12) DEFAULT '1',
  `pear_page` int(12) DEFAULT NULL,
  `title` varchar(256) DEFAULT NULL,
  `meta_title` varchar(256) DEFAULT NULL,
  `meta_description` varchar(512) DEFAULT NULL,
  `meta_keywords` varchar(512) DEFAULT NULL,
  `email` varchar(256) DEFAULT NULL,
  `https` int(12) NOT NULL DEFAULT '0',
  `google_id` varchar(256) DEFAULT NULL,
  `google_key` varchar(256) DEFAULT NULL,
  `site_name` varchar(128) DEFAULT NULL,
  `site_slogan` varchar(128) DEFAULT NULL,
  `yandex_token` varchar(256) DEFAULT NULL,
  `yandex_counter` varchar(64) DEFAULT NULL,
  `metrika_code` text,
  `chat_button_text` varchar(40) DEFAULT NULL,
  `chat` int(12) NOT NULL DEFAULT '0',
  `chat_subject` text,
  `chat_css_phone_button_color` varchar(64) DEFAULT '#1FB250',
  `chat_css_button_icons_color` varchar(64) DEFAULT '#FFFFFF',
  `chat_css_phone_button_text_color` varchar(64) DEFAULT '#000000',
  `chat_color_hex` varchar(64) NOT NULL DEFAULT '#ff0000',
  `chat_sms` int(12) DEFAULT '0',
  `chat_phone` varchar(64) DEFAULT NULL,
  `chat_sms_login` varchar(64) DEFAULT NULL,
  `chat_sms_passwd` varchar(64) DEFAULT NULL,
  `chat_to_email` varchar(128) DEFAULT NULL,
  `form_input_placeholder` varchar(128) DEFAULT 'form_input_placeholder',
  `form_input_placeholder_name` varchar(64) NOT NULL DEFAULT 'form_input_placeholder_name',
  `form_input_placeholder_text` varchar(128) NOT NULL DEFAULT 'form_input_placeholder_text',
  `form_input_placeholder_phone` varchar(128) NOT NULL DEFAULT 'form_input_placeholder_phone',
  `form_submit_button` varchar(128) DEFAULT 'form_submit_button',
  `form_missed_question` varchar(128) NOT NULL DEFAULT 'form_missed_question',
  `form_missed_result` varchar(128) NOT NULL DEFAULT 'form_missed_result',
  `form_button_forget` varchar(128) NOT NULL DEFAULT 'form_button_forget',
  `dialog_button_yes` varchar(128) NOT NULL DEFAULT 'dialog_button_yes',
  `dialog_button_no` varchar(128) NOT NULL DEFAULT 'dialog_button_no',
  `dialog_button_forget` varchar(128) NOT NULL DEFAULT 'dialog_button_forget',
  `service_link` varchar(128) NOT NULL DEFAULT 'service_link',
  `window_title` varchar(128) NOT NULL DEFAULT 'window_title',
  `phone_format` varchar(64) NOT NULL DEFAULT '+38 (___) ___-__-__',
  `department_link_text` varchar(128) NOT NULL DEFAULT 'Выбрать департамент',
  `update` int(12) NOT NULL DEFAULT '0',
  `recaptcha_site` varchar(128) DEFAULT NULL,
  `recaptcha_key` varchar(128) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `server`
--

INSERT INTO `server` (`id`, `ok_send`, `host`, `name`, `layout`, `date_add`, `state`, `pear_page`, `title`, `meta_title`, `meta_description`, `meta_keywords`, `email`, `https`, `google_id`, `google_key`, `site_name`, `site_slogan`, `yandex_token`, `yandex_counter`, `metrika_code`, `chat_button_text`, `chat`, `chat_subject`, `chat_css_phone_button_color`, `chat_css_button_icons_color`, `chat_css_phone_button_text_color`, `chat_color_hex`, `chat_sms`, `chat_phone`, `chat_sms_login`, `chat_sms_passwd`, `chat_to_email`, `form_input_placeholder`, `form_input_placeholder_name`, `form_input_placeholder_text`, `form_input_placeholder_phone`, `form_submit_button`, `form_missed_question`, `form_missed_result`, `form_button_forget`, `dialog_button_yes`, `dialog_button_no`, `dialog_button_forget`, `service_link`, `window_title`, `phone_format`, `department_link_text`, `update`, `recaptcha_site`, `recaptcha_key`) VALUES
(1, 'ok_send', '127.0.0.1', '127.0.0.1', NULL, NULL, 1, NULL, '127.0.0.1', NULL, NULL, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, '#1FB250', '#FFFFFF', '#000000', '#ff0000', 0, NULL, NULL, NULL, NULL, 'form_input_placeholder', 'form_input_placeholder_name', 'form_input_placeholder_text', 'form_input_placeholder_phone', 'form_submit_button', 'form_missed_question', 'form_missed_result', 'form_button_forget', 'dialog_button_yes', 'dialog_button_no', 'dialog_button_forget', 'service_link', 'window_title', '+38 (___) ___-__-__', 'Выбрать департамент', 0, NULL, NULL);

-- --------------------------------------------------------

--
-- Структура таблицы `statistic`
--

CREATE TABLE `statistic` (
  `id` int(12) NOT NULL,
  `date` varchar(64) DEFAULT NULL,
  `data` text,
  `server_id` int(12) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `id` int(12) NOT NULL,
  `username` varchar(128) NOT NULL,
  `password` varchar(128) NOT NULL,
  `name` varchar(128) DEFAULT NULL,
  `register_date` int(12) DEFAULT NULL,
  `login_date` int(12) DEFAULT NULL,
  `state` int(12) NOT NULL DEFAULT '1',
  `role` varchar(24) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `name`, `register_date`, `login_date`, `state`, `role`) VALUES
(1, 'info@adtec.com.ua', 'slava1988', 'Вячеслав Надеждин', NULL, 1493892588, 1, 'user'),
(2, 'rrrrrrrrrr@mail.ru', 'slava1988', NULL, NULL, NULL, 1, NULL),
(3, 'ldit@list.ru', 'slava1988', NULL, NULL, NULL, 1, NULL),
(4, 'rrrrrrrrrr1@mail.ru', 'slava1988', NULL, NULL, NULL, 1, NULL),
(5, 'rrrrrrrr2rr1@mail.ru', 'slava1988', NULL, NULL, NULL, 1, NULL);

-- --------------------------------------------------------

--
-- Структура таблицы `vars`
--

CREATE TABLE `vars` (
  `id` int(12) NOT NULL,
  `name` varchar(64) DEFAULT NULL,
  `type` varchar(64) DEFAULT NULL,
  `tpl` varchar(64) DEFAULT NULL,
  `alt` varchar(64) DEFAULT NULL,
  `params` text,
  `def` text,
  `date` int(11) DEFAULT NULL,
  `action` varchar(64) DEFAULT NULL,
  `state` int(12) DEFAULT '1',
  `owner_id` int(12) DEFAULT NULL,
  `server_id` int(12) NOT NULL DEFAULT '0'
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `vars_active`
--

CREATE TABLE `vars_active` (
  `id` int(12) NOT NULL,
  `table_name` varchar(64) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `vars_categorys`
--

CREATE TABLE `vars_categorys` (
  `id` int(12) NOT NULL,
  `var_id` int(12) DEFAULT NULL,
  `category_id` int(12) DEFAULT NULL,
  `page_id` int(12) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `vars_data`
--

CREATE TABLE `vars_data` (
  `id` int(12) NOT NULL,
  `server_id` int(12) DEFAULT '0',
  `action` varchar(64) DEFAULT NULL,
  `row_id` int(12) DEFAULT NULL,
  `var_id` int(12) DEFAULT NULL,
  `data` text,
  `owner_id` int(12) DEFAULT NULL,
  `state` int(12) DEFAULT '1'
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `brands`
--
ALTER TABLE `brands`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `categorys`
--
ALTER TABLE `categorys`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `clients`
--
ALTER TABLE `clients`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `server_id` (`server_id`),
  ADD KEY `row_id` (`row_id`,`action`),
  ADD KEY `email` (`email`);

--
-- Индексы таблицы `dropdowns`
--
ALTER TABLE `dropdowns`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`id`),
  ADD KEY `route` (`route`);

--
-- Индексы таблицы `links`
--
ALTER TABLE `links`
  ADD PRIMARY KEY (`id`),
  ADD KEY `action` (`action`),
  ADD KEY `row_id` (`row_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `adding_date` (`adding_date`),
  ADD KEY `update_date` (`update_date`),
  ADD KEY `type` (`type`),
  ADD KEY `param_str_1` (`param_str_1`),
  ADD KEY `param_str_2` (`param_str_2`),
  ADD KEY `param_str_3` (`param_str_3`),
  ADD KEY `param_int_1` (`param_int_1`),
  ADD KEY `param_int_2` (`param_int_2`),
  ADD KEY `param_int_3` (`param_int_3`);

--
-- Индексы таблицы `logs`
--
ALTER TABLE `logs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `ip` (`ip`);

--
-- Индексы таблицы `menu`
--
ALTER TABLE `menu`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `pages`
--
ALTER TABLE `pages`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `name` (`name`(255)),
  ADD KEY `price` (`price`),
  ADD KEY `state` (`state`);

--
-- Индексы таблицы `providers`
--
ALTER TABLE `providers`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `row_categorys`
--
ALTER TABLE `row_categorys`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `server`
--
ALTER TABLE `server`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `statistic`
--
ALTER TABLE `statistic`
  ADD PRIMARY KEY (`id`),
  ADD KEY `server_id` (`server_id`),
  ADD KEY `date` (`date`),
  ADD KEY `date_2` (`date`),
  ADD KEY `server_id_2` (`server_id`);

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `vars`
--
ALTER TABLE `vars`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `vars_active`
--
ALTER TABLE `vars_active`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `vars_categorys`
--
ALTER TABLE `vars_categorys`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `vars_data`
--
ALTER TABLE `vars_data`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `brands`
--
ALTER TABLE `brands`
  MODIFY `id` int(12) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT для таблицы `categorys`
--
ALTER TABLE `categorys`
  MODIFY `id` int(12) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT для таблицы `clients`
--
ALTER TABLE `clients`
  MODIFY `id` int(12) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT для таблицы `comments`
--
ALTER TABLE `comments`
  MODIFY `id` int(12) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT для таблицы `dropdowns`
--
ALTER TABLE `dropdowns`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT для таблицы `images`
--
ALTER TABLE `images`
  MODIFY `id` int(12) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT для таблицы `links`
--
ALTER TABLE `links`
  MODIFY `id` int(12) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT для таблицы `logs`
--
ALTER TABLE `logs`
  MODIFY `id` int(12) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT для таблицы `menu`
--
ALTER TABLE `menu`
  MODIFY `id` int(12) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT для таблицы `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(12) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT для таблицы `pages`
--
ALTER TABLE `pages`
  MODIFY `id` int(12) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT для таблицы `products`
--
ALTER TABLE `products`
  MODIFY `id` int(12) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT для таблицы `providers`
--
ALTER TABLE `providers`
  MODIFY `id` int(12) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT для таблицы `row_categorys`
--
ALTER TABLE `row_categorys`
  MODIFY `id` int(12) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT для таблицы `server`
--
ALTER TABLE `server`
  MODIFY `id` int(12) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT для таблицы `statistic`
--
ALTER TABLE `statistic`
  MODIFY `id` int(12) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` int(12) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT для таблицы `vars`
--
ALTER TABLE `vars`
  MODIFY `id` int(12) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT для таблицы `vars_active`
--
ALTER TABLE `vars_active`
  MODIFY `id` int(12) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT для таблицы `vars_categorys`
--
ALTER TABLE `vars_categorys`
  MODIFY `id` int(12) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT для таблицы `vars_data`
--
ALTER TABLE `vars_data`
  MODIFY `id` int(12) NOT NULL AUTO_INCREMENT;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
