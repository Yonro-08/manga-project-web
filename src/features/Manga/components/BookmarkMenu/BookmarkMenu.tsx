import c from "./BookmarkMenu.module.scss";

interface BookmarkMenu {}

function BookmarkMenu({}: BookmarkMenu) {
	return (
		<ul className={c.bookmarkMenu}>
			<li>Читаю</li>
			<li>Буду Читать</li>
			<li>Прочитано</li>
			<li>Брошено</li>
			<li>Отложено</li>
			<li>Не интересно</li>
		</ul>
	);
}

export default BookmarkMenu;
