import c from './ChapterSetting.module.scss';

interface ChapterSetting {}

function ChapterSetting({}: ChapterSetting) {
	return (
		<div className={c.chapterSetting}>
			<h2>ChapterSetting</h2>
		</div>
	);
};

export default ChapterSetting;